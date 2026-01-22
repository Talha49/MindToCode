"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Modal = ({
    isOpen,
    onClose,
    title,
    description,
    children,
    className,
}) => {
    // Lock body scroll
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm animate-in fade-in-0"
                onClick={onClose}
            />

            {/* Sidebar */}
            <aside
                role="dialog"
                aria-modal="true"
                className={cn(
                    "fixed right-0 top-0 z-50 h-full w-full max-w-md",
                    "bg-background border-l border-border/50 shadow-2xl",
                    "animate-in slide-in-from-right duration-300",
                    "flex flex-col",
                    className
                )}
            >
                {/* Header */}
                <div className="relative border-b border-border/50 px-6 py-5">
                    {title && (
                        <h2 className="text-xl font-bold font-heading tracking-tight">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="mt-1 text-sm text-muted-foreground">
                            {description}
                        </p>
                    )}

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 h-8 w-8 rounded-full bg-muted/50 flex items-center justify-center opacity-70 transition-all hover:opacity-100 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        <span className="sr-only">Close</span>
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-6 py-6">
                    {children}
                </div>
            </aside>
        </>
    )
}

export { Modal }
