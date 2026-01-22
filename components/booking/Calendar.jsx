"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"

export function Calendar({ selectedDate, onSelect, className }) {
    const [currentMonth, setCurrentMonth] = React.useState(new Date())

    // Helpers
    const getDaysInMonth = (date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const days = new Date(year, month + 1, 0).getDate()
        return Array.from({ length: days }, (_, i) => new Date(year, month, i + 1))
    }

    const getFirstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    }

    const days = getDaysInMonth(currentMonth)
    const firstDay = getFirstDayOfMonth(currentMonth)
    const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
    }

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
    }

    const isSameDay = (d1, d2) => {
        return d1 && d2 && d1.toDateString() === d2.toDateString()
    }

    const isToday = (date) => {
        return isSameDay(date, new Date())
    }

    return (
        <div className={cn("p-4 bg-background border rounded-lg shadow-sm", className)}>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <button onClick={prevMonth} className="p-1 hover:bg-muted rounded text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <div className="font-semibold">
                    {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </div>
                <button onClick={nextMonth} className="p-1 hover:bg-muted rounded text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {weekDays.map((d) => (
                    <div key={d} className="text-xs text-muted-foreground font-medium py-1">
                        {d}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                ))}
                {days.map((date, i) => {
                    const isSelected = isSameDay(date, selectedDate)
                    const isCurrent = isToday(date)
                    // Disable past dates
                    const isDisabled = date < new Date(new Date().setHours(0, 0, 0, 0))

                    return (
                        <button
                            key={i}
                            disabled={isDisabled}
                            onClick={() => onSelect(date)}
                            className={cn(
                                "h-9 w-9 rounded-md flex items-center justify-center text-sm transition-colors",
                                isSelected ? "bg-primary text-primary-foreground font-bold shadow-sm" :
                                    isCurrent && !isSelected ? "border border-primary text-primary font-bold" :
                                        "hover:bg-muted/50 text-foreground",
                                isDisabled && "opacity-30 cursor-not-allowed hover:bg-transparent"
                            )}
                        >
                            {date.getDate()}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
