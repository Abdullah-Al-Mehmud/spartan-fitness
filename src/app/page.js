import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Transformations from "@/components/sections/Transformations";
import Packages from "@/components/sections/Packages";
import PlanComparison from "@/components/sections/PlanComparison";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

// Commented-out sections kept for future use / sub-offerings
// import PersonalTraining from "@/components/sections/PersonalTraining";
// import BMICalculator from "@/components/sections/BMICalculator";
// import Nutrition from "@/components/sections/Nutrition";
// import Gallery from "@/components/sections/Gallery";
// import Blog from "@/components/sections/Blog";
// import Timeline from "@/components/sections/Timeline";
// import Programs from "@/components/sections/Programs";
// import Coaches from "@/components/sections/Coaches";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A] text-white overflow-hidden">
        {/* 1. Hero & Value Proposition */}
        <Hero />

        {/* 2. Brand Story & Culture */}
        <About />

        {/* 3. Spartan Growth Milestones (commented out) */}
        {/* <Timeline /> */}

        {/* 4. Workout Programs & Classes (commented out) */}
        {/* <Programs /> */}

        {/* 5. Key Differentiators & Amenities */}
        <WhyChooseUs />

        {/* Optional Sub-Service (commented out) */}
        {/* <PersonalTraining /> */}

        {/* 6. Proven Results & Social Proof */}
        <Transformations />

        {/* Interactive Utility (commented out) */}
        {/* <BMICalculator /> */}

        {/* 7. Memberships & Pricing Plans */}
        <Packages />

        {/* 8. Detailed Plan Comparison Table */}
        <PlanComparison />

        {/* 9. Trainer Authority & Coaching Team (commented out) */}
        {/* <Coaches /> */}

        {/* Add-on Service (commented out) */}
        {/* <Nutrition /> */}

        {/* 10. Real Member Testimonials */}
        <Reviews />

        {/* Facility Gallery (commented out) */}
        {/* <Gallery /> */}

        {/* 11. Objection Handling & Details */}
        <FAQ />

        {/* Articles / Blog (commented out) */}
        {/* <Blog /> */}

        {/* 12. High-Impact Closing Offer */}
        <CTA />

        {/* 13. Location, Schedule & Contact Form */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
