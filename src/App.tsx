import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Sparkles, 
  Camera, 
  ShoppingBag, 
  Layout, 
  Send,
  Instagram,
  MessageCircle
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.4, ease: "easeInOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function WhatsAppButton() {
  return (
    <motion.a 
      href="https://wa.me/919347542787"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        transition: { delay: 1.5 }
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 group"
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.div>
      
      {/* Tooltip */}
      <span className="absolute right-20 bg-white text-sraiva-navy px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
        Chat with us
      </span>
    </motion.a>
  );
}

function HomePage() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 100]);
  const opacityHero = useTransform(scrollY, [300, 800], [1, 0]);

  return (
    <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen selection:bg-sraiva-green selection:text-white overflow-x-hidden bg-white"
    >
      {/* Sticky Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-sraiva-slate/80 backdrop-blur-md border-b border-sraiva-navy/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="font-serif text-3xl font-bold tracking-tighter text-sraiva-navy">
              Sraiva<span className="text-sraiva-green">.</span>
            </Link>
          </div>
          
          <a 
            href="#inquiry"
            className="bg-sraiva-navy text-white px-6 py-2.5 rounded-full font-medium hover:bg-sraiva-navy/90 transition-all active:scale-95 group"
          >
            <span className="flex items-center gap-2">
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-40 pb-24 px-6 relative flex items-center">
        {/* Background Patterns */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#1A1D23 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div 
            style={{ y: yHero, opacity: opacityHero }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center text-center space-y-10"
          >
            <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-sraiva-navy/10 bg-white/50 text-sraiva-navy/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              <MapPin className="w-3.5 h-3.5 text-sraiva-green" />
              Empowering Hyderabad's Elite
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[1.1] max-w-6xl tracking-tighter relative z-0 mb-12">
              Digital <span className="italic text-sraiva-navy/40">Showcases</span> <br className="hidden md:block" /> for Hyderabad’s Finest Brands
            </h1>
            
            <div className="relative z-10 flex flex-col items-center">
              <p className="text-xl md:text-2xl text-sraiva-navy/70 max-w-2xl leading-relaxed font-light mb-12">
                We design, build, and host elegant websites that mirror the quality of your work. 
                From discovery to deployment, we handle the entire digital journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="#inquiry"
                  className="bg-sraiva-navy text-white px-10 py-5 rounded-full font-bold hover:shadow-2xl hover:shadow-sraiva-navy/30 transition-all active:scale-95 flex items-center justify-center gap-3 group"
                >
                  Start a Conversation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-sraiva-green" />
                </a>
                <a 
                  href="#standard"
                  className="bg-white text-sraiva-navy border border-sraiva-navy/10 px-10 py-5 rounded-full font-bold hover:bg-sraiva-navy hover:text-white transition-all active:scale-95 flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-12"
            >
              <div className="w-px h-24 bg-gradient-to-b from-sraiva-navy/20 to-transparent" />
            </motion.div>
          </motion.div>
        </div>

        {/* Parallax Background Elements */}
        <motion.div 
          style={{ y: useTransform(scrollY, [0, 1000], [0, -200]) }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-sraiva-green/5 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div 
          style={{ y: useTransform(scrollY, [0, 1000], [0, -400]) }}
          className="absolute bottom-0 -right-20 w-[30rem] h-[30rem] bg-sraiva-navy/5 rounded-full blur-3xl pointer-events-none"
        />
      </section>
      {/* Expertise Section */}
      <section id="expertise" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-24"
          >
            <span className="uppercase text-[10px] tracking-[0.4em] font-bold text-sraiva-green mb-4 inline-block tracking-widest">The Showcase Trio</span>
            <h2 className="text-5xl md:text-7xl tracking-tighter italic">Crafted for Excellence</h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Interior Design */}
            <div className="brochure-card group border border-sraiva-navy/10 hover:border-sraiva-green/40 rounded-[2rem] p-12 lg:p-14 transition-all duration-700">
              <motion.div variants={fadeInUp}>
                <div className="w-14 h-14 rounded-2xl bg-sraiva-navy/5 flex items-center justify-center mb-8 group-hover:bg-sraiva-navy group-hover:text-white transition-all duration-500 text-sraiva-navy shadow-inner">
                  <Layout className="w-7 h-7" />
                </div>
                <h3 className="text-3xl mb-6 italic font-serif">Interior Design</h3>
                <p className="text-sraiva-navy/60 leading-relaxed text-base font-light">
                  For the Visionaries. We build immersive digital galleries that let your spaces speak for themselves.
                </p>
              </motion.div>
            </div>

            {/* Event Management */}
            <div className="brochure-card group border border-sraiva-navy/10 hover:border-sraiva-green/40 rounded-[2rem] p-12 lg:p-14 transition-all duration-700">
              <motion.div variants={fadeInUp}>
                <div className="w-14 h-14 rounded-2xl bg-sraiva-navy/5 flex items-center justify-center mb-8 group-hover:bg-sraiva-navy group-hover:text-white transition-all duration-500 text-sraiva-navy shadow-inner">
                  <Camera className="w-7 h-7" />
                </div>
                <h3 className="text-3xl mb-6 italic font-serif">Event Management</h3>
                <p className="text-sraiva-navy/60 leading-relaxed text-base font-light">
                  For the Storytellers. A sophisticated home for your weddings and events, captured with digital grace.
                </p>
              </motion.div>
            </div>

            {/* Fashion & Clothing */}
            <div className="brochure-card group border border-sraiva-navy/10 hover:border-sraiva-green/40 rounded-[2rem] p-12 lg:p-14 transition-all duration-700">
              <motion.div variants={fadeInUp}>
                <div className="w-14 h-14 rounded-2xl bg-sraiva-navy/5 flex items-center justify-center mb-8 group-hover:bg-sraiva-navy group-hover:text-white transition-all duration-500 text-sraiva-navy shadow-inner">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h3 className="text-3xl mb-6 italic font-serif">Fashion Boutique</h3>
                <p className="text-sraiva-navy/60 leading-relaxed text-base font-light">
                  For the Trendsetters. A high-end digital lookbook for your boutique, designed to inspire and captivate.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Sraiva */}
      <section id="standard" className="py-32 px-6 bg-white/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-6xl md:text-7xl mb-16 tracking-tighter">The Sraiva <span className="italic text-sraiva-green font-serif">Standard</span></h2>
              <div className="space-y-12">
                {[
                  { num: "01.", title: "Full Service", text: "We don't just design; we bring your site live and keep it running smoothly." },
                  { num: "02.", title: "Local Partnership", text: "Based in Hyderabad, providing personal attention to the city's finest establishments." },
                  { num: "03.", title: "Visual Excellence", text: "We prioritize beauty and a \"premium feel\" above all else, mirroring your own quality." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-10 group">
                    <span className="text-5xl italic text-sraiva-green/30 font-serif group-hover:text-sraiva-green transition-colors duration-500 select-none">{item.num}</span>
                    <div className="pt-2">
                      <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-sraiva-green mb-4">{item.title}</h4>
                      <p className="text-sraiva-navy/70 leading-relaxed text-lg font-light">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative py-12 lg:py-24 flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[500px]">
                <div className="absolute inset-0 bg-sraiva-navy/[0.03] rounded-[3rem] rotate-3 scale-105" />
                <div className="relative glass-card rounded-[2.5rem] p-16 md:p-20 text-center flex flex-col items-center justify-center gap-10">
                  <span className="text-sraiva-green/40 group-hover:text-sraiva-green transition-colors"><Sparkles className="w-14 h-14" /></span>
                  <p className="text-3xl md:text-4xl italic text-sraiva-navy font-serif leading-[1.3] font-light">"Digital presence evolved for those who value <span className="text-sraiva-green/80">craftsmanship.</span>"</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer / Inquiry Suite */}
      <section id="inquiry" className="py-40 px-6 bg-sraiva-navy text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sraiva-green to-transparent opacity-30" />
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-7xl mb-8 tracking-tighter italic">Let's start a conversation.</h2>
            <p className="text-white/50 text-xl font-light">
              Bringing your legacy into the digital spotlight.
            </p>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="bg-white/5 border border-white/10 p-12 md:p-24 rounded-[3rem] backdrop-blur-sm shadow-[0_0_100px_rgba(56,176,0,0.1)] relative z-10"
          >
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              className="space-y-16"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="relative group">
                  <label htmlFor="full_name" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-sraiva-green mb-3">Full Name</label>
                  <input 
                    id="full_name"
                    type="text" 
                    name="name"
                    placeholder="E.g. Arjun Reddy"
                    className="minimal-input !text-white !border-white/20 focus:!border-sraiva-green"
                    required
                  />
                </div>
                <div className="relative group">
                  <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-sraiva-green mb-3">Email Address</label>
                  <input 
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="arjun@studio.com"
                    className="minimal-input !text-white !border-white/20 focus:!border-sraiva-green"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="relative group">
                  <label htmlFor="business_type" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-sraiva-green mb-3">Business Type</label>
                  <input 
                    id="business_type"
                    type="text" 
                    name="business_type"
                    placeholder="E.g. Interior Design"
                    className="minimal-input !text-white !border-white/20 focus:!border-sraiva-green"
                    required
                  />
                </div>
                <div className="relative group">
                  <label htmlFor="vision" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-sraiva-green mb-3">Your Vision</label>
                  <textarea 
                    id="vision"
                    name="message"
                    placeholder="Tell us about your masterpiece"
                    rows={1}
                    className="minimal-input !text-white !border-white/20 focus:!border-sraiva-green resize-none overflow-hidden"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center pt-8">
                <button 
                  type="submit"
                  className="bg-white text-sraiva-navy px-16 py-5 rounded-full font-bold text-xl hover:bg-sraiva-green hover:text-white transition-all duration-500 flex items-center gap-4 active:scale-95 group shadow-2xl"
                >
                  Send Inquiry
                  <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

          <div className="mt-32 flex flex-col md:flex-row justify-center gap-12 md:gap-24 items-center">
            <a href="https://www.instagram.com/sraiva.web/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/50 hover:text-sraiva-green transition-colors group">
              <Instagram className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Instagram</span>
            </a>
            <a href="https://wa.me/919347542787" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/50 hover:text-sraiva-green transition-colors group">
              <MessageCircle className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">WhatsApp</span>
            </a>
          </div>

          <div className="mt-24 pt-12 border-t border-white/10 flex flex-col items-center text-center gap-8 opacity-40">
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold">
              Based in Hyderabad • Worldwide Standard
            </div>
            <div className="text-[10px] uppercase tracking-[0.4em]">© 2024 Sraiva.</div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </motion.div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
