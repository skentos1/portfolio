import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundBeams } from "./ui/background-beams";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.5, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    // Pridáme triedu "relative", aby absolútne pozicované deti boli v rámci hero
    <div className="relative pb-20 pt-36">
      {/* BackgroundBeams zobrazené len v Hero, fixované v rámci hero */}
      <BackgroundBeams className="absolute inset-0 z-0 " />

      {/* Obsah hero s jemnými animáciami */}
      <motion.div
        className="flex justify-center relative my-20 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-[89vw] md:max-w-3xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 mb-4">
            Web Developer Portfolio
          </p>

          <TextGenerateEffect
            words="Objavte moju kreativitu a zručnosti v digitálnom svete"
            className="font-light text-[40px] md:text-5xl lg:text-6xl mb-4"
          />

          <motion.p
            className="mb-6 text-sm md:text-lg lg:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Ahoj, volám sa Simon a vytváram elegantné webové FullStack riešenia.
          </motion.p>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
