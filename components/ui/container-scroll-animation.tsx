"use client";
import React, { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  useSpring,
} from "framer-motion";

export const ContainerScroll = ({
  children,
  bgColor = "bg-[#222222]",
  borderColor = "border-[#6C6C6C]",
}: {
  children: React.ReactNode;
  bgColor?: string;
  borderColor?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [25, 0]), {
    stiffness: 100,
    damping: 30,
  });
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], scaleDimensions()),
    { stiffness: 100, damping: 30 }
  );
  const translate = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    { stiffness: 100, damping: 30 }
  );

  const rotateY = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]),
    { stiffness: 100, damping: 30 }
  );
  const translateZ = useSpring(useTransform(scrollYProgress, [0, 1], [0, 50]), {
    stiffness: 100,
    damping: 90,
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.9]
  );

  return (
    <div
      className="flex items-center justify-center pt-64 relative h-[30vh] "
      ref={containerRef}
    >
      <div
        className="py-6 md:py-20 w-full relative"
        style={{
          perspective: "1200px",
        }}
      >
        <Card
          rotate={rotate}
          rotateY={rotateY}
          translateZ={translateZ}
          translate={translate}
          scale={scale}
          opacity={opacity}
          bgColor={bgColor}
          borderColor={borderColor}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    ></motion.div>
  );
};

export const Card = ({
  rotate,
  rotateY,
  translateZ,
  scale,
  opacity,
  children,
  bgColor,
  borderColor,
}: {
  rotate: MotionValue<number>;
  rotateY: MotionValue<number>;
  translateZ: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  opacity: MotionValue<number>;
  children: React.ReactNode;
  bgColor: string;
  borderColor: string;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        rotateY: rotateY,
        translateZ: translateZ,
        scale,
        opacity,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
        position: "relative",
      }}
      className={`max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full ${bgColor} rounded-[30px] shadow-2xl`}
      whileInView={{ filter: "blur(0px)" }}
    >
      {/* Border Trail Effect */}
      <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
        <motion.div
          className="absolute aspect-square bg-gradient-to-r from-blue-200 to-blue-600"
          style={{
            width: 200,
            offsetPath: `rect(0 100% 100% 0 round 30px)`,
          }}
          animate={{
            offsetDistance: ['0%', '100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
        />
      </div>

      <motion.div
        className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4"
        initial={{ opacity: 0.6 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
