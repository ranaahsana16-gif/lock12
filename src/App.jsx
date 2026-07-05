import { useEffect, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronDown,
  CircleCheck,
  Clock,
  Copy,
  DoorOpen,
  HandCoins,
  House,
  KeyRound,
  Lock,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Star,
  TimerReset,
  Users,
  Wrench,
  Zap,
  Menu,
  X,
  Search,
  Mail,
  Info,
  CheckCircle
} from 'lucide-react';

const heroImage = "/assets/hero-locksmith-DoNveL5X.jpg";
const keysImage = "/assets/keys-C6EK-ING.jpg";
const residentialImage = "/assets/residential-C0MRIgLs.jpg";
const commercialImage = "/assets/commercial-CHsIWrJn.jpg";
const keycuttingImage = "/assets/keycutting-wtGqknNQ.jpg";

const phoneNumber = "+1 (514) 279-5625";
const phoneLink = "tel:+15142795625";
const businessEmail = "perfectlocksmiths@gmail.com";

const services = [
  { icon: Zap, title: 'Emergency Lockouts', desc: 'Locked out at 2am or during rush hour? We respond fast to get you back in — safely and without damage.', categories: ['emergency', 'residential', 'commercial'], price: 'Starting at $75' },
  { icon: DoorOpen, title: 'Building Lockouts', desc: 'Commercial and residential building entry when keys, cards, or codes fail. Discreet, professional, quick.', categories: ['emergency', 'residential', 'commercial'], price: 'Starting at $85' },
  { icon: Lock, title: 'Door Lock Installation', desc: 'Expertly installed locks from trusted brands, aligned perfectly and built to last.', categories: ['residential', 'commercial'], price: 'Starting at $110' },
  { icon: Shield, title: 'Deadbolt Installation', desc: 'Reinforced deadbolts for a serious upgrade in home and office security.', categories: ['residential', 'commercial'], price: 'Starting at $120' },
  { icon: Wrench, title: 'Lock Repair', desc: 'Sticking, loose, or broken locks fixed on the spot — no need to replace what can be restored.', categories: ['residential', 'commercial'], price: 'Starting at $65' },
  { icon: KeyRound, title: 'Lock Replacement', desc: 'Old, worn, or compromised locks swapped for modern, secure hardware.', categories: ['residential', 'commercial'], price: 'Starting at $95' },
  { icon: TimerReset, title: 'Lock Rekeying', desc: 'New keys without new locks — perfect after a move, lost key, or staff change.', categories: ['emergency', 'residential', 'commercial'], price: 'Starting at $50 per cylinder' },
  { icon: Users, title: 'Master Key Systems', desc: 'One key for you, limited access for others. Designed to fit how your building actually works.', categories: ['commercial'], price: 'Custom Quote' },
  { icon: Copy, title: 'Standard Key Copying', desc: 'Precision key cutting for home, office, mailbox, and specialty keys.', categories: ['residential', 'commercial'], price: 'Starting at $5' },
  { icon: Building2, title: 'Commercial Locksmith', desc: 'Storefronts, offices, and warehouses — full security service for businesses of every size.', categories: ['commercial'], price: 'Starting at $115/hr' },
  { icon: House, title: 'Residential Locksmith', desc: 'Family-first security you can trust, from front door to garage.', categories: ['residential'], price: 'Starting at $95' },
  { icon: BadgeCheck, title: 'Office Security Solutions', desc: 'Access control, restricted keyways, and hardware built for daily commercial use.', categories: ['commercial'], price: 'Custom Quote' }
];

const stats = [
  { value: '5.0', label: 'Google Rating', suffix: '★' },
  { value: '7', label: 'Perfect Reviews' },
  { value: '15+', label: 'Years of Experience' },
  { value: '30', label: 'Min Avg. Response', suffix: ' min' }
];

const initialReviews = [
  { name: 'Sarah M.', text: "Locked out of my apartment on a Sunday morning. They arrived in under 30 minutes, were incredibly polite, and the price was exactly what they quoted. Truly perfect service.", role: 'Residential Customer', rating: 5 },
  { name: 'Daniel R.', text: "We rekeyed our entire office after a staff change. The technician was professional, punctual, and walked us through every option. Best locksmith experience I've had.", role: 'Office Manager', rating: 5 },
  { name: 'Ana P.', text: "Honest, transparent pricing and outstanding workmanship. New deadbolts feel solid — you can tell they care about doing the job right.", role: 'Homeowner', rating: 5 },
  { name: 'Marc L.', text: "Emergency call late at night, they picked up on the first ring and had me back in my car quickly. Kind, calm, and clearly experienced.", role: 'Emergency Lockout', rating: 5 },
  { name: 'Julie T.', text: "Master key system for our small business — everything works flawlessly. Would recommend Perfect Locksmiths to anyone.", role: 'Small Business Owner', rating: 5 },
  { name: 'Kevin B.', text: "Fast, fair, and friendly. Explained everything before starting and cleaned up after. Exactly the kind of service you hope for.", role: 'Residential Customer', rating: 5 }
];

const whyUs = [
  { icon: HandCoins, title: 'Honest Pricing', desc: 'Clear quotes before we start. No surprises, no upsells.' },
  { icon: TimerReset, title: 'Fast Response', desc: 'Rapid arrival for emergencies and scheduled appointments alike.' },
  { icon: BadgeCheck, title: 'Professional Workmanship', desc: 'Licensed technicians with years of hands-on locksmith expertise.' },
  { icon: Shield, title: 'Trusted & Reliable', desc: '5.0 stars on Google — every job done with care and integrity.' }
];

const businessHours = [
  ['Monday', '9:00 AM – 5:00 PM'],
  ['Tuesday', '9:00 AM – 5:00 PM'],
  ['Wednesday', '9:00 AM – 5:00 PM'],
  ['Thursday', '9:00 AM – 5:00 PM'],
  ['Friday', '9:00 AM – 12:00 PM'],
  ['Saturday', 'Closed'],
  ['Sunday', 'Closed']
];

