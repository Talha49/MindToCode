"use client"

import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/ui/Layout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { ArrowRight, GraduationCap, Rocket, CheckCircle2 } from "lucide-react"

export function SplitAudience() {
  return (
    <section className="relative py-12 md:py-16 bg-muted/30 border-y border-border/40">
      <Container>
        <div className="text-center space-y-3 mb-10">
          <Badge variant="outline" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold border-primary/30 text-primary">
            Choose Your Track
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight">
            How Can I Help You Today?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Select your path below for tailored technical services, transparent processes, and direct guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Track 1: Students & Researchers */}
          <Card className="relative flex flex-col justify-between overflow-hidden border-border/60 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group bg-background/80 backdrop-blur-sm">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-500" />
            
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <Badge variant="secondary" className="font-medium">
                  Academic Support
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold font-heading text-foreground">
                Student or Researcher?
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Need end-to-end guidance for university assignments, final year capstone projects, or AI/ML implementations?
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 text-sm text-foreground/80 pb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>Capstone projects & Final Year Projects (FYP)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>Python, Java, C++, and Web Dev assignments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>1-on-1 code explanation & Viva preparation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>100% plagiarism-free, documented source code</span>
              </div>
            </CardContent>

            <CardFooter className="pt-0">
              <Link href="/academic-help" className="w-full">
                <Button className="w-full h-11 text-base group/btn shadow-md shadow-primary/15 hover:shadow-primary/30">
                  Explore Academic Help
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Track 2: Founders & Businesses */}
          <Card className="relative flex flex-col justify-between overflow-hidden border-border/60 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group bg-background/80 backdrop-blur-sm">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-purple-500" />
            
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                  <Rocket className="h-6 w-6" />
                </div>
                <Badge variant="outline" className="border-accent/30 text-accent font-medium">
                  Direct Engineering
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold font-heading text-foreground">
                Founder or Business?
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Looking to build an investor-ready MVP, custom SaaS platform, or high-performance React/Next.js application?
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 text-sm text-foreground/80 pb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Fast MVP launch in 4–6 weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Modern React 19, Next.js, and Supabase stack</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>100% intellectual property (IP) ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Work directly with a senior engineer, no junior agency fluff</span>
              </div>
            </CardContent>

            <CardFooter className="pt-0">
              <Link href="/mvp-development" className="w-full">
                <Button variant="secondary" className="w-full h-11 text-base group/btn hover:bg-accent hover:text-white transition-colors">
                  Explore MVP Development
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </section>
  )
}
