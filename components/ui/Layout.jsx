import * as React from "react"
import { cn } from "@/lib/utils"

const Container = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8", className)}
        {...props}
    />
))
Container.displayName = "Container"

const Section = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
    const variants = {
        default: "bg-background py-16 md:py-24",
        muted: "bg-muted py-16 md:py-24",
        primary: "bg-primary text-primary-foreground py-16 md:py-24",
        dark: "bg-[#0B1120] text-white py-16 md:py-24", // Deep navy specific override if needed
    }

    return (
        <section
            ref={ref}
            className={cn(variants[variant], className)}
            {...props}
        />
    )
})
Section.displayName = "Section"

const Grid = React.forwardRef(({ className, cols = 1, gap = 6, ...props }, ref) => {
    // Basic responsive grid mapping
    const colStyles = {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    }

    // Gap mapping
    const gapStyles = {
        2: "gap-2",
        4: "gap-4",
        6: "gap-6",
        8: "gap-8",
        12: "gap-12"
    }

    return (
        <div
            ref={ref}
            className={cn("grid", colStyles[cols] || "grid-cols-1", gapStyles[gap] || "gap-6", className)}
            {...props}
        />
    )
})
Grid.displayName = "Grid"

export { Container, Section, Grid }
