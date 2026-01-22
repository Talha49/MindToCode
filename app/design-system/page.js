import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen p-8 space-y-12 bg-gray-50 dark:bg-gray-900/20">
      
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold font-heading text-foreground">Design System</h1>
        <p className="text-muted-foreground max-w-2xl">
          Core components for MindToCode. All built from scratch with zero UI libraries.
        </p>
      </div>

      {/* Buttons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">icon</Button>
        </div>
      </section>

      {/* Inputs */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Inputs</h2>
        <div className="grid gap-4 max-w-sm">
          <Input type="email" placeholder="Email address" />
          <Input type="password" placeholder="Password" />
          <Input disabled type="text" placeholder="Disabled input" />
        </div>
      </section>

      {/* Badges */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Badges</h2>
        <div className="flex gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Cards</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <Card>
            <CardHeader>
              <CardTitle>Project Setup</CardTitle>
              <CardDescription>Initial phase of development</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Standard card content area. Used for grouping related information.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Action</Button>
            </CardFooter>
          </Card>

          <Card className="glass relative overflow-hidden">
             <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 to-accent/5 pointer-events-none" />
            <CardHeader className="relative z-10">
              <CardTitle>Glassmorphism Card</CardTitle>
              <CardDescription>Premium effect for highlights</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <p>This card uses our custom .glass utility directly in CSS. Looks great on complex backgrounds.</p>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button variant="outline" className="w-full">Explore</Button>
            </CardFooter>
          </Card>

        </div>
      </section>

      {/* Layout Components */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Layout Components</h2>
        <div className="space-y-4">
            <div className="p-4 border rounded-md bg-white dark:bg-black/20">
                <p className="text-sm text-muted-foreground mb-2">Grid Component (3 Columns)</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-primary/10 p-4 rounded text-center">Col 1</div>
                    <div className="bg-primary/10 p-4 rounded text-center">Col 2</div>
                    <div className="bg-primary/10 p-4 rounded text-center">Col 3</div>
                </div>
            </div>
            <div className="p-4 border rounded-md bg-white dark:bg-black/20">
                <p className="text-sm text-muted-foreground mb-2">Container Example</p>
                <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 border-2 border-dashed border-primary/20 bg-primary/5 py-4 text-center">
                    Confined Content (Max-Width)
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}
