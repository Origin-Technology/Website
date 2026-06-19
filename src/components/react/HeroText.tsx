import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const up = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function HeroText() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative z-10 mx-auto max-w-[860px] text-center"
    >
      <motion.h1
        variants={up}
        className="text-[clamp(40px,6vw,72px)] font-extrabold leading-[1.04] tracking-[-0.035em] text-white"
      >
        <span data-i18n="hero.title.line1">Everything we learned protecting</span>
        <br className="hidden sm:block" />
        <span data-i18n="hero.title.line2">apps — yours by default</span>
      </motion.h1>

      <motion.p
        variants={up}
        className="mx-auto mt-7 max-w-[560px] text-[19px] leading-relaxed text-white/90"
      >
        <span data-i18n="hero.subtitle.line1">
          One platform for authentication, protection, and performance.
        </span>
        <br className="hidden sm:block" />
        <span data-i18n="hero.subtitle.line2">
          Build, secure, and accelerate without managing infrastructure.
        </span>
      </motion.p>

      <motion.div variants={up} className="mt-10 flex flex-wrap justify-center gap-3.5">
        <a className="btn btn-white" href="#products">
          <span data-i18n="hero.cta.start">Start building for free</span>
        </a>
        <a className="btn btn-outline-light" href="mailto:support@origin.pw">
          <span data-i18n="hero.cta.talk">Talk to us</span>
        </a>
      </motion.div>
    </motion.div>
  );
}
