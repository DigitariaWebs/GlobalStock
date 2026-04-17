import Image from "next/image";













export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-5rem)] px-10 pb-5 pt-0">
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="hero-clip" clipPathUnits="objectBoundingBox">
            <path
              d="
              M 0.25,0.04
              Q 0.25,0 0.27,0
              L 0.98,0
              Q 1,0 1,0.04
              L 1,0.61
              Q 1,0.65 0.98,0.65
              L 0.675,0.65
              Q 0.65,0.65 0.65,0.71
              L 0.65,0.96
              Q 0.65,1 0.63,1
              L 0.02,1
              Q 0,1 0,0.96
              L 0,0.19
              Q 0,0.15 0.02,0.15
              L 0.23,0.15
              Q 0.25,0.15 0.25,0.11
              L 0.25,0.04
              Z

              M 0.68,0.67
              L 0.98,0.67
              Q 1,0.67 1,0.71
              L 1,0.96
              Q 1,1 0.98,1
              L 0.68,1
              Q 0.66,1 0.66,0.96
              L 0.66,0.71
              Q 0.66,0.67 0.68,0.67
              Z
            "
            />
          </clipPath>
        </defs>
      </svg>

      <div
        className="relative h-full w-full overflow-hidden"
        style={{ clipPath: "url(#hero-clip)" }}
      >
        <Image
          src="/HeroSection.png"
          alt="GlobalStock — Équipements énergétiques industriels"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-start justify-center pt-16">
          <h1 className="text-center text-5xl font-bold tracking-tight text-white drop-shadow-lg mt-10">
            L&apos;Énergie à Votre Service
          </h1>
        </div>
      </div>
    </section>
  );
}
