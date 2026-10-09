"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface BirthChapterProps {
  onContinue: () => void;
}

const memories = [
  {
    image: "/memories/birth/baby (1).jpeg",
    title: "And suddenly...",
    text: "A tiny person entered the world, carrying a story that had only just begun.",
  },
  {
    image: "/memories/birth/baby (2).jpeg",
    title: "A little smile.",
    text: "Small enough to fit in someone's arms. Precious enough to fill an entire home.",
  },
  {
    image: "/memories/birth/baby (3).jpeg",
    title: "And a whole life ahead.",
    text: "Before there were memories, there was simply this little girl beginning her journey.",
  },
];

const familyPhotos = [
  "/memories/parents/family (1).jpeg",
  "/memories/parents/family (2).jpeg",
  "/memories/parents/family (3).jpeg",
  "/memories/parents/family (4).jpeg",
];

export default function BirthChapter({
  onContinue,
}: BirthChapterProps) {
  const [currentMemory, setCurrentMemory] = useState(-1);
  const [familyIndex, setFamilyIndex] = useState(-1);

  const openNextMemory = () => {
    if (currentMemory < memories.length - 1) {
      setCurrentMemory((value) => value + 1);
    } else {
      setFamilyIndex(0);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4eee6] text-[#292522]">

      {/* =========================================
          INTRO
      ========================================= */}

      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,133,112,0.14),transparent_55%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 max-w-xl"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#9a8071]">
            Chapter One
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="mt-8 font-serif text-6xl font-light tracking-wide text-[#4b403a] sm:text-8xl"
          >
            10 · 10 · 2005
          </motion.div>

          <div className="mx-auto mt-8 h-px w-16 bg-[#a88c7d]" />

          <h1 className="mt-8 font-serif text-3xl font-light text-[#4b403a] sm:text-5xl">
            The day your story began.
          </h1>

          <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-[#756960]">
            The world didn't know it yet...
            <br />
            but someone very special had just arrived.
          </p>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="mt-20 text-[#9a887d]"
          >
            ↓
          </motion.div>
        </motion.div>
      </section>


      {/* =========================================
          SECRET MEMORY AREA
      ========================================= */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#e9dfd4] px-5 py-20">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.45),transparent_60%)]" />

        <div className="relative z-10 w-full max-w-3xl">

          {/* Heading */}
          <div className="mb-12 text-center">

            <p className="text-[9px] uppercase tracking-[0.5em] text-[#9a8071]">
              A few moments from the beginning
            </p>

            <h2 className="mt-5 font-serif text-3xl font-light text-[#4b403a] sm:text-5xl">
              There are memories waiting for you.
            </h2>

          </div>


          {/* =====================================
              BEFORE OPENING
          ===================================== */}

          {currentMemory === -1 && familyIndex === -1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto flex max-w-md flex-col items-center text-center"
            >

              <div className="flex h-[380px] w-full items-center justify-center rounded-2xl border border-[#8c7668]/20 bg-[#f4eee6]/50 shadow-2xl backdrop-blur-sm">

                <div>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#9a8071]/30 bg-white/30">
                    <span className="text-2xl">
                      ✨
                    </span>
                  </div>

                  <p className="mt-7 font-serif text-2xl text-[#4b403a]">
                    A memory is waiting...
                  </p>

                  <p className="mt-3 text-xs text-[#756960]">
                    Open it when you're ready.
                  </p>
                </div>

              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={openNextMemory}
                className="mt-8 rounded-full bg-[#4b403a] px-10 py-4 text-[9px] uppercase tracking-[0.35em] text-[#f4eee6] shadow-xl transition hover:bg-[#66554b]"
              >
                Open the memory
              </motion.button>

            </motion.div>
          )}


          {/* =====================================
              BABY MEMORIES
          ===================================== */}

          {currentMemory >= 0 && familyIndex === -1 && (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMemory}
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  y: -20,
                }}
                transition={{
                  duration: 0.9,
                }}
                className="flex flex-col items-center"
              >

                {/* Photo */}
                <div className="relative flex min-h-[55vh] w-full items-center justify-center">

                  {/* Frame */}
                  <div className="absolute inset-4 rounded-xl border border-[#8c7668]/20" />

                  <motion.img
                    initial={{
                      opacity: 0,
                      scale: 1.05,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    src={memories[currentMemory].image}
                    alt={memories[currentMemory].title}
                    className="relative z-10 max-h-[70vh] max-w-[90%] rounded-lg object-contain shadow-2xl"
                  />

                </div>


                {/* Story */}
                <div className="mt-8 max-w-lg text-center">

                  <p className="text-[9px] uppercase tracking-[0.4em] text-[#a88c7d]">
                    A little memory
                  </p>

                  <h3 className="mt-4 font-serif text-3xl font-light text-[#4b403a] sm:text-4xl">
                    {memories[currentMemory].title}
                  </h3>

                  <div className="mx-auto mt-5 h-px w-10 bg-[#a88c7d]" />

                  <p className="mt-5 text-sm leading-7 text-[#756960]">
                    {memories[currentMemory].text}
                  </p>

                </div>


                {/* Continue */}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={openNextMemory}
                  className="mt-10 rounded-full border border-[#8c7668]/30 px-9 py-3 text-[9px] uppercase tracking-[0.35em] text-[#6f5c51] transition hover:bg-[#4b403a] hover:text-white"
                >
                  {currentMemory === memories.length - 1
                    ? "Continue..."
                    : "Open the next memory"}
                </motion.button>

              </motion.div>
            </AnimatePresence>
          )}


          {/* =====================================
              FAMILY MEMORIES
          ===================================== */}

          {familyIndex >= 0 && (
            <AnimatePresence mode="wait">
              <motion.div
                key={familyIndex}
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.9,
                }}
                className="flex flex-col items-center"
              >

                <p className="mb-8 text-center text-[9px] uppercase tracking-[0.5em] text-[#a88c7d]">
                  Before you knew the world
                </p>

                <div className="relative flex min-h-[55vh] w-full items-center justify-center">

                  <div className="absolute inset-4 rounded-xl border border-[#8c7668]/20" />

                  <motion.img
                    initial={{
                      opacity: 0,
                      scale: 1.05,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    src={familyPhotos[familyIndex]}
                    alt={`Family memory ${familyIndex + 1}`}
                    className="relative z-10 max-h-[70vh] max-w-[90%] rounded-lg object-contain shadow-2xl"
                  />

                </div>

                <h3 className="mt-8 font-serif text-3xl font-light text-[#4b403a]">
                  You were already someone's whole world.
                </h3>

                <p className="mt-4 max-w-md text-center text-sm leading-7 text-[#756960]">
                  Before you could remember these moments yourself,
                  there were people creating them for you.
                </p>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    if (familyIndex < familyPhotos.length - 1) {
                      setFamilyIndex((value) => value + 1);
                    } else {
                      onContinue();
                    }
                  }}
                  className="mt-10 rounded-full border border-[#8c7668]/30 px-9 py-3 text-[9px] uppercase tracking-[0.35em] text-[#6f5c51] transition hover:bg-[#4b403a] hover:text-white"
                >
                  {familyIndex === familyPhotos.length - 1
                    ? "Continue the story →"
                    : "Open the next memory"}
                </motion.button>

              </motion.div>
            </AnimatePresence>
          )}

        </div>
      </section>

    </main>
  );
}