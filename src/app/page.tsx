"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, Zap, LayoutDashboard, Database, Grid3X3, ArrowRight, Factory, Activity, Car, Coffee, Pill, Cpu, Building2, TrendingUp, Handshake, Leaf } from "lucide-react"
import { SectionLabel } from "@/components/section-label"
import { ProjectCard } from "@/components/ui/project-card"
import { StatCounter } from "@/components/stat-counter"
import { FadeIn, FadeInStagger } from "@/components/ui/fade-in"
import { Hero } from "@/components/ui/hero-with-image-text-and-two-buttons"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* 2. SOLUTIONS SECTION */}
      <section className="py-16 sm:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
              <div>
                <SectionLabel index="01">Our Solutions</SectionLabel>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">From Shop Floor to Boardroom</h2>
                <p className="text-muted-foreground mt-3 sm:mt-4 text-base sm:text-lg max-w-[50ch]">
                  End-to-end operational visibility. We connect your machines, inventory, and energy data into a single source of truth.
                </p>
              </div>
              <div>
                <Link href="/services" className="group inline-flex items-center font-[510] tracking-tight text-foreground hover:text-primary transition-colors py-2">
                  View All Solutions <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeInStagger faster className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn>
              <ProjectCard 
                title="Energy Management System (EMS)"
                description="Monitor, analyse and optimise energy usage across your factory."
                link="/services/ems"
                linkText="Learn More"
                imgSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard 
                title="Manufacturing Execution System (MES)"
                description="Real-time production visibility and control."
                link="/services/mes"
                linkText="Learn More"
                imgSrc="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard 
                title="Warehouse Management System (WMS)"
                description="Smarter inventory and warehouse operations."
                link="/services/wms"
                linkText="Learn More"
                imgSrc="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard 
                title="Enterprise Resource Planning (ERP)"
                description="Unify your business processes for greater efficiency."
                link="/services/erp"
                linkText="Learn More"
                imgSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
              />
            </FadeIn>
          </FadeInStagger>
        </div>
      </section>

      {/* 3. EECA COMPLIANCE SECTION */}
      <section className="py-16 sm:py-24 bg-emerald-950 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 py-1 text-xs font-semibold uppercase tracking-widest text-white mb-4">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 font-mono text-[0.65rem] font-bold">02</span>
                <span className="font-mono text-xs font-semibold tracking-widest">EECA Compliance</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                ARE YOU READY FOR <span className="text-emerald-400">EECA?</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-[50ch]">
                Malaysia's Energy Efficiency and Conservation Act (EECA) is coming into full effect. Find out your factory's readiness in just 3 minutes.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Understand your current energy monitoring status",
                  "Identify potential gaps for EECA compliance",
                  "Get personalised recommendations",
                  "Free and no obligation"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mt-1 bg-emerald-500/20 rounded-full p-0.5 mr-3 shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    </div>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8 bg-white text-emerald-950 hover:bg-emerald-50">
                <Link href="/assessment">
                  Start Free Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>

            <FadeIn direction="left" delay={0.2} className="h-full">
              <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src="/images/eeca-banner.jpg" 
                  alt="Factory at dusk" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-emerald-950/40" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <p className="text-emerald-400 text-sm tracking-widest uppercase font-semibold mb-2 font-mono">Compliance Today</p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">A MORE EFFICIENT TOMORROW</h3>
                  <Link href="/blog/eeca-malaysia-guide" className="group text-white font-[510] tracking-tight hover:text-emerald-300 inline-flex items-center text-sm transition-colors w-fit">
                    Learn More About EECA <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. STATS SECTION (Zebra Pacing: Elevated Surface) */}
      <section className="py-12 sm:py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeIn direction="up">
            <SectionLabel index="03">Operational Evidence</SectionLabel>
          </FadeIn>
          <FadeInStagger faster className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-4">
            <FadeIn>
              <StatCounter 
                end={30} 
                suffix="+" 
                label="Manufacturing Companies" 
                sublabel="Served successfully"
                icon={<Factory className="h-8 sm:h-10 w-8 sm:w-10 text-emerald-600 opacity-80" />}
              />
            </FadeIn>
            <FadeIn>
              <StatCounter 
                end={20} 
                suffix="%" 
                label="Average Energy Savings" 
                sublabel="Achieved by clients"
                icon={<Leaf className="h-8 sm:h-10 w-8 sm:w-10 text-emerald-600 opacity-80" />}
              />
            </FadeIn>
            <FadeIn>
              <StatCounter 
                end={95} 
                suffix="%" 
                label="System Uptime" 
                sublabel="Guaranteed reliability"
                icon={<TrendingUp className="h-8 sm:h-10 w-8 sm:w-10 text-emerald-600 opacity-80" />}
              />
            </FadeIn>
            <FadeIn>
              <StatCounter 
                end={100} 
                suffix="%" 
                label="Commitment to Your Success" 
                sublabel="Partner approach"
                icon={<Handshake className="h-8 sm:h-10 w-8 sm:w-10 text-emerald-600 opacity-80" />}
              />
            </FadeIn>
          </FadeInStagger>
        </div>
      </section>

      {/* 5. INDUSTRIES SECTION */}
      <section className="py-16 sm:py-24 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 py-1 text-xs font-semibold uppercase tracking-widest text-white mb-4">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 font-mono text-[0.65rem] font-bold">04</span>
              <span className="font-mono text-xs font-semibold tracking-widest">Industry Sectors</span>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mt-4">
            
            <div className="lg:col-span-8">
              <FadeInStagger faster className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 h-full">
                {[
                  { icon: Car, label: "Automotive" },
                  { icon: Coffee, label: "Food & Beverage" },
                  { icon: Pill, label: "Pharmaceutical" },
                  { icon: Cpu, label: "Electronics" },
                  { icon: Factory, label: "General Manufacturing" }
                ].map((ind, i) => (
                  <FadeIn key={i} className="bg-[#292524] border border-white/10 rounded-2xl flex flex-col items-center justify-center p-4 sm:p-6 text-center hover:bg-[#34302c] transition-colors duration-300">
                    <ind.icon className="h-6 sm:h-8 w-6 sm:w-8 text-emerald-400 mb-2 sm:mb-3" />
                    <span className="font-[510] text-xs sm:text-base text-white">{ind.label}</span>
                  </FadeIn>
                ))}
                <FadeIn className="bg-[#292524] border border-white/10 rounded-2xl flex flex-col items-center justify-center p-4 sm:p-6 text-center hover:bg-[#34302c] transition-colors duration-300">
                  <div className="h-6 sm:h-8 flex items-center justify-center text-lg sm:text-xl font-bold tracking-widest text-white mb-2 sm:mb-3 font-mono">...</div>
                  <span className="font-[510] text-xs sm:text-base text-white">And More</span>
                </FadeIn>
              </FadeInStagger>
            </div>

            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden flex items-center justify-center p-8 sm:p-12 min-h-[250px] border border-white/10">
              <Image 
                src="/images/cta-bg.jpg" 
                alt="Smart Factory" 
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-sm" />
              <FadeIn direction="up" className="relative z-10 text-center w-full">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-6 sm:mb-8 tracking-tight">
                  BUILD A SMARTER SUSTAINABLE FACTORY
                </h3>
                <Button asChild size="lg" className="group w-full bg-white text-emerald-900 hover:bg-emerald-50 h-12">
                  <Link href="/contact">
                    Talk to a Consultant <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 6. BLOG / INSIGHTS SECTION (Zebra Pacing: Elevated Surface) */}
      <section className="py-16 sm:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <FadeIn direction="up">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-10 gap-3">
                <div>
                  <SectionLabel index="05">Technical Insights</SectionLabel>
                </div>
                <Link href="/blog" className="group inline-flex items-center font-[510] tracking-tight text-foreground hover:text-primary transition-colors py-1">
                  View All Articles <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
            
            <FadeInStagger faster className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  date: "10 Dec 2024",
                  title: "EECA Malaysia: A Complete Guide for Manufacturers",
                  href: "/blog/eeca-malaysia-guide",
                  img: "/images/blog-1.jpg"
                },
                {
                  date: "5 Dec 2024",
                  title: "How to Monitor Factory Energy Consumption",
                  href: "/blog/monitor-factory-energy",
                  img: "/images/blog-2.jpg"
                },
                {
                  date: "28 Nov 2024",
                  title: "ISO 50001 vs EECA: What's the Difference?",
                  href: "/blog/iso-50001-vs-eeca",
                  img: "/images/blog-3.jpg"
                }
              ].map((post, i) => (
                <FadeIn key={i}>
                  <div className="flex flex-col h-full group bg-card border border-foreground/10 rounded-2xl overflow-hidden shadow-none hover:border-foreground/20 transition-all duration-300">
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                      <Image 
                        src={post.img} 
                        alt={post.title} 
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <div className="text-xs text-muted-foreground font-mono mb-2 sm:mb-3">{post.date}</div>
                      <h3 className="font-bold text-base sm:text-lg leading-snug text-foreground group-hover:text-primary transition-colors mb-4 flex-1 tracking-tight">
                        <Link href={post.href} className="before:absolute before:inset-0">
                          {post.title}
                        </Link>
                      </h3>
                      <div className="inline-flex items-center text-sm font-[510] tracking-tight text-primary relative z-10 py-1">
                        Read More <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </FadeInStagger>
          </div>
          
          <div className="lg:col-span-1">
            <FadeIn direction="up" delay={0.2}>
              <SectionLabel>Stay Updated</SectionLabel>
              <div className="bg-card border border-foreground/10 rounded-2xl p-6 shadow-none">
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Get the latest insights on energy management, manufacturing digitalisation and industry updates.
                </p>
                <form 
                  className="flex flex-col space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thanks for subscribing to our updates!");
                  }}
                >
                  <Input 
                    type="email" 
                    required
                    placeholder="Your email address" 
                    className="h-11 bg-background"
                  />
                  <Button type="submit" className="w-full bg-emerald-600 text-white hover:bg-emerald-700 h-11 font-[510] tracking-tight shadow-none">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-4 font-mono">No spam. Unsubscribe anytime.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
