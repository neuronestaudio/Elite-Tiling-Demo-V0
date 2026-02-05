import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Shield, Award, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroVideo from "@/assets/Bathroom_Animation_Video_For_Tiling.mp4";

const trustBadges = [
  { icon: Shield, text: "AS 3740 Compliant" },
  { icon: Award, text: "Licensed & Insured" },
  { icon: CheckCircle, text: "Warranty-Backed" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video (with image fallback) */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={heroBg}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 hero-bg opacity-70" />

      {/* Content */}
      <div className="section-container relative z-10 flex min-h-screen items-center pb-20 pt-0">
        {/* Logo background overlay */}
        <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 z-0 lg:flex items-center justify-center hidden w-full">
          <img
            src="/Elite tiling logo.png"
            alt="Elite Tiling"
            className="h-auto opacity-30"
            style={{ width: "200%", maxWidth: "9600px", objectFit: "contain" }}
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center w-full relative z-10">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/Elite tiling logo.png"
                alt="Elite Tiling"
                className="mb-4 h-auto lg:hidden"
                style={{ width: "80vw", maxWidth: "400px", objectFit: "contain" }}
              />

              {/* Main Headline with Location */}
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-4">
                <h1
                  className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
                  style={{ fontSize: "3em" }}
                >
                  ELITE TILING
                </h1>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm w-fit">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  Springvale & Melbourne-wide
                </div>
              </div>

              {/* Tagline */}
              <p className="mb-8 text-xl font-semibold text-white sm:text-2xl uppercase">
                Experts in <span className="text-accent">Tiling</span> & <span className="text-accent">Waterproofing</span>
              </p>

              {/* Subheadline */}
              <p className="mb-8 text-lg text-white/80 sm:text-xl">
                Reliable, compliant, and built to last. Quality craftsmanship for commercial and residential projects across Melbourne. With years of expertise and a commitment to excellence, we transform your spaces into stunning, durable masterpieces.
              </p>

              {/* CTAs */}
              <div className="mb-10 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="btn-primary text-center">
                  Get a Free Quote
                </Link>
                <a href="tel:0424479303" className="btn-secondary text-center">
                  <Phone className="h-5 w-5" />
                  Call 0424 479 303
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <div key={badge.text} className="trust-badge">
                    <badge.icon className="h-4 w-4 text-accent" />
                    {badge.text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Quote Form */}
          <motion.div
            className="hidden rounded-lg bg-white p-8 shadow-2xl lg:block"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6 text-2xl font-bold text-foreground">
              Get your Free Quote Today!
            </h3>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <textarea
                  placeholder="Describe your project..."
                  rows={3}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-accent focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-accent px-4 py-3 font-semibold text-white hover:bg-accent/90 transition-colors"
              >
                Get Free Quote
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <div className="h-12 w-0.5 rounded-full bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