const faqs = [
  { q: 'Do you offer emergency lockout service?', a: 'Yes. We prioritize lockout calls and typically arrive within 30 minutes during business hours to get you back inside quickly and without damaging your lock.' },
  { q: 'Is your pricing transparent?', a: 'Absolutely. We quote the full price before starting work. What we quote is what you pay — no hidden fees, no last-minute surprises.' },
  { q: 'Can you rekey my locks after I move in?', a: 'Yes, rekeying is one of the smartest, most affordable security upgrades after moving in. We keep your existing hardware and give you brand new keys.' },
  { q: 'Do you service both homes and businesses?', a: 'Yes. From single-family homes to offices, retail spaces, and multi-tenant buildings, we handle residential and commercial locksmith needs.' },
  { q: 'What brands of locks do you install?', a: 'We work with trusted, high-quality brands and can recommend the right hardware for your budget, aesthetic, and security requirements.' }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  
  // Dynamic reviews state
  const [reviewsList, setReviewsList] = useState(initialReviews);
  const [newReview, setNewReview] = useState({ name: '', role: '', text: '', rating: 5 });
  const [reviewSuccessMessage, setReviewSuccessMessage] = useState(false);

  // Contact Form states
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', service: '', message: '', urgent: false });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBookService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setContactForm(prev => ({ ...prev, service: serviceTitle }));
    navigateTo('contact');
  };

  const handleWriteReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) {
      alert('Please fill out your name and review details.');
      return;
    }
    const newSubmission = {
      name: newReview.name,
      text: newReview.text,
      role: newReview.role || 'Verified Customer',
      rating: parseInt(newReview.rating)
    };
    setReviewsList([newSubmission, ...reviewsList]);
    setNewReview({ name: '', role: '', text: '', rating: 5 });
    setReviewSuccessMessage(true);
    setTimeout(() => setReviewSuccessMessage(false), 5000);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!contactForm.name.trim()) errors.name = 'Name is required';
    if (!contactForm.message.trim()) errors.message = 'Message details are required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactForm.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(contactForm.email)) {
      errors.email = 'Invalid email address';
    }

    if (!contactForm.phone.trim()) {
      errors.phone = 'Phone number is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormSubmitting(true);

    setTimeout(() => {
      setFormSubmitting(false);
      setFormSuccess(true);
      setContactForm({ name: '', email: '', phone: '', service: '', message: '', urgent: false });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full">
        <div className="glass-card mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 sm:px-6">
          <a 
            href="#top" 
            onClick={(e) => { e.preventDefault(); navigateTo('home'); }} 
            className="flex items-center gap-2 no-underline text-foreground"
          >
            <KeyRound className="h-6 w-6 text-[var(--sky)] shrink-0" />
            <span className="font-display text-lg font-semibold tracking-tight">Perfect Locksmiths</span>
          </a>
          
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); navigateTo('about'); }} 
              className={`transition-colors hover:text-foreground no-underline py-1 ${currentPage === 'about' ? 'text-[var(--primary)] border-b-2 border-[var(--primary)] font-semibold' : ''}`}
            >
              About Us
            </a>
            <a 
              href="#services" 
              onClick={(e) => { e.preventDefault(); navigateTo('services'); }} 
              className={`transition-colors hover:text-foreground no-underline py-1 ${currentPage === 'services' ? 'text-[var(--primary)] border-b-2 border-[var(--primary)] font-semibold' : ''}`}
            >
              Services
            </a>
            <a 
              href="#why-us" 
              onClick={(e) => { e.preventDefault(); navigateTo('why-us'); }} 
              className={`transition-colors hover:text-foreground no-underline py-1 ${currentPage === 'why-us' ? 'text-[var(--primary)] border-b-2 border-[var(--primary)] font-semibold' : ''}`}
            >
              Why Us
            </a>
            <a 
              href="#reviews" 
              onClick={(e) => { e.preventDefault(); navigateTo('reviews'); }} 
              className={`transition-colors hover:text-foreground no-underline py-1 ${currentPage === 'reviews' ? 'text-[var(--primary)] border-b-2 border-[var(--primary)] font-semibold' : ''}`}
            >
              Reviews
            </a>
            <a 
              href="#faq" 
              onClick={(e) => { e.preventDefault(); navigateTo('faq'); }} 
              className={`transition-colors hover:text-foreground no-underline py-1 ${currentPage === 'faq' ? 'text-[var(--primary)] border-b-2 border-[var(--primary)] font-semibold' : ''}`}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); navigateTo('contact'); }} 
              className={`transition-colors hover:text-foreground no-underline py-1 ${currentPage === 'contact' ? 'text-[var(--primary)] border-b-2 border-[var(--primary)] font-semibold' : ''}`}
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href={phoneLink} className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[var(--sky)] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[var(--sky)]/20 transition-all hover:bg-[var(--navy)] hover:scale-105 no-underline">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="p-2 rounded-xl border border-border bg-white text-muted-foreground hover:text-foreground md:hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown (Centered, styled to match floating header) */}
        {isMobileMenuOpen && (
          <div className="mx-auto max-w-6xl px-4 mt-2 md:hidden">
            <div className="glass-card rounded-2xl p-4 flex flex-col gap-2 border border-border shadow-elegant bg-white/95">
              <a href="#about" onClick={(e) => { e.preventDefault(); navigateTo('about'); }} className={`p-3 rounded-xl text-sm font-medium no-underline ${currentPage === 'about' ? 'mobile-nav-link-active' : 'text-muted-foreground'}`}>About Us</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); navigateTo('services'); }} className={`p-3 rounded-xl text-sm font-medium no-underline ${currentPage === 'services' ? 'mobile-nav-link-active' : 'text-muted-foreground'}`}>Services</a>
              <a href="#why-us" onClick={(e) => { e.preventDefault(); navigateTo('why-us'); }} className={`p-3 rounded-xl text-sm font-medium no-underline ${currentPage === 'why-us' ? 'mobile-nav-link-active' : 'text-muted-foreground'}`}>Why Us</a>
              <a href="#reviews" onClick={(e) => { e.preventDefault(); navigateTo('reviews'); }} className={`p-3 rounded-xl text-sm font-medium no-underline ${currentPage === 'reviews' ? 'mobile-nav-link-active' : 'text-muted-foreground'}`}>Reviews</a>
              <a href="#faq" onClick={(e) => { e.preventDefault(); navigateTo('faq'); }} className={`p-3 rounded-xl text-sm font-medium no-underline ${currentPage === 'faq' ? 'mobile-nav-link-active' : 'text-muted-foreground'}`}>FAQ</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }} className={`p-3 rounded-xl text-sm font-medium no-underline ${currentPage === 'contact' ? 'mobile-nav-link-active' : 'text-muted-foreground'}`}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* VIEWPORT CONTROLLER */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomeView 
            handleBookService={handleBookService} 
            reviewsList={reviewsList} 
            navigateTo={navigateTo}
            contactForm={contactForm}
            setContactForm={setContactForm}
            formErrors={formErrors}
            formSubmitting={formSubmitting}
            formSuccess={formSuccess}
            setFormSuccess={setFormSuccess}
            handleContactSubmit={handleContactSubmit}
          />
        )}
        {currentPage === 'about' && <AboutView navigateTo={navigateTo} />}
        {currentPage === 'services' && <ServicesView handleBookService={handleBookService} />}
        {currentPage === 'why-us' && <WhyUsView navigateTo={navigateTo} />}
        {currentPage === 'reviews' && (
          <ReviewsView 
            reviewsList={reviewsList} 
            newReview={newReview} 
            setNewReview={setNewReview} 
            handleWriteReview={handleWriteReview}
            reviewSuccessMessage={reviewSuccessMessage}
          />
        )}
        {currentPage === 'faq' && <FAQView />}
        {currentPage === 'contact' && (
          <ContactView 
            contactForm={contactForm} 
            setContactForm={setContactForm} 
            formErrors={formErrors} 
            formSubmitting={formSubmitting} 
            formSuccess={formSuccess} 
            setFormSuccess={setFormSuccess} 
            handleContactSubmit={handleContactSubmit} 
          />
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-muted-foreground">
            {/* Column 1: Brand Info */}
            <div className="space-y-4 text-left">
              <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-left bg-transparent border-0 cursor-pointer p-0">
                <KeyRound className="h-6 w-6 text-[var(--sky)] shrink-0" />
                <span className="font-display font-semibold text-foreground text-lg">Perfect Locksmiths</span>
              </button>
              <p className="text-xs leading-relaxed text-muted-foreground/95">
                Professional and reliable residential, commercial, and emergency locksmith services serving the Greater Montreal Area.
              </p>
              <div className="text-xs space-y-1">
                <div>© {new Date().getFullYear()} Perfect Locksmiths. All rights reserved.</div>
                <div className="text-muted-foreground/60 pt-1">
                  Designed &amp; Developed by <a href="https://tillnex.space" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--sky)] underline transition-colors">Tillnex</a>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="text-left">
              <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                <li><a href="#about" onClick={(e) => { e.preventDefault(); navigateTo('about'); }} className="hover:text-[var(--sky)] transition-colors no-underline">About Us</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); navigateTo('services'); }} className="hover:text-[var(--sky)] transition-colors no-underline">Locksmith Services</a></li>
                <li><a href="#why-us" onClick={(e) => { e.preventDefault(); navigateTo('why-us'); }} className="hover:text-[var(--sky)] transition-colors no-underline">Why Choose Us</a></li>
                <li><a href="#reviews" onClick={(e) => { e.preventDefault(); navigateTo('reviews'); }} className="hover:text-[var(--sky)] transition-colors no-underline">Client Reviews</a></li>
                <li><a href="#faq" onClick={(e) => { e.preventDefault(); navigateTo('faq'); }} className="hover:text-[var(--sky)] transition-colors no-underline">FAQ Help Center</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }} className="hover:text-[var(--sky)] transition-colors no-underline">Contact Page</a></li>
              </ul>
            </div>

            {/* Column 3: Business Hours */}
            <div className="text-left">
              <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-4">Business Hours</h4>
              <dl className="space-y-2 text-xs">
                {businessHours.map(([day, hours]) => (
                  <div key={day} className="flex justify-between border-b border-border/40 pb-1">
                    <dt className="text-muted-foreground">{day}</dt>
                    <dd className={`font-semibold ${hours === 'Closed' ? 'text-muted-foreground' : 'text-foreground'}`}>{hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Column 4: Contact info + Call Button */}
            <div className="space-y-4 text-left">
              <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-4">Get in Touch</h4>
              <div className="space-y-2.5">
                <a href={phoneLink} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--sky)] px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-[var(--sky)]/20 transition-all hover:bg-[var(--navy)] hover:scale-102 w-full no-underline">
                  <Phone className="h-4 w-4" /> {phoneNumber}
                </a>
                <a href={`mailto:${businessEmail}`} className="flex items-center gap-2 text-foreground/80 transition-colors hover:text-[var(--sky)] no-underline text-xs break-all">
                  <Mail className="h-4 w-4 text-[var(--sky)] shrink-0" /> {businessEmail}
                </a>
                <div className="flex items-start gap-2 text-xs text-muted-foreground/85">
                  <MapPin className="h-4 w-4 text-[var(--sky)] shrink-0 mt-0.5" />
                  <span>Serving Montreal, QC &amp; surrounding neighborhoods with mobile dispatcher vans.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* 1. HOME VIEW (THE COMPLETE LANDING PAGE COPY) */
function HomeView({ handleBookService, reviewsList, navigateTo, contactForm, setContactForm, formErrors, formSubmitting, formSuccess, setFormSuccess, handleContactSubmit }) {
  const [faqOpenIndex, setFaqOpenIndex] = useState(0);

  return (
    <div>
      {/* HERO SECTION */}
      <section id="top" className="relative overflow-hidden gradient-hero pb-24 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--sky)] opacity-20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[var(--navy-soft)] opacity-10 blur-3xl" />
        
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-1.5 text-xs font-medium text-[var(--navy)] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted local locksmith • 5.0 ★ on Google
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl font-display animate-fade-up delay-100">
              Security you can <span className="gradient-text">trust</span>,<br className="hidden sm:block" /> service you can rely on.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground animate-fade-up delay-200">
              Perfect Locksmiths delivers fast, honest, and expertly crafted locksmith service for homes and businesses — from emergency lockouts to complete security solutions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up delay-300">
              <a href={phoneLink} className="inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:-translate-y-0.5 no-underline">
                <Phone className="h-4 w-4" /> Call {phoneNumber}
              </a>
              <a 
                href="#services" 
                onClick={(e) => { e.preventDefault(); const el = document.getElementById('services-sec'); el.scrollIntoView({ behavior: 'smooth' }); }} 
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--sky)]/30 bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy)] shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 no-underline"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground animate-fade-up delay-400">
              <div className="flex items-center gap-2">
                <CircleCheck className="h-4 w-4 text-[var(--sky)]" /> Licensed &amp; Insured
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck className="h-4 w-4 text-[var(--sky)]" /> Transparent Pricing
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck className="h-4 w-4 text-[var(--sky)]" /> Fast Response
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 rounded-[2rem] bg-[var(--gradient-primary)] opacity-10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-elegant">
              <img src={heroImage} alt="Professional locksmith installing a premium lock" width="1600" height="1200" className="h-full w-full object-cover" />
            </div>
            <div className="glass-card absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex animate-float">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--sky-soft)]">
                <Star className="h-5 w-5 fill-[var(--gold)] text-[var(--gold)]" />
              </div>
              <div>
                <div className="text-sm font-semibold">5.0 Google Rating</div>
                <div className="text-xs text-muted-foreground">From 7 happy customers</div>
              </div>
            </div>
            <div className="glass-card absolute -right-4 top-8 hidden items-center gap-3 rounded-2xl px-4 py-3 md:flex animate-float [animation-delay:2s]">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--sky-soft)]">
                <TimerReset className="h-5 w-5 text-[var(--navy)]" />
              </div>
              <div>
                <div className="text-sm font-semibold">~30 min response</div>
                <div className="text-xs text-muted-foreground">Fast on-site arrival</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="mx-auto -mt-16 max-w-6xl px-6 relative z-10">
        <div className="glass-card grid grid-cols-2 gap-6 rounded-3xl p-8 sm:grid-cols-4 sm:gap-4 shadow-elegant animate-scale-in delay-100">
          {stats.map((item, idx) => (
            <div key={item.label} className="text-center animate-fade-up" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="font-display text-4xl font-semibold tracking-tight text-[var(--navy)] sm:text-5xl">
                {item.value}
                <span className="text-[var(--sky)]">{item.suffix ?? ''}</span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US (TRUST) */}
      <section id="trust" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-medium uppercase tracking-widest text-[var(--sky)]">Why Choose Us</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Built on trust. Backed by craftsmanship.</h2>
          <p className="mt-4 text-muted-foreground">Every job is done with precision, care, and complete honesty — the way locksmith service should be.</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="group relative rounded-2xl border border-border bg-card p-7 shadow-soft premium-hover animate-fade-up" style={{ animationDelay: `${(idx + 1) * 150}ms` }}>
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[var(--sky-soft)] text-[var(--navy)] card-icon-container">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services-sec" className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent,var(--sky-soft)_50%,transparent)] opacity-40" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-medium uppercase tracking-widest text-[var(--sky)]">Our Services</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Complete locksmith &amp; security solutions</h2>
            <p className="mt-4 text-muted-foreground">From emergency lockouts to full commercial security systems — one trusted team, all the expertise you need.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft premium-hover animate-fade-up" style={{ animationDelay: `${(idx + 1) * 150}ms` }}>
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[var(--sky-soft)] opacity-0 blur-2xl transition-opacity group-hover:opacity-80" />
                  <div className="relative flex flex-col h-full justify-between">
                    <div>
                      <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[var(--sky-soft)] text-[var(--navy)] card-icon-container">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                    <button 
                      onClick={() => handleBookService(item.title)} 
                      className="mt-5 text-xs font-bold text-white bg-[var(--sky)] px-4 py-2 rounded-xl shadow-soft cursor-pointer inline-flex items-center gap-1.5 transition-all hover:bg-[var(--navy)] hover:shadow-md border-0 w-fit"
                    >
                      Book service <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => navigateTo('services')}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--sky)] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[var(--sky)]/20 transition-all hover:bg-[var(--navy)] hover:scale-105 border-0 cursor-pointer"
            >
              Show All Services <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* OUR CRAFT (GALLERY) */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-medium uppercase tracking-widest text-[var(--sky)]">Our Craft</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Precision work, thoughtfully delivered</h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="group relative overflow-hidden rounded-2xl border border-border shadow-soft animate-fade-up" style={{ animationDelay: '150ms' }}>
            <img src={residentialImage} alt="Residential Security" loading="lazy" width="1200" height="900" className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/70 via-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
              <div className="text-[10px] font-medium uppercase tracking-widest opacity-80">Homes</div>
              <div className="text-sm font-semibold">Residential Security</div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-border shadow-soft animate-fade-up" style={{ animationDelay: '300ms' }}>
            <img src={commercialImage} alt="Commercial Access" loading="lazy" width="1200" height="900" className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/70 via-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
              <div className="text-[10px] font-medium uppercase tracking-widest opacity-80">Business</div>
              <div className="text-sm font-semibold">Commercial Access</div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-border shadow-soft animate-fade-up" style={{ animationDelay: '450ms' }}>
            <img src={keycuttingImage} alt="Precision Key Cutting" loading="lazy" width="1200" height="900" className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/70 via-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
              <div className="text-[10px] font-medium uppercase tracking-widest opacity-80">Craftsmanship</div>
              <div className="text-sm font-semibold">Precision Key Cutting</div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-border shadow-soft animate-fade-up" style={{ animationDelay: '600ms' }}>
            <img src={keysImage} alt="Modern Locking Systems" loading="lazy" width="1200" height="900" className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/70 via-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
              <div className="text-[10px] font-medium uppercase tracking-widest opacity-80">Hardware</div>
              <div className="text-sm font-semibold">Modern Locking Systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="relative py-24">
        <div className="absolute inset-0 -z-10 gradient-hero opacity-60" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="glass-card inline-flex items-center gap-3 rounded-full px-5 py-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <span className="text-sm font-semibold">5.0</span>
              <span className="text-sm text-muted-foreground">from 7 Google reviews</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What our customers say</h2>
            <p className="max-w-2xl text-muted-foreground">Real feedback from people we've helped — from midnight lockouts to full office rekeys.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviewsList.slice(0, 3).map((item, idx) => (
              <figure key={item.name} className="glass-card flex h-full flex-col rounded-2xl p-7 premium-hover animate-fade-up" style={{ animationDelay: `${(idx + 1) * 150}ms` }}>
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  "{item.text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--gradient-primary)] font-semibold text-primary-foreground">
                    {item.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold">{item.name}</div>
                    <div className="truncate text-xs text-muted-foreground">{item.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => navigateTo('reviews')}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--sky)] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[var(--sky)]/20 transition-all hover:bg-[var(--navy)] hover:scale-105 border-0 cursor-pointer"
            >
              Show All Reviews <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
        <div className="text-center">
          <div className="text-sm font-medium uppercase tracking-widest text-[var(--sky)]">FAQ</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl font-display">Frequently asked questions</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.slice(0, 3).map((n, r) => {
            const isOpen = faqOpenIndex === r;
            return (
              <div key={n.q} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all">
                <button 
                  onClick={() => setFaqOpenIndex(isOpen ? null : r)} 
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left bg-transparent border-0 cursor-pointer"
                >
                  <span className="font-semibold text-foreground">{n.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{n.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button 
            onClick={() => navigateTo('faq')}
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--sky)] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[var(--sky)]/20 transition-all hover:bg-[var(--navy)] hover:scale-105 border-0 cursor-pointer"
          >
            Show All FAQs <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* CONTACT SECTION (ACTUAL VALIDATED FORM) */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="text-sm font-medium uppercase tracking-widest text-[var(--sky)]">Contact Us</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Need a locksmith? Send us a message</h2>
          <p className="mt-4 text-muted-foreground">Book a locksmith, request a free quote, or send general inquiries. Our dispatcher will respond immediately.</p>
        </div>

        {formSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-elegant text-center relative border border-border">
              <div className="h-14 w-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Request Received!</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Thank you for reaching out to Perfect Locksmiths. A dispatcher will review your request and get back to you shortly.
              </p>
              <p className="text-xs text-[var(--sky)] font-semibold mt-1">If this is an active lockout emergency, please call us directly.</p>
              <button
                onClick={() => setFormSuccess(false)}
                className="mt-6 w-full py-2.5 rounded-xl bg-[var(--gradient-primary)] text-sm font-semibold text-primary-foreground border-0 cursor-pointer hover:opacity-95"
              >
                Back to Form
              </button>
            </div>
          </div>
        )}

        <div className={`bg-card border p-8 rounded-3xl shadow-soft transition-colors text-left max-w-4xl mx-auto ${contactForm.urgent ? 'border-amber-400 bg-amber-50/10' : 'border-border'}`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground font-display">Send Message</h2>
            <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-white shadow-soft cursor-pointer text-xs font-semibold text-amber-800">
              <input
                type="checkbox"
                checked={contactForm.urgent}
                onChange={(e) => setContactForm({ ...contactForm, urgent: e.target.checked })}
                className="accent-amber-600"
              />
              <span className={contactForm.urgent ? "text-amber-700 font-bold" : ""}>Emergency Lockout!</span>
            </label>
          </div>

          {contactForm.urgent && (
            <div className="mb-6 p-4 rounded-xl border border-amber-200 bg-amber-50 text-amber-900 text-xs flex gap-2">
              <Info className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
              <div>
                <span className="font-bold">Urgent Dispatch:</span> Checking this option prioritizes your request in our dispatch queue. Our response time is typically under 30 minutes in Montreal.
              </div>
            </div>
          )}

          <form onSubmit={handleContactSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  placeholder="e.g. Marc Dubois"
                  className="form-input"
                />
                {formErrors.name && <span className="text-xs text-rose-500 font-medium mt-1">{formErrors.name}</span>}
              </div>
              
              <div>
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  placeholder="e.g. marc.dubois@gmail.com"
                  className="form-input"
                />
                {formErrors.email && <span className="text-xs text-rose-500 font-medium mt-1">{formErrors.email}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  placeholder="e.g. +1 (514) 555-0199"
                  className="form-input"
                />
                {formErrors.phone && <span className="text-xs text-rose-500 font-medium mt-1">{formErrors.phone}</span>}
              </div>

              <div>
                <label className="form-label">Service Needed</label>
                <select
                  value={contactForm.service}
                  onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                  className="form-input"
                >
                  <option value="">-- Choose a Service --</option>
                  <option value="Emergency Lockouts">Emergency Lockouts</option>
                  <option value="Building Lockouts">Building Lockouts</option>
                  <option value="Door Lock Installation">Door Lock Installation</option>
                  <option value="Deadbolt Installation">Deadbolt Installation</option>
                  <option value="Lock Repair">Lock Repair</option>
                  <option value="Lock Replacement">Lock Replacement</option>
                  <option value="Lock Rekeying">Lock Rekeying</option>
                  <option value="Master Key Systems">Master Key Systems</option>
                  <option value="Commercial Locksmith">Commercial Locksmith</option>
                  <option value="Residential Locksmith">Residential Locksmith</option>
                  <option value="Office Security Solutions">Office Security Solutions</option>
                  <option value="Other">Other / Not Listed</option>
                </select>
              </div>
            </div>

            <div>
              <label className="form-label">Message Details</label>
              <textarea
                rows="4"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                placeholder="Include your physical address, lock types, or key copying specifications..."
                className="form-input resize-none"
              ></textarea>
              {formErrors.message && <span className="text-xs text-rose-500 font-medium mt-1">{formErrors.message}</span>}
            </div>

            <button
              type="submit"
              disabled={formSubmitting}
              className={`w-full py-3.5 rounded-xl text-sm font-semibold text-primary-foreground shadow-soft border-0 cursor-pointer hover:opacity-95 flex items-center justify-center gap-2 ${contactForm.urgent ? 'bg-amber-600' : 'bg-[var(--gradient-primary)]'}`}
            >
              {formSubmitting ? (
                <span>Sending Request...</span>
              ) : (
                <>
                  <span>Send Secure Message</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

/* 2. ABOUT US VIEW */
function AboutView({ navigateTo }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-32 pb-20 animate-in fade-in duration-300">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-sm font-medium uppercase tracking-widest text-[var(--sky)]">About Us</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl text-foreground font-display">Perfect Locksmiths</h1>
        <p className="mt-4 text-lg text-muted-foreground">Serving Greater Montreal with pride, dedication, and top-tier security standards.</p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h2 className="text-2xl font-bold text-foreground">Our Mission &amp; Roots</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Perfect Locksmiths was built on the simple philosophy that home and business security should be reliable, professional, and accessible. Over the past 15 years, we have grown into one of Montreal's most recommended mobile locksmith services.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Unlike many dispatcher networks, we employ fully certified local technicians who are familiar with Montreal's unique architectures—from classic duplexes in the Plateau to modern commercial towers downtown.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether you require an emergency midnight dispatch, security lock rekeying, or office code installations, our goal is to deliver top workmanship on every single call.
          </p>
        </div>
        <div className="relative rounded-[2rem] overflow-hidden border border-white/60 shadow-elegant">
          <img src={keycuttingImage} alt="Locksmith cutting key" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* CORE CREDENTIALS */}
      <div className="mt-24 text-left">
        <h2 className="text-2xl font-bold text-center text-foreground mb-12">Our Core Standards</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-card border border-border p-6 rounded-2xl shadow-soft">
            <h3 className="font-semibold text-lg text-[var(--navy)]">15+ Years in Business</h3>
            <p className="mt-2 text-sm text-muted-foreground">Certified local experts who understand Montreal's safety requirements.</p>
          </div>
          <div className="bg-card border border-border p-6 rounded-2xl shadow-soft">
            <h3 className="font-semibold text-lg text-[var(--navy)]">Licensed &amp; Insured</h3>
            <p className="mt-2 text-sm text-muted-foreground">Providing client peace of mind with fully insured property modifications.</p>
          </div>
          <div className="bg-card border border-border p-6 rounded-2xl shadow-soft">
            <h3 className="font-semibold text-lg text-[var(--navy)]">Upfront Guarantees</h3>
            <p className="mt-2 text-sm text-muted-foreground">Firm binding quotes given prior to starting any lock repair or install.</p>
          </div>
          <div className="bg-card border border-border p-6 rounded-2xl shadow-soft">
            <h3 className="font-semibold text-lg text-[var(--navy)]">Rapid Dispatch Vans</h3>
            <p className="mt-2 text-sm text-muted-foreground">Stocked dispatch vehicles positioned for quick response across the city.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 3. SERVICES VIEW */
function ServicesView({ handleBookService }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-32 pb-20 animate-in fade-in duration-300">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-sm font-medium uppercase tracking-widest text-[var(--sky)]">Services</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl text-foreground font-display">Our Locksmith Services</h1>
        <p className="mt-4 text-lg text-muted-foreground">Explore our complete catalog of certified residential, commercial, and emergency security solutions built to last.</p>
      </div>

      {/* LIVE GRID */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
        {services.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-[var(--sky)] hover:shadow-elegant flex flex-col justify-between">
              <div>
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[var(--sky-soft)] text-[var(--navy)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
              <div className="mt-6 border-t border-border/40 pt-4">
                <button 
                  onClick={() => handleBookService(item.title)}
                  className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-[var(--sky)] px-4 py-2.5 rounded-xl shadow-soft hover:bg-[var(--navy)] hover:shadow-md border-0 cursor-pointer transition-all"
                >
                  Request Quote <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* 4. WHY US VIEW */
function WhyUsView({ navigateTo }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-32 pb-20 animate-in fade-in duration-300">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-sm font-medium uppercase tracking-widest text-[var(--sky)]">Standards</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl text-foreground font-display">Why Choose Perfect Locksmiths?</h1>
        <p className="mt-4 text-lg text-muted-foreground">Certified lock fitting, high-performance security hardware, and unmatched local reliability.</p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 text-left">
        <div className="bg-card border border-border p-8 rounded-2xl shadow-soft">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--sky-soft)] text-[var(--navy)] mb-6">
            <HandCoins className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Honest Upfront Pricing</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
            We believe in transparency. Before starting any work, our technician will assess the situation and provide a complete quote. The price we quote is the price you pay. We don't believe in surprise emergency double-charging, hidden mileage fees, or pushing products you don't actually need.
          </p>
        </div>

        <div className="bg-card border border-border p-8 rounded-2xl shadow-soft">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--sky-soft)] text-[var(--navy)] mb-6">
            <TimerReset className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-bold text-foreground">~30 Min Arrival Response</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
            When you're locked out or security is compromised, every minute counts. We maintain mobile units across Montreal, enabling us to achieve an average arrival time of 30 minutes. We stay in close communication and send SMS updates so you know exactly when to expect us.
          </p>
        </div>

        <div className="bg-card border border-border p-8 rounded-2xl shadow-soft">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--sky-soft)] text-[var(--navy)] mb-6">
            <BadgeCheck className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Professional Workmanship</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
            Locks are your first line of defense. Our certified technicians have years of hands-on experience and work with absolute precision. We don't rush; we make sure your doors, frames, and locks align perfectly for long-term smooth operation and structural integrity.
          </p>
        </div>

        <div className="bg-card border border-border p-8 rounded-2xl shadow-soft">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--sky-soft)] text-[var(--navy)] mb-6">
            <Shield className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Trusted &amp; Reliable Reputation</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
            With a 5.0 Google Rating from local homeowners and business managers, our reputation speaks for itself. We treat every property with the care we'd show our own homes, ensuring tidy work areas, debris cleanup, and secure lock testing before we declare the job complete.
          </p>
        </div>
      </div>
    </section>
  );
}

