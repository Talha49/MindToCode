import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Container } from "@/components/ui/Layout"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo"
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react"

// Helper function to format slug into a human-readable title
function slugToTitle(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const title = `${slugToTitle(slug)} | MindToCode Blog`
  const description = `Read expert technical insights on ${slugToTitle(slug)}. Written by Talha Ghauri at MindToCode.`
  const postUrl = `${SITE_URL}/blog/${slug}`

  return {
    title,
    description,
    openGraph: {
      type: "article",
      url: postUrl,
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  }
}

export default async function DynamicBlogPostPage({ params }) {
  const { slug } = await params

  if (!slug) {
    notFound()
  }

  const title = slugToTitle(slug)
  const publishedDate = "2026-01-28"
  const readTime = "6 min read"

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "image": `${SITE_URL}/opengraph-image.png`,
    "author": {
      "@type": "Person",
      "name": "Talha Ghauri",
      "url": SITE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": "MindToCode",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/assets/logo.png`
      }
    },
    "datePublished": publishedDate,
    "description": `Insights on ${title} by senior engineer Talha Ghauri.`
  }

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Header />

      <article className="pt-28 pb-20">
        <Container className="max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate max-w-xs sm:max-w-md">
              {title}
            </span>
          </nav>

          {/* Article Header */}
          <header className="space-y-6 mb-12">
            <Badge variant="outline" className="text-primary border-primary/30">
              Technical Guide
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight leading-tight text-foreground">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-2 border-y border-border/50 py-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                <span>Talha Ghauri</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{publishedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Content Scaffold */}
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground/90 leading-relaxed text-base sm:text-lg">
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Welcome to this comprehensive technical overview on <strong className="text-foreground font-semibold">{title}</strong>.
              Whether you are architecting a high-scale production application or seeking university capstone advice,
              this guide breaks down key strategies, architectural patterns, and practical implementation details.
            </p>

            <div className="p-6 rounded-2xl bg-muted/40 border border-border/60 space-y-3">
              <h3 className="text-lg font-bold font-heading text-foreground">
                📌 Key Takeaways in This Guide:
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground list-disc pl-5">
                <li>Core engineering principles and requirements breakdown.</li>
                <li>Recommended technology stacks and trade-offs.</li>
                <li>Production best practices for performance, security, and maintainability.</li>
                <li>Common pitfalls and how to avoid costly rework.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold font-heading pt-6 text-foreground">
              1. Understanding the Core Architecture
            </h2>
            <p>
              When planning any software project or academic capstone, selecting the right architecture early
              saves dozens of refactoring hours. Clean separation of concerns between client components, server actions,
              and persistent database layers ensures high velocity and minimal tech debt.
            </p>

            <h2 className="text-2xl font-bold font-heading pt-6 text-foreground">
              2. Recommended Implementation Stack
            </h2>
            <p>
              For modern web applications and MVPs, Next.js paired with Supabase (PostgreSQL) and Tailwind CSS offers
              unmatched developer velocity and enterprise-level reliability. For machine learning pipelines, Python
              microservices connected via REST or gRPC provide seamless flexibility.
            </p>

            <div className="my-10 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-primary/20 text-center space-y-4">
              <h3 className="text-2xl font-bold font-heading text-foreground">
                Need Direct Support With Your Project?
              </h3>
              <p className="text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
                Work directly with senior engineer Talha Ghauri to architect your startup MVP or guide your final year capstone project.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-2">
                <Link href="/academic-help">
                  <Button variant="default" className="shadow-md">
                    Academic Guidance
                  </Button>
                </Link>
                <Link href="/mvp-development">
                  <Button variant="outline" className="border-primary/30">
                    Startup MVP Development
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="pt-12 border-t border-border/60 flex justify-between items-center">
            <Link href="/blog">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                Back to All Articles
              </Button>
            </Link>
          </div>
        </Container>
      </article>

      <Footer />
    </main>
  )
}
