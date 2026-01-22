import Link from "next/link"
import { Container } from "@/components/ui/Layout"

export function Footer() {
    return (
        <footer className="bg-background border-t py-12 md:py-16">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1 space-y-4">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl font-heading">
                            <div className="h-6 w-6 bg-gradient-to-br from-primary to-accent rounded md:rounded-lg flex items-center justify-center text-white text-xs">
                                M
                            </div>
                            MindToCode
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Technical guidance and digital solutions for the next generation of builders.
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Services</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#services" className="hover:text-primary transition-colors">Technical Guidance</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Code Review</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#process" className="hover:text-primary transition-colors">How it Works</Link></li>
                            <li><Link href="#reviews" className="hover:text-primary transition-colors">Success Stories</Link></li>
                            <li><Link href="/book" className="hover:text-primary transition-colors">Book a Call</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Connect</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="mailto:contact@mindtocode.com" className="hover:text-primary transition-colors">contact@mindtocode.com</a></li>
                            {/* Social Icons Placeholder */}
                            <li className="flex gap-4 pt-2">
                                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                </div>
                                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© 2026 MindToCode. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:underline">Privacy Policy</Link>
                        <Link href="#" className="hover:underline">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
