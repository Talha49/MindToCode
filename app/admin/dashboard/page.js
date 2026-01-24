"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const [data, setData] = React.useState({ bookings: [] })
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    // Fetch data on mount
    const fetchData = async () => {
      try {
        const res = await fetch('/api/bookings')
        if (res.ok) {
          const json = await res.json()
          setData({ bookings: json.bookings || [] })
        }
      } catch (err) {
        console.error("Dashboard fetch error:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Calculate Simple Stats
  const totalBookings = data.bookings.length
  const pendingBookings = data.bookings.filter(b => b.status === 'pending').length
  const completedBookings = data.bookings.filter(b => b.status === 'completed').length

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="p-6 md:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-heading">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your agency's performance.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Bookings" value={totalBookings} icon="📅" description="All time consultations" />
        <StatCard title="Pending Requests" value={pendingBookings} icon="⏳" description="Needs attention" active />
        <StatCard title="Completed" value={completedBookings} icon="✅" description="Successful sessions" />
      </div>

      {/* Recent Activity */}
      <div className="bg-background border rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-lg font-bold">Recent Bookings</h2>
          <span className="text-sm text-muted-foreground">{totalBookings} total</span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-muted-foreground font-medium">
              <tr>
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Date & Time</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {data.bookings.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                    No bookings found yet.
                  </td>
                </tr>
              ) : (
                data.bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold">{booking.client_name}</div>
                      <div className="text-xs text-muted-foreground">{booking.client_email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {booking.service_type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div>{new Date(booking.booking_date).toLocaleDateString()}</div>
                      <div className="text-xs text-muted-foreground">{booking.booking_time}</div>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={booking.status} />
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-primary hover:underline font-medium">View</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// Sub-components
function StatCard({ title, value, icon, description, active }) {
  return (
    <div className={cn(
      "p-6 rounded-xl border bg-background shadow-sm",
      active && "border-primary/50 ring-1 ring-primary/20 bg-primary/5"
    )}>
      <div className="flex justify-between items-start mb-4">
        <div className="h-10 w-10 rounded-lg bg-muted/50 flex items-center justify-center text-xl">
          {icon}
        </div>
        {active && <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />}
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="font-medium text-foreground">{title}</div>
      <div className="text-xs text-muted-foreground mt-1">{description}</div>
    </div>
  )
}

function StatusBadge({ status }) {
  const styles = {
    pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
    confirmed: "bg-blue-100 text-blue-700 border-blue-200",
    completed: "bg-green-100 text-green-700 border-green-200",
    cancelled: "bg-red-100 text-red-700 border-red-200",
  }
  return (
    <span className={cn("px-2.5 py-1 rounded-full text-xs font-semibold border", styles[status] || styles.pending)}>
      {status ? status.charAt(0).toUpperCase() + status.slice(1) : 'Unknown'}
    </span>
  )
}

import { cn } from "@/lib/utils"
