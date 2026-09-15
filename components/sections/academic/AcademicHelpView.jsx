"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Container, Section, Grid } from "@/components/ui/Layout"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Testimonials } from "@/components/sections/Testimonials"
import { CallToAction } from "@/components/sections/CallToAction"
import { Modal } from "@/components/ui/Modal"
import { BookingWizard } from "@/components/booking/BookingWizard"
import { Process } from "@/components/sections/Process"
import { 
  GraduationCap, 
  Code2, 
  FileText, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  Clock, 
  HelpCircle, 
  ChevronDown 
} from "lucide-react"

export function AcademicHelpView({ faqSchema, serviceSchema }) {
  const [isBookingOpen, setIsBookingOpen] = React.useState(false)
  const [openFaq, setOpenFaq] = React.useState(0)

  const openBooking = () => setIsBookingOpen(true)
  const closeBooking = () => setIsBookingOpen(false)

  const services = [
    {
      title: "Capstone & Final Year Projects (FYP)",
      description: "End-to-end design, implementation, and deployment of complex capstone systems across Web, Mobile, Cloud, and AI.",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      features: [
        "Full production-ready source code",
        "Comprehensive documentation (IEEE & College format)",
        "Database schema diagrams & ERDs",
        "Local setup & environment installation support"
      ]
    },
    {
      title: "University Coding Assignments",
      description: "Fast, confidential support for computer science lab tasks and coursework across core programming languages.",
      icon: <Code2 className="h-6 w-6 text-blue-500" />,
      features: [
        "Python, Java, C/C++, JavaScript, Go, Rust",
        "Data structures & algorithms problem solving",
        "Strict adherence to test cases and rubrics",
        "100% original, plagiarism-free solutions"
      ]
    },
    {
      title: "AI, ML & Data Science Projects",
      description: "Implementation of deep learning models, natural language processing, computer vision, and predictive analytics.",
      icon: <Cpu className="h-6 w-6 text-purple-500" />,
      features: [
        "TensorFlow, PyTorch, Scikit-Learn pipelines",
        "Jupyter notebooks with documented explanations",
        "Data cleaning, preprocessing & visualization",
        "Model evaluation, accuracy metrics & tuning"
      ]
    },
    {
      title: "Viva Preparation & Code Walkthrough",
      description: "1-on-1 private guidance sessions so you completely understand every function, architecture choice, and line of code.",
      icon: <FileText className="h-6 w-6 text-emerald-500" />,
      features: [
        "Line-by-line code explanation sessions",
        "Supervisor defense & viva question prep",
        "Architecture and tech stack rationale",
        "Confidence to answer tough professor inquiries"
      ]
    }
  ]

  const faqs = [
    {
      q: "Can you help with my final year / capstone project from scratch?",
      a: "Yes! Whether you already have an approved project proposal or need help selecting a viable, high-scoring topic, we assist from architecture design and database modeling to complete implementation, documentation, and viva defense."
    },
    {
      q: "Do you write the code for me or teach me how it works?",
      a: "We do both. We deliver clean, modular, production-ready code with complete setup instructions. Crucially, we also include 1-on-1 walkthrough sessions so you thoroughly understand how every component works and can confidently present it in class or during examination vivas."
    },
    {
      q: "What programming languages and frameworks do you support?",
      a: "We support Python (FastAPI, Flask, Django, AI/ML), JavaScript/TypeScript (React, Next.js, Node.js), Java (Spring Boot), C, C++, PHP, SQL/NoSQL databases, and mobile frameworks like React Native and Flutter."
    },
    {
      q: "Is my project and personal information kept confidential?",
      a: "Absolutely. We treat all academic inquiries with 100% confidentiality. Your identity, code, and university information are never shared, published, or reused for any other student."
    },
    {
      q: "How fast can you deliver urgent assignments?",
      a: "For smaller programming assignments and debugging tasks, we can often deliver within 24 to 48 hours. For capstone projects, timelines usually range from 1 to 3 weeks depending on the complexity of the scope."
    }
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* JSON-LD Schemas */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}

      <Header onBook={openBooking} />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/hero-bg.png"
            alt="Abstract glowing network background"
            fill
            className="object-cover object-center opacity-20 dark:opacity-10 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>

        <Container className="relative z-10 text-center max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            Computer Science & Engineering Academic Support
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight leading-tight">
            Capstone & University Project Help <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-500">
              Built to A+ Standards
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Struggling with complex code, strict professors, or fast-approaching deadlines? Get complete source code, 
            academic documentation, and 1-on-1 viva preparation directly from an experienced software engineer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" onClick={openBooking} className="h-12 px-8 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40">
              Get Project & Assignment Help
            </Button>
            <a href="#services-detail">
              <Button variant="outline" size="lg" className="h-12 px-8 text-lg border-primary/20 hover:bg-primary/5">
                View Academic Services
              </Button>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>100% Plagiarism-Free</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-500" />
              <span>Strict Deadline Adherence</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-purple-500" />
              <span>1-on-1 Viva Defense Prep</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Detail Section */}
      <Section id="services-detail" className="py-20 bg-muted/20 border-y border-border/40">
        <Container>
          <div className="text-center space-y-4 mb-14 max-w-2xl mx-auto">
            <Badge variant="outline" className="text-primary border-primary/30">
              Specialized Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Comprehensive Academic Assistance
            </h2>
            <p className="text-muted-foreground text-base">
              From small debugging assignments to enterprise-grade Capstone systems, get the support you need to succeed.
            </p>
          </div>

          <Grid cols={1} md={2} gap={8}>
            {services.map((svc, idx) => (
              <Card key={idx} className="flex flex-col justify-between border-border/60 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="p-3 w-fit rounded-xl bg-muted border mb-3">
                    {svc.icon}
                  </div>
                  <CardTitle className="text-xl font-bold font-heading">{svc.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{svc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5 text-sm text-foreground/85">
                    {svc.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="outline" className="w-full hover:bg-primary/10 hover:text-primary" onClick={openBooking}>
                    Request Support for This
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* How it Works */}
      <Process onBook={openBooking} />

      {/* FAQ Section with Accordion */}
      <Section id="faq" className="py-20 bg-background">
        <Container className="max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="text-primary border-primary/30">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Questions Students Ask Most
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about our student guidance process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-border/70 bg-card p-5 transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="flex w-full items-center justify-between text-left font-semibold text-foreground hover:text-primary transition-colors text-base md:text-lg"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pt-3 text-muted-foreground text-sm md:text-base leading-relaxed animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Social Proof */}
      <Testimonials />

      {/* CTA */}
      <CallToAction onBook={openBooking} />

      <Footer />

      {/* Booking Modal */}
      <Modal
        isOpen={isBookingOpen}
        onClose={closeBooking}
        title="Get Academic & Project Guidance"
        description="Share your project requirements, tech stack, and deadline. I'll get back to you promptly."
        className="sm:max-w-3xl"
      >
        <BookingWizard onClose={closeBooking} />
      </Modal>
    </main>
  )
}
