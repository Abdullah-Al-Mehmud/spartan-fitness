import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Packages from "@/components/sections/Packages";
import PlanComparison from "@/components/sections/PlanComparison";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import BMICalculator from "@/components/sections/BMICalculator";

// Commented-out sections kept for future use / sub-offerings
// import PersonalTraining from "@/components/sections/PersonalTraining";
// import BMICalculator from "@/components/sections/BMICalculator";
// import Nutrition from "@/components/sections/Nutrition";
// import Blog from "@/components/sections/Blog";
// import Timeline from "@/components/sections/Timeline";
// import Programs from "@/components/sections/Programs";
// import Coaches from "@/components/sections/Coaches";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A] text-white overflow-hidden">
        {/* 1. Hero & Value Proposition (Untouched) */}
        <Hero />

        {/* 2. Brand Story & Culture */}
        <About />

        {/* 3. Spartan Growth Milestones (commented out) */}
        {/* <Timeline /> */}

        {/* 4. Workout Programs & Classes (commented out) */}
        {/* <Programs /> */}

        {/* 5. Key Differentiators & Amenities */}
        <WhyChooseUs />

        {/* 6. Memberships & Pricing Plans */}
        <Packages />

        {/* 8. Detailed Plan Comparison Table */}
        <PlanComparison />

        {/* Premium Gym Gallery (Visual Proof) */}
        <Gallery />

        {/* 9. Real Member Testimonials (Social Proof) */}
        <Reviews />

        {/* 10. High-Impact Closing Offer */}
        <CTA />

        {/* NEW SECTION 3: FAQ (Frequently Asked Questions - Before Locations & Footer) */}
        <FAQ />

        {/* 11. Location, Schedule & Contact Form */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
