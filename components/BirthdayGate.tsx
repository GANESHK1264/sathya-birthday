"use client";

export default function BirthdayGate() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4eee6] text-[#4d3b2d]">

      {/* Soft background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-[#e8d8c5] opacity-40 blur-3xl" />
        <div className="absolute right-[-100px] bottom-[-100px] h-[350px] w-[350px] rounded-full bg-[#dfcdb9] opacity-40 blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20">

        {/* Instagram style memory */}
        <div className="mb-10 overflow-hidden rounded-2xl bg-white shadow-2xl">

          <div className="relative h-[500px] w-[290px]">

            <img
              src="/memories/parents/family%20(1).jpeg"
              alt="A beautiful family memory"
              className="h-full w-full object-cover"
            />

          </div>

          {/* Fake Instagram bottom */}
          <div className="bg-black px-4 py-4 text-white">

            <div className="mb-3 flex items-center justify-between text-xl">
              <div className="flex gap-4">
                <span>♡</span>
                <span>◯</span>
                <span>➤</span>
              </div>

              <span>♡</span>
            </div>

            <div className="rounded-full border border-gray-700 px-4 py-2 text-xs text-gray-300">
              Send message
            </div>

          </div>

        </div>

        {/* Heading */}
        <div className="max-w-4xl text-center">

          <h1 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            You were already someone's whole world.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#806c59] md:text-lg">
            Before you could remember these moments yourself,
            there were people creating them for you.
          </p>

          {/* CONTINUE BUTTON */}
          <a
            href="#college"
            className="mt-12 inline-flex items-center justify-center rounded-full border border-[#8b7355]/40 px-10 py-4 text-xs tracking-[0.35em] text-[#5c4938] transition-all duration-500 hover:bg-[#5c4938] hover:text-white"
          >
            CONTINUE TO HER JOURNEY
            <span className="ml-3 text-base">→</span>
          </a>

        </div>

      </div>

    </section>
  );
}