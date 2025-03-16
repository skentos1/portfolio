"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { HeroHeaderData } from "../../data/index";

interface HeroParallaxProps {
  products: { title: string; thumbnail: string }[];
  heroData: HeroHeaderData;
}

export const HeroParallax = ({ products, heroData }: HeroParallaxProps) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 600]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -600]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-300, 200]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="min-h-screen py-12 md:py-20 overflow-hidden relative flex flex-col [perspective:1200px] [transform-style:preserve-3d]"
    >
      <Header heroData={heroData} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="flex flex-col gap-12 md:gap-16"
      >
        {/* Row 1 */}
        <Row products={firstRow} translate={translateX} />
        {/* Row 2 */}
        <Row products={secondRow} translate={translateXReverse} />
        {/* Row 3 */}
        <Row products={thirdRow} translate={translateX} />
      </motion.div>
    </div>
  );
};

/** Reusable Row Component (horizontal scroll on small screens) */
const Row = ({
  products,
  translate,
}: {
  products: { title: string; thumbnail: string }[];
  translate: MotionValue<number>;
}) => (
  <motion.div
    style={{
      x: translate,
    }}
    className="
      flex flex-nowrap md:flex-nowrap gap-6 md:gap-12 
      overflow-x-auto md:overflow-visible 
      px-4 md:px-0 
      justify-start md:justify-center 
      md:max-w-9xl mx-auto"
  >
    {products.map((product) => (
      <ProductCard product={product} key={product.title} />
    ))}
  </motion.div>
);
export const Header = ({ heroData }: { heroData: HeroHeaderData }) => {
  return (
    <div className="max-w-6xl mx-auto text-center px-4 pt-[140px]  pb-12 md:py-16">
      <h1
        className="font-bold xl:text-7xl leading-snug sm:leading-tight text-white text-[clamp(1.6rem,5vw,3.5rem)] max-w-[90%] sm:max-w-2xl mx-auto break-normal sm:break-words text-balance hyphens-auto"
      >
        {heroData.title.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h1>
      <p className="max-w-[25%] sm:max-w-xl mx-auto mt-6 text-[clamp(0.8rem,2.5vw,1.1rem)] text-neutral-300 break-normal sm:break-words leading-relaxed sm:leading-loose text-center text-balance hyphens-auto">
  {heroData.description}
</p>
    </div>
  );
};

export const ProductCard = ({
  product,
}: {
  product: { title: string; thumbnail: string };
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group/product relative shrink-0 w-[75vw] sm:w-64 md:w-80 h-60 md:h-80 rounded-xl overflow-hidden"
    >
      <Link href={""} className="block w-full h-full">
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black transition-opacity pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-sm md:text-base font-semibold">
        {product.title}
      </h2>
    </motion.div>
  );
};
