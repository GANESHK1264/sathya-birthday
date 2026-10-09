
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Section =
  | "gate"
  | "birth"
  | "childhood"
  | "college"
  | "family"
  | "dream"
  | "friends"
  | "letter"
  | "final";

type Memory = {
  image: string;
  title: string;
  text: string;
};

const birthMemories: Memory[] = [
  {
    image: "/memories/birth/father-baby.jpeg",
    title: "The first embrace.",
    text: "A tiny little girl, held close by the person who would always stand beside her.",
  },
  {
    image: "/memories/birth/mother-baby.jpeg",
    title: "A mother's warmth.",
    text: "Long before she understood what love meant, she was already surrounded by it.",
  },
];

const childhoodMemories: Memory[] = [
  {
    image: "/memories/childhood/childhood-01.jpeg",
    title: "A little smile.",
    text: "Before life became complicated, there was simply a little girl finding happiness in the smallest moments.",
  },
  {
    image: "/memories/childhood/childhood-02.jpeg",
    title: "Growing up.",
    text: "Year by year, the little girl slowly became the person everyone knows today.",
  },
  {
    image: "/memories/childhood/childhood-03.jpeg",
    title: "Those happy days.",
    text: "Childhood had its own kind of magic — innocent, simple and full of beautiful memories.",
  },
  {
    image: "/memories/childhood/childhood-04.jpeg",
    title: "A beautiful beginning.",
    text: "And slowly, those little years prepared her for the next chapter of her life.",
  },
];

const collegeMemories: Memory[] = [
  {
    image: "/memories/college/college-01.jpeg",
    title: "Off to a new journey.",
    text: "A new place, new people and a completely new chapter was waiting for her.",
  },
  {
    image: "/memories/college/college-02.jpeg",
    title: "New people, new memories.",
    text: "Some unfamiliar faces slowly became familiar, and those people became part of her college journey.",
  },
  {
    image: "/memories/college/college-03.jpeg",
    title: "A moment of achievement.",
    text: "Hard work has a beautiful way of becoming something worth being proud of.",
  },
  {
    image: "/memories/college/college-04.jpeg",
    title: "She stepped forward.",
    text: "College gave her opportunities to take responsibility, lead and discover another side of herself.",
  },
  {
    image: "/memories/college/college-05.jpeg",
    title: "Beyond the classroom.",
    text: "Industrial visits, exploration and new experiences taught her things that books never could.",
  },
  {
    image: "/memories/college/college-06.jpeg",
    title: "April 20.",
    text: "One beautiful chapter came to an end, leaving behind memories that will always remain.",
  },
];

const familyMemories: Memory[] = [
  {
    image: "/memories/family/father.jpeg",
    title: "Her Father.",
    text: "The person who stood behind her before she even knew what standing on her own meant.",
  },
  {
    image: "/memories/family/mother.jpeg",
    title: "Her Mother.",
    text: "The warmth that makes difficult days softer, and the care that never needs many words.",
  },
  {
    image: "/memories/family/sister.jpeg",
    title: "Her Sister.",
    text: "A familiar face through every stage of life — sometimes a guide, sometimes a partner in chaos, always family.",
  },
];

const dreamMemories: Memory[] = [
  {
    image: "/memories/dream/bank-dream.jpeg",
    title: "The dream she is chasing.",
    text: "A new direction, a new goal and a determination to keep working toward the future she wants.",
  },
  {
    image: "/memories/dream/offer-letter-dad.jpeg",
    title: "And one day, the dream comes true.",
    text: "The moment she can finally place that offer letter in her father's hands and say, 'I did it.'",
  },
];

const anuMemories: Memory[] = [
  {
    image: "/memories/anu/anu-01.jpeg",
    title: "Anu — her diamond.",
    text: "Some people are rare enough to deserve a special place in your story.",
  },
  {
    image: "/memories/anu/anu-02.jpeg",
    title: "A bond worth keeping.",
    text: "Through laughter, conversations and countless little moments, a beautiful friendship grew.",
  },
  {
    image: "/memories/anu/anu-03.jpeg",
    title: "A friendship to treasure.",
    text: "Some friendships do not need big explanations. Their presence is enough.",
  },
];

