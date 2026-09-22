import { Metadata } from "next"
import Link from "next/link"
import { Calendar, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog & Insights — Nexora Digital",
  description: "Insights on manufacturing digitalisation, EECA compliance, and energy management.",
}

const posts = [
  {
    title: "EECA Malaysia: A Complete Guide for Manufacturers",
    slug: "eeca-malaysia-guide",
    excerpt: "Everything you need to know about the Energy Efficiency and Conservation Act and how to prepare your factory for compliance.",
    date: "10 Dec 2024",
    author: "Engineering Team",
    category: "Compliance"
  },
  {
    title: "How to Monitor Factory Energy Consumption",
    slug: "monitor-factory-energy",
    excerpt: "A step-by-step guide to setting up an effective energy monitoring system, from hardware selection to data analysis.",
    date: "5 Dec 2024",
    author: "Solutions Team",
    category: "Energy Management"
  },
  {
    title: "ISO 50001 vs EECA: What's the Difference?",
    slug: "iso-50001-vs-eeca",
    excerpt: "Understanding the overlap and differences between the international ISO 50001 standard and Malaysia's local EECA requirements.",
    date: "28 Nov 2024",
    author: "Compliance Team",
    category: "Compliance"
  },
  {
    title: "5 Hidden Causes of Machine Downtime",
    slug: "hidden-machine-downtime",
    excerpt: "How to use MES data to uncover and eliminate the hidden factors killing your Overall Equipment Effectiveness (OEE).",
    date: "15 Nov 2024",
    author: "Manufacturing Team",
    category: "Manufacturing Execution"
  },
  {
    title: "The Role of IoT in Warehouse Logistics",
    slug: "iot-warehouse-logistics",
    excerpt: "Moving beyond barcodes: How RFID and real-time location systems (RTLS) are transforming inventory accuracy.",
    date: "02 Nov 2024",
    author: "Logistics Team",
    category: "Warehouse Management"
  },
  {
    title: "Selecting the Right ERP for Discrete Manufacturing",
    slug: "erp-discrete-manufacturing",
    excerpt: "Not all ERPs are created equal. Key features to look for when selecting a system for high-mix, low-volume production.",
    date: "20 Oct 2024",
    author: "Solutions Team",
    category: "Enterprise Software"
  }
]

export default function BlogListingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-24 pb-16 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Insights & Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert perspectives on manufacturing digitalisation, energy management, and industry compliance.
          </p>
        </div>
      </section>

      <section className="py-24 bg-muted flex-1">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <div key={i} className="flex flex-col bg-card rounded-lg border border-border shadow-sm overflow-hidden">
                <div className="aspect-[16/9] bg-muted border-b border-border flex items-center justify-center relative overflow-hidden">
                  <span className="text-muted-foreground font-bold text-6xl">0{i+1}</span>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{post.category}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-4 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:underline before:absolute before:inset-0">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-6 flex-1 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-border text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            {/* Pagination removed as it has no backend logic and acts as dead controls */}
          </div>
        </div>
      </section>
    </div>
  )
}
