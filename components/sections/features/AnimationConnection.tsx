import { motion } from "framer-motion";
import { Plug } from "lucide-react";
import Image from "next/image";

export const AnimationConnection = ({
  speedPoint,
}: {
  speedPoint?: number;
}) => {
  return (
    <div className="w-16 h-16 ml-30 bg-green-500/10  rounded-full flex items-center justify-center relative">
      {/* Icono */}
      <Image
        src={"/logo.png"}
        alt="wbot-icon"
        width={32}
        height={32}
      />
      {/* Fondo del icono */}
      <motion.div
        className="absolute bgr left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {/* Linea de conexión */}
        <motion.div
          className="absolute left-[-80px] top-1/2 h-[2px] bg-green-500"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 80, opacity: 0.7 }}
          transition={{
            delay: 0.8,
            duration: 0.6,
          }}
        />

        {/* Puntito de conexión */}
        <motion.div
          className="absolute top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_5px_2px_rgba(34,197,94,0.6)] z-10"
          initial={{ left: -80, opacity: 0 }}
          animate={{
            left: [-80, -1],
            opacity: [0, 1, 0.8, 1, 0],
            scale: [0.8, 1.2, 0.9, 1.1, 0.8],
          }}
          transition={{
            duration: speedPoint ?? 5,
            delay: 0.9,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        />

        {/* Icono Plug */}
        <motion.div
          className="absolute left-[-115px] top-1/2 transform -translate-y-1/2 bg-green-500/20 rounded-full p-2"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
        >
          <Plug className="w-5 h-5 text-green-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};
