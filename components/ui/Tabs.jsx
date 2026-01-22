"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Tabs = ({ defaultValue, children, className }) => {
    const [activeTab, setActiveTab] = React.useState(defaultValue)

    const contextValue = React.useMemo(() => ({ activeTab, setActiveTab }), [activeTab])

    return (
        <div className={cn("w-full", className)}>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { context: contextValue })
                }
                return child
            })}
        </div>
    )
}

const TabsList = ({ children, className, context }) => {
    // Inject context into children triggers
    return (
        <div className={cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className)}>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        isActive: child.props.value === context?.activeTab,
                        onClick: () => context?.setActiveTab(child.props.value)
                    })
                }
                return child
            })}
        </div>
    )
}

const TabsTrigger = ({ value, children, className, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                isActive ? "bg-background text-foreground shadow-sm" : "hover:bg-background/50 hover:text-foreground",
                className
            )}
        >
            {children}
        </button>
    )
}

const TabsContent = ({ value, children, className, context }) => {
    if (context?.activeTab !== value) return null

    return (
        <div
            className={cn(
                "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-in fade-in-50 zoom-in-95 duration-200",
                className
            )}
        >
            {children}
        </div>
    )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
