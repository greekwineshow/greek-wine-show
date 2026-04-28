import { Button } from "@/components/ui/button";
import { ArrowRight, Wine, Users, MapPin, Calendar, Mail, Phone, Key, Compass } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [availabilitySuccess, setAvailabilitySuccess] = useState(false);
  const [activeForm, setActiveForm] = useState<"tour" | "enquiry" | "partnership" | null>(null);

  const [activeExperience, setActiveExperience] = useState<number | null>(null);


const experiences = [
  {
    id: 1,
    title: "The Vineyard Introduction",
    image: "/images/greek-wine-tours-athens-day-trips-the-vineyard-introduction.webp",
    details: (
      <div>
        <h3 className="text-3xl font-semibold mb-4">The Vineyard Introduction</h3>
        <p className="text-gray-600 mb-6">Half‑Day • 4–6 hours</p>

        <div className="space-y-4 mb-8">
          <div>
            
            <p className="text-lg font-semibold mt-1">2 Winery Visits with Wine Tastings and Pairings</p>
          </div>

          <div className="border-l-2 border-primary pl-4 space-y-2">
            <p className="text-sm"><span className="font-semibold">Duration:</span> 4–6 hours</p>
            <p className="text-sm"><span className="font-semibold">Group Size:</span> 4–6 guests</p>
            <p className="text-sm"><span className="font-semibold">Price:</span> Starting from €180 per person</p>
          </div>
        </div>

        <ul className="space-y-2 text-gray-700">
          <li>• Premium vehicle and professional driver included</li>
          <li>• Visits to two wineries outside Athens</li>
          <li>• 10–12 wines with curated food pairings</li>
          <li>• Small‑group guarantee of just 4–6 guests</li>
          <li>• Founder‑hosted experience with insider storytelling</li>
          <li>• Direct access to winemakers and private cellar areas</li>
          <li>• No shared groups, no strangers</li>
          <li>• No crowds, no rush, no generic tourist stops</li>
          <li>• All logistics handled end‑to‑end for a seamless half‑day escape</li>
        </ul>
      </div>
    ),
  },

  {
    id: 2,
    title: "The Private Vineyard Escape",
    image: "/images/greek-wine-tours-athens-day-trips-private-vineyard-escape.webp",
    details: (
      <div>
        <h3 className="text-3xl font-semibold mb-4">The Private Vineyard Escape</h3>
        <p className="text-gray-600 mb-6">Half‑Day • 4–6 hours • Private</p>

        <div className="space-y-4 mb-8">
          <div>
        
            <p className="text-lg font-semibold mt-1">For Couples, Friends or Families</p>
          </div>

          <div className="border-l-2 border-accent pl-4 space-y-2">
            <p className="text-sm"><span className="font-semibold">Base Rate:</span> €650 (up to 4 guests)</p>
            <p className="text-sm"><span className="font-semibold">Additional Guests:</span> +€120 per person</p>
            <p className="text-sm"><span className="font-semibold">Customization:</span> Tailored itinerary & pacing</p>
          </div>
        </div>

        <ul className="space-y-2 text-gray-700">
          <li>• Fully private experience with no shared groups or strangers</li>
          <li>• Personalized itinerary tailored to your group’s pace and interests</li>
          <li>• Visits to multiple wineries with exclusive access</li>
          <li>• Founder‑hosted experience with deep storytelling and insider knowledge</li>
          <li>• Direct interaction with winemakers and private cellar insights</li>
          <li>• 10–14 wines selected specifically for your group</li>
          <li>• All logistics handled end‑to‑end for a seamless full‑day escape</li>
          <li>• Designed for travelers who value privacy, comfort and high‑level hospitality</li>
        </ul>
      </div>
    ),
  },

  {
    id: 3,
    title: "The Grand Terroir Journey",
    image: "/images/greek-wine-tours-athens-day-trips-great-terroir-journey.webp",
    details: (
      <div>
        <h3 className="text-3xl font-semibold mb-4">The Grand Terroir Journey</h3>
        <p className="text-gray-600 mb-6">Full‑Day • 8–10 hours</p>

        <div className="space-y-4 mb-8">
          <div>
            
            <p className="text-lg font-semibold mt-1">2 Wineries + Seated Lunch</p>
          </div>

          <div className="border-l-2 border-primary pl-4 space-y-2">
            <p className="text-sm"><span className="font-semibold">Duration:</span> 7–8 hours</p>
            <p className="text-sm"><span className="font-semibold">Group Size:</span> 4–6 guests</p>
            <p className="text-sm"><span className="font-semibold">Owner/Winemaker:</span> Direct involvement</p>
            <p className="text-sm"><span className="font-semibold">Price:</span> €250 per person</p>
          </div>
        </div>

        <ul className="space-y-2 text-gray-700">
          <li>• Full‑day premium transport with a professional driver</li>
          <li>• Visits to two wineries across distinct terroirs</li>
          <li>• Premium seated lunch with curated wine pairings</li>
          <li>• 10–14 wines showcasing regional diversity and craftsmanship</li>
          <li>• Small‑group guarantee of just 4–6 guests</li>
          <li>• Founder‑hosted storytelling and guidance throughout the day</li>
          <li>• Direct access to winemakers and private cellar areas</li>
          <li>• Unhurried pacing with time to explore vineyards and estates</li>
          <li>• All logistics handled end‑to‑end for a seamless full‑day journey</li>
        </ul>
      </div>
    ),
  },

  {
    id: 4,
    title: "The Private Estate Immersion",
    image: "/images/greek-wine-tours-athens-day-trips-private-estate-immersion.webp",
    details: (
      <div>
        <h3 className="text-3xl font-semibold mb-4">The Private Estate Immersion</h3>
        <p className="text-gray-600 mb-6">Full‑Day • 8–10 hours • Private</p>

        <div className="space-y-4 mb-8">
          <div>
            
            <p className="text-lg font-semibold mt-1">For Couples, Friends or Families</p>
          </div>

          <div className="border-l-2 border-accent pl-4 space-y-2">
            <p className="text-sm"><span className="font-semibold">Base Rate:</span> €1,300 (up to 4 guests)</p>
            <p className="text-sm"><span className="font-semibold">Additional Guests:</span> +€120 per person</p>
            <p className="text-sm"><span className="font-semibold">Max Group:</span> 6 guests</p>
            <p className="text-sm"><span className="font-semibold">Customization:</span> Tailored itinerary & pacing</p>
          </div>
        </div>

        <ul className="space-y-2 text-gray-700">
          <li>• Fully private experience with no shared groups or strangers</li>
          <li>• Premium vehicle and dedicated driver exclusively for your group</li>
          <li>• Exclusive access to a single boutique estate for a deeper, more intimate visit</li>
          <li>• Founder‑hosted guidance with tailored storytelling and personal attention</li>
          <li>• Extended cellar and vineyard exploration not offered on group tours</li>
          <li>• 10–12 premium wines with curated pairings designed specifically for this estate</li>
          <li>• Unhurried pacing with full flexibility to enjoy the estate at your own rhythm</li>
          <li>• Direct interaction with winemakers and behind‑the‑scenes insights</li>
          <li>• All logistics handled end‑to‑end for a seamless, elevated private immersion</li>
          <li>• Designed for travelers who value privacy, exclusivity and high‑level hospitality</li>
        </ul>
      </div>
    ),
  },
];


  // Detect redirect from Web3Forms and show success message
  useEffect(() => {
    if (window.location.hash === "#success") {
      setAvailabilitySuccess(true);
      setActiveForm(null);
    }
  }, []);