const saranMemories: Memory[] = [
  {
    image: "/memories/saran/saran-01.jpeg",
    title: "Saran — the healer.",
    text: "Some people have a way of making difficult days feel a little lighter.",
  },
  {
    image: "/memories/saran/saran-02.jpeg",
    title: "Someone who makes life better.",
    text: "Because sometimes the best friendships are simply about being there.",
  },
];

/* Floating hearts */

function FloatingHearts({
  intense = false,
}: {
  intense?: boolean;
}) {
  const count = intense ? 24 : 16;

  return (
    <div className="floating-hearts" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className="heart"
          style={{
            left: `${(index * 37) % 100}%`,
            animationDelay: `${(index * 1.7) % 9}s`,
            animationDuration: `${7 + (index % 5)}s`,
            fontSize: `${10 + (index % 5) * 4}px`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}

/* Floating diamonds */

function Diamonds() {
  return (
    <div className="diamond-field" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, index) => (
        <span
          key={index}
          className="diamond"
          style={{
            left: `${(index * 29) % 100}%`,
            animationDelay: `${(index * 1.2) % 8}s`,
            animationDuration: `${6 + (index % 4)}s`,
          }}
        >
          ◆
        </span>
      ))}
    </div>
  );
}

/* Cinematic transition */

function CinematicTransition() {
  return (
    <motion.div
      className="cinematic-transition"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.4 }}
    />
  );
}

/* Section heading */

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <div className="gold-line" />
      <p className="section-description">{description}</p>
    </motion.div>
  );
}

/* Memory slideshow: automatically advances every 15 seconds */

type MemoryCardProps = {
  memory: Memory;
  index: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  lastText?: string;
};

