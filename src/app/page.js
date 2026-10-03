import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
// import Hero from "@/components/sections/Hero"; // legacy hero, replaced by HeroSection
import HeroSection from "@/components/sections/HeroSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
// import PersonalTraining from "@/components/sections/PersonalTraining"; // Redundant with Programs & Coaches
import Transformations from "@/components/sections/Transformations";
// import BMICalculator from "@/components/sections/BMICalculator"; // Unneeded calculator bloat on modern gym landing page
import Packages from "@/components/sections/Packages";
import PlanComparison from "@/components/sections/PlanComparison";
// import Nutrition from "@/components/sections/Nutrition"; // Secondary niche service, better as sub-offering
import Reviews from "@/components/sections/Reviews";
// import Gallery from "@/components/sections/Gallery"; // Redundant; facilities are showcased in About & Transformations
import FAQ from "@/components/sections/FAQ";
// import Blog from "@/components/sections/Blog"; // Distracts user away from membership conversion
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero & Value Proposition */}
        <HeroSection />

        {/* 2. Brand Story & Culture */}
        <About />

        {/* 3. Spartan Growth Milestones & Timeline (previously inside About) */}
        {/* <Timeline /> */}

        {/* 4. Workout Programs & Classes */}
        {/* <Programs /> */}

        {/* 5. Key Differentiators & Amenities */}
        <WhyChooseUs />

        {/* Optional Sub-Service (commented out to reduce clutter):
        <PersonalTraining />
        */}

        {/* 6. Proven Results & Social Proof */}
        <Transformations />

        {/* Interactive Utility (commented out - rarely used on premium gym sites):
        <BMICalculator />
        */}

        {/* 7. Memberships & Pricing Plans */}
        <Packages />

        {/* 8. Detailed Plan Comparison Table (previously inside Packages) */}
        <PlanComparison />

        {/* 9. Trainer Authority & Coaching Team */}
        {/* <Coaches /> */}

        {/* Add-on Service (commented out to keep flow focused):
        <Nutrition />
        */}

        {/* 8. Real Member Testimonials */}
        <Reviews />

        {/* Facility Gallery (commented out to avoid endless scrolling):
        <Gallery />
        */}

        {/* 9. Objection Handling & Details */}
        <FAQ />

        {/* Articles / Blog (commented out to prevent bounce before conversion):
        <Blog />
        */}

        {/* 10. High-Impact Closing Offer */}
        <CTA />

        {/* 11. Location, Schedule & Contact Form */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
