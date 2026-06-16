"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Laptop, Shield, Brain, Cloud, Database, BarChart3, Search, Megaphone, HelpCircle, Coins, Factory, Truck, Activity } from "lucide-react";

const serviceCategories = [
  {
    title: "Development & Design",
    items: [
      { name: "Web Development", href: "/services/web-development", desc: "React, Next.js, Node.js builds", icon: Laptop },
      { name: "Mobile App Development", href: "/services/mobile-app-development", desc: "iOS, Android native & hybrid", icon: Laptop },
      { name: "UI/UX Design", href: "/services/ui-ux-design", desc: "Figma design systems", icon: Laptop },
      { name: "Branding Services", href: "/services/branding", desc: "Identity & logo engineering", icon: Laptop },
    ]
  },
  {
    title: "Enterprise Solutions",
    items: [
      { name: "Custom ERP Solutions", href: "/services/erp-solutions", desc: "Integrated operational hubs", icon: Database },
      { name: "Custom CRM Solutions", href: "/services/crm-solutions", desc: "Salesforce & HubSpot setups", icon: Database },
      { name: "IT Consulting", href: "/services/it-consulting", desc: "Planning & audits roadmap", icon: HelpCircle },
    ]
  },
  {
    title: "AI & Infrastructure",
    items: [
      { name: "AI & ML Integration", href: "/services/ai-ml", desc: "Custom LLMs & RAG systems", icon: Brain },
      { name: "Cloud Infrastructure", href: "/services/cloud-infrastructure", desc: "High-scale multi-region cloud", icon: Cloud },
      { name: "DevOps & CI/CD", href: "/services/devops", desc: "Automated release pipelines", icon: Cloud },
      { name: "Cybersecurity", href: "/services/cybersecurity", desc: "Zero-trust protection security", icon: Shield },
      { name: "Hosting & Gateways", href: "/services/hosting", desc: "Edge hosting & gateway systems", icon: Cloud },
    ]
  },
  {
    title: "Intelligence & Growth",
    items: [
      { name: "Data BI & Analytics", href: "/services/data-analytics", desc: "Data warehousing & BI boards", icon: BarChart3 },
      { name: "SEO Services", href: "/services/seo", desc: "Technical search optimization", icon: Search },
      { name: "Google Ads", href: "/services/google-ads", desc: "Programmatic acquisition", icon: Megaphone },
      { name: "Digital Marketing", href: "/services/digital-marketing", desc: "Lifecycle automation email", icon: Megaphone },
    ]
  }
];

