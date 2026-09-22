"use client"

import Link from "next/link"
import { ArrowUp, ArrowUpRight } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-emerald-950 text-slate-400 border-t border-white/10 pt-16 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand & Corporate Proof Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex flex-col space-y-1 mb-4">
                <span className="font-heading font-extrabold tracking-tight text-2xl text-white flex items-center">
                  <div className="w-2.5 h-2.5 rounded-sm bg-primary mr-2" />
                  NEXORA
                  <span className="text-emerald-400 ml-1.5 font-light">DIGITAL</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono pl-[1.125rem]">
                  Smarter Factories, Sustainable Tomorrow
                </span>
              </Link>
              <p className="text-sm text-slate-400 max-w-md leading-relaxed mt-3">
                Empowering Malaysian and ASEAN manufacturers with precision energy management, MES execution, and turnkey industrial digitalisation.
              </p>
            </div>

            {/* Corporate Evidence Pill */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Established in Malaysia · Serving ASEAN</span>
              </div>
            </div>
          </div>

          {/* Sitemap Column 1: Solutions */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/ems" className="hover:text-white transition-colors flex items-center group">
                  <span>Energy Management (EMS)</span>
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services/mes" className="hover:text-white transition-colors flex items-center group">
                  <span>Manufacturing Execution (MES)</span>
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services/wms" className="hover:text-white transition-colors flex items-center group">
                  <span>Warehouse Management (WMS)</span>
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services/erp" className="hover:text-white transition-colors flex items-center group">
                  <span>Enterprise Resource Planning (ERP)</span>
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/assessment" className="text-emerald-400 font-[510] hover:underline flex items-center">
                  <span>Free EECA Assessment</span>
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Sitemap Column 2: Industries */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">Automotive</Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">Food & Beverage</Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">Pharmaceutical</Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">Electronics</Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">General Manufacturing</Link>
              </li>
            </ul>
          </div>

          {/* Sitemap Column 3: Company & Resources */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Insights & Articles</Link>
              </li>
              <li>
                <Link href="/blog/eeca-malaysia-guide" className="hover:text-white transition-colors">EECA Guide</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 text-xs text-slate-500 font-mono">
          <p>&copy; {new Date().getFullYear()} Nexora Digital Sdn. Bhd. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-slate-600">ISO 50001 · EECA Compliant Architecture</span>
            <button 
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 transition-colors border border-white/10 active:scale-[0.98]"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
