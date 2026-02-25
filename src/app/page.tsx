"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Coffee, MapPin, Phone, Mail, Clock, Instagram, Facebook, Menu } from "lucide-react";
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

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLElement>(null);

  // Parallax calculations for hero background
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Handle sticky nav backdrop
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 noise-bg font-sans selection:bg-amber-500 selection:text-stone-950">

      {/* NAVIGATION */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-2xl tracking-wide text-stone-100 font-medium">Kávézó<span className="text-amber-500">.</span></div>
          <div className="hidden md:flex gap-10 items-center justify-center">
            {["Rólunk", "Filozófia", "Itallap", "Galéria"].map((item, i) => (
              <a key={i} href="#" className="text-xs uppercase tracking-[0.2em] hover:text-amber-500 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
          <button className="md:hidden text-stone-200 hover:text-amber-500 transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          <button className="hidden md:block border border-amber-500/50 hover:border-amber-500 hover:bg-amber-500 hover:text-stone-950 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300">
            Asztalfoglalás
          </button>
        </div>
      </motion.nav>

      {/* SECTION 1: PARALLAX HERO */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          style={{ y: yBg, opacity: opacityBg }}
          className="absolute inset-0 z-0 h-[120%]"
        >
          <div className="absolute inset-0 bg-stone-950/40 z-10 mix-blend-multiply"></div>
          {/* Subtle vignette gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(18,11,10,0.8)_100%)] z-10"></div>
          <div
            className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=2500')] bg-cover bg-center"
          ></div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 mt-20 flex flex-col md:flex-row shadow-2xl items-center justify-between">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="md:w-3/5"
          >
            <motion.div variants={fadeUpText} className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-amber-500 block"></span>
              <span className="text-amber-500 font-sans tracking-[0.3em] uppercase text-xs md:text-sm">Prémium Minőség</span>
            </motion.div>

            <motion.h1
              variants={fadeUpText}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-100 mb-6 leading-[1.1] text-balance font-medium"
            >
              Az ébredés<br />
              <span className="text-outline italic font-light hover:text-amber-500 transition-colors duration-500 cursor-default">művészete.</span>
            </motion.h1>

            <motion.p variants={fadeUpText} className="text-stone-300 text-lg md:text-xl font-light max-w-lg mb-12 text-balance leading-relaxed">
              Merülj el a gondosan válogatott, helyben pörkölt kávékészítés rituáléjában. Nálunk minden csésze egy önálló történetet mesél el.
            </motion.p>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
            className="hidden md:flex absolute right-10 bottom-10 flex-col items-center gap-6"
          >
            <span className="text-stone-400 text-xs tracking-widest uppercase rotate-90 origin-bottom mb-10">Görgess tovább</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-[1px] h-20 bg-gradient-to-b from-amber-500 to-transparent"
            ></motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE EXPERIENCE (GLASSMORPHISM) */}
      <section className="py-32 md:py-48 px-6 relative z-10 bg-stone-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpText}
            className="flex flex-col md:flex-row justify-between items-end mb-24"
          >
            <div className="md:w-1/2">
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-stone-100 mb-6">A Kávézás<br /><span className="text-amber-500 italic">Élménye</span></h2>
              <p className="text-stone-400 font-light max-w-md">Nem pusztán egy italt szolgálunk fel. Egy pillanatot teremtünk, ahol az idő lelassul, és csak az ízek számítanak.</p>
            </div>
            <div className="hidden md:block text-stone-700 font-serif text-[120px] leading-none opacity-20 -mb-10 pointer-events-none select-none">
              01
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { title: "Kézműves Pörkölés", num: "01", desc: "Saját kézműves pörkölésünk garantálja a maximális frissességet. Minden tételt gondosan, az eredethez hűen készítünk el, heti frissességgel." },
              { title: "Exkluzív Tér", num: "02", desc: "Modern, letisztult, indusztriális tér, ahol a természetes földszínek és a meleg fények találkoznak az exkluzív zenei aláfestéssel." },
              { title: "Szakértő Baristák", num: "03", desc: "Csapatunk minden tagja elkötelezett a specialty kávékultúra iránt. Pontoan tudjuk, mekkora nyomás és hány fokos víz hozza ki a maximumot." }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUpText}
                className="glass-panel p-10 lg:p-12 rounded-3xl group hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-8 w-[1px] h-12 bg-amber-500/20 group-hover:bg-amber-500 transition-colors duration-500"></div>
                <div className="text-stone-500 text-sm font-medium tracking-widest mb-8">{item.num}</div>
                <h3 className="font-serif text-2xl mb-4 text-stone-100 group-hover:text-amber-400 transition-colors duration-300">{item.title}</h3>
                <p className="text-stone-400 font-light leading-relaxed text-sm lg:text-base">
                  {item.desc}
                </p>

                {/* Decorative blur blob inside the card */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-500/10 blur-[50px] rounded-full group-hover:bg-amber-500/20 transition-colors duration-700"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: VISUAL MENU WITH OVERLAYS */}
      <section className="py-32 md:py-48 px-6 bg-stone-900 border-y border-stone-800/50 relative">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Menu Image Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute -inset-4 border border-amber-500/20 rounded-[2.5rem] transform -rotate-3 transition-transform duration-700 group-hover:-rotate-1"></div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&q=80&w=1500')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 glass-panel p-6 rounded-full w-32 h-32 flex items-center justify-center flex-col shadow-2xl"
            >
              <div className="text-amber-500 font-serif text-xl">100%</div>
              <div className="text-[10px] uppercase tracking-widest text-stone-300">Arabica</div>
            </motion.div>
          </motion.div>

          {/* Menu List */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpText}
              className="mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-stone-100 mb-6">Kínálatunk</h2>
              <p className="text-stone-400 font-light">Minden italunk frissen pörkölt specialty kávébabokból készül, precíz receptek alapján.</p>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {[
                { name: "Espresso", desc: "Karakteres, sűrű és vibráló textúra.", price: "850 Ft" },
                { name: "Cortado", desc: "Egyenlő arányban espresso és selymes tejhab.", price: "1050 Ft" },
                { name: "Flat White", desc: "Dupla ristretto mikróhabos tejjel, lágy élmény.", price: "1350 Ft" },
                { name: "Hario V60", desc: "Kézi filterkávé, teázós tisztaságú ízprofil.", price: "1650 Ft" },
                { name: "Matcha Latte", desc: "Ceremoniális minőségű matcha egyenesen Japánból.", price: "1550 Ft" },
              ].map((item, i) => (
                <motion.div key={i} variants={slideInRight} className="group cursor-pointer">
                  <div className="flex justify-between items-end mb-2">
                    <h4 className="font-serif text-2xl text-stone-200 group-hover:text-amber-500 transition-colors duration-300">{item.name}</h4>
                    <div className="flex-1 border-b border-stone-700 border-dashed mx-4 mb-2 opacity-30 group-hover:opacity-100 group-hover:border-amber-500 transition-all duration-300"></div>
                    <div className="text-stone-100 font-light text-lg">{item.price}</div>
                  </div>
                  <p className="text-stone-500 text-sm font-light">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              whileHover={{ x: 10 }}
              className="mt-12 text-sm uppercase tracking-widest text-amber-500 flex items-center gap-4 hover:text-amber-400 transition-colors"
            >
              Teljes itallap megtekintése <span className="w-8 h-[1px] bg-amber-500 block"></span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* SECTION 4: MASONRY GALLERY (AWWWARDS STYLE) */}
      <section className="py-32 md:py-48 px-6 bg-stone-950">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpText}
          className="max-w-7xl mx-auto mb-20 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-stone-100 mb-6">A Pillanatok</h2>
          <div className="w-16 h-px bg-amber-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
          {/* Gallery Item 1 (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
            className="md:col-span-8 md:row-span-2 relative rounded-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-transparent transition-colors duration-500"></div>
          </motion.div>

          {/* Gallery Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }}
            className="md:col-span-4 md:row-span-1 relative rounded-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-transparent transition-colors duration-500"></div>
          </motion.div>

          {/* Gallery Item 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}
            className="md:col-span-4 md:row-span-1 relative rounded-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-transparent transition-colors duration-500"></div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: GRAND FOOTER */}
      <section className="bg-stone-900 pt-32 pb-10 px-6 overflow-hidden relative border-t border-stone-800">

        {/* Massive Background Typography */}
        <div className="absolute top-10 left-0 w-full overflow-hidden flex justify-center pointer-events-none opacity-[0.03] select-none">
          <span className="font-serif text-[25vw] font-bold leading-none whitespace-nowrap text-stone-100">KÁVÉZÓ</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

            {/* Left Col */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="lg:col-span-5"
            >
              <motion.h3 variants={fadeUpText} className="font-serif text-4xl text-stone-100 mb-8">Látogass el hozzánk.</motion.h3>
              <motion.p variants={fadeUpText} className="text-stone-400 font-light mb-12 max-w-sm leading-relaxed">
                Kezdd a napot nálunk egy tökéletes specialty kávéval, egy nyugodt, exkluzív környezetben a város szívében.
              </motion.p>

              <div className="space-y-6">
                {[{ icon: MapPin, t1: "1051 Budapest", t2: "Példa utca 12." }, { icon: Clock, t1: "H-P: 07:30 - 18:00", t2: "Szo-V: 09:00 - 16:00" }, { icon: Phone, t1: "Asztalfoglalás", t2: "+36 30 123 4567" }].map((item, i) => (
                  <motion.div key={i} variants={fadeUpText} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-stone-200 font-medium text-sm">{item.t1}</p>
                      <p className="text-stone-500 font-light text-sm">{item.t2}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Col: Minimal Map Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}
              className="lg:col-span-7 h-[400px] lg:h-auto rounded-3xl overflow-hidden relative glass-panel group"
            >
              {/* Grayscale Map Filter handled by CSS or iFrame properties. For now we use standard iframe with some CSS tricks to blend it */}
              <div className="absolute inset-0 bg-stone-900/60 pointer-events-none group-hover:bg-transparent transition-colors duration-700 mix-blend-color z-10"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.538561141724!2d19.049405615626356!3d47.49896747917726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI5JzU2LjMiTiAxOcKwMDMnMDUuNyJF!5e0!3m2!1sen!2shu!4v1655000000000!5m2!1sen!2shu"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.2) sepia(0.3) hue-rotate(-20deg) brightness(0.8)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 !border-0"
              ></iframe>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-stone-800/50">
            <p className="text-stone-500 text-xs font-light tracking-widest uppercase">© 2026 KÁVÉZÓ. Minden jog fenntartva.</p>
            <div className="flex gap-6">
              {[Instagram, Facebook, Mail].map((Icon, i) => (
                <a key={i} href="#" className="text-stone-500 hover:text-amber-500 transition-colors transform hover:-translate-y-1 duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
