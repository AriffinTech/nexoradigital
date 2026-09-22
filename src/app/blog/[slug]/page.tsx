import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"

// In a real app, this would come from a database or CMS
const blogPosts = {
  "eeca-malaysia-guide": {
    title: "EECA Malaysia: A Complete Guide for Manufacturers",
    date: "10 Dec 2024",
    author: "Engineering Team",
    category: "Compliance",
    content: `
      <p>The Energy Efficiency and Conservation Act (EECA) represents a significant shift in how Malaysian industrial facilities must manage and report their energy consumption. For manufacturers, compliance is no longer optional—it's a critical operational requirement.</p>
      
      <h2>What is the EECA?</h2>
      <p>The EECA mandates that high-energy users—defined as facilities consuming equal to or exceeding 20,000,000 kWh of electrical energy equivalent over a consecutive 6-month period—must appoint a registered energy manager, conduct energy audits, and implement energy management systems.</p>
      
      <h2>Key Requirements for Manufacturers</h2>
      <ul>
        <li><strong>Appoint a Registered Energy Manager (REM):</strong> A certified professional to oversee energy management.</li>
        <li><strong>Conduct Energy Audits:</strong> Comprehensive audits every 2 to 3 years.</li>
        <li><strong>Implement an Energy Management System (EnMS):</strong> Continuous monitoring and reporting of energy data.</li>
        <li><strong>Submit Periodic Reports:</strong> Regular submission of energy consumption data to the Energy Commission.</li>
      </ul>
      
      <h2>How to Prepare Your Factory</h2>
      <p>Preparation begins with visibility. You cannot manage what you do not measure. Implementing an automated Energy Management System (EMS) like Nexora Digital's platform allows you to:</p>
      <ul>
        <li>Automate data collection from all sub-meters without manual reading.</li>
        <li>Generate compliant reports instantly for regulatory submission.</li>
        <li>Identify energy-wasting machines and processes immediately.</li>
      </ul>
      
      <p>Don't wait until the deadlines approach. Early compliance allows you to find energy savings that can fund the compliance effort itself.</p>
    `
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts]
  
  // Fallback for demo purposes if slug doesn't exist
  if (!post) {
    return { 
      title: "Blog Post — Nexora Digital",
      description: "Read the latest insights from Nexora Digital."
    }
  }
  
  return {
    title: `${post.title} — Nexora Digital`,
    description: post.content.substring(0, 150).replace(/<[^>]*>?/gm, ''),
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Use the specific post if it exists, otherwise use the demo post for the prototype
  const resolvedParams = await params
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts] || blogPosts["eeca-malaysia-guide"]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-24 pb-12 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto max-w-3xl relative z-10">
          <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all articles
          </Link>
          
          <div className="flex items-center space-x-2 mb-6">
            <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-md">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground border-y border-border py-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {post.author}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-3xl">
          <div 
            className="prose prose-slate prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Share buttons removed to prevent dead controls (R-26) */}
        </div>
      </section>
    </div>
  )
}
