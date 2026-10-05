import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Award,
  Flame,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowRight,
  Dumbbell,
  Users,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

export const metadata = {
  title: "About Us | Spartan Fitness Dhaka - Luxury Training Sanctuary",
  description:
    "Learn about Spartan Fitness Dhaka. 10+ years of excellence, certified championship coaches, world-class equipment, and premium facilities across Mirpur 7 & Mirpur 14.",
};

const stats = [
  { value: "10+", label: "Years of Excellence", desc: "Forged in Dhaka since 2014" },
  { value: "2,500+", label: "Transformations", desc: "Real members, real results" },
  { value: "15+", label: "Certified Coaches", desc: "National champions & specialists" },
  { value: "2", label: "Prime Arenas", desc: "Mirpur 7 & Mirpur 14" },
];

const pillars = [
  {
    number: "01",
    icon: Target,
    title: "Scientific Biomechanics",
    description:
      "We select equipment and design workout splits around natural human joint kinetics. Every exercise is taught with precise cues to maximize hypertrophy while safeguarding tendons and spine.",
  },
  {
    number: "02",
    icon: Dumbbell,
    title: "Progressive Overload",
    description:
      "We reject shortcuts, dangerous fat burners, and crash starvation diets. Our proven blueprints rely on incremental resistance, metabolic conditioning, and structured refeeds.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Dedicated Female Sanctuary",
    description:
      "Every Saturday through Thursday from 3:00 PM to 6:00 PM, our gyms offer female-exclusive access with dedicated certified female instructors and complete privacy.",
  },
  {
    number: "04",
    icon: Flame,
    title: "Executive Recovery",
    description:
      "True growth occurs during rest. Spartan members enjoy Finnish steam bath chambers, sanitized executive hot shower suites, and private locker facilities.",
  },
];

const branches = [
  {
    id: "mirpur-7",
    name: "Mirpur 7 Branch",
    tagline: "The Flagship Iron Arena",
    address: "Level-3, 1/1 Milk Vita Road, Plot-B, Avenue-4, Block-3, Chalantika Mor (Bike Zone Building)",
    image: "/128868841_668587480486581_6912739221833064982_n.jpg",
    amenities: [
      "Extensive Dumbbell & Free Weight Rack",
      "Full Machine Hypertrophy Line",
      "Steam Bath & Sauna Suites",
      "Dedicated Female Hours (3-6 PM)",
      "Fully Air-Conditioned Arena",
    ],
  },
  {
    id: "mirpur-14",
    name: "Mirpur 14 Branch",
    tagline: "Executive Performance Center",
    address: "Level-4, Rofiq Tower, 211/8 Kachukhet Road (Apex / Foodnest Building)",
    image: "/644271147_1327952692688367_6006543335469826725_n.jpg",
    amenities: [
      "Olympic Deadlift & Squat Platforms",
      "Cardio Suite with Panoramic View",
      "Steam Bath & Locker Suites",
      "Early Bird & Gold Pass Options",
      "High-Ceiling Ambient Lighting",
    ],
  },
];

