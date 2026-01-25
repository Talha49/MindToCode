"use client"

import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Container, Section } from "@/components/ui/Layout"
import { Button } from "@/components/ui/Button"

export default function BlogIndexPage() {
    // Blog Data (Would come from CMS/MDX in production)
    const posts = [
        {
            slug: "top-capstone-project-ideas-2026",
            title: "Top 10 Computer Science Capstone Project Ideas for 2026",
            excerpt: "Struggling to find a unique Final Year Project topic? Explore our curated list of high-scoring ideas in AI, Blockchain, and Full Stack Development.",
            date: "January 26, 2026",
            readTime: "8 min read",
            image: "/blog/capstone-ideas.png",
            category: "Student Guide"
        },
        {
            slug: "how-to-build-mvp-4-weeks",
            title: "How to Build a Startup MVP in 4 Weeks (Step-by-Step)",
            excerpt: "Don't waste months on a product nobody wants. Learn the lean methodology to validate your idea and launch a scalable MVP in under a month.",
            date: "January 24, 2026",
            readTime: "12 min read",
            image: "/blog/mvp-guide.png",
            category: "Startup Founder"
        },
        {
            slug: "enterprise-saas-architecture",
            title: "Enterprise SaaS Architecture: A Guide for CTOs",
            excerpt: "Scalability, Security, and Cloud Native design. A deep dive into how we architect massive web applications for millions of users.",
            date: "January 22, 2026",
            readTime: "15 min read",
            image: "/blog/saas-architecture.png",
            category: "Enterprise Tech"
        },
        {
            slug: "cs-assignment-help-guide",
            title: "The Ultimate Guide to CS Assignment Help: Authenticity vs. Cheating",
            excerpt: "Learn how to get expert help without violating academic integrity. A complete guide for Computer Science students struggling with deadlines.",
            date: "January 20, 2026",
            readTime: "10 min read",
            image: "/blog/capstone-ideas.png", // Reusing relevant image
            category: "Student Guide"
        }
    ]

    return (
        <main className="flex min-h-screen flex-col">
            <Header />
            
            {/* Immersive Header */}
            <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/blog/blog-header.png"
                    alt="MindToCode Blog"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center max-w-4xl px-4 animate-in fade-in zoom-in duration-1000">
                    <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 tracking-tight">
                        Knowledge & Code
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Expert insights on Software Architecture, Academic Success, and Startup Growth.
                    </p>
                </div>
            </div>

            <Section className="py-24 bg-background">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
                            <p className="text-muted-foreground">Stay ahead of the curve with our latest guides.</p>
                        </div>
                        {/* Filter Categories (Visual only for now) */}
                        <div className="flex gap-2 flex-wrap">
                            {["All", "Student", "Startup", "Enterprise"].map((tag, i) => (
                                <button key={tag} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`} >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                                <article className="flex flex-col h-full border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 bg-card">
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-1 relative">
                                        <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-4">
                                            <span className="flex items-center gap-1">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                                {post.date}
                                            </span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                                            {post.title}
                                        </h2>
                                        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform">
                                            Read Full Article 
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    )
}
