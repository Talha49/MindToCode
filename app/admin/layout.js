"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  // If we are on the login page, don't show the dashboard shell
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const links = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
    { name: 'Leads', href: '/admin/leads', icon: '👥' },
    { name: 'Bookings', href: '/admin/bookings', icon: '📅' },
    { name: 'Projects', href: '/admin/projects', icon: '📁' },
  ];

  const handleLogout = async () => {
    // In a real app, hit an API to clear cookie. 
    // For now, simpler to just clear cookie client-side or use API
    document.cookie = 'admin_token=; Max-Age=0; path=/;';
    window.location.href = '/admin/login';
  };

  return (
    <div className="flex h-screen bg-muted/20">
      {/* Sidebar - Desktop */}
      <aside className="w-64 bg-background border-r hidden md:flex flex-col">
        <div className="p-6 border-b">
          <Link href="/" className="text-xl font-bold font-heading text-primary">
            MindToCode
          </Link>
          <span className="text-xs text-muted-foreground block mt-1">Admin Panel</span>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <span className="text-lg">{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t">
          <Button variant="outline" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50 border-red-200" onClick={handleLogout}>
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
