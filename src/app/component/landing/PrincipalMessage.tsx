"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const text = "Welcome to Saket MGM";
const msg = `The present has reached a stage where fundamental questions 
regarding human values have assumed paramount importance. We are 
committed to provide a system of education that can unfold human 
potentialities and channelize them towards essential qualities and 
attitudes for a useful and fruitful existence in the modern world. 
Our School strives to be the best school in the region where 
education encompasses academics, values, culture, sports and every 
aspect of the life of an individual, so that when a child grows up, 
he/she is well prepared to face the challenges of life and prevail 
in every scenario he/she will face.`;

const PrincipalMessage = () => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-100px" }); // triggers when in viewport
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const charAnimation = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.01 },
    }),
  };

  return (
    <section ref={ref} className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Typewriter Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900"
          initial="hidden"
          animate={controls}
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} custom={index} variants={charAnimation}>
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <p className="text-center text-gray-500 text-lg mt-2 mb-10">
          A message from our Principal
        </p>

        <div className="bg-white rounded-xl shadow-md p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
          {/* Principal Image */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 relative rounded-full overflow-hidden">
              <Image
                src="/principal.jpg"
                alt="BIBHAS RANJAN PAL Principal"
                fill
                priority
                sizes="192px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left flex-1 md:max-w-3xl lg:max-w-4xl">
            <h3 className="text-2xl font-semibold text-[#f82f53] mb-4">
              A Welcome from Our Principal
            </h3>

            {/* Typewriter paragraph */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              {msg.split("").map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={controls}
                  variants={charAnimation}
                >
                  {char}
                </motion.span>
              ))}
            </p>

            <p className="text-[#f82f53] font-semibold text-lg mb-4">
              BIBHAS RANJAN PAL, Principal
            </p>

            <button
              className="bg-[#f82f53] text-white font-semibold py-2 px-6 rounded-md transition hover:bg-[#e72749] cursor-pointer"
              onClick={() => router.push("/principal")}
            >
              Read Principal&apos;s Full Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
