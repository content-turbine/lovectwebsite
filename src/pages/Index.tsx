import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, FileText, Video, Mail, ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: FileText,
      title: "Technical Writing",
      description: "Clear, concise documentation and tutorials that developers actually want to read.",
    },
    {
      icon: Code,
      title: "Code Examples",
      description: "Production-ready code samples and best practices for modern development.",
    },
    {
      icon: Video,
      title: "Video Content",
      description: "Engaging technical videos that break down complex concepts.",
    },
  ];

  const benefits = [
    "Developer-focused content that converts",
    "SEO-optimized technical articles",
    "Fast turnaround times",
    "Unlimited revisions",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">TechContent</span>
          </div>
          <Button variant="outline" size="sm">
            <Mail className="h-4 w-4 mr-2" />
            Contact
          </Button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Technical Content That
              <span className="text-primary block">Developers Trust</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Expert technical writing, tutorials, and documentation that helps your product stand out in the developer ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Portfolio
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What I Offer</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <service.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Work With Me</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your Content?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Let's discuss how I can help you create technical content that resonates with your developer audience.
            </p>
            <Button size="lg" variant="secondary" className="gap-2">
              <Mail className="h-4 w-4" />
              Get in Touch
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2026 TechContent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
