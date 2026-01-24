"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function TimeGrid({ selectedTime, onSelect, disabledSlots = [], className }) {
    const times = [
        "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
        "05:00 PM", "06:00 PM"
    ]

    return (
        <div className={cn("grid grid-cols-2 gap-3 max-h-[240px] overflow-y-auto p-1 custom-scrollbar", className)}>
            {times.map((time) => {
                const isBooked = disabledSlots.includes(time);
                return (
                    <button
                        key={time}
                        onClick={() => !isBooked && onSelect(time)}
                        disabled={isBooked}
                        className={cn(
                            "py-2 px-3 rounded-lg text-sm border transition-all",
                            selectedTime === time
                                ? "bg-primary text-primary-foreground border-primary"
                                : isBooked
                                    ? "bg-muted/50 text-muted-foreground opacity-50 cursor-not-allowed border-transparent decoration-slice line-through"
                                    : "hover:border-primary/50 hover:bg-primary/5 bg-background"
                        )}
                    >
                        {time} {isBooked && "(Booked)"}
                    </button>
                )
            })}
        </div>
    )
}
