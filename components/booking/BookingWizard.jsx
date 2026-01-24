"use client"

import * as React from "react"
import { Calendar } from "./Calendar"
import { TimeGrid } from "./TimeGrid"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { cn } from "@/lib/utils"

export function BookingWizard({ onClose }) {
    const [step, setStep] = React.useState(1)
    const [data, setData] = React.useState({
        service: "",
        date: null,
        time: "",
        name: "",
        email: "",
        note: ""
    })

    const [loading, setLoading] = React.useState(false)
    const [success, setSuccess] = React.useState(false)
    const [bookedSlots, setBookedSlots] = React.useState([]) // NEW: Track booked slots

    // NEW: Fetch availability when date changes
    React.useEffect(() => {
        if (data.date) {
            const fetchAvailability = async () => {
                try {
                    // Format date as YYYY-MM-DD for API
                    // Note: Ensure timezone consistency. Using local string for simplicity here.
                    // Ideally use ISO string or a library like date-fns
                    const dateStr = data.date.toLocaleDateString('en-CA'); // YYYY-MM-DD
                    const res = await fetch(`/api/availability?date=${dateStr}`);
                    if (res.ok) {
                        const json = await res.json();
                        setBookedSlots(json.bookedTimes || []);
                    }
                } catch (e) {
                    console.error("Failed to check availability", e);
                }
            };
            fetchAvailability();
        } else {
            setBookedSlots([]);
        }
    }, [data.date]);

    const steps = [
        { title: "Service", description: "Select the type of help you need." },
        { title: "Date", description: "Choose a slot." },
        { title: "Details", description: "Tell us a bit about your project." },
    ]

    const handleNext = () => {
        if (step < 3) setStep(step + 1)
    }

    const handleBack = () => {
        if (step > 1) setStep(step - 1)
    }

    const handleSubmit = async () => {
        setLoading(true)

        try {
            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            if (response.ok) {
                setSuccess(true)
            } else {
                console.error("Booking failed")
                // Optional: Handle error state here
            }
        } catch (e) {
            console.error("Error submitting booking:", e)
        } finally {
            setLoading(false)
        }
    }

    if (success) {
        return (
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                </div>
                <h3 className="text-2xl font-bold font-heading">Booking Confirmed!</h3>
                <p className="text-muted-foreground max-w-xs">
                    Check your email for the meeting link. We look forward to realizing your project.
                </p>
                <Button onClick={onClose} className="mt-6">Back to Site</Button>
            </div>
        )
    }

    return (
        <div className="w-full max-w-3xl mx-auto" >
            {/* Progress Bar (Sleek) */}
            < div className="relative mb-12 px-4" >
                <div className="absolute top-1/2 left-0 w-full h-1 bg-muted rounded-full -z-10" />
                <div
                    className="absolute top-1/2 left-0 h-1 bg-primary rounded-full -z-10 transition-all duration-500 ease-out"
                    style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                />

                <div className="flex justify-between w-full">
                    {steps.map((s, i) => (
                        <div key={i} className="flex flex-col items-center group cursor-default">
                            <div className={cn(
                                "h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ring-[6px] ring-background",
                                step > i + 1 ? "bg-primary text-primary-foreground scale-110" :
                                    step === i + 1 ? "bg-primary text-primary-foreground scale-125 shadow-lg shadow-primary/30" :
                                        "bg-muted text-muted-foreground"
                            )}>
                                {step > i + 1 ? "✓" : i + 1}
                            </div>
                            <span className={cn(
                                "absolute -bottom-8 text-xs font-medium whitespace-nowrap transition-colors duration-300",
                                step === i + 1 ? "text-primary" : "text-muted-foreground"
                            )}>
                                {s.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div >

            <div className="min-h-[420px] pt-4">
                {step === 1 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                        <div className="text-center space-y-2 mb-8">
                            <h3 className="text-2xl font-bold font-heading">What can we help you with?</h3>
                            <p className="text-muted-foreground">Select a service to get started.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { name: 'Technical Guidance', desc: '15 Min Free • Discovery Call', icon: "💡" },
                                { name: 'MVP Development', desc: '30 Min • Project Planning', icon: "🚀" },
                                { name: 'Code Review', desc: '30 Min • Quality Audit', icon: "🔍" },
                                { name: 'Quick Fix', desc: '15 Min Free • Troubleshooting', icon: "🔧" }
                            ].map((s) => (
                                <button
                                    key={s.name}
                                    onClick={() => setData({ ...data, service: s.name })}
                                    className={cn(
                                        "relative group flex items-start gap-4 p-5 rounded-xl border text-left transition-all duration-300",
                                        data.service === s.name
                                            ? "border-primary bg-primary/5 shadow-md ring-1 ring-primary/20"
                                            : "border-border/50 bg-background/50 hover:border-primary/50 hover:bg-muted/30 hover:shadow-lg hover:-translate-y-0.5"
                                    )}
                                >
                                    <div className={cn(
                                        "h-10 w-10 shrink-0 rounded-lg flex items-center justify-center text-lg transition-colors",
                                        data.service === s.name ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                                    )}>
                                        {s.icon}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-lg">{s.name}</div>
                                        <div className="text-sm text-muted-foreground mt-1">{s.desc}</div>
                                    </div>

                                    {/* Selection Indicator */}
                                    <div className={cn(
                                        "absolute top-4 right-4 h-4 w-4 rounded-full border border-primary/30 flex items-center justify-center transition-all",
                                        data.service === s.name ? "bg-primary border-primary" : "opacity-0 group-hover:opacity-100"
                                    )}>
                                        {data.service === s.name && <div className="h-1.5 w-1.5 bg-white rounded-full" />}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="flex flex-col md:flex-row gap-8 animate-in fade-in slide-in-from-right-8 duration-500">
                        <div className="flex-1 space-y-4">
                            <h3 className="font-semibold text-lg flex items-center gap-2">
                                <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">1</span>
                                Pick a Date
                            </h3>
                            <div className="border rounded-xl p-4 bg-background shadow-sm">
                                <Calendar selectedDate={data.date} onSelect={(d) => setData({ ...data, date: d })} className="w-full border-0 shadow-none p-0" />
                            </div>
                        </div>
                        <div className="flex-1 space-y-4">
                            <h3 className="font-semibold text-lg flex items-center gap-2">
                                <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">2</span>
                                Select Time
                            </h3>
                            <div className="border rounded-xl p-6 bg-background shadow-sm min-h-[300px]">
                                {data.date ? (
                                    <>
                                        <div className="text-sm font-medium text-muted-foreground mb-4 text-center">
                                            Available slots for {data.date.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
                                        </div>
                                        <TimeGrid
                                            selectedTime={data.time}
                                            onSelect={(t) => setData({ ...data, time: t })}
                                            disabledSlots={bookedSlots} // NEW prop
                                        />
                                    </>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-3 opacity-60">
                                        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-2xl">📅</div>
                                        <p>Select a date first</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="animate-in fade-in slide-in-from-right-8 duration-500 max-w-lg mx-auto">
                        <div className="text-center space-y-2 mb-8">
                            <h3 className="text-2xl font-bold font-heading">Almost There!</h3>
                            <p className="text-muted-foreground">Just a few details to confirm your booking.</p>
                        </div>

                        <div className="space-y-5 bg-background border p-6 rounded-xl shadow-sm">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium ml-1">Full Name</label>
                                    <Input
                                        placeholder="John Doe"
                                        value={data.name}
                                        onChange={(e) => setData({ ...data, name: e.target.value })}
                                        className="h-11 bg-muted/30"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium ml-1">Email Address</label>
                                    <Input
                                        placeholder="john@example.com"
                                        value={data.email}
                                        onChange={(e) => setData({ ...data, email: e.target.value })}
                                        className="h-11 bg-muted/30"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Project Brief <span className="text-muted-foreground font-normal">(Optional)</span></label>
                                <textarea
                                    className="flex min-h-[100px] w-full rounded-lg border border-input bg-muted/30 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-shadow focus:border-primary/50"
                                    placeholder="I'm looking to build a..."
                                    value={data.note}
                                    onChange={(e) => setData({ ...data, note: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-between text-sm">
                            <div className="flex flex-col">
                                <span className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Service</span>
                                <span className="font-bold text-foreground">{data.service}</span>
                            </div>
                            <div className="h-8 w-px bg-primary/10 mx-4" />
                            <div className="flex flex-col text-right">
                                <span className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Time</span>
                                <span className="font-bold text-foreground">{data.date?.toLocaleDateString()} • {data.time}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex justify-between items-center mt-8 pt-6 border-t border-border/50">
                <Button
                    variant="ghost"
                    onClick={handleBack}
                    disabled={step === 1}
                    className="text-muted-foreground hover:text-foreground"
                >
                    Back
                </Button>

                <div className="flex gap-2">
                    {step < 3 && (
                        <div className="text-xs text-muted-foreground flex items-center mr-2">
                            Press <kbd className="mx-1 px-1 bg-muted rounded border text-[10px]">Enter</kbd> to continue
                        </div>
                    )}
                    <Button
                        size="lg"
                        onClick={step === 3 ? handleSubmit : handleNext}
                        disabled={loading || (step === 1 && !data.service) || (step === 2 && (!data.date || !data.time))}
                        className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all font-semibold"
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </>
                        ) : step === 3 ? "Confirm Booking" : "Next Step"}
                    </Button>
                </div>
            </div>
        </div >
    )
}
