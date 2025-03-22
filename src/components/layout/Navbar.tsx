import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { currentLanguage, setLanguage } = useLanguage();
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/mentorship", label: "Mentorship" },
    { href: "/contact", label: "Contact" },
  ];

  const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "ar", label: "العربية" },
    { code: "ha", label: "Hausa" },
  ];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    document.documentElement.lang = langCode;
    localStorage.setItem('preferredLang', langCode);
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl md:text-2xl font-bold text-primary hover:opacity-90 transition">
            Amina Danjuma Foundation
          </a>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="text-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="cursor-pointer"
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </motion.nav>
  );
}
