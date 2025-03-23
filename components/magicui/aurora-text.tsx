"use client";

import type { CSSProperties } from "react";
import React, { useEffect, useId, useRef } from "react";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number; // 1 is default speed, 2 is twice as fast, 0.5 is half speed
}

export function AuroraText({
  children,
  className = "",
  colors = ["#0047AB", "#1E90FF", "#4169E1", "#00BFFF", "#87CEEB", "#B0E0E6"],
  speed = 1,
}: AuroraTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = React.useState(0);
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });
  const [isReady, setIsReady] = React.useState(false);
  const [textStyle, setTextStyle] = React.useState<
    Partial<CSSStyleDeclaration>
  >({});
  const maskId = useId();

  // Updated effect to compute all text styles from parent
  useEffect(() => {
    if (containerRef.current) {
      const computedStyle = window.getComputedStyle(containerRef.current);

      // Extract text-related styles
      const relevantStyles = {
        fontSize: computedStyle.fontSize,
        fontFamily: computedStyle.fontFamily,
        fontWeight: computedStyle.fontWeight,
        fontStyle: computedStyle.fontStyle,
        letterSpacing: computedStyle.letterSpacing,
        lineHeight: computedStyle.lineHeight,
        textTransform: computedStyle.textTransform,
        fontVariant: computedStyle.fontVariant,
        fontStretch: computedStyle.fontStretch,
        fontFeatureSettings: computedStyle.fontFeatureSettings,
      };

      requestAnimationFrame(() => {
        setTextStyle(relevantStyles);
      });
    }
  }, [className]);

  // Updated effect to compute font size from both inline and class styles
  useEffect(() => {
    const updateFontSize = () => {
      if (containerRef.current) {
        const computedStyle = window.getComputedStyle(containerRef.current);
        const computedFontSize = parseFloat(computedStyle.fontSize);

        requestAnimationFrame(() => {
          setFontSize(computedFontSize);
        });
      }
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);

    return () => window.removeEventListener("resize", updateFontSize);
  }, [className]);

  // Update effect to set ready state after dimensions are computed
  useEffect(() => {
    const updateDimensions = () => {
      if (textRef.current) {
        const bbox = textRef.current.getBBox();
        setDimensions({
          width: bbox.width,
          height: bbox.height,
        });
        setIsReady(true);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, [children, fontSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    let time = 0;
    const baseSpeed = 0.005; // Reduced for smoother transitions

    // Create more gradient points for better coverage
    const gradientPoints = colors.length * 2;
    
    function animate() {
      if (!ctx || !canvas) return;
      
      // Use a semi-transparent fill instead of full clear to create smoother transitions
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += baseSpeed * speed;

      // Draw more gradient points with overlapping coverage
      for (let i = 0; i < gradientPoints; i++) {
        // Use modulo to cycle through colors
        const color = colors[i % colors.length];
        
        // Create more varied movement patterns with different frequencies
        const xOffset = i * (Math.PI * 2 / gradientPoints);
        const yOffset = i * (Math.PI * 1.5 / gradientPoints);
        
        const x = canvas.width * (
          0.5 + 
          Math.cos(time * 0.6 + xOffset) * 0.35 + 
          Math.sin(time * 0.4 + i * 0.5) * 0.15
        );
        
        const y = canvas.height * (
          0.5 + 
          Math.sin(time * 0.5 + yOffset) * 0.35 + 
          Math.cos(time * 0.7 + i * 0.6) * 0.15
        );

        // Create larger gradients with smoother falloff
        const gradientSize = Math.max(canvas.width, canvas.height) * 0.6;
        const gradient = ctx.createRadialGradient(
          x, y, 0,
          x, y, gradientSize
        );

        // More color stops for smoother transitions
        gradient.addColorStop(0, `${color}80`);    // More opaque center
        gradient.addColorStop(0.3, `${color}40`);  // Medium opacity
        gradient.addColorStop(0.6, `${color}20`);  // Low opacity
        gradient.addColorStop(1, `${color}00`);    // Fully transparent

        ctx.globalCompositeOperation = "lighter"; // Blend colors additively
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      requestAnimationFrame(animate);
    }
    animate();

    // Clean up animation on unmount
    return () => {
      // No explicit cleanup needed as requestAnimationFrame will stop when component unmounts
    };
  }, [dimensions, colors, speed]);

  return (
    <span
      ref={containerRef}
      className={`relative inline-block align-middle ${className}`}
      style={{
        width: dimensions.width || "auto",
        height: dimensions.height || "auto",
      }}
    >
      {/* Hidden text for SEO */}
      <span className="sr-only">{children}</span>

      {/* Visual placeholder while canvas loads */}
      <span
        style={{
          opacity: isReady ? 0 : 1,
          transition: "opacity 0.2s ease-in",
          position: isReady ? "absolute" : "relative",
          display: "inline-block",
          whiteSpace: "nowrap",
        }}
        aria-hidden="true"
      >
        {children}
      </span>

      <div
        className="absolute inset-0"
        style={{
          opacity: isReady ? 1 : 0,
          transition: "opacity 0.2s ease-in",
        }}
        aria-hidden="true"
      >
        <svg
          width={dimensions.width}
          height={dimensions.height}
          className="absolute inset-0"
        >
          <defs>
            <clipPath id={maskId}>
              <text
                ref={textRef}
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                style={textStyle as CSSProperties}
              >
                {children}
              </text>
            </clipPath>
          </defs>
        </svg>

        <canvas
          ref={canvasRef}
          style={{
            clipPath: `url(#${maskId})`,
            WebkitClipPath: `url(#${maskId})`,
          }}
          className="h-full w-full"
        />
      </div>
    </span>
  );
}
