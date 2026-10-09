"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const collegeMemories = [
  {
    image: "/memories/college/college-01.jpeg",
    title: "Where a New Chapter Began",
    text: "Every journey has a place where it quietly begins.",
  },
  {
    image: "/memories/college/college-02.jpeg",
    title: "A Milestone to Remember",
    text: "Years of learning, growing and becoming stronger.",
  },
  {
    image: "/memories/college/college-03.jpeg",
    title: "The People Along the Way",
    text: "College was never only about classrooms. It was about the people who made the days brighter.",
  },
  {
    image: "/memories/college/college-04.jpeg",
    title: "Moments Beyond the Classroom",
    text: "Some of the best memories happened when the books were closed.",
  },
  {
    image: "/memories/college/college-05.jpeg",
    title: "Exploring New Places",
    text: "Learning sometimes happens far beyond the walls of a classroom.",
  },
  {
    image: "/memories/college/college-06.jpeg",
    title: "The Journey Together",
    text: "Long days, new places and memories worth keeping.",
  },
  {
    image: "/memories/college/college-07.jpeg",
    title: "Celebrating Together",
    text: "Festivals became another reason to smile, participate and create memories.",
  },
  {
    image: "/memories/college/college-08.jpeg",
    title: "The Classroom",
    text: "The quiet place where countless lessons, dreams and plans began.",
  },
  {
    image: "/memories/college/college-09.jpeg",
    title: "Days That Passed Too Quickly",
    text: "Ordinary college days often become the memories we miss the most.",
  },
  {
    image: "/memories/college/college-10.jpeg",
    title: "A Little Recognition",
    text: "Hard work has a way of leaving behind something worth remembering.",
  },
  {
    image: "/memories/college/college-11.jpeg",
    title: "A Step Forward",
    text: "Every achievement was another reminder of how far she had come.",
  },
  {
    image: "/memories/college/college-12.jpeg",
    title: "A Journey Full of Moments",
    text: "Different days, different places, one unforgettable chapter.",
  },
  {
    image: "/memories/college/college-13.jpeg",
    title: "More Than Just College",
    text: "These years became a collection of experiences that shaped her.",
  },
  {
    image: "/memories/college/college-14.jpeg",
    title: "Growing Through the Years",
    text: "Somewhere between the first day and the last, she became a different person.",
  },
  {
    image: "/memories/college/college-15.jpeg",
    title: "The End of One Chapter",
    text: "And just like that, one beautiful chapter came to an end.",
  },
];

export default function CollegeChapter() {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);

  const memory = collegeMemories[current];
  const isLast = current === collegeMemories.length - 1;

  const openNext = () => {
    if (!started) {
      setStarted(true);
      return;
    }

    if (!isLast) {
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <section
      id="college"
      className="relative min-h-screen overflow-hidden bg-[#090909] px-5 py-24 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-rose-400/5 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-400/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/40">
            Chapter Two
          </p>

          <h2 className="font-serif text-4xl tracking-tight sm:text-6xl">
            Her College Journey
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            A collection of places, people, achievements and little moments
            that became part of her journey.
          </p>
        </motion.div>

        {/* Memory area */}
        <div className="mx-auto max-w-4xl">
          {!started ? (
            /* Initial locked memory */
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex min-h-[520px] flex-col items-center justify-center rounded-[32px] border border-white/10 bg-white/[0.03] px-6 text-center backdrop-blur-xl"
            >
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <span className="text-2xl">✦</span>
              </div>

              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/40">
                15 memories waiting
              </p>

              <h3 className="font-serif text-3xl sm:text-4xl">
                Shall we open them?
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/45">
                One memory at a time. Take your time with each one.
              </p>

              <button
                onClick={openNext}
                className="mt-10 rounded-full border border-white/20 bg-white px-7 py-3 text-sm font-medium text-black transition hover:scale-105 hover:bg-white/90"
              >
                Open the first memory
              </button>
            </motion.div>
          ) : (
            <>
              {/* Counter */}
              <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/35">
                <span>College Memories</span>

                <span>
                  {String(current + 1).padStart(2, "0")} /{" "}
                  {String(collegeMemories.length).padStart(2, "0")}
                </span>
              </div>

              {/* Progress */}
              <div className="mb-8 h-[2px] w-full overflow-hidden bg-white/10">
                <motion.div
                  className="h-full bg-white/70"
                  animate={{
                    width: `${((current + 1) / collegeMemories.length) * 100}%`,
                  }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={memory.image}
                  initial={{ opacity: 0, y: 35, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -25, scale: 0.98 }}
                  transition={{
                    duration: 0.65,
                    ease: "easeInOut",
                  }}
                >
                  <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] p-3 shadow-2xl">
                    <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[20px] bg-black sm:min-h-[520px]">
                      <Image
                        src={memory.image}
                        alt={memory.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 900px"
                        className="object-contain"
                        priority={current === 0}
                      />

                      {/* subtle overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="px-2 py-8 text-center sm:py-10">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="mb-3 text-xs uppercase tracking-[0.35em] text-white/35"
                    >
                      Memory {String(current + 1).padStart(2, "0")}
                    </motion.p>

                    <motion.h3
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="font-serif text-3xl sm:text-4xl"
                    >
                      {memory.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/45"
                    >
                      {memory.text}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Next button */}
              <div className="flex justify-center">
                {!isLast ? (
                  <button
                    onClick={openNext}
                    className="group flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.05] px-7 py-3 text-sm text-white/80 backdrop-blur-md transition hover:border-white/30 hover:bg-white/10"
                  >
                    <span>Open next memory</span>

                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <p className="mb-5 text-sm text-white/45">
                      And there was still more to come...
                    </p>

                    <button
                      onClick={() =>
                        document
                          .getElementById("struggles")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="rounded-full border border-white/20 bg-white px-7 py-3 text-sm font-medium text-black transition hover:scale-105"
                    >
                      Continue her journey →
                    </button>
                  </motion.div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}