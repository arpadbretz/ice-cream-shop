"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Menu, IceCream, Info, ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// --- Animation Variants ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUpText: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } },
};

const floatingElement: Variants = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  // Parallax for hero image
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-vanilla-100 text-vanilla-900 noise-bg font-sans selection:bg-mint-200 selection:text-vanilla-900 overflow-hidden">

      {/* BACKGROUND FLOATING BLOBS */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-pink-400/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 right-[-200px] w-[600px] h-[600px] bg-mint-400/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] bg-amber-200/20 rounded-full blur-[80px]"
        />
      </div>

      {/* NAVIGATION */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-3xl font-bold tracking-tight text-vanilla-900 flex items-center gap-2">
            <IceCream className="w-8 h-8 text-pink-500" />
            Fagyizó<span className="text-pink-500">.</span>
          </div>
          <div className="hidden md:flex gap-8 items-center justify-center">
            {["Ízvilág", "Hogyan készül?", "Galéria", "Kapcsolat"].map((item, i) => (
              <a key={i} href="#" className="font-medium text-sm hover:text-pink-500 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
          <button className="md:hidden text-vanilla-900 hover:text-pink-500 transition-colors">
            <Menu className="w-8 h-8" />
          </button>
          <button className="hidden md:block bg-vanilla-900 text-vanilla-50 hover:bg-pink-500 hover:text-white px-8 py-3 rounded-[2rem] font-medium text-sm transition-all duration-300 shadow-xl shadow-vanilla-900/10">
            Rendelés
          </button>
        </div>
      </motion.nav>

      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12 z-10 px-6">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 flex flex-col justify-center items-start z-20 pt-10"
          >
            <motion.div variants={fadeUpText} className="inline-flex items-center gap-3 px-5 py-2 glass-panel rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-mint-500 block animate-pulse"></span>
              <span className="text-vanilla-900 font-medium text-sm">Frissen készült ma reggel</span>
            </motion.div>

            <motion.h1
              variants={fadeUpText}
              className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-vanilla-900 mb-8 leading-[1.05] tracking-tight text-balance"
            >
              A város
              <br />
              <span className="text-pink-500 italic">legfrissebb</span>
              <br />
              gombóca.
            </motion.h1>

            <motion.p variants={fadeUpText} className="text-vanilla-900/70 text-lg md:text-xl font-medium max-w-md mb-10 text-balance leading-relaxed">
              Kézműves élmény minden gombócban. Friss, természetes alapanyagokból, szenvedéllyel készítve.
            </motion.p>

            <motion.div variants={fadeUpText} className="flex gap-4">
              <button className="bg-pink-500 hover:bg-pink-400 text-white px-8 py-4 rounded-[2rem] font-semibold text-lg transition-all shadow-xl shadow-pink-500/20 hover:scale-105 active:scale-95 flex items-center gap-2">
                Hűtse le magát <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 relative h-[500px] sm:h-[600px] lg:h-[700px] z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 z-10 p-4"
            >
              <motion.div style={{ y: yBg }} className="w-full h-full relative rounded-[3rem] overflow-hidden shadow-2xl shadow-vanilla-900/10">
                <img src="/hero.png" alt="Prémium Gelato" className="w-full h-full object-cover object-center" />
                {/* Inner glass highlight */}
                <div className="absolute inset-0 rounded-[3rem] ring-1 ring-inset ring-white/40 pointer-events-none"></div>
              </motion.div>
            </motion.div>

            {/* Decorative Floating Badges */}
            <motion.div
              variants={floatingElement} animate="animate"
              className="absolute top-10 -left-6 lg:-left-12 z-20 glass-panel p-4 rounded-3xl flex items-center gap-3 shadow-xl"
            >
              <div className="w-12 h-12 bg-mint-200 rounded-full flex items-center justify-center text-mint-500">
                Díjnyertes
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FLAVORS SLIDER (Interactive Card Stack effect) */}
      <section className="py-24 md:py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpText}
            className="flex flex-col items-center text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-vanilla-900 mb-6">Kedvenc <span className="text-pink-500 italic">Ízvilágunk</span></h2>
            <p className="text-vanilla-900/70 font-medium max-w-lg">
              Fedezze fel szezonális kínálatunkat. Minden íz egy gondosan megtervezett utazás, tökéletes egyensúlyban.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Karamell & Tengeri Só", color: "bg-vanilla-400", text: "text-vanilla-900", desc: "Lágy, krémes karamell a tengeri só roppanós fűszerességével.", img: "bg-[url('/hero.png')]" },
              { title: "Szicíliai Pisztácia", color: "bg-mint-200", text: "text-mint-500", desc: "100% szicíliai pisztácia, pörkölt darabkákkal a tökéletes textúráért.", img: "bg-[url('https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800')]" },
              { title: "Zamatos Eper", color: "bg-pink-200", text: "text-pink-500", desc: "Helyi termelőktől származó, napérlelte eperből készült hűsítő sorbet.", img: "bg-[url('/splash.png')]" }
            ].map((flavor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative rounded-[2.5rem] p-8 h-[450px] flex flex-col justify-end overflow-hidden group shadow-2xl shadow-pink-500/5 cursor-pointer border border-vanilla-50/20"
              >
                {/* Background Image & Overlay */}
                <div className={`absolute inset-0 ${flavor.img} bg-cover bg-center transition-transform duration-1000 group-hover:scale-110`}></div>
                <div className={`absolute inset-0 ${flavor.color} opacity-80 group-hover:opacity-40 transition-opacity duration-700 mix-blend-multiply`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-vanilla-900/60 via-transparent to-transparent opacity-60"></div>

                {/* Content */}
                <div className="relative z-10 glass-panel p-6 rounded-3xl group-hover:bg-white/95 transition-all transform group-hover:-translate-y-2 duration-500">
                  <h3 className="font-serif text-3xl font-bold mb-3 text-vanilla-900">{flavor.title}</h3>
                  <p className="text-vanilla-900/80 font-medium text-sm leading-relaxed">{flavor.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IT'S MADE */}
      <section className="py-24 md:py-32 px-6 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative rounded-[3rem] overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] shadow-2xl glass-panel p-4"
          >
            <div className="w-full h-full relative rounded-[2.5rem] overflow-hidden">
              <img src="/splash.png" alt="Friss alapanyagok" className="w-full h-full object-cover" />
            </div>

            {/* Floating Info */}
            <motion.div
              variants={floatingElement} animate="animate"
              className="absolute bottom-10 -right-4 lg:right-10 z-20 glass-panel p-6 rounded-[2rem] shadow-2xl max-w-[200px]"
            >
              <Info className="w-8 h-8 text-pink-500 mb-3" />
              <p className="font-bold text-vanilla-900 text-sm">Helyi termelőktől</p>
              <p className="text-vanilla-900/60 text-xs mt-1">Garantált forrás</p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeUpText} className="font-serif text-4xl md:text-5xl lg:text-6xl text-vanilla-900 mb-8 leading-tight">
                Hogyan <br /><span className="text-mint-500 italic">készül?</span>
              </motion.h2>

              <motion.p variants={fadeUpText} className="text-vanilla-900/70 text-lg mb-10 leading-relaxed max-w-lg font-medium">
                Nincsenek titkok, csak tökéletes alapanyagok és rengeteg odafigyelés. Azt hisszük, hogy az igazán jó fagylalt a földeken kezdődik.
              </motion.p>

              <div className="space-y-6">
                {[
                  { title: "100% Természetes Alapanyagok", desc: "Mesterséges színezékektől és aromáktól mentes receptek." },
                  { title: "Helyi tej és tejszín", desc: "Környékbeli farmokról származó, minőségi tejtermékek adják az alapot." },
                  { title: "Napi kis adagos készítés", desc: "Folyamatosan, frissen főzzük az ízeket, hogy a textúra mindig krémes maradjon." }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUpText} className="glass-panel p-6 rounded-[2rem] flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
                      <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-vanilla-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-vanilla-900/60 text-sm font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* SECTION 4: INSTAGRAM GALLERY */}
      <section className="py-24 md:py-32 px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpText}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-vanilla-900 mb-4">Kövess minket</h2>
          <p className="text-vanilla-900/70 font-medium mb-6">@fagyizo.budapest</p>
          <button className="glass-panel px-6 py-3 rounded-full flex items-center gap-2 font-bold text-sm text-vanilla-900 hover:text-pink-500 transition-colors shadow-lg">
            <Instagram className="w-5 h-5" /> Csatlakozz hozzánk
          </button>
        </motion.div>

        {/* Masonry Grid Setup using Tailwind */}
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {[
            { img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=600", h: "h-[300px]" },
            { img: "/parlor.png", h: "h-[450px]" },
            { img: "https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?auto=format&fit=crop&q=80&w=600", h: "h-[250px]" },
            { img: "/splash.png", h: "h-[400px]" },
            { img: "https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?auto=format&fit=crop&q=80&w=600", h: "h-[320px]" },
            { img: "/hero.png", h: "h-[350px]" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative w-full rounded-[2rem] overflow-hidden group break-inside-avoid ${item.h} shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 ring-1 ring-vanilla-900/5`}
            >
              <img src={item.img} alt="Instagram poszt" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-vanilla-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-md">
                <Instagram className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: FOOTER & LOCATION */}
      <section className="bg-pink-100/50 pt-24 pb-8 px-6 relative border-t border-white overflow-hidden rounded-t-[4rem] mx-2">

        {/* Massive Background Typography */}
        <div className="absolute top-10 left-0 w-full overflow-hidden flex justify-center pointer-events-none opacity-5 select-none">
          <span className="font-serif text-[clamp(8rem,15vw,20rem)] font-bold leading-none whitespace-nowrap text-pink-500">FAGYIZÓ</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

            {/* Address & Info */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <motion.h3 variants={fadeUpText} className="font-serif text-5xl md:text-6xl text-vanilla-900 mb-8 font-bold leading-tight">
                Itt találsz <br /><span className="text-pink-500 italic">meg minket.</span>
              </motion.h3>

              <div className="space-y-6">
                <motion.div variants={fadeUpText} className="glass-panel p-6 rounded-[2rem] flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-vanilla-900 font-bold text-lg">1051 Budapest</p>
                    <p className="text-vanilla-900/70 font-medium">Napfény utca 5.</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeUpText} className="glass-panel p-6 rounded-[2rem] flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <Clock className="w-6 h-6 text-mint-500" />
                  </div>
                  <div>
                    <p className="text-vanilla-900 font-bold text-lg">Nyitvatartás</p>
                    <p className="text-vanilla-900/70 font-medium">H-V: 10:00 - 20:00</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeUpText} className="glass-panel p-6 rounded-[2rem] flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-vanilla-900 font-bold text-lg">Kapcsolat</p>
                    <p className="text-vanilla-900/70 font-medium">+36 30 987 6543</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}
              className="lg:col-span-7 h-[400px] lg:h-auto rounded-[3rem] overflow-hidden relative glass-panel p-4 shadow-2xl"
            >
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-mint-50/50 flex items-center justify-center relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.538561141724!2d19.049405615626356!3d47.49896747917726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI5JzU2LjMiTiAxOcKwMDMnMDUuNyJF!5e0!3m2!1sen!2shu!4v1655000000000!5m2!1sen!2shu"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'hue-rotate(200deg) saturate(0.5) contrast(1.1) brightness(1.05)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 !border-0"
                ></iframe>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-vanilla-900/10">
            <p className="text-vanilla-900/60 font-medium text-sm">© 2026 Fagyizó. Minden jog fenntartva.</p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Mail].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full bg-white text-vanilla-900 hover:text-pink-500 hover:bg-pink-50 transition-all flex items-center justify-center shadow-md">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
