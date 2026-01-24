"use client"

import * as React from "react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export default function BookingsPage() {
  const [bookings, setBookings] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    try {
      const res = await fetch('/api/bookings')
      if (res.ok) {
        const json = await res.json()
        setBookings(json.bookings || [])
      }
    } catch (err) {
      console.error("Failed to fetch bookings", err)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusUpdate = async (id, newStatus, message = "") => {
      // Optimistic update
      setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b))

      try {
          const res = await fetch('/api/bookings', {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ id, status: newStatus, message })
          })
          if (!res.ok) throw new Error('Failed to update')
      } catch (err) {
          console.error(err)
          fetchBookings() // Revert on error
      }
  }

  // Modal State
  const [selectedBooking, setSelectedBooking] = React.useState(null);
  const [meetingMessage, setMeetingMessage] = React.useState("");

  const openAcceptModal = (booking) => {
      setSelectedBooking(booking);
      setMeetingMessage(`Hi ${booking.client_name},\n\nI'd love to take on this project. Here is the Google Meet link for our session:\n\n[PASTE LINK HERE]\n\nLooking forward to it!`);
  };

  const confirmAccept = async () => {
        if (!selectedBooking) return;
        await handleStatusUpdate(selectedBooking.id, 'confirmed', meetingMessage);
        setSelectedBooking(null);
  };

  return (
    <div className="p-6 md:p-8 space-y-8 relative">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-heading">Bookings</h1>
          <p className="text-muted-foreground">Manage your consultation schedule.</p>
        </div>
        <Button variant="outline" onClick={fetchBookings}>Refresh</Button>
      </div>

      <div className="bg-background border rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-muted-foreground font-medium">
              <tr>
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Schedule</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {loading ? (
                 <tr><td colSpan={5} className="p-8 text-center text-muted-foreground">Loading...</td></tr>
              ) : bookings.length === 0 ? (
                 <tr><td colSpan={5} className="p-8 text-center text-muted-foreground">No bookings found.</td></tr>
              ) : (
                bookings.map((booking) => (
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
                      <div className="font-medium">{new Date(booking.booking_date).toLocaleDateString()}</div>
                      <div className="text-xs text-muted-foreground">{booking.booking_time}</div>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={booking.status} />
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                        {booking.status === 'pending' && (
                            <>
                                <Button size="sm" className="h-7 text-xs bg-green-600 hover:bg-green-700" onClick={() => openAcceptModal(booking)}>Accept</Button>
                                <Button size="sm" variant="ghost" className="h-7 text-xs text-red-500 hover:bg-red-50 hover:text-red-600" onClick={() => handleStatusUpdate(booking.id, 'cancelled')}>Decline</Button>
                            </>
                        )}
                        {booking.status === 'confirmed' && (
                             <Button size="sm" variant="outline" className="h-7 text-xs" onClick={() => handleStatusUpdate(booking.id, 'completed')}>Mark Done</Button>
                        )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Acceptance Modal Helper */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-background border rounded-xl shadow-2xl p-6 w-full max-w-md space-y-4 animate-in zoom-in-95">
                <h3 className="text-xl font-bold">Confirm Booking</h3>
                <p className="text-muted-foreground text-sm">
                    Enter the Google Meet link or any message for the client. This will be sent via email.
                </p>
                <textarea 
                    className="w-full h-32 p-3 rounded-md border bg-muted/20 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    value={meetingMessage}
                    onChange={(e) => setMeetingMessage(e.target.value)}
                />
                <div className="flex justify-end gap-2">
                    <Button variant="ghost" onClick={() => setSelectedBooking(null)}>Cancel</Button>
                    <Button onClick={confirmAccept}>Send & Confirm</Button>
                </div>
            </div>
        </div>
      )}
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