useEffect(() => {
  if (availabilitySuccess) {
    const el = document.getElementById("success-message");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [availabilitySuccess]);


  // ⭐ reCAPTCHA state + listener (correct placement)
  const [isVerified, setIsVerified] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  useEffect(() => {
    function handleSuccess(e: any) {
      setIsVerified(true);
      setRecaptchaToken(e.detail);
    }

    window.addEventListener("recaptcha-success", handleSuccess);
    return () => window.removeEventListener("recaptcha-success", handleSuccess);
  }, []);

useEffect(() => { if (activeForm) { setTimeout(() => { if ( (window as any).grecaptcha && document.getElementById("recaptcha-container") ) { (window as any).grecaptcha.render("recaptcha-container"); } }, 200); } }, [activeForm]); 



return (
  <>
    
<div className="hero-container">
 <video
  className="hero-video desktop"
  src="/videos/hero-desktop.mp4"
  autoPlay
  muted
  loop
  playsInline
  onLoadedData={(e) => e.currentTarget.classList.add("ready")}
/>

 <video
  className="hero-video mobile"
  src="/videos/hero-mobile.mp4"
  autoPlay
  muted
  loop
  playsInline
  onLoadedData={(e) => e.currentTarget.classList.add("ready")}
/>


  <div className="hero-overlay"></div>
  <div className="hero-bottom-fade"></div>

<div className="hero-text">
  <h1>The Greek Wine Show</h1>
  <p>Discover Greece through its wines</p>
</div>

</div>



     {/* Luxury Wine Experiences Section */}
<section id="experiences" className="py-14">
  <div className="container">

    {/* NEW: Image + Text side‑by‑side */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

      {/* Left: Image */}
      <div className="relative h-80 lg:h-96">
        <img
          src="/images/Athens-wine-tours-day-trips-day-tours-half-day-wine-tasting-and-pairing.webp"   // ← replace with your actual filename
          alt="Luxury wine experience in Greece"
          className="w-full h-full object-cover rounded-lg shadow-xl"
        />
      </div>

      {/* Right: Text */}
      <div className="space-y-6">
        <h2 className="leading-tight">Luxury Wine Experiences</h2>
        <p className="text-lg text-foreground/70 leading-relaxed">
          Each experience is meticulously curated to showcase Greek wine excellence. 
          We prioritize storytelling, quality and authentic connections with winemakers—never mass tourism. 
          Our private vineyard experiences in Greece bring you closer to the country’s most expressive terroirs.
        </p>
        <p className="text-lg text-foreground/70 leading-relaxed">
          For travelers seeking food and wine tours in Greece, we design immersive routes that highlight 
          local gastronomy, artisanal producers and the cultural heritage behind every bottle.
        </p>
      </div>

    </div>

{/* Experience Cards */}
<section className="mt-24">
  <h2 className="text-4xl font-bold mb-12 text-center">Our Wine Experiences</h2>

  {/* Row 1 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
    {experiences.slice(0, 2).map((exp) => (
      <div
        key={exp.id}
        className="relative h-72 rounded-xl overflow-hidden cursor-pointer group"
      onClick={() => {
  setActiveExperience(exp.id);

  setTimeout(() => {
    const anchor =
      exp.id <= 2
        ? document.getElementById("exp-top-anchor")
        : document.getElementById("exp-bottom-anchor");

    if (anchor) {
      const rect = anchor.getBoundingClientRect();
      const offset = window.pageYOffset + rect.top;

      // ⭐ Scroll to anchor minus a custom offset
      window.scrollTo({
        top: offset - 60,   // ← adjust this number to fine‑tune
        behavior: "smooth",
      });
    }
  }, 50);
}}



      >
        <img
          src={exp.image}
          alt={exp.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
        <h3 className="absolute bottom-4 left-4 text-white text-2xl font-semibold drop-shadow-lg">
          {exp.title}
        </h3>
      </div>
    ))}
  </div>
<div id="exp-top-anchor"></div>
  {/* Expanded content for row 1 */}
  {activeExperience && activeExperience <= 2 && (
    <div className="mb-12 p-10 bg-white rounded-xl shadow-xl border border-gray-200">
      {experiences.find((e) => e.id === activeExperience)?.details}

      <Button
        className="mt-8 w-full bg-accent hover:bg-accent/90 text-accent-foreground"
        onClick={() => {
          setActiveForm("tour");
          const contactSection = document.getElementById("contact");
          if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Reserve Now
      </Button>
    </div>
  )}

  {/* Row 2 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {experiences.slice(2, 4).map((exp) => (
      <div
        key={exp.id}
        className="relative h-72 rounded-xl overflow-hidden cursor-pointer group"
        onClick={() => {
  setActiveExperience(exp.id);

  setTimeout(() => {
    const anchor =
      exp.id <= 2
        ? document.getElementById("exp-top-anchor")
        : document.getElementById("exp-bottom-anchor");

    anchor?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);
}}

      >
        <img
          src={exp.image}
          alt={exp.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
        <h3 className="absolute bottom-4 left-4 text-white text-2xl font-semibold drop-shadow-lg">
          {exp.title}
        </h3>
      </div>
    ))}
  </div>
<div id="exp-bottom-anchor"></div>
  {/* Expanded content for row 2 */}
  {activeExperience && activeExperience >= 3 && (
    <div className="mt-12 p-10 bg-white rounded-xl shadow-xl border border-gray-200">
      {experiences.find((e) => e.id === activeExperience)?.details}

      <Button
        className="mt-8 w-full bg-accent hover:bg-accent/90 text-accent-foreground"
        onClick={() => {
          setActiveForm("tour");
          const contactSection = document.getElementById("contact");
          if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Reserve Now
      </Button>
    </div>
  )}
</section>


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

    

    <div className="min-h-screen bg-background text-foreground mt-24">

      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container flex items-center justify-between h-16">
         <div className="flex items-center">
<div className="pl-0 ml-[-20px]">
  <div className="pl-0 ml-[-8px]">
  <a href="#about">
    <img
      src="/images/greek-wine-show-logo-nav.png"
      alt="Greek Wine Show"
      className="h-60 w-auto block select-none mt-4"
    />
  </a>
</div>


</div>


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
      <section className="relative h-auto lg:h-screen flex items-center pb-10 lg:pb-0">


        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-primary text-sm font-semibold uppercase tracking-widest">
                Curated Luxury Wine Experiences
              </p>
              <h1 className="text-3xl font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
  Private Luxury Wine Experiences in Greece
</h1>

              <p className="text-lg text-foreground/70 max-w-xl leading-relaxed">
                Greece is a land shaped by wine — ancient vineyards, volcanic soils and a culture that has celebrated the craft for thousands of years. At The Greek Wine Show, we curate premium, story‑driven wine experiences for travelers seeking authenticity, depth and a true connection to Greek wine culture.<br /><br />
Whether you’re looking for a Private Wine Experience in Greece, a Luxury Wine Experience across iconic regions or a Greece wine tasting tour tailored to your tastes, our approach blends cinematic storytelling with world‑class hospitality.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
             
<Button
  size="lg"
  className="bg-accent hover:bg-accent/90 text-accent-foreground"
  onClick={() => {
    setActiveForm("tour");
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Reserve Now
  <ArrowRight className="ml-2 w-4 h-4" />
</Button>

<Button
  size="lg"
  variant="outline"
  className="border-primary/30 hover:bg-primary/5"
  onClick={() => {
    setActiveForm("enquiry");

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Enquire Now
</Button>

            </div>

          </div>

          {/* Right: Hero Image */}
          <div className="relative h-96 lg:h-full min-h-96">
            <img
              src="/images/hero-wine-vineyard.webp"
              alt="Greek vineyard at golden hour"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-lg" />
          </div>
        </div>

       
      </section>

      {/* About Section */}
      <section id="about" className="pt-16 pb-16 bg-white/50">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative h-96 order-2 lg:order-1">
            <img
              src="/images/winemaker-interview.png"
              alt="Winemaker sharing vineyard stories"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-5 order-1 lg:order-2">
            <h2 className="leading-tight">About The Greek Wine Show</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              The Greek Wine Show is a storytelling‑driven platform dedicated to Greece’s wine regions, traditions and winemakers. Through interviews, editorial features and on‑location episodes, we document the families, histories and terroirs shaping modern Greek wine.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our deep relationships with multigenerational, family‑run wineries allow us to create experiences that go far beyond standard tastings. Guests meet the people behind the labels, hear their stories and experience the warmth of genuine Greek hospitality—something no mass‑market tour can replicate.
            </p>
            <div className="space-y-3 pt-3">
              <div className="flex gap-4">
                <Wine className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Genuine Hospitality</p>
                  <p className="text-sm text-foreground/60">Warm Greek hospitality and genuine winemaker interaction</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Exclusive Access</p>
                  <p className="text-sm text-foreground/60">Access to multigenerational, family‑run wineries</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Curated Experiences</p>
                  <p className="text-sm text-foreground/60">Small groups and private experiences for deeper connection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


<section className="pt-16 pb-16 bg-white relative overflow-hidden">
  {/* Subtle texture background */}
  <div className="absolute inset-0 bg-[url('/textures/noise-light.png')] opacity-20 pointer-events-none"></div>

  <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* Text Column with Soft Gradient */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-lg -z-10"></div>

        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Why Choose Us
            </h2>
            <div className="w-16 h-1 bg-primary mt-3 mb-6 rounded-full"></div>
          </div>

          <ul className="space-y-5 text-lg leading-relaxed">
            <li className="flex items-start">
              <span className="text-primary mt-1 mr-3">▹</span>
              <span>Access to multigenerational, family‑run wineries you won’t find in guidebooks.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mt-1 mr-3">▹</span>
              <span>Small‑group or private experiences for deeper connection and conversation.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mt-1 mr-3">▹</span>
              <span>Warm, genuine Greek hospitality from the people who make the wines.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mt-1 mr-3">▹</span>
              <span>Authentic, non‑touristic itineraries curated around stories, tradition, and terroir.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Image Column with Vignette */}
      <div className="relative">
        <img 
          src="/images/wine-tours-athens-greece-curated-tours-wineries.webp" 
          alt="Family-run Greek winery" 
          className="rounded-lg shadow-xl w-full object-cover"
        />

        {/* Subtle vignette overlay */}
        <div className="absolute inset-0 rounded-lg pointer-events-none bg-gradient-to-b from-black/10 via-transparent to-black/10"></div>

      
      </div>

    </div>
  </div>
</section>


    {/* Testimonials Section */}
<section className="py-14 bg-white/50">
  <div className="container">
    <h2 
      className="text-center mb-12 leading-tight"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      What Our Guests Say
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          quote: "Meeting the winemaker’s family and tasting wines in their courtyard was unforgettable. This felt like being welcomed into someone’s home, not a tour.",
          author: "Sarah M.",
          role: "Wine Collector, London"
        },
        {
          quote: "The access Elias arranged was extraordinary. We visited small, family‑run estates we would never have found on our own.",
          author: "James P.",
          role: "Sommelier, New York"
        },
        {
          quote: "This was the most authentic wine experience we’ve had in Europe. Intimate, personal and full of stories you can’t get anywhere else.",
          author: "Elena K.",
          role: "Travel Enthusiast, Sydney"
        }
      ].map((testimonial, idx) => (
        <div 
          key={idx} 
          className="bg-white rounded-lg p-8 shadow-md border border-primary/10 hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          {/* Stars */}
          <div className="flex mb-4">
            {Array(5).fill(0).map((_, i) => (
              <svg 
                key={i}
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                className="w-5 h-5 text-primary"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <p className="text-foreground/70 italic mb-6">
            "{testimonial.quote}"
          </p>

          {/* Author */}
          <div>
            <p className="font-semibold text-foreground">{testimonial.author}</p>
            <p className="text-sm text-foreground/60">{testimonial.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* Reassurance Image Section */}
<section className="py-0">
  <div className="container">
    <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
      <img
        src="/images/wine-tasting-experience.jpg"
        alt="Premium wine tasting setup"
        className="w-full h-full object-cover"
      />

      {/* Soft dark vignette behind text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center">
        <div className="max-w-xl pl-8">

          <h2
            className="text-white text-3xl md:text-4xl font-semibold leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            You're in Good Hands
          </h2>

          <p className="text-white/90 text-lg mb-6">
            Personal replies within 24 hours. No payment required to enquire.
            Small groups of 4–6 guests. Fully licensed and insured.
          </p>

          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Enquire With Confidence
          </a>

        </div>
      </div>
    </div>
  </div>
</section>


{/* Divider */}
<div className="flex justify-center py-6">
  <div className="w-12 h-px bg-primary/40" />
</div>

{/* Contact & Booking Section */}
<section id="contact" className="pt-12 pb-20 bg-white/60 backdrop-blur-sm">
  <div className="container">

    {/* Section Heading */}
    <h2 className="text-center mb-10 leading-tight">
      Ready to Experience Greek Wine?
    </h2>

    {/* Card Options */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
      
      {/* Tour Reservation */}
      <div
        className={`rounded-lg p-6 cursor-pointer transition-all ${
          activeForm === "tour"
            ? "bg-accent/10 border-2 border-accent"
            : "bg-white border border-border hover:border-primary/50"
        }`}
        onClick={() => setActiveForm("tour")}
      >
        <Calendar className="w-8 h-8 text-primary mb-3" />
        <h3 className="text-xl font-semibold mb-1">Tour Reservation</h3>
        <p className="text-foreground/70 text-sm">
          Reserve your wine experience or request availability for specific dates.
        </p>
      </div>

      {/* General Enquiries */}
      <div
        className={`rounded-lg p-6 cursor-pointer transition-all ${
          activeForm === "enquiry"
            ? "bg-accent/10 border-2 border-accent"
            : "bg-white border border-border hover:border-primary/50"
        }`}
        onClick={() => setActiveForm("enquiry")}
      >
        <Mail className="w-8 h-8 text-primary mb-3" />
        <h3 className="text-xl font-semibold mb-1">General Enquiries</h3>
        <p className="text-foreground/70 text-sm">
          Questions about our experiences, media features, or editorial content.
        </p>
      </div>

      {/* Partnerships */}
      <div
        className={`rounded-lg p-6 cursor-pointer transition-all ${
          activeForm === "partnership"
            ? "bg-accent/10 border-2 border-accent"
            : "bg-white border border-border hover:border-primary/50"
        }`}
        onClick={() => setActiveForm("partnership")}
      >
        <Wine className="w-8 h-8 text-primary mb-3" />
        <h3 className="text-xl font-semibold mb-1">Partnerships</h3>
        <p className="text-foreground/70 text-sm">
          For wineries, media collaborations and professional partnerships.
        </p>
      </div>
    </div>

    {/* Success Message */}
    {availabilitySuccess && !activeForm && (
      <div
        id="success-message"
        className="mt-8 rounded-xl border border-border bg-background p-8 text-center"
      >
        <h3 className="text-xl font-semibold">
          Thank you for your request
        </h3>
        <p className="mt-3 text-muted-foreground">
          We’ve received your tour availability enquiry and will be in touch shortly
          with next steps.
        </p>
      </div>
    )}

    {/* Form Section renders here */}


          {activeForm && (
            <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">
                {activeForm === "tour" && "Reserve Your Wine Experience"}
                {activeForm === "enquiry" && "Send us Your Enquiry"}
                {activeForm === "partnership" && "Partnership Inquiry"}
              </h3>


           <form
  className="space-y-6"
  action="https://api.web3forms.com/submit"
  method="POST"
>

  {/* Required hidden fields */}
  <input
    type="hidden"
    name="access_key"
    value="e1ffa3e7-01b5-498b-8c05-40d9a76527a3"
  />

  <input
    type="hidden"
    name="subject"
    value={
      activeForm === "partnership"
        ? "New Partnership Enquiry"
        : activeForm === "tour"
        ? "New Tour Booking Request"
        : "New General Enquiry"
    }
  />

  <input
    type="hidden"
    name="autoresponse"
    value="Thank you for your message. We have received your enquiry and will reply shortly."
  />

  <input
    type="hidden"
    name="from_name"
    value="Greek Wine Show"
  />

  <input
    type="hidden"
    name="redirect"
    value="https://greekwineshow.com/#success"
  />

  {/* Visible fields */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input
      type="text"
      name="fullName"
      placeholder="Full Name"
      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Email Address"
      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      required
    />
  </div>

{/* Phone Number with Country Selector */}
<div className="flex gap-3">
  {/* Country Code Dropdown */}
  <select
    name="countryCode"
    className="w-36 p-3 border rounded-lg bg-white text-foreground"
    defaultValue="+30"
  >
    {[
      { flag: "🇺🇸", code: "+1", country: "USA" },
      { flag: "🇨🇦", code: "+1", country: "CAN" },
      { flag: "🇬🇷", code: "+30", country: "GRE" },
      { flag: "🇬🇧", code: "+44", country: "GBR" },
      { flag: "🇫🇷", code: "+33", country: "FRA" },
      { flag: "🇩🇪", code: "+49", country: "DEU" },
      { flag: "🇮🇹", code: "+39", country: "ITA" },
      { flag: "🇪🇸", code: "+34", country: "ESP" },
      { flag: "🇵🇹", code: "+351", country: "PRT" },
      { flag: "🇳🇱", code: "+31", country: "NLD" },
      { flag: "🇧🇪", code: "+32", country: "BEL" },
      { flag: "🇨🇭", code: "+41", country: "CHE" },
      { flag: "🇦🇹", code: "+43", country: "AUT" },
      { flag: "🇸🇪", code: "+46", country: "SWE" },
      { flag: "🇳🇴", code: "+47", country: "NOR" },
      { flag: "🇩🇰", code: "+45", country: "DNK" },
      { flag: "🇫🇮", code: "+358", country: "FIN" },
      { flag: "🇮🇪", code: "+353", country: "IRL" },
      { flag: "🇵🇱", code: "+48", country: "POL" },
      { flag: "🇨🇿", code: "+420", country: "CZE" },
      { flag: "🇸🇰", code: "+421", country: "SVK" },
      { flag: "🇭🇺", code: "+36", country: "HUN" },
      { flag: "🇷🇴", code: "+40", country: "ROU" },
      { flag: "🇸🇮", code: "+386", country: "SVN" },
      { flag: "🇭🇷", code: "+385", country: "HRV" },
      { flag: "🇹🇷", code: "+90", country: "TUR" },
      { flag: "🇮🇱", code: "+972", country: "ISR" },
      { flag: "🇦🇪", code: "+971", country: "ARE" },
      { flag: "🇶🇦", code: "+974", country: "QAT" },
      { flag: "🇸🇦", code: "+966", country: "SAU" },
      { flag: "🇮🇳", code: "+91", country: "IND" },
      { flag: "🇯🇵", code: "+81", country: "JPN" },
      { flag: "🇰🇷", code: "+82", country: "KOR" },
      { flag: "🇨🇳", code: "+86", country: "CHN" },
      { flag: "🇭🇰", code: "+852", country: "HKG" },
      { flag: "🇲🇴", code: "+853", country: "MAC" },
      { flag: "🇸🇬", code: "+65", country: "SGP" },
      { flag: "🇲🇾", code: "+60", country: "MYS" },
      { flag: "🇮🇩", code: "+62", country: "IDN" },
      { flag: "🇵🇭", code: "+63", country: "PHL" },
      { flag: "🇹🇭", code: "+66", country: "THA" },
      { flag: "🇻🇳", code: "+84", country: "VNM" },
      { flag: "🇦🇺", code: "+61", country: "AUS" },
      { flag: "🇳🇿", code: "+64", country: "NZL" },
      { flag: "🇧🇷", code: "+55", country: "BRA" },
      { flag: "🇦🇷", code: "+54", country: "ARG" },
      { flag: "🇨🇱", code: "+56", country: "CHL" },
      { flag: "🇨🇴", code: "+57", country: "COL" },
      { flag: "🇵🇪", code: "+51", country: "PER" },
      { flag: "🇲🇽", code: "+52", country: "MEX" },
      { flag: "🇿🇦", code: "+27", country: "ZAF" },
      { flag: "🇳🇬", code: "+234", country: "NGA" },
      { flag: "🇰🇪", code: "+254", country: "KEN" },
      { flag: "🇪🇬", code: "+20", country: "EGY" },
    ].map((item, idx) => (
      <option key={idx} value={item.code}>
        {item.flag} {item.country} {item.code}
      </option>
    ))}
  </select>

  {/* Phone Number Input */}
  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    className="flex-1 p-3 border rounded-lg"
  />
</div>



  {activeForm === "tour" && (
    <>
      <input
        type="date"
        name="preferredDate"
        placeholder="Preferred Date"
        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <select
        name="groupSize"
        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="">Select Group Size</option>
        <option value="1-2">1-2 guests</option>
        <option value="3-4">3-4 guests</option>
        <option value="5-6">5-6 guests</option>
        <option value="custom">Custom (contact us)</option>
      </select>
    </>
  )}

  <textarea
    name="message"
    placeholder="Message"
    rows={5}
    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
  />

  <Button
    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
    size="lg"
  >
    Submit
  </Button>
</form>


             
            </div>
          )}
        </div>
      </section>
{/* Partners Section */}
<section id="partners" className="pt-16 pb-16 bg-white/60 backdrop-blur-sm relative overflow-hidden">

  {/* Subtle texture background */}
  <div className="absolute inset-0 bg-[url('/textures/noise-light.png')] opacity-20 pointer-events-none"></div>

  <div className="container relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Left Column — Text */}
      <div>
        <h2 className="leading-tight text-3xl font-semibold">
          For Wineries & Partners
        </h2>
        <div className="w-16 h-1 bg-primary mt-3 mb-6 rounded-full"></div>

        <p className="text-lg text-foreground/70 leading-relaxed mb-8">
          The Greek Wine Show collaborates with premium wineries, wine bars, media outlets and travel professionals. 
          We offer several partnership pathways depending on your goals:
        </p>

        <ul className="space-y-4 text-foreground/80 mb-10">
          <li className="flex items-start">
            <span className="text-primary mr-3 mt-1">▹</span>
            <span><strong>Join our curated wine experiences</strong> — feature your winery as part of our private and small‑group tours.</span>
          </li>

          <li className="flex items-start">
            <span className="text-primary mr-3 mt-1">▹</span>
            <span><strong>Videography, photography & editorial features</strong> — showcase your story through cinematic episodes, interviews and professional content production.</span>
          </li>

          <li className="flex items-start">
            <span className="text-primary mr-3 mt-1">▹</span>
            <span><strong>Sponsorships & brand collaborations</strong> — partner with The Greek Wine Show as a sponsor or strategic collaborator.</span>
          </li>
        </ul>

        {/* CTA — triggers Partnerships form */}
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
          onClick={() => {
            // Select the Partnerships form
            setActiveForm("partnership");

            // Scroll to the forms section
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Explore Partnership Opportunities
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>

      {/* Right Column — Visual Block */}
      <div className="relative h-80 rounded-lg overflow-hidden">
        <img
          src="/images/wineries greek wine show tours experiences partnerships collaborations sponsorships vidoegraphy photography business opportunities.jpg" // Replace with your actual image
          alt="Winery partnership"
          className="w-full h-full object-cover"
        />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none"></div>

        {/* Frame */}
        <div className="absolute -inset-3 border border-primary/20 rounded-lg -z-10"></div>
      </div>

    </div>
  </div>
</section>

<section id="faq" className="py-20 bg-foreground/5 border-t border-primary/20">
  <div className="container">
    <h2 className="text-3xl font-semibold mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">

      {/* FAQ Item */}
      <details className="group border border-primary/20 rounded-lg p-5 bg-white/50">
        <summary className="cursor-pointer font-medium text-lg flex justify-between items-center">
          How many wines do we taste on your Athens wine tours?
        </summary>
        <p className="mt-3 text-foreground/60 text-sm leading-relaxed">
          All of our <a href="#experiences" className="text-primary hover:underline">Athens wine tours</a> include 
          between <strong>10–14 premium wines</strong>, depending on the itinerary. Tastings are curated to highlight 
          indigenous Greek varieties and boutique producers you won’t find in mass‑market tours.
        </p>
      </details>

      <details className="group border border-primary/20 rounded-lg p-5 bg-white/50">
        <summary className="cursor-pointer font-medium text-lg flex justify-between items-center">
          Is transport included in your wine experiences?
        </summary>
        <p className="mt-3 text-foreground/60 text-sm leading-relaxed">
          Yes — all experiences include <strong>premium transport with a professional driver</strong>. 
          Whether you choose a small‑group tour or a 
          <a href="#experiences" className="text-primary hover:underline"> private wine experience</a>, 
          we handle all logistics end‑to‑end for a seamless journey.
        </p>
      </details>

      <details className="group border border-primary/20 rounded-lg p-5 bg-white/50">
        <summary className="cursor-pointer font-medium text-lg flex justify-between items-center">
          What makes your tours different from other Athens wine tours?
        </summary>
        <p className="mt-3 text-foreground/60 text-sm leading-relaxed">
          Our tours are <strong>founder‑hosted</strong>, focused on <strong>boutique wineries</strong>, and designed for 
          travelers who want authenticity over volume. No crowds, no generic stops — just curated access to 
          <a href="#partners" className="text-primary hover:underline"> small producers</a> and meaningful storytelling.
        </p>
      </details>

      <details className="group border border-primary/20 rounded-lg p-5 bg-white/50">
        <summary className="cursor-pointer font-medium text-lg flex justify-between items-center">
          How far are the wineries from central Athens?
        </summary>
        <p className="mt-3 text-foreground/60 text-sm leading-relaxed">
          Most wineries are located <strong>30–45 minutes from Athens</strong>, making them ideal for both 
          <a href="#experiences" className="text-primary hover:underline"> half‑day</a> and 
          <a href="#experiences" className="text-primary hover:underline"> full‑day vineyard escapes</a> without long travel times.
        </p>
      </details>

      <details className="group border border-primary/20 rounded-lg p-5 bg-white/50">
        <summary className="cursor-pointer font-medium text-lg flex justify-between items-center">
          Do you offer private wine tours in Athens?
        </summary>
        <p className="mt-3 text-foreground/60 text-sm leading-relaxed">
          Yes — we offer <a href="#experiences" className="text-primary hover:underline">fully private wine tours </a> 
          with exclusive access, personalized pacing, and direct interaction with winemakers. These are ideal for 
          couples, families, and travelers seeking a more intimate experience.
        </p>
      </details>

      <details className="group border border-primary/20 rounded-lg p-5 bg-white/50">
        <summary className="cursor-pointer font-medium text-lg flex justify-between items-center">
          Which wine regions do your tours cover?
        </summary>
        <p className="mt-3 text-foreground/60 text-sm leading-relaxed">
          Our tours focus on the <strong>Attica wine regions</strong>, known for their historic vineyards and indigenous 
          varieties. Some full‑day experiences also explore other regions such as Nemea and broader terroirs depending on the itinerary. 
          See all options in the <a href="#experiences" className="text-primary hover:underline">Experiences section</a>.
        </p>
      </details>

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
  <ul className="space-y-3 text-sm text-foreground/60">

    <li>
      <a
        href="https://www.instagram.com/greekwineshow"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 font-medium hover:text-primary transition-colors"
      >
        <svg
          className="w-4 h-4 translate-y-[0.5px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
        Instagram
      </a>
    </li>

    <li>
      <a
        href="https://www.tiktok.com/@greekwineshow"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 font-medium hover:text-primary transition-colors"
      >
        <svg
          className="w-4 h-4 translate-y-[0.5px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.5 2c.3 2.2 1.8 3.8 4 4v3.1c-1.5.1-2.9-.4-4-1.3v6.4c0 2.9-2.1 5.5-5 5.8-3.2.3-6-2.2-6.2-5.4-.3-3.2 2.2-6 5.4-6.2.3 0 .6 0 .8.1v3.2c-.3-.1-.6-.1-.9 0-1.2.2-2.1 1.3-2 2.6.1 1.2 1.3 2.1 2.6 2 1.2-.1 2.1-1.3 2-2.6V2h3.3z"/>
        </svg>
        TikTok
      </a>
    </li>

    <li>
      <a
        href="https://www.youtube.com/@greekwineshow"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 font-medium hover:text-primary transition-colors"
      >
        <svg
          className="w-4 h-4 translate-y-[0.5px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21.8 8s-.2-1.5-.8-2.2c-.7-.8-1.5-.8-1.9-.9C16.7 4.5 12 4.5 12 4.5h-.1s-4.7 0-7.1.4c-.4 0-1.2.1-1.9.9C2.2 6.5 2 8 2 8s-.2 1.8-.2 3.6v1.7C1.8 15 2 16.8 2 16.8s.2 1.5.8 2.2c.7.8 1.6.8 2 1 1.5.1 6.2.4 6.2.4s4.7 0 7.1-.4c.4 0 1.2-.1 1.9-.9.6-.7.8-2.2.8-2.2s.2-1.8.2-3.6v-1.7c0-1.8-.2-3.6-.2-3.6zM10 14.7V8.9l5.2 2.9-5.2 2.9z"/>
        </svg>
        YouTube
      </a>
    </li>

    <li>
      <a
        href="#"
        className="flex items-center gap-2 hover:text-primary transition-colors"
      >
        <Mail size={16} strokeWidth={1.5} />
        Newsletter
      </a>
    </li>

  </ul>
</div>


            


          </div>

          <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
            <p>&copy; 2026 The Greek Wine Show. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
            </footer>
    </div>
  </>
  );
}