function MemoryCard({
  memory,
  index,
  total,
  onNext,
  onPrev,
  lastText = "Continue",
}: MemoryCardProps) {
  const nextRef = useRef(onNext);

  useEffect(() => {
    nextRef.current = onNext;
  }, [onNext]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      nextRef.current();
    }, 15000);

    return () => window.clearTimeout(timer);
  }, [index]);

  return (
    <div className="memory-card">
      <AnimatePresence mode="wait">
        <motion.div
          key={memory.image}
          className="memory-slide"
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -25, scale: 0.98 }}
          transition={{ duration: 0.8 }}
        >
          <div className="memory-counter">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </div>

          <div className="photo-frame">
            <button
              className="photo-arrow photo-arrow-left"
              onClick={onPrev}
              aria-label="Previous image"
            >
              ‹
              <span className="arrow-heart">♥</span>
            </button>

            <img src={memory.image} alt={memory.title} />

            <button
              className="photo-arrow photo-arrow-right"
              onClick={onNext}
              aria-label="Next image"
            >
              ›
              <span className="arrow-heart">♥</span>
            </button>

            <div className="image-hover-heart" aria-hidden="true">
              ♥
            </div>
          </div>

          <div className="memory-copy">
            <p className="eyebrow">A little memory</p>
            <h3>{memory.title}</h3>
            <p>{memory.text}</p>
          </div>

          <div className="memory-controls">
            <button className="memory-control" onClick={onPrev}>
              <span>←</span>
              Previous
            </button>

            <div className="memory-progress">
              {Array.from({ length: total }).map((_, dot) => (
                <span
                  key={dot}
                  className={dot === index ? "active" : ""}
                />
              ))}
            </div>

            <button className="memory-control" onClick={onNext}>
              {index === total - 1 ? lastText : "Next"}
              <span>→</span>
            </button>
          </div>

          <div className="memory-timer">
            <span key={memory.image} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const [section, setSection] = useState<Section>("gate");
  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false);
  const [showKeypad, setShowKeypad] = useState(false);

  const [birthIndex, setBirthIndex] = useState(0);
  const [childhoodIndex, setChildhoodIndex] = useState(0);
  const [collegeIndex, setCollegeIndex] = useState(0);
  const [familyIndex, setFamilyIndex] = useState(0);
  const [dreamIndex, setDreamIndex] = useState(0);
  const [anuIndex, setAnuIndex] = useState(0);
  const [saranIndex, setSaranIndex] = useState(0);
  const [letterOpen, setLetterOpen] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const goTo = useCallback((next: Section) => {
    setSection(next);

    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  }, []);

  /* Password and music */

  const unlock = () => {
    if (password === "10102005") {
      setWrongPassword(false);

      if (audioRef.current) {
        audioRef.current.volume = 0.35;
        audioRef.current.play().catch(() => {
          console.log("Music playback requires user interaction.");
        });
      }

      goTo("birth");
    } else {
      setWrongPassword(true);
      setPassword("");
    }
  };

  const pressKey = (key: string) => {
    if (password.length < 8) {
      setWrongPassword(false);
      setPassword((previous) => previous + key);
    }
  };

  const backspace = () => {
    setPassword((previous) => previous.slice(0, -1));
    setWrongPassword(false);
  };

  /* Birth navigation */

  const nextBirth = useCallback(() => {
    if (birthIndex < birthMemories.length - 1) {
      setBirthIndex((previous) => previous + 1);
    } else {
      goTo("childhood");
    }
  }, [birthIndex, goTo]);

  const previousBirth = useCallback(() => {
    setBirthIndex((previous) =>
      previous === 0 ? birthMemories.length - 1 : previous - 1
    );
  }, []);

  /* Childhood navigation */

  const nextChildhood = useCallback(() => {
    if (childhoodIndex < childhoodMemories.length - 1) {
      setChildhoodIndex((previous) => previous + 1);
    } else {
      goTo("college");
    }
  }, [childhoodIndex, goTo]);

  const previousChildhood = useCallback(() => {
    setChildhoodIndex((previous) =>
      previous === 0 ? childhoodMemories.length - 1 : previous - 1
    );
  }, []);

  /* College navigation */

  const nextCollege = useCallback(() => {
    if (collegeIndex < collegeMemories.length - 1) {
      setCollegeIndex((previous) => previous + 1);
    } else {
      goTo("family");
    }
  }, [collegeIndex, goTo]);

  const previousCollege = useCallback(() => {
    setCollegeIndex((previous) =>
      previous === 0 ? collegeMemories.length - 1 : previous - 1
    );
  }, []);

  /* Family navigation */

  const nextFamily = useCallback(() => {
    if (familyIndex < familyMemories.length - 1) {
      setFamilyIndex((previous) => previous + 1);
    } else {
      goTo("dream");
    }
  }, [familyIndex, goTo]);

  const previousFamily = useCallback(() => {
    setFamilyIndex((previous) =>
      previous === 0 ? familyMemories.length - 1 : previous - 1
    );
  }, []);

  /* Dream navigation */

  const nextDream = useCallback(() => {
    if (dreamIndex < dreamMemories.length - 1) {
      setDreamIndex((previous) => previous + 1);
    } else {
      goTo("friends");
    }
  }, [dreamIndex, goTo]);

  const previousDream = useCallback(() => {
    setDreamIndex((previous) =>
      previous === 0 ? dreamMemories.length - 1 : previous - 1
    );
  }, []);

  /* Anu navigation */

  const nextAnu = useCallback(() => {
    if (anuIndex < anuMemories.length - 1) {
      setAnuIndex((previous) => previous + 1);
    } else {
      setAnuIndex(0);
    }
  }, [anuIndex]);

  const previousAnu = useCallback(() => {
    setAnuIndex((previous) =>
      previous === 0 ? anuMemories.length - 1 : previous - 1
    );
  }, []);

  /* Saran navigation */

  const nextSaran = useCallback(() => {
    if (saranIndex < saranMemories.length - 1) {
      setSaranIndex((previous) => previous + 1);
    } else {
      goTo("letter");
    }
  }, [saranIndex, goTo]);

  const previousSaran = useCallback(() => {
    setSaranIndex((previous) =>
      previous === 0 ? saranMemories.length - 1 : previous - 1
    );
  }, []);

  return (
    <main className="site">
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/birthday.mp3" type="audio/mpeg" />
      </audio>

      {/* GATE */}

      {section === "gate" && (
        <section className="gate-screen">
          <FloatingHearts intense />

          <motion.div
            className="gate-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
          >
            <p className="gate-small">A little surprise awaits</p>

            <h1>
              Are you excited
              <br />
              <span>to look back into your life?</span>
            </h1>

            <div className="gate-heart">♥</div>

            {!showKeypad ? (
              <button
                className="unlock-button"
                onClick={() => setShowKeypad(true)}
              >
                UNLOCK
              </button>
            ) : (
              <motion.div
                className="keypad-box"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p className="keypad-title">A date only you know.</p>

                <div className="password-display">
                  {password ? "•".repeat(password.length) : "DDMMYYYY"}
                </div>

                <div className="keypad">
                  {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map(
                    (key) => (
                      <button key={key} onClick={() => pressKey(key)}>
                        {key}
                      </button>
                    )
                  )}

                  <button onClick={backspace}>⌫</button>
                  <button onClick={() => pressKey("0")}>0</button>
                  <button onClick={unlock}>✓</button>
                </div>

                {wrongPassword && (
                  <motion.p
                    className="wrong-password"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    That isn't the date we're looking for. ❤️
                  </motion.p>
                )}

                <p className="keypad-hint">Enter the special date.</p>
              </motion.div>
            )}
          </motion.div>
        </section>
      )}

      {/* BIRTH */}

      {section === "birth" && (
        <section className="story-section birth-section">
          <FloatingHearts />
          <CinematicTransition />

          <div className="story-container">
            <SectionTitle
              eyebrow="Chapter One"
              title="The day you arrived."
              description="Before childhood, college, dreams and friendships, there was simply you."
            />

            <MemoryCard
              memory={birthMemories[birthIndex]}
              index={birthIndex}
              total={birthMemories.length}
              onPrev={previousBirth}
              onNext={nextBirth}
              lastText="Continue"
            />
          </div>
        </section>
      )}

      {/* CHILDHOOD */}

      {section === "childhood" && (
        <section className="story-section childhood-section">
          <FloatingHearts />

          <div className="story-container">
            <SectionTitle
              eyebrow="Chapter Two"
              title="Your happy childhood."
              description="Before life became complicated, there were little smiles, innocent moments and a world full of simple happiness."
            />

            <MemoryCard
              memory={childhoodMemories[childhoodIndex]}
              index={childhoodIndex}
              total={childhoodMemories.length}
              onPrev={previousChildhood}
              onNext={nextChildhood}
              lastText="Step into college"
            />
          </div>
        </section>
      )}

      {/* COLLEGE */}

      {section === "college" && (
        <section className="story-section college-section">
          <FloatingHearts />

          <div className="story-container wide">
            <SectionTitle
              eyebrow="Chapter Three"
              title="She stepped into a new world."
              description="New people, experiences, achievements, responsibilities and memories slowly shaped her college journey."
            />

            <MemoryCard
              memory={collegeMemories[collegeIndex]}
              index={collegeIndex}
              total={collegeMemories.length}
              onPrev={previousCollege}
              onNext={nextCollege}
              lastText="Meet her strength"
            />
          </div>
        </section>
      )}

      {/* FAMILY */}

      {section === "family" && (
        <section className="story-section family-section">
          <FloatingHearts />

          <div className="story-container">
            <SectionTitle
              eyebrow="Chapter Four"
              title="Her greatest strength."
              description="Behind every strong person are people whose love quietly becomes their strength."
            />

            <MemoryCard
              memory={familyMemories[familyIndex]}
              index={familyIndex}
              total={familyMemories.length}
              onPrev={previousFamily}
              onNext={nextFamily}
              lastText="Continue to her dream"
            />

            <div className="family-quote">
              <p>
                “Home isn't always a place. Sometimes, it is the people who
                make you feel safe.”
              </p>
            </div>
          </div>
        </section>
      )}

      {/* DREAM */}

      {section === "dream" && (
        <section className="story-section dream-section">
          <FloatingHearts />

          <div className="story-container">
            <SectionTitle
              eyebrow="Chapter Five"
              title="The dream she is chasing."
              description="Some dreams take time. Some take courage. And some are worth fighting for until they finally become real."
            />

            <MemoryCard
              memory={dreamMemories[dreamIndex]}
              index={dreamIndex}
              total={dreamMemories.length}
              onPrev={previousDream}
              onNext={nextDream}
              lastText="Meet her loved ones"
            />

            <div className="dream-message">
              <span>✦</span>
              <p>
                Keep believing.
                <br />
                Keep preparing.
                <br />
                One day, the dream will become a memory.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* FRIENDS */}

      {section === "friends" && (
        <section className="story-section friends-section">
          <FloatingHearts />
          <Diamonds />

          <div className="story-container">
            <SectionTitle
              eyebrow="Chapter Six"
              title="The people she keeps close."
              description="Life becomes a little more beautiful when the right people walk beside us."
            />

            <div className="friend-block">
              <div className="friend-intro">
                <p className="eyebrow">A precious friendship</p>
                <h3>Anu — her diamond.</h3>
                <p>
                  Some people are rare enough to deserve a special place in
                  your story.
                </p>
              </div>

              <MemoryCard
                memory={anuMemories[anuIndex]}
                index={anuIndex}
                total={anuMemories.length}
                onPrev={previousAnu}
                onNext={nextAnu}
                lastText="Next"
              />
            </div>

            <div className="friend-divider">✦</div>

            <div className="friend-block">
              <div className="friend-intro">
                <p className="eyebrow">Another precious friendship</p>
                <h3>Saran — the healer.</h3>
                <p>
                  The kind of friend whose presence can make even a difficult
                  day feel lighter.
                </p>
              </div>

              <MemoryCard
                memory={saranMemories[saranIndex]}
                index={saranIndex}
                total={saranMemories.length}
                onPrev={previousSaran}
                onNext={nextSaran}
                lastText="There is one last message"
              />
            </div>
          </div>
        </section>
      )}

      {/* LETTER */}

      {section === "letter" && (
        <section className="story-section letter-section">
          <FloatingHearts intense />

          {!letterOpen ? (
            <motion.div
              className="message-screen"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="eyebrow">One last message</p>

              <div className="message-box">
                <div className="message-top">
                  <span>Messages</span>
                  <span>•••</span>
                </div>

                <div className="message-bubble">
                  <div className="message-avatar">G</div>

                  <div>
                    <p className="message-name">
                      Someone left you a message.
                    </p>
                    <p className="message-preview">Tap to open...</p>
                  </div>
                </div>

                <button
                  className="open-message"
                  onClick={() => setLetterOpen(true)}
                >
                  Open message
                  <span>♥</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="letter-paper"
              initial={{ opacity: 0, scale: 0.85, rotateX: 12 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="letter-small">For Sathya</p>

              <h2>A little something from me.</h2>

              <div className="letter-line" />

              <div className="letter-content">
                <p>Dear Sathya,</p>

                <p>
                  To my wonderful best friend, life has been an incredible
                  journey with you by my side. Your presence has brought so
                  much light and positivity into my world.
                </p>

                <p>
                  You have a unique way of turning ordinary moments into
                  extraordinary memories, and for that, I am eternally
                  grateful.
                </p>

                <p>
                  Your support and understanding have seen me through some
                  of my toughest times, and your joy and laughter have made
                  the good times even better.
                </p>

                <p>
                  I cherish every moment we’ve shared and look forward to
                  many more.
                </p>

                <p>
                  Thank you for being you, for being my rock, and for always
                  believing in me.
                </p>

                <p>
                  I am so lucky to have you in my life.
                </p>

                <p className="letter-sign">
                  — From Ganesh ❤️
                </p>
              </div>

              <button
                className="next-button"
                onClick={() => goTo("final")}
              >
                One final surprise
                <span>→</span>
              </button>
            </motion.div>
          )}
        </section>
      )}

      {/* FINAL BIRTHDAY */}

      {section === "final" && (
        <section className="final-section">
          <FloatingHearts intense />

          <motion.div
            className="final-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <p className="eyebrow">10 · 10 · 2026</p>

            <motion.div
              className="final-heart"
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ♥
            </motion.div>

            <h1>
              Happy Birthday,
              <br />
              <span>Sathya.</span>
            </h1>

            <p className="final-quote">
              May the next chapter of your life be even more beautiful than
              everything you have already lived.
            </p>

            <div className="final-photo">
              <img
                src="/memories/final/birthday.jpeg"
                alt="Sathya and Ganesh illustration"
              />
            </div>

            <p className="final-message">
              Keep dreaming.
              <br />
              Keep fighting.
              <br />
              Keep becoming the person you want to be.
            </p>

            <div className="final-signature">
              With lots of love,
              <br />
              <strong>Ganesh</strong>
            </div>

            <button
              className="restart-button"
              onClick={() => {
                setSection("gate");
                setPassword("");
                setShowKeypad(false);
                setWrongPassword(false);

                setBirthIndex(0);
                setChildhoodIndex(0);
                setCollegeIndex(0);
                setFamilyIndex(0);
                setDreamIndex(0);
                setAnuIndex(0);
                setSaranIndex(0);
                setLetterOpen(false);

                if (audioRef.current) {
                  audioRef.current.pause();
                  audioRef.current.currentTime = 0;
                }

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Experience it again
            </button>
          </motion.div>
        </section>
      )}
    </main>
  );
}
