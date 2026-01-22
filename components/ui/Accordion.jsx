"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Accordion = ({ items, className }) => {
    const [openIndex, setOpenIndex] = React.useState(null)

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className={cn("w-full space-y-2", className)}>
            {items.map((item, index) => (
                <div key={index} className="border rounded-lg bg-card/50 overflow-hidden">
                    <button
                        onClick={() => toggleItem(index)}
                        className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-medium transition-all hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                        <span>{item.title}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={cn("h-4 w-4 shrink-0 transition-transform duration-200", openIndex === index && "rotate-180")}
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </button>
                    <div
                        className={cn(
                            "grid transition-all duration-300 ease-in-out",
                            openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        )}
                    >
                        <div className="overflow-hidden">
                            <div className="px-4 pb-4 pt-0 text-sm text-muted-foreground bg-card/50">
                                {item.content}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export { Accordion }
