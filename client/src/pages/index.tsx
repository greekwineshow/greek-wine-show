import { Button } from "@/components/ui/button";
import { ArrowRight, Wine, Users, MapPin, Calendar, Mail, Phone } from "lucide-react";
import { useState, useRef } from "react";

/**
 * Design Philosophy: Editorial Minimalism with Mediterranean Warmth
 * - Serif headlines (Playfair Display) for editorial authority
 * - Asymmetric layouts with generous whitespace
 * - Warm cream background with deep charcoal text
 * - Gold dividers and Mediterranean color accents
 * - Subtle animations on scroll and hover
 */

const RECAPTCHA_SITE_KEY = "6LetWkksAAAAAOx_WzD3ndSfwMeVhuLb1P954CH0";

interface RecaptchaState {
  show: boolean;
  formType: "private" | "partnership" | null;
}

export default function Home() {
  const [availabilitySuccess, setAvailabilitySuccess] = useState(false);
  const [activeForm, setActiveForm] = useState<"tour" | "enquiry" | "partnership" | null>(null);
  const [recaptcha, setRecaptcha] = useState<RecaptchaState>({ show: false, formType: null });
  const formTypeRef = useRef<"private" | "partnership" | null>(null);
  const recaptchaRenderedRef = useRef(false);


  
const handleRecaptchaVerify = (token: string) => {
  console.log("TOKEN:", token);
  console.log("FORM TYPE:", formTypeRef.current);

  if (!token) return;

  const formType = formTypeRef.current;

  (window as any).grecaptcha?.reset();
  setRecaptcha({ show: false, formType: null });

  if (formType === "private") {
    setActiveForm("enquiry");
  }

  if (formType === "partnership") {
    setActiveForm("partnership");
  }

  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }

  formTypeRef.current = null;
};




 const openRecaptchaModal = (formType: "private" | "partnership") => {
  formTypeRef.current = formType;   // <-- store the form type safely

  setRecaptcha({ show: true, formType });

  setTimeout(() => {
    (window as any).grecaptcha?.render("recaptcha-container", {
      sitekey: RECAPTCHA_SITE_KEY,
      theme: "light",
      callback: handleRecaptchaVerify,   // <-- THIS is the key fix
    });
  }, 100);
};


  return (
    <div className="min-h-screen bg-background text-foreground">
      {recaptcha.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl">
            <h3 className="text-xl font-semibold mb-4">Verify You are Human</h3>
            <p className="text-foreground/70 mb-6">Please complete the reCAPTCHA below to proceed.</p>
            <div id="recaptcha-container" className="mb-6 flex justify-center"></div>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  (window as any).grecaptcha?.reset();
                  setRecaptcha({ show: false, formType: null });
                }}
                className="flex-1 px-4 py-2 border border-border rounded-lg hover:bg-foreground/5 transition-colors"
              >
                Cancel
              </button>
              
            </div>
          </div>
        </div>
      )}
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Greek Wine Show
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#experiences" className="hover:text-primary transition-colors">Experiences</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <a href="#partners" className="hover:text-primary transition-colors">Partners</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary text-sm font-semibold uppercase tracking-widest">
                Curated Luxury Wine Experiences
              </p>
              <h1 className="leading-tight">
                Discover Greece Through Wine
              </h1>
              <p className="text-lg text-foreground/70 max-w-xl leading-relaxed">
                The Greek Wine Show curates exclusive wine experiences that connect you with winemakers, terroir, and the stories behind Greece's finest wines. Small groups, insider access, editorial authority.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => window.open('https://calendly.com/greekwineshow/30min', '_blank')}
              >
                Reserve Your Experience
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/5"
                onClick={() => openRecaptchaModal('private')}
              >
                Request Availability
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-primary/20 grid grid-cols-3 gap-6">
              <div>
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-sm text-foreground/60">Winery Partners</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">1000+</p>
                <p className="text-sm text-foreground/60">Guests Hosted</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">15+</p>
                <p className="text-sm text-foreground/60">Regions Covered</p>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative h-96 lg:h-full min-h-96">
            <img
              src="/images/hero-wine-vineyard.jpg"
              alt="Greek vineyard at golden hour"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-lg" />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 flex justify-center">
          <div className="w-12 h-px bg-primary/40" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative h-96 order-2 lg:order-1">
            <img
              src="/images/winemaker-interview.png"
              alt="Winemaker sharing vineyard stories"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="leading-tight">About The Greek Wine Show</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              The Greek Wine Show is a media platform dedicated to Greek wine culture, its people, and terroir. Through interviews, episodes, and storytelling, we celebrate the heritage and innovation of Greek winemakers.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              As curator and trusted authority, we design wine experiences with insider access—connecting serious wine lovers and affluent travelers with the stories, flavors, and landscapes that define Greek wine excellence.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex gap-4">
                <Wine className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Editorial Authority</p>
                  <p className="text-sm text-foreground/60">Trusted voice in Greek wine culture</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Exclusive Access</p>
                  <p className="text-sm text-foreground/60">Direct connections with winemakers</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Curated Experiences</p>
                  <p className="text-sm text-foreground/60">Quality over quantity, small groups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-12">
        <div className="w-12 h-px bg-primary/40" />
      </div>

      {/* Luxury Wine Experiences Section */}
      <section id="experiences" className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-0 mb-16">
            <h2 className="leading-tight mb-6">Luxury Wine Experiences</h2>
            <p className="text-lg text-foreground/70">
              Each experience is meticulously curated to showcase Greek wine excellence. We prioritize storytelling, quality, and authentic connections with winemakers—never mass tourism.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Half Day Premium Group */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <Calendar className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-2xl mb-2">Half Day Athens Premium Wine Escape</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm text-foreground/60 uppercase tracking-wide">Experience Includes</p>
                  <p className="text-lg font-semibold mt-1">1 Winery + 1 High-End Wine Bar OR 2 Wineries</p>
                </div>
                <div className="border-l-2 border-primary pl-4 space-y-2">
                  <p className="text-sm"><span className="font-semibold">Duration:</span> 4–5 hours</p>
                  <p className="text-sm"><span className="font-semibold">Group Size:</span> 4–6 guests</p>
                  <p className="text-sm"><span className="font-semibold">Price:</span> Starting from €180 per person</p>
                </div>
              </div>

              <p className="text-foreground/70 mb-6">
                Perfect for travelers seeking authentic wine culture with curated storytelling and insider access to premium venues.
              </p>

              <Button
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => window.open('https://calendly.com/greekwineshow/30min', '_blank')}
              >
                Reserve a Spot
              </Button>
            </div>

            {/* Half Day Private Experience */}
            <div className="bg-accent/10 rounded-lg p-8 border-2 border-accent hover:bg-accent/15 transition-colors">
              <div className="mb-6">
                <Users className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-2xl mb-2">Half Day Private Wine Experience</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm text-foreground/60 uppercase tracking-wide">Private & Tailored</p>
                  <p className="text-lg font-semibold mt-1">For Couples, Friends, or Families</p>
                </div>
                <div className="border-l-2 border-accent pl-4 space-y-2">
                  <p className="text-sm"><span className="font-semibold">Base Rate:</span> €750 (up to 4 guests)</p>
                  <p className="text-sm"><span className="font-semibold">Additional Guests:</span> +€80 per person</p>
                  <p className="text-sm"><span className="font-semibold">Customization:</span> Tailored itinerary & pacing</p>
                </div>
              </div>

              <p className="text-foreground/70 mb-6">
                Exclusive private access with personalized storytelling, flexible timing, and bespoke wine selections curated to your preferences.
              </p>

              <Button
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => openRecaptchaModal('private')}
              >
                Request Your Dates
              </Button>
            </div>

            {/* Full Day Premium Group */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <Calendar className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-2xl mb-2">Full Day Athens Premium Vineyard Escape</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm text-foreground/60 uppercase tracking-wide">Experience Includes</p>
                  <p className="text-lg font-semibold mt-1">2 Wineries + Long Seated Lunch</p>
                </div>
                <div className="border-l-2 border-primary pl-4 space-y-2">
                  <p className="text-sm"><span className="font-semibold">Duration:</span> 7–8 hours</p>
                  <p className="text-sm"><span className="font-semibold">Group Size:</span> 4–6 guests</p>
                  <p className="text-sm"><span className="font-semibold">Owner/Winemaker:</span> Direct involvement</p>
                  <p className="text-sm"><span className="font-semibold">Price:</span> €290 per person</p>
                </div>
              </div>

              <p className="text-foreground/70 mb-6">
                An immersive full-day journey featuring owner and winemaker involvement, multiple vineyard visits, and a long seated lunch showcasing regional cuisine paired with premium wines.
              </p>

              <Button
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => window.open('https://calendly.com/greekwineshow/30min', '_blank')}
              >
                Reserve a Spot
              </Button>
            </div>

            {/* Full Day Private Experience */}
            <div className="bg-accent/10 rounded-lg p-8 border-2 border-accent hover:bg-accent/15 transition-colors">
              <div className="mb-6">
                <Users className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-2xl mb-2">Full Day Private Vineyard Experience</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm text-foreground/60 uppercase tracking-wide">Private & Tailored</p>
                  <p className="text-lg font-semibold mt-1">For Couples, Friends, or Families</p>
                </div>
                <div className="border-l-2 border-accent pl-4 space-y-2">
                  <p className="text-sm"><span className="font-semibold">Base Rate:</span> €1,300 (up to 4 guests)</p>
                  <p className="text-sm"><span className="font-semibold">Additional Guests:</span> +€120 per person</p>
                  <p className="text-sm"><span className="font-semibold">Max Group:</span> 6 guests</p>
                  <p className="text-sm"><span className="font-semibold">Customization:</span> Tailored itinerary & pacing</p>
                </div>
              </div>

              <p className="text-foreground/70 mb-6">
                Exclusive full-day private access with personalized storytelling, multiple wineries, seated lunch, and bespoke wine selections curated entirely to your preferences.
              </p>

              <Button
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => openRecaptchaModal('private')}
              >
                Request Your Dates
              </Button>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-foreground/70">Private Access to Winemakers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4–6</div>
              <p className="text-foreground/70">Maximum Group Size</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">∞</div>
              <p className="text-foreground/70">Stories & Terroir Connections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-12">
        <div className="w-12 h-px bg-primary/40" />
      </div>

      {/* Wine Tasting Image Section */}
      <section className="py-0">
        <div className="container">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/images/wine-tasting-experience.jpg"
              alt="Premium wine tasting setup"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent flex items-center">
              <div className="max-w-xl pl-8">
                <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
                  Curated Experiences
                </p>
                <h2 className="text-white leading-tight">
                  Quality Over Quantity
                </h2>
                <p className="text-white/80 mt-4 text-lg">
                  Every experience is designed to create meaningful connections with Greek wine culture and the people who shape it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/50">
        <div className="container">
          <h2 className="text-center mb-16 leading-tight">What Our Guests Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "An unforgettable journey into Greek wine culture. The access to winemakers was exceptional.",
                author: "Sarah M.",
                role: "Wine Collector, London"
              },
              {
                quote: "The storytelling and curation elevated this beyond a typical wine tour. Truly editorial excellence.",
                author: "James P.",
                role: "Sommelier, New York"
              },
              {
                quote: "Small groups, authentic experiences, and genuine passion for Greek wine. Highly recommend.",
                author: "Elena K.",
                role: "Travel Enthusiast, Paris"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <p className="text-foreground/70 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-12">
        <div className="w-12 h-px bg-primary/40" />
      </div>

      {/* Contact & Booking Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <h2 className="text-center mb-16 leading-tight">Ready to Experience Greek Wine?</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Tour Reservation */}
            <div
              className={`rounded-lg p-8 cursor-pointer transition-all ${
                activeForm === "tour"
                  ? "bg-accent/10 border-2 border-accent"
                  : "bg-white border border-border hover:border-primary/50"
              }`}
              onClick={() => setActiveForm("tour")}
            >
              <Calendar className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tour Reservation</h3>
              <p className="text-foreground/70 text-sm">
                Reserve your wine experience or request availability for specific dates.
              </p>
            </div>

            {/* General Enquiries */}
            <div
              className={`rounded-lg p-8 cursor-pointer transition-all ${
                activeForm === "enquiry"
                  ? "bg-accent/10 border-2 border-accent"
                  : "bg-white border border-border hover:border-primary/50"
              }`}
              onClick={() => setActiveForm("enquiry")}
            >
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">General Enquiries</h3>
              <p className="text-foreground/70 text-sm">
                Questions about our experiences, media features, or editorial content.
              </p>
            </div>

            {/* Partnerships */}
            <div
              className={`rounded-lg p-8 cursor-pointer transition-all ${
                activeForm === "partnership"
                  ? "bg-accent/10 border-2 border-accent"
                  : "bg-white border border-border hover:border-primary/50"
              }`}
              onClick={() => setActiveForm("partnership")}
            >
              <Wine className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Partnerships</h3>
              <p className="text-foreground/70 text-sm">
                For wineries, media collaborations, and professional partnerships.
              </p>
            </div>
          </div>

          {/* Form Section */}

{availabilitySuccess && !activeForm && (
  <div className="mt-12 rounded-xl border border-border bg-background p-8 text-center">
    <h3 className="text-xl font-semibold">
      Thank you for your request
    </h3>
    <p className="mt-3 text-muted-foreground">
      We’ve received your tour availability enquiry and will be in touch shortly
      with next steps.
    </p>
  </div>
)}


          {activeForm && (
            <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">
                {activeForm === "tour" && "Reserve Your Wine Experience"}
                {activeForm === "enquiry" && "Send us Your Enquiry"}
                {activeForm === "partnership" && "Partnership Inquiry"}
              </h3>

              <form
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();

                  const formData = new FormData(e.currentTarget);

                  const response = await fetch("https://submit-form.com/BfVM6o2oO", {
                    method: "POST",
                    body: formData,
                    headers: { Accept: "application/json" },
                  });

                  if (response.ok) {
                    setAvailabilitySuccess(true);
                    setActiveForm(null);
                  } else {
                    alert("Something went wrong. Please try again.");
                  }
                }}
              >


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />

                {activeForm === "tour" && (
                  <>
                    <input
                      type="date"
                      placeholder="Preferred Date"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select Group Size</option>
                      <option value="1-2">1-2 guests</option>
                      <option value="3-4">3-4 guests</option>
                      <option value="5-6">5-6 guests</option>
                      <option value="custom">Custom (contact us)</option>
                    </select>
                  </>
                )}

                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                  Submit
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border space-y-3 text-sm text-foreground/70">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+30 (XXX) XXX-XXXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>hello@greekwineshow.com</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-white/50">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="leading-tight mb-6">For Wineries & Partners</h2>
            <p className="text-lg text-foreground/70 mb-8">
              The Greek Wine Show collaborates with premium wineries, media outlets, and travel professionals. If you're interested in featuring your winery, partnering on editorial content, or joining our curated network—we'd love to hear from you.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => openRecaptchaModal('partnership')}
            >
              Explore Partnership Opportunities
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-primary/20 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-semibold text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Greek Wine Show
              </p>
              <p className="text-sm text-foreground/60">
                Curating luxury wine experiences and editorial authority in Greek wine culture.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-4">Experiences</p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#experiences" className="hover:text-primary transition-colors">Half Day Tours</a></li>
                <li><a href="#experiences" className="hover:text-primary transition-colors">Private Experiences</a></li>
                <li><a href="#experiences" className="hover:text-primary transition-colors">Group Bookings</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">Company</p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#partners" className="hover:text-primary transition-colors">Partnerships</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">Connect</p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
            <p>&copy; 2024 The Greek Wine Show. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