/* 5. REVIEWS VIEW */
function ReviewsView({ reviewsList, newReview, setNewReview, handleWriteReview, reviewSuccessMessage }) {
  const averageRating = (reviewsList.reduce((acc, curr) => acc + curr.rating, 0) / reviewsList.length).toFixed(1);

  return (
    <section className="mx-auto max-w-6xl px-6 pt-32 pb-20 animate-in fade-in duration-300">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-sm font-medium uppercase tracking-widest text-[var(--sky)]">Reviews</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl text-foreground font-display">Customer Testimonials</h1>
        <p className="mt-4 text-lg text-muted-foreground">Hear directly from home owners and office managers we have served in Montreal.</p>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 items-start">
        {/* REVIEWS GRID */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 bg-slate-50 border border-border p-6 rounded-2xl shadow-soft text-left">
            <div className="text-center bg-white border border-border p-4 rounded-xl shadow-soft">
              <div className="text-3xl font-extrabold text-foreground">{averageRating}</div>
              <div className="flex items-center gap-0.5 mt-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <div className="text-xs text-muted-foreground mt-1.5 font-medium">{reviewsList.length} Reviews</div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">100% Client Satisfaction</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                We are committed to delivering five-star locksmith services. Every review is from an actual client we've assisted.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 text-left">
            {reviewsList.map((item, idx) => (
              <figure key={idx} className="glass-card flex flex-col justify-between rounded-2xl p-6 border border-border bg-white/30">
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90 italic">
                    "{item.text}"
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--gradient-primary)] font-semibold text-primary-foreground text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold">{item.name}</div>
                    <div className="truncate text-xs text-muted-foreground">{item.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* REVIEW FORM */}
        <div className="bg-card border border-border p-6 rounded-2xl shadow-soft text-left sticky top-28">
          <h3 className="font-bold text-lg text-foreground mb-4">Write a Review</h3>
          
          {reviewSuccessMessage && (
            <div className="mb-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl p-3 flex items-start gap-2">
              <CheckCircle className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
              <span>Thank you! Your review has been added to our public feed.</span>
            </div>
          )}

          <form onSubmit={handleWriteReview} className="space-y-4">
            <div>
              <label className="form-label">Your Name</label>
              <input
                type="text"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                placeholder="e.g. Jean-Pierre"
                className="form-input"
                required
              />
            </div>
            
            <div>
              <label className="form-label">Customer Type</label>
              <input
                type="text"
                value={newReview.role}
                onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                placeholder="e.g. Homeowner, Business Owner"
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">Rating</label>
              <div className="flex items-center gap-1.5 py-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    className="p-1 bg-transparent border-0 cursor-pointer"
                  >
                    <Star 
                      className={`h-6 w-6 ${newReview.rating >= star ? 'fill-[var(--gold)] text-[var(--gold)]' : 'text-slate-300'}`} 
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="form-label">Your Review</label>
              <textarea
                rows="4"
                value={newReview.text}
                onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                placeholder="Describe your experience with our team..."
                className="form-input resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-[var(--gradient-primary)] text-sm font-semibold text-primary-foreground shadow-soft border-0 cursor-pointer hover:opacity-95"
            >
              Post Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* 6. FAQ VIEW */
function FAQView() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="mx-auto max-w-6xl px-6 pt-32 pb-20 animate-in fade-in duration-300">
      <div className="text-center">
        <div className="text-sm font-medium uppercase tracking-widest text-[var(--sky)]">FAQ</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl text-foreground font-display">Frequently Asked Questions</h1>
        <p className="mt-4 text-muted-foreground">Find answers regarding dispatch pricing, service wait times, and security credentials.</p>
      </div>

      <div className="mt-12 relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search FAQs by keywords..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-[var(--primary)]"
        />
      </div>

      {filteredFaqs.length > 0 ? (
        <div className="mt-8 space-y-3 text-left">
          {filteredFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.q} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)} 
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left bg-transparent border-0 cursor-pointer"
                >
                  <span className="font-semibold text-foreground text-base">{item.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mt-8 text-center py-12 bg-slate-50 border border-dashed border-border rounded-xl">
          <Info className="h-8 w-8 text-muted-foreground mx-auto" />
          <h3 className="font-semibold text-base text-foreground mt-4">No matching FAQ found</h3>
          <p className="text-xs text-muted-foreground mt-1">Try typing a different search term like 'rekey' or 'emergency'.</p>
        </div>
      )}
    </section>
  );
}

/* 7. CONTACT VIEW (WITH PROPER VALIDATED CONTACT FORM) */
function ContactView({ contactForm, setContactForm, formErrors, formSubmitting, formSuccess, setFormSuccess, handleContactSubmit }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-32 pb-24 animate-in fade-in duration-300">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <div className="text-sm font-medium uppercase tracking-widest text-[var(--sky)]">Contact Us</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl text-foreground font-display">Get in Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground">Book a locksmith, request a free quote, or send general inquiries.</p>
      </div>

      {formSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-elegant text-center relative border border-border">
            <div className="h-14 w-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Request Received!</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Thank you for reaching out to Perfect Locksmiths. A dispatcher will review your request and get back to you shortly.
            </p>
            <p className="text-xs text-[var(--sky)] font-semibold mt-1">If this is an active lockout emergency, please call us directly.</p>
            <button
              onClick={() => setFormSuccess(false)}
              className="mt-6 w-full py-2.5 rounded-xl bg-[var(--gradient-primary)] text-sm font-semibold text-primary-foreground border-0 cursor-pointer hover:opacity-95"
            >
              Back to Form
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">
        {/* PROPER CONTACT FORM */}
        <div className={`bg-card border p-8 rounded-3xl shadow-soft transition-colors text-left ${contactForm.urgent ? 'border-amber-400 bg-amber-50/10' : 'border-border'}`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Send Message</h2>
            <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-white shadow-soft cursor-pointer text-xs font-semibold text-amber-800">
              <input
                type="checkbox"
                checked={contactForm.urgent}
                onChange={(e) => setContactForm({ ...contactForm, urgent: e.target.checked })}
                className="accent-amber-600"
              />
              <span className={contactForm.urgent ? "text-amber-700 font-bold" : ""}>Emergency Lockout!</span>
            </label>
          </div>

          {contactForm.urgent && (
            <div className="mb-6 p-4 rounded-xl border border-amber-200 bg-amber-50 text-amber-900 text-xs flex gap-2">
              <Info className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
              <div>
                <span className="font-bold">Urgent Dispatch:</span> Checking this option prioritizes your request in our dispatch queue. Our response time is typically under 30 minutes in Montreal.
              </div>
            </div>
          )}

          <form onSubmit={handleContactSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  placeholder="e.g. Marc Dubois"
                  className="form-input"
                />
                {formErrors.name && <span className="text-xs text-rose-500 font-medium mt-1">{formErrors.name}</span>}
              </div>
              
              <div>
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  placeholder="e.g. marc.dubois@gmail.com"
                  className="form-input"
                />
                {formErrors.email && <span className="text-xs text-rose-500 font-medium mt-1">{formErrors.email}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  placeholder="e.g. +1 (514) 555-0199"
                  className="form-input"
                />
                {formErrors.phone && <span className="text-xs text-rose-500 font-medium mt-1">{formErrors.phone}</span>}
              </div>

              <div>
                <label className="form-label">Service Needed</label>
                <select
                  value={contactForm.service}
                  onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                  className="form-input"
                >
                  <option value="">-- Choose a Service --</option>
                  <option value="Emergency Lockouts">Emergency Lockouts</option>
                  <option value="Building Lockouts">Building Lockouts</option>
                  <option value="Door Lock Installation">Door Lock Installation</option>
                  <option value="Deadbolt Installation">Deadbolt Installation</option>
                  <option value="Lock Repair">Lock Repair</option>
                  <option value="Lock Replacement">Lock Replacement</option>
                  <option value="Lock Rekeying">Lock Rekeying</option>
                  <option value="Master Key Systems">Master Key Systems</option>
                  <option value="Commercial Locksmith">Commercial Locksmith</option>
                  <option value="Residential Locksmith">Residential Locksmith</option>
                  <option value="Office Security Solutions">Office Security Solutions</option>
                  <option value="Other">Other / Not Listed</option>
                </select>
              </div>
            </div>

            <div>
              <label className="form-label">Message Details</label>
              <textarea
                rows="5"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                placeholder="Include your physical address, lock types, or key copying specifications..."
                className="form-input resize-none"
              ></textarea>
              {formErrors.message && <span className="text-xs text-rose-500 font-medium mt-1">{formErrors.message}</span>}
            </div>

            <button
              type="submit"
              disabled={formSubmitting}
              className={`w-full py-3 rounded-xl text-sm font-semibold text-primary-foreground shadow-soft border-0 cursor-pointer hover:opacity-95 flex items-center justify-center gap-2 ${contactForm.urgent ? 'bg-amber-600' : 'bg-[var(--gradient-primary)]'}`}
            >
              {formSubmitting ? (
                <span>Sending Request...</span>
              ) : (
                <>
                  <span>Send Secure Message</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* DETAILS SIDEBAR */}
        <div className="space-y-6 text-left">
          <div className="bg-card border border-border p-6 rounded-2xl shadow-soft">
            <h3 className="font-bold text-base text-[var(--navy)]">Direct Channels</h3>
            
            <div className="mt-5 space-y-4">
              <a href={phoneLink} className="flex items-center gap-3.5 p-3 rounded-xl border border-border/60 hover:bg-slate-50 transition-colors text-left text-foreground no-underline">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--sky-soft)] text-[var(--navy)] shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium">Emergency Call</div>
                  <div className="text-sm font-bold mt-0.5">{phoneNumber}</div>
                </div>
              </a>

              <a href={`mailto:${businessEmail}`} className="flex items-center gap-3.5 p-3 rounded-xl border border-border/60 hover:bg-slate-50 transition-colors text-left text-foreground no-underline">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--sky-soft)] text-[var(--navy)] shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground font-medium">Business Email</div>
                  <div className="text-sm font-bold mt-0.5 truncate">{businessEmail}</div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-card border border-border p-6 rounded-2xl shadow-soft">
            <div className="flex items-center gap-2 text-sm font-semibold text-[var(--navy)] border-b border-border/40 pb-3 mb-3">
              <Clock className="h-4 w-4" /> Business Hours
            </div>
            <dl className="space-y-2.5 text-sm">
              {businessHours.map(([day, hours]) => (
                <div key={day} className="flex items-center justify-between">
                  <dt className="text-muted-foreground">{day}</dt>
                  <dd className={`font-semibold ${hours === 'Closed' ? 'text-muted-foreground' : 'text-foreground'}`}>{hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
