import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Search, 
  Users, 
  FileText, 
  History, 
  Server, 
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Lock,
  Network,
  ScanLine,
  AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckPattern } from "@/components/ui/check-pattern";
import { useToast } from "@/hooks/use-toast";
import heroBg from "@/assets/hero-bg.png";
import dashboardImg from "@/assets/dashboard-screenshot.png";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  bankName: z.string().min(2, "Bank name is required"),
  role: z.string().min(1, "Please select your role"),
  assetSize: z.string().min(1, "Please select asset size"),
  painPoint: z.string().optional(),
});

const features = [
  {
    icon: ScanLine,
    title: "Smart Detection Zones",
    description: "Auto-identifies amount, signature, and MICR lines. Bounding boxes highlight anomalies instantly."
  },
  {
    icon: Network,
    title: "Network Intelligence",
    description: "Real-time payee hash matching against known fraud patterns. See matches from other institutions."
  },
  {
    icon: History,
    title: "Side-by-Side Comparison",
    description: "Split-screen view with historical checks. Spot signature variances at a glance."
  },
  {
    icon: Users,
    title: "Dual Control Workflows",
    description: "Enforce second approvals for high-value or high-risk items. Configurable thresholds."
  },
  {
    icon: FileText,
    title: "Rich Context Data",
    description: "See account tenure, average balance, and deviation from normal check behavior right in the console."
  },
  {
    icon: Server,
    title: "Core Integration",
    description: "Works with your existing core. Flat file, SFTP, or API support for seamless data flow."
  }
];

const painPoints = [
  {
    title: "Inconsistent Decisions",
    description: "Different reviewers, different standards. Examiners notice when policies aren't applied uniformly across your team."
  },
  {
    title: "No Audit Trail",
    description: "When regulators ask why you approved that check, can you show them? Spreadsheets don't hold up in an audit."
  },
  {
    title: "Drowning in Volume",
    description: "Your team reviews hundreds of items daily with spreadsheets and gut feel. It's slow, risky, and error-prone."
  }
];

