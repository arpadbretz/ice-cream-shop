"use client";

import { motion } from "framer-motion";
import { Coffee, MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* SECTION 1: HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-900/60 z-10"></div>
          {/* We use a temporary Unsplash image since generated images might not be available yet */}
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center bg-no-repeat"
            style={{ filter: 'brightness(0.7)' }}
          ></div>
        </div>

        <motion.div
          className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="text-amber-500 font-sans tracking-widest uppercase text-sm md:text-base mb-4 block">
            Kézműves Pörkölés • Újhullámos Kávézó
          </motion.span>
          <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-100 mb-6 drop-shadow-xl text-balance">
            Az ébredés művészete.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-stone-200 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 text-balance">
            Merülj el a gondosan válogatott, helyben pörkölt kávékészítés rituáléjában. Nálunk minden csésze egy történetet mesél el.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/20"
          >
            Asztalfoglalás
          </motion.button>
        </motion.div>
      </section>

      {/* SECTION 2: THE EXPERIENCE */}
      <section className="py-24 md:py-32 bg-stone-900 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-stone-100 mb-4">A Kávézás Élménye</h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { title: "A Pörkölés", desc: "Saját kézműves pörkölésünk garantálja a maximális frissességet és az egyedi ízprofilokat. Minden tételt gondosan, az eredethez hűen pörkölünk.", icon: <Coffee className="w-8 h-8 text-amber-500 mb-6" /> },
              { title: "A Hangulat", desc: "Modern, letisztult, és mégis otthonos indusztriális tér, ahol a természetes földszínek és a meleg fények találkoznak az exkluzív zenei aláfestéssel.", icon: <span className="text-3xl text-amber-500 mb-6 block">✧</span> },
              { title: "A Közösség", desc: "Egy találkozóhely a minőség szerelmeseinek. Várunk, legyen szó egy elmélyült munkáról, vagy egy kellemes hétvégi brunchról barátokkal.", icon: <span className="text-3xl text-amber-500 mb-6 block">⚑</span> }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-stone-800/50 p-8 md:p-10 rounded-2xl border border-stone-800 hover:border-amber-500/30 transition-colors duration-300">
                {item.icon}
                <h3 className="font-serif text-2xl mb-4 text-stone-100">{item.title}</h3>
                <p className="text-stone-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: VISUAL MENU */}
      <section className="py-24 md:py-32 bg-stone-800/20 px-4 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-stone-100 mb-4">Itallap</h2>
            <p className="text-stone-400 font-light mb-6">Minden kávénkat frissen, világos pörkölésű specialty kávébabokból készítjük.</p>
            <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { name: "Espresso", desc: "Karakteres, sűrű és vibráló.", price: "850 Ft" },
              { name: "Cortado", desc: "Egyenlő arányban espresso és selymes tejhab.", price: "1050 Ft" },
              { name: "Flat White", desc: "Dupla ristretto mikróhabos tejjel, lágy textúra.", price: "1350 Ft" },
              { name: "Hario V60", desc: "Kézi filterkávé, teázós tisztaságú ízélmény.", price: "1650 Ft" },
              { name: "Matcha Latte", desc: "Ceremoniális minőségű matcha japánból.", price: "1550 Ft" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col sm:flex-row justify-between items-baseline border-b border-stone-800 pb-4 md:pb-6 group">
                <div className="mb-2 sm:mb-0">
                  <h4 className="font-serif text-xl sm:text-2xl text-stone-100 group-hover:text-amber-500 transition-colors">{item.name}</h4>
                  <p className="text-stone-500 text-sm sm:text-base font-light">{item.desc}</p>
                </div>
                <div className="text-amber-500 font-medium text-lg">
                  {item.price}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <p className="text-stone-400 font-light italic">Kínálatunkban megtalálhatók helyben sült sütemények, vegán és gluténmentes alternatívák is.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: GALLERY */}
      <section className="py-24 md:py-32 px-4 bg-stone-900">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto mb-16 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-stone-100 mb-4">Galéria</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1610632380989-680fe0c80b2a?auto=format&fit=crop&q=80&w=1000"
          ].map((src, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: i * 0.1 } }
              }}
              className="relative h-72 rounded-2xl overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${src})` }}
              />
              <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: LOCATION / FOOTER */}
      <section className="bg-stone-950 border-t border-stone-800 pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-10"
            >
              <div>
                <motion.h3 variants={fadeInUp} className="font-serif text-3xl text-stone-100 mb-6">Látogass el hozzánk</motion.h3>
                <div className="w-12 h-1 bg-amber-500 mb-8"></div>
                <motion.p variants={fadeInUp} className="text-stone-400 font-light mb-8 max-w-sm">
                  Kezdd a napot nálunk, egy tökéletes specialty kávéval, nyugodt, exkluzív környezetben.
                </motion.p>
              </div>

              <div className="space-y-6">
                <motion.div variants={fadeInUp} className="flex items-start gap-4 text-stone-300">
                  <MapPin className="w-6 h-6 text-amber-500 shrink-0" />
                  <div>
                    <p className="font-medium text-stone-200">Kávézó címe</p>
                    <p className="font-light text-stone-400">1051 Budapest, Példa utca 12.</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4 text-stone-300">
                  <Clock className="w-6 h-6 text-amber-500 shrink-0" />
                  <div>
                    <p className="font-medium text-stone-200">Nyitvatartás</p>
                    <p className="font-light text-stone-400">H-P: 07:30 - 18:00</p>
                    <p className="font-light text-stone-400">Szo-V: 09:00 - 16:00</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4 text-stone-300">
                  <Phone className="w-6 h-6 text-amber-500 shrink-0" />
                  <div>
                    <p className="font-medium text-stone-200">Asztalfoglalás</p>
                    <p className="font-light text-stone-400">+36 30 123 4567</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4 text-stone-300">
                  <Mail className="w-6 h-6 text-amber-500 shrink-0" />
                  <div>
                    <p className="font-medium text-stone-200">Email</p>
                    <p className="font-light text-stone-400">hello@kavezo.hu</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-96 lg:h-auto rounded-3xl overflow-hidden relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 shadow-xl border border-stone-800"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.538561141724!2d19.049405615626356!3d47.49896747917726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI5JzU2LjMiTiAxOcKwMDMnMDUuNyJF!5e0!3m2!1sen!2shu!4v1655000000000!5m2!1sen!2shu"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </motion.div>
          </div>

          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-serif text-2xl text-stone-100 hidden md:block">Kávézó.</p>
            <p className="text-stone-500 text-sm font-light">© 2026 Kávézó. Minden jog fenntartva.</p>
            <div className="flex gap-4">
              <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
