import { Check } from "lucide-react";
import styles from "./PricingCard.module.css";
import Link from "next/link";

interface PricingCardProps {
  plan: string;
  price: string;
  description?: string;
  features: string[];
  popular?: boolean;
  priceCrm?: string;
  type?: boolean;
  onClick?: () => void;
}

export const PricingCard = ({
  plan,
  price,
  description,
  features,
  popular,
  priceCrm,
  type,
}: PricingCardProps) => {
  return (
    <div className="relative inline-block overflow-hidden rounded-lg p-[1.5px]">
      {popular ? (
        <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#003B99_0%,#00D1FF_50%,#003B99_100%)]" />
      ) : (
        <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1a1a1a_0%,#aaaaaa_50%,#1a1a1a_100%)]" />
      )}
      <div
        className={`relative rounded-lg bg-neutral-900 p-6 flex flex-col h-full ${
          popular ? styles.popularCard : styles.standardCard
        }`}
      >
        {popular && (
          <>
            <div className={styles.glowOrb}></div>
            <div className="absolute top-3 right-3">
              <span className="bg-blue-500/10 text-blue-400 text-xs font-medium px-2 py-1 rounded-full uppercase">
                Popular
              </span>
            </div>
          </>
        )}

        <div className="mb-6 relative">
          <h3
            className={`text-xl font-medium mb-1 ${
              popular ? styles.gradientText : "text-white"
            }`}
          >
            {plan}
          </h3>
          <p className="text-sm text-gray-400">Mensual</p>
        </div>

        {/* para ia pplans */}
        {type ? (
          <div className="mb-4 relative">
            <div className="flex flex-wrap items-end justify-center">
              <div className="flex flex-col items-center">
                <span className="text-gray-400 text-sm mb-1">Pago mensual agente IA</span>
                <span
                  className={`text-4xl font-bold ${
                    popular ? styles.gradientText : "text-white"
                  }`}
                >
                  ${price}
                </span>
              </div>

              <span
                className={`text-4xl font-bold ${
                  popular ? styles.gradientText : "text-white"
                } mx-4`}
              >
                +
              </span>
              <div className="flex flex-col items-center">
                <span className="text-gray-400 text-sm mb-1">Pago por usuario</span>
                <span
                  className={`text-4xl font-bold ${
                    popular ? styles.gradientText : "text-white"
                  }`}
                >
                  ${priceCrm}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-4 flex items-end relative">
            <span
              className={`text-4xl font-bold ${
                popular ? styles.gradientText : "text-white"
              }`}
            >
              ${price}
            </span>

            <span className="text-gray-400 ml-1">/ usuario</span>
          </div>
        )}

        <p className="text-sm text-gray-400 mb-6">{description}</p>

        <div
          className={`my-4 ${
            popular ? styles.gradientBorder : "border-t border-gray-800"
          }`}
        ></div>

        <div className="flex-grow">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span
                  className={`mr-2 mt-1 flex-shrink-0 rounded-full p-1 ${
                    popular ? styles.checkIconBg : "bg-blue-500/20"
                  }`}
                >
                  <Check
                    size={16}
                    className={popular ? styles.checkIcon : "text-blue-400"}
                  />
                </span>
                <span className="text-sm text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={`https://wa.me/573053105505?text=Estoy%20interesado%20en%20el%20plan%20${plan}`}
          target="_blank"
          className={`mt-6 w-full rounded-md py-3 px-4 text-center font-medium transition-all cursor-pointer ${
            popular ? styles.gradientButton : styles.standardButton
          }`}
        >
          Lo quiero
        </Link>
      </div>
    </div>
  );
};