export default function Home() {
  const { toast } = useToast();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      bankName: "",
      role: "",
      assetSize: "",
      painPoint: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
  try {
    const response = await fetch('https://formspree.io/f/xvzknjvw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });
    if (response.ok) {
      toast({
        title: "Request Received",
        description: "We'll be in touch shortly to schedule your demo.",
      });
      form.reset();
    } else {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    }
  } catch (error) {
    toast({
      title: "Something went wrong",
      description: "Please try again or email us directly.",
      variant: "destructive",
    });
  }
}

  const scrollToDemo = () => {
    const element = document.getElementById("demo-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary/20 selection:text-secondary">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border/40" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center">
              <ShieldCheck className="text-white w-5 h-5" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? "text-primary" : "text-white"}`}>
              CheckGuard
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: 'smooth'})} className={`text-sm font-medium hover:text-secondary transition-colors ${scrolled ? "text-foreground" : "text-white/90"}`}>
              Features
            </button>
            <button onClick={() => document.getElementById("trust")?.scrollIntoView({ behavior: 'smooth'})} className={`text-sm font-medium hover:text-secondary transition-colors ${scrolled ? "text-foreground" : "text-white/90"}`}>
              Compliance
            </button>
            <Button 
              onClick={scrollToDemo}
              variant={scrolled ? "default" : "secondary"}
              className={scrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary hover:bg-white/90"}
            >
              Request Demo
            </Button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={scrolled ? "text-foreground" : "text-white"} />
            ) : (
              <Menu className={scrolled ? "text-foreground" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-border p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
            <button 
              onClick={() => {
                document.getElementById("features")?.scrollIntoView({ behavior: 'smooth'});
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 font-medium text-foreground"
            >
              Features
            </button>
            <button 
              onClick={() => {
                document.getElementById("trust")?.scrollIntoView({ behavior: 'smooth'});
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 font-medium text-foreground"
            >
              Compliance
            </button>
            <Button onClick={() => { scrollToDemo(); setMobileMenuOpen(false); }} className="w-full">
              Request Demo
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary text-white">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-background" />
          <CheckPattern />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight mb-6 leading-tight text-white">
              Check Review That <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
                Actually Works
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Stop drowning in manual check reviews. CheckGuard gives your ops team the speed of automation with the control regulators demand.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={scrollToDemo}
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white min-w-[200px] h-12 text-base shadow-lg shadow-secondary/20 transition-all hover:-translate-y-1"
              >
                Request Demo <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-white/20 text-white hover:bg-white/10 min-w-[200px] h-12 text-base backdrop-blur-sm"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 -mt-32 relative z-20">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-primary">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white border-y border-border/40 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-display">
                Automation with Oversight
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                CheckGuard is a <span className="text-secondary font-semibold">human-in-the-loop</span> check review console built specifically for community banks. Your team makes every decision—we just make those decisions faster, more consistent, and audit-ready.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="absolute inset-0 bg-secondary/10 transform scale-105 rounded-xl blur-2xl" />
            <div className="relative rounded-xl border border-border shadow-2xl overflow-hidden bg-background">
              <img 
                src={dashboardImg} 
                alt="CheckGuard Dashboard showing side-by-side check comparison and network intelligence" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-center">
              <div className="p-4 bg-background rounded-lg border border-border/50 shadow-sm">
                <div className="font-bold text-2xl text-primary mb-1">2.4s</div>
                <div className="text-sm text-muted-foreground">Avg Review Time</div>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border/50 shadow-sm">
                <div className="font-bold text-2xl text-secondary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Audit Trail</div>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border/50 shadow-sm">
                <div className="font-bold text-2xl text-primary mb-1">Any Core</div>
                <div className="text-sm text-muted-foreground">Integration</div>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border/50 shadow-sm">
                <div className="font-bold text-2xl text-secondary mb-1">Secure</div>
                <div className="text-sm text-muted-foreground">Architecture</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-background relative overflow-hidden">
        <CheckPattern />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 font-display">
              Designed for Operations
            </h2>
            <p className="text-muted-foreground text-lg">Everything your team needs to review checks efficiently.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white p-8 rounded-xl border border-border/60 hover:border-secondary/40 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Enterprise Security,<br />
                <span className="text-gray-300">Community Bank Scale</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Built for community banks under $10B that demand enterprise-grade compliance. We deliver the rigorous controls regulators expect, right-sized for your operations.
              </p>
              
              <div className="space-y-4">
                {[
                  "FFIEC-aligned controls",
                  "BSA/AML workflow support",
                  "Multi-tenant isolation"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-secondary rounded-full p-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative">
              <Lock className="w-12 h-12 text-white/20 absolute top-8 right-8" />
              <div className="space-y-6">
                <div className="h-2 w-1/3 bg-white/20 rounded animate-pulse" />
                <div className="space-y-3">
                  <div className="h-2 w-full bg-white/10 rounded" />
                  <div className="h-2 w-5/6 bg-white/10 rounded" />
                  <div className="h-2 w-4/6 bg-white/10 rounded" />
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-8 bg-secondary/50 rounded-full" />
                    <div className="h-2 w-20 bg-white/20 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section id="demo-form" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="overflow-hidden border-border shadow-xl">
            <div className="bg-primary p-8 text-white text-center">
              <h2 className="text-3xl font-bold font-display mb-2">See CheckGuard in Action</h2>
              <p className="text-blue-100">30-minute demo tailored to your bank's workflow.</p>
            </div>
            <CardContent className="p-8 md:p-12 bg-white">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work Email</FormLabel>
                          <FormControl>
                            <Input placeholder="jane@bankname.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="bankName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bank Name</FormLabel>
                          <FormControl>
                            <Input placeholder="First Community Bank" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Role</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="ops">COO / Operations</SelectItem>
                              <SelectItem value="bsa">BSA / Compliance</SelectItem>
                              <SelectItem value="it">IT / Technology</SelectItem>
                              <SelectItem value="exec">Executive Leadership</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="assetSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Approximate Asset Size</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select asset size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="under500">Under $500M</SelectItem>
                            <SelectItem value="500to1B">$500M - $1B</SelectItem>
                            <SelectItem value="1Bto5B">$1B - $5B</SelectItem>
                            <SelectItem value="5Bto10B">$5B - $10B</SelectItem>
                            <SelectItem value="over10B">Over $10B</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="painPoint"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Pain Point <span className="text-muted-foreground font-normal">(Optional)</span></FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="What's driving you to look at this?" 
                            className="resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg h-12 shadow-lg hover:shadow-xl transition-all">
                    Request My Demo
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    No pressure, no 47-email sales sequence.
                  </p>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <ShieldCheck className="w-6 h-6 text-secondary" />
              <span className="text-xl font-bold tracking-tight">CheckGuard</span>
            </div>
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center md:text-left">
            <p className="text-sm text-gray-500 mb-2">
              © 2025 ClearLedger Technologies, LLC. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              CheckGuard is not a replacement for your compliance program. All decisions remain with your qualified personnel.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
