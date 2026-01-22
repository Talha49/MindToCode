"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function TimeGrid({ selectedTime, onSelect, className }) {
    // Mock time slots generation (9 AM to 5 PM)
    const slots = [
        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
        "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
        "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
        "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
    ]

    return (
        <div className={cn("grid grid-cols-3 sm:grid-cols-4 gap-2", className)}>
            {slots.map((time) => (
                <button
                    key={time}
                    onClick={() => onSelect(time)}
                    className={cn(
                        "px-3 py-2 text-sm border rounded-md transition-all hover:border-primary",
                        selectedTime === time
                            ? "bg-primary/5 border-primary text-primary font-bold ring-1 ring-primary"
                            : "bg-background text-muted-foreground"
                    )}
                >
                    {time}
                </button>
            ))}
        </div>
    )
}
