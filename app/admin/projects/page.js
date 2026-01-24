"use client"

import * as React from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { cn } from "@/lib/utils"

export default function ProjectsPage() {
  const [projects, setProjects] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [showAddForm, setShowAddForm] = React.useState(false)
  const [formData, setFormData] = React.useState({
      title: "",
      client_email: "",
      price: "",
      deadline: ""
  })

  React.useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects')
      if (res.ok) {
        const json = await res.json()
        setProjects(json.projects || [])
      }
    } catch (err) {
      console.error("Failed to fetch projects", err)
    } finally {
      setLoading(false)
    }
  }

  const handleCreate = async (e) => {
      e.preventDefault()
      try {
          const res = await fetch('/api/projects', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData)
          })
          if (res.ok) {
              fetchProjects()
              setShowAddForm(false)
              setFormData({ title: "", client_email: "", price: "", deadline: "" })
          }
      } catch (e) {
          console.error(e)
      }
  }

  const handleUpdate = async (id, field, value) => {
      // Optimistic update
      setProjects(prev => prev.map(p => p.id === id ? { ...p, [field]: value } : p))
      
      try {
           await fetch('/api/projects', {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ id, [field]: value })
          })
      } catch (e) {
          console.error(e)
          fetchProjects()
      }
  }

  return (
    <div className="p-6 md:p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-heading">Projects</h1>
          <p className="text-muted-foreground">Track active client work and deadlines.</p>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
            {showAddForm ? "Cancel" : "+ New Project"}
        </Button>
      </div>

      {showAddForm && (
          <div className="bg-muted/10 border rounded-xl p-6 animate-in slide-in-from-top-4">
              <h3 className="font-bold mb-4">Create New Project</h3>
              <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Project Title (e.g. E-commerce MVP)" 
                    value={formData.title} 
                    onChange={e => setFormData({...formData, title: e.target.value})} 
                    required 
                  />
                  <Input 
                    placeholder="Client Email" 
                    type="email"
                    value={formData.client_email} 
                    onChange={e => setFormData({...formData, client_email: e.target.value})} 
                  />
                  <Input 
                    placeholder="Price ($)" 
                    type="number"
                    value={formData.price} 
                    onChange={e => setFormData({...formData, price: e.target.value})} 
                  />
                  <Input 
                    type="date"
                    value={formData.deadline} 
                    onChange={e => setFormData({...formData, deadline: e.target.value})} 
                  />
                  <div className="md:col-span-2">
                       <Button type="submit" className="w-full">Create Project</Button>
                  </div>
              </form>
          </div>
      )}

      <div className="bg-background border rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-muted-foreground font-medium">
              <tr>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Deadline</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Payment</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {loading ? (
                <tr><td colSpan={5} className="p-8 text-center text-muted-foreground">Loading...</td></tr>
              ) : projects.length === 0 ? (
                <tr><td colSpan={5} className="p-8 text-center text-muted-foreground">No projects yet. Create one!</td></tr>
              ) : (
                projects.map((project) => (
                  <tr key={project.id} className="hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4 font-medium">
                        {project.title}
                        <div className="text-xs text-muted-foreground">${project.price}</div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{project.client_email || "—"}</td>
                    <td className="px-6 py-4">
                        {project.deadline ? new Date(project.deadline).toLocaleDateString() : "No deadline"}
                    </td>
                    <td className="px-6 py-4">
                      <select 
                        value={project.status}
                        onChange={(e) => handleUpdate(project.id, 'status', e.target.value)}
                        className={cn(
                            "text-xs font-semibold px-2 py-1 rounded-full border bg-transparent cursor-pointer outline-none",
                            project.status === 'active' ? "bg-blue-50 text-blue-700 border-blue-200" :
                            project.status === 'delivered' ? "bg-purple-50 text-purple-700 border-purple-200" :
                            "bg-green-50 text-green-700 border-green-200"
                        )}
                      >
                          <option value="active">Active</option>
                          <option value="delivered">Delivered</option>
                          <option value="completed">Completed</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                        <select 
                        value={project.payment_status}
                        onChange={(e) => handleUpdate(project.id, 'payment_status', e.target.value)}
                        className={cn(
                            "text-xs font-semibold px-2 py-1 rounded-full border bg-transparent cursor-pointer outline-none",
                            project.payment_status === 'paid' ? "bg-green-50 text-green-700 border-green-200" :
                            project.payment_status === 'partial' ? "bg-yellow-50 text-yellow-700 border-yellow-200" :
                            "bg-red-50 text-red-700 border-red-200"
                        )}
                      >
                          <option value="unpaid">Unpaid</option>
                          <option value="partial">Partial</option>
                          <option value="paid">Paid</option>
                      </select>
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