const trainers = [
  {
    name: "Marcus Reid",
    role: "Head Coach & Founder",
    specialty: "Biomechanics & Strength Conditioning",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=600",
    badge: "12+ Yrs Experience",
  },
  {
    name: "Sofia Chen",
    role: "Senior Female Head Trainer",
    specialty: "Core Mobility & Athletic Hypertrophy",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=600",
    badge: "Female Specialist",
  },
  {
    name: "Tanvir Hasan",
    role: "Senior Bodybuilding Coach",
    specialty: "Contest Prep & Heavy Powerlifting",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600",
    badge: "National Champion",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A] text-white overflow-hidden min-h-screen">
        {/* 1. Page Header & Hero */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 bg-[#0A0A0A] overflow-hidden">
          {/* Ambient Glowing Blobs */}
          <div className="crimson-ambient-glow -top-40 -left-40 w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] opacity-40 pointer-events-none" />
          <div className="crimson-ambient-glow top-1/2 -right-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] opacity-25 pointer-events-none" />

          {/* Dot Grid */}
          <div className="spartan-dot-grid absolute inset-0 opacity-[0.035] pointer-events-none" />

          {/* Big Background Watermark */}
          <span className="spartan-watermark top-12" aria-hidden>
            LEGACY
          </span>

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-body font-semibold uppercase tracking-[0.2em] text-white/50 mb-6">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary font-bold">About</span>
            </div>

            {/* Main Header Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-white text-xs font-body font-bold uppercase tracking-wider mb-6">
              <Flame size={14} className="text-primary fill-primary" />
              <span>Forged in Dhaka • 10+ Years of Excellence</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.08] max-w-4xl text-white">
              Forged in iron. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-white">
                Driven by science.
              </span>
            </h1>

            <p className="mt-6 text-white/70 font-body text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed">
              Spartan Fitness is Dhaka&apos;s premier luxury strength and athletic sanctuary. We were
              founded on a singular belief: fitness is not an occasional hobby — it is the cornerstone
              of high performance in life.
            </p>

            {/* Impact Metric Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 pt-10 border-t border-white/10">
              {stats.map((s, idx) => (
                <div key={idx} className="spartan-glass-card p-5 sm:p-6 flex flex-col">
                  <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight">
                    {s.value}
                  </span>
                  <span className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-white mt-1">
                    {s.label}
                  </span>
                  <span className="font-body text-[11px] text-white/50 mt-1">
                    {s.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. The Spartan Genesis Story */}
        <section className="relative py-20 sm:py-28 bg-[#0D0D10] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image Collage */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.8)] aspect-[4/3] sm:aspect-[16/11]">
                  <Image
                    src="/485309162_1051877876962518_2632745172042704375_n.jpg"
                    alt="Spartan Fitness Coaches with championship trophy"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-[10px] font-bold uppercase tracking-widest">
                      Championship Proven
                    </span>
                    <p className="font-heading text-base font-bold text-white mt-2">
                      National Bodybuilding & Strength Titles
                    </p>
                  </div>
                </div>

                {/* Overlapping secondary photo */}
                <div className="hidden sm:block absolute -bottom-8 -right-8 w-1/2 aspect-video rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black">
                  <Image
                    src="/482207656_1042939214523051_8760506858185054018_n.jpg"
                    alt="Spartan Dumbbell and Free Weight Rack"
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Story Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Our Origin
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-4xl uppercase tracking-tight font-black text-white leading-tight">
                  Born from a demand for real, uncompromised gym culture.
                </h2>

                <p className="font-body text-sm sm:text-base text-white/75 leading-relaxed">
                  A decade ago in Mirpur, Dhaka, fitness centers were either cramped basements lacking
                  proper ventilation and biomechanic standards, or overpriced spaces with zero personalized
                  guidance. Spartan Fitness was founded to permanently change that paradigm.
                </p>

                <p className="font-body text-sm sm:text-base text-white/75 leading-relaxed">
                  We invested in international heavy-duty biomechanical machines, recruited certified coaches
                  who live and breathe physical conditioning, and built spacious, air-conditioned arenas with
                  world-class hygiene and executive Finnish steam recovery amenities.
                </p>

                <div className="pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      <span className="font-body text-xs font-semibold text-white/90">
                        Zero crowded waiting for machines
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      <span className="font-body text-xs font-semibold text-white/90">
                        Free personalized diet blueprint
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      <span className="font-body text-xs font-semibold text-white/90">
                        Dedicated female exclusive hours
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      <span className="font-body text-xs font-semibold text-white/90">
                        Steam bath & luxury showers
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The 4 Spartan Pillars */}
        <section className="relative py-20 sm:py-28 lg:py-36 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">
                The Spartan Standard
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mt-3">
                Built on four uncompromising pillars.
              </h2>
              <p className="font-body text-sm sm:text-base text-white/60 mt-4">
                We believe that physical transformation requires an integrated approach of biomechanics,
                discipline, safe environments, and restorative recovery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="spartan-glass-card p-6 sm:p-7 flex flex-col justify-between group hover:border-primary/50 transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <Icon size={22} />
                        </div>
                        <span className="font-heading text-lg font-black text-white/20 group-hover:text-primary/40 transition-colors">
                          {pillar.number}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-white mb-3">
                        {pillar.title}
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-white/65 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Our Two Prime Arenas */}
        <section className="relative py-20 sm:py-28 bg-[#0D0D10] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
              <div>
                <span className="font-body text-xs font-bold uppercase tracking-[0.22em] text-primary">
                  Prime Facilities
                </span>
                <h2 className="font-heading text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mt-2">
                  Two luxury arenas in Dhaka.
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg border border-white/20 hover:border-primary hover:text-primary transition-all text-white self-start sm:self-auto"
              >
                <span>View Locations & Hours</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {branches.map((branch) => (
                <div
                  key={branch.id}
                  className="spartan-glass-card overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative h-64 sm:h-72 w-full">
                    <Image
                      src={branch.image}
                      alt={branch.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-white text-[10px] font-extrabold uppercase tracking-widest">
                      {branch.tagline}
                    </div>
                    <div className="absolute bottom-4 left-5 right-5">
                      <h3 className="font-heading text-xl sm:text-2xl font-black uppercase text-white">
                        {branch.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-white/70 text-xs mt-1">
                        <MapPin size={13} className="text-primary shrink-0" />
                        <span className="truncate">{branch.address}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                    <div className="space-y-2.5">
                      <span className="font-body text-[10px] font-bold uppercase tracking-widest text-primary block">
                        Included Amenities:
                      </span>
                      {branch.amenities.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-primary shrink-0" />
                          <span className="font-body text-xs text-white/80">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                      <a
                        href="tel:01688-664545"
                        className="font-heading text-sm font-bold text-white hover:text-primary transition-colors flex items-center gap-1.5"
                      >
                        <span>01688-664545</span>
                      </a>
                      <Link
                        href="/contact"
                        className="font-body text-xs font-bold uppercase tracking-wider text-primary hover:underline flex items-center gap-1"
                      >
                        <span>Get Directions</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Master Coaches */}
        <section className="relative py-20 sm:py-28 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-body text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Elite Coaching Staff
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mt-2">
                Learn from certified master trainers.
              </h2>
              <p className="font-body text-xs sm:text-sm text-white/60 mt-3">
                No inexperienced floor supervisors. Every Spartan coach is nationally certified and
                personally guides your posture, workout intensity, and recovery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {trainers.map((t, idx) => (
                <div
                  key={idx}
                  className="spartan-glass-card overflow-hidden group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-bold uppercase tracking-wider text-primary">
                      {t.badge}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-heading text-lg font-black uppercase text-white">
                        {t.name}
                      </h3>
                      <p className="font-body text-xs font-semibold text-primary mt-0.5">
                        {t.role}
                      </p>
                      <p className="font-body text-[11px] text-white/60 mt-1">
                        {t.specialty}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Closing High-Impact Call-To-Action */}
        <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#0D0D10] to-[#0A0A0A] border-t border-white/5">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-12 text-center relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary-light text-xs font-body font-extrabold uppercase tracking-wider mb-6">
              <Sparkles size={14} />
              <span>Limited Time Offer</span>
            </span>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              Ready to claim your 50% discount on admission?
            </h2>

            <p className="font-body text-sm sm:text-base lg:text-lg text-white/70 max-w-2xl mx-auto mt-5 leading-relaxed">
              Step into Dhaka&apos;s premier training sanctuary. Enjoy world-class equipment, customized
              diet plans, and complete Finnish steam amenities across Mirpur 7 and Mirpur 14.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-body text-xs font-bold uppercase tracking-[0.2em] shadow-[0_6px_25px_rgba(208,59,59,0.4)] hover:bg-primary-dark transition-all duration-300"
              >
                <span>Explore Membership Plans</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/[0.05] border border-white/15 text-white font-body text-xs font-bold uppercase tracking-[0.2em] hover:border-primary hover:text-primary transition-all duration-300"
              >
                <span>Contact Our Advisors</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
