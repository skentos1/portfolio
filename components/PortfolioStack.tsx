"use client";

import React from "react";

import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import {  FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

interface FooterProps {
  id?: string;
}

const socialLinks = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/s.kentos2/", // uprav svoj odkaz
    name: "Facebook",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/s.kentos/", // uprav svoj odkaz
    name: "Instagram",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    link: "https://sk.linkedin.com/in/simon-kento%C5%A1-7a668133a", // uprav svoj odkaz
    name: "LinkedIn",
  },
];

const Footer = ({ id }: FooterProps) => {
  return (
    <section id={id}>
      <footer className="w-full pt-20 pb-10 relative" id="contact">
        {/* Pozadie (ak ho potrebuješ) */}
        

        <div className="max-w-7xl mx-auto px-4">
          {/* Kontakt + Formulár v dvoch stĺpcoch */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* LEFT SIDE: Kontakt Info */}
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Máte nápad, ktorý chcete zrealizovať?
              </h1>
              <p className="text-white/80 text-sm md:text-base">
                Zaujala Vás moja práca? Tak sa somnou spojte a poďme ho spoločne prebrať!
              </p>

              <div className="mt-8">
                <h2 className="text-white text-sm font-semibold uppercase tracking-wide">
                  Kontakt
                </h2>
                <p className="text-white/80 text-sm md:text-base mt-2">
                  kentos.simon@gmail.com
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-white text-sm font-semibold uppercase tracking-wide">
                  Social Media
                </h2>
                <div className="flex items-center gap-4 mt-2">
                  {socialLinks.map((info) => (
                    <Link
                      key={info.id}
                      href={info.link}
                      aria-label={info.name}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 flex justify-center items-center 
                                 bg-black/40 rounded-lg border border-white/10
                                 hover:bg-white/10 transition-colors"
                    >
                      <span className="text-white text-lg">{info.icon}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Formulár */}
            <div className="bg-[#11151f] p-6 rounded-lg border border-white/10 shadow-md">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white mb-1"
                  >
                    Meno
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Vaše meno"
                    className="w-full px-3 py-2 text-white bg-transparent 
                               border border-white/20 rounded-md focus:outline-none 
                               focus:border-purple-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Váš email"
                    className="w-full px-3 py-2 text-white bg-transparent 
                               border border-white/20 rounded-md focus:outline-none 
                               focus:border-purple-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-1"
                  >
                    Správa
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Vaša správa"
                    className="w-full px-3 py-2 text-white bg-transparent 
                               border border-white/20 rounded-md focus:outline-none 
                               focus:border-purple-500"
                  />
                </div>

                <MagicButton
              title="Odoslať"
              icon={<FaLocationArrow />}
              position="right"
            />
              </form>
            </div>
          </div>

          {/* Spodná časť (copyright, atď.) */}
          <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
            <p className="md:text-base text-sm md:font-normal font-light text-white/70">
              Vytvoril Simon Kentoš  © Všetky práva vyhradené
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