const industryItems = [
  { name: "FinTech", href: "/industries/fintech", desc: "Secure trading & analytics", icon: Coins },
  { name: "Manufacturing", href: "/industries/manufacturing", desc: "Modern IoT & ERP", icon: Factory },
  { name: "Logistics", href: "/industries/logistics", desc: "Dynamic route tracking hubs", icon: Truck },
  { name: "Healthcare", href: "/industries/healthcare", desc: "Secure healthcare record networks", icon: Activity }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"services" | "industries" | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    const handle = setTimeout(() => {
      setMobileMenuOpen(false);
      setActiveMenu(null);
    }, 0);
    return () => clearTimeout(handle);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex justify-between items-center px-margin-mobile md:px-6 lg:px-8 xl:px-margin-desktop border-b border-outline-variant/30 bg-surface/95 dark:bg-primary/95 backdrop-blur-md shadow-sm ${
          isScrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"
        }`}
      >
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo/ICADLogo-02.png"
                alt="ICAD Technologies Logo"
                width={200}
                height={48}
                className="h-9 lg:h-11 w-auto object-contain group-hover:scale-102 transition-transform duration-300"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-xs lg:gap-sm xl:gap-md">
              {/* Services Menu Trigger */}
              <div
                onMouseEnter={() => setActiveMenu("services")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 text-[11px] lg:text-[12px] xl:text-[13px] font-bold uppercase tracking-wider py-4 text-on-surface dark:text-on-primary hover:text-secondary dark:hover:text-secondary-fixed transition-colors group">
                  Services
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
 
                {/* Services Mega Menu */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-[100%] w-[900px] bg-white border border-outline rounded p-md grid grid-cols-4 gap-md z-50 dark:bg-primary-container transition-all duration-300 ease-out origin-top before:content-[''] before:absolute before:left-0 before:right-0 before:top-[-16px] before:h-[20px] before:z-[-1] before:bg-transparent ${
                    activeMenu === "services"
                      ? "opacity-100 translate-y-2 pointer-events-auto scale-100"
                      : "opacity-0 translate-y-0 pointer-events-none scale-95"
                  }`}
                >
                  {serviceCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-sm">
                      <h5 className="text-[10px] font-mono font-bold text-primary dark:text-on-primary-container border-b border-outline-variant/30 pb-xs uppercase tracking-wider">
                        {cat.title}
                      </h5>
                      <ul className="space-y-xs">
                        {cat.items.map((item, itemIdx) => {
                          const Icon = item.icon;
                          return (
                            <li key={itemIdx}>
                              <Link
                                href={item.href}
                                className="group/item flex items-start gap-2 p-2 rounded-lg border border-transparent hover:border-outline-variant hover:bg-surface-container-low/40 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] dark:hover:bg-primary/10 transition-all duration-300"
                              >
                                <Icon className="w-4 h-4 text-secondary shrink-0 mt-[3px] group-hover/item:translate-x-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                                <div>
                                  <div className="text-label-sm font-bold text-on-surface dark:text-on-primary group-hover/item:text-secondary transition-colors duration-200">
                                    {item.name}
                                  </div>
                                  <div className="text-[11px] text-on-surface-variant dark:text-on-primary-container/80">
                                    {item.desc}
                                  </div>
                                </div>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
 
              {/* Industries Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu("industries")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 text-[11px] lg:text-[12px] xl:text-[13px] font-bold uppercase tracking-wider py-4 text-on-surface dark:text-on-primary hover:text-secondary dark:hover:text-secondary-fixed transition-colors group">
                  Industries
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
 
                {/* Industries Dropdown */}
                <div
                  className={`absolute left-0 top-[100%] w-64 bg-white border border-outline rounded p-sm space-y-xs z-50 dark:bg-primary-container transition-all duration-300 ease-out origin-top before:content-[''] before:absolute before:left-0 before:right-0 before:top-[-16px] before:h-[20px] before:z-[-1] before:bg-transparent ${
                    activeMenu === "industries"
                      ? "opacity-100 translate-y-2 pointer-events-auto scale-100"
                      : "opacity-0 translate-y-0 pointer-events-none scale-95"
                  }`}
                >
                  {industryItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={idx}
                        href={item.href}
                        className="group/ind flex items-start gap-2 p-2 rounded-lg border border-transparent hover:border-outline-variant hover:bg-surface-container-low/40 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] dark:hover:bg-primary/10 transition-all duration-300"
                      >
                        <Icon className="w-4 h-4 text-secondary shrink-0 mt-[3px] group-hover/ind:translate-x-0.5 group-hover/ind:scale-110 transition-transform duration-300" />
                        <div>
                          <div className="text-label-sm font-bold text-on-surface dark:text-on-primary group-hover/ind:text-secondary transition-colors duration-200">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-on-surface-variant dark:text-on-primary-container/80">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
 
              <Link
                href="/blog"
                className="text-[11px] lg:text-[12px] xl:text-[13px] font-bold uppercase tracking-wider text-on-surface dark:text-on-primary hover:text-secondary dark:hover:text-secondary-fixed transition-colors group"
              >
                Blog
              </Link>
 
              <Link
                href="/careers"
                className="text-[11px] lg:text-[12px] xl:text-[13px] font-bold uppercase tracking-wider text-on-surface dark:text-on-primary hover:text-secondary dark:hover:text-secondary-fixed transition-colors group"
              >
                Careers
              </Link>
 
              <Link
                href="/about"
                className="text-[11px] lg:text-[12px] xl:text-[13px] font-bold uppercase tracking-wider text-on-surface dark:text-on-primary hover:text-secondary dark:hover:text-secondary-fixed transition-colors group"
              >
                About Us
              </Link>
            </div>

            {/* Buttons */}
            <div className="hidden lg:flex items-center gap-xs lg:gap-sm xl:gap-md">
              <Link
                href="/contact"
                className="bg-primary dark:bg-on-primary text-on-primary dark:text-primary h-8 lg:h-9 px-2.5 lg:px-4 rounded text-[10px] lg:text-[11px] font-mono font-bold uppercase tracking-[0.08em] lg:tracking-[0.12em] flex items-center justify-center hover:bg-secondary dark:hover:bg-secondary hover:text-white dark:hover:text-white hover:scale-[1.05] lg:hover:scale-[1.1] active:scale-[0.85] transition-all duration-150 whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              className="lg:hidden p-2 text-on-surface dark:text-on-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col p-md overflow-y-auto dark:bg-primary pt-24 lg:hidden">
          <div className="flex flex-col gap-sm">
            <h5 className="text-label-sm font-bold uppercase text-outline mt-sm">Services</h5>
            <div className="grid grid-cols-2 gap-sm pl-sm">
              {serviceCategories.flatMap(cat => cat.items).map((item, idx) => (
                <Link key={idx} href={item.href} className="text-label-md text-on-surface dark:text-on-primary hover:text-secondary">
                  {item.name}
                </Link>
              ))}
            </div>

            <h5 className="text-label-sm font-bold uppercase text-outline mt-sm">Industries</h5>
            <div className="flex flex-col gap-xs pl-sm">
              {industryItems.map((item, idx) => (
                <Link key={idx} href={item.href} className="text-label-md text-on-surface dark:text-on-primary hover:text-secondary">
                  {item.name}
                </Link>
              ))}
            </div>

            <hr className="border-outline-variant/30 my-sm" />

            <Link href="/blog" className="text-headline-md font-headline-md text-primary dark:text-on-primary">
              Blog
            </Link>
            <Link href="/careers" className="text-headline-md font-headline-md text-primary dark:text-on-primary">
              Careers
            </Link>
            <Link href="/about" className="text-headline-md font-headline-md text-primary dark:text-on-primary">
              About Us
            </Link>

            <Link
              href="/contact"
              className="bg-secondary text-on-secondary px-md py-sm rounded-full font-bold text-center mt-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
