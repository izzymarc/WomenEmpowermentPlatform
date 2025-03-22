import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Amina Danjuma Foundation</h3>
            <p className="text-sm opacity-80">
              Empowering women and fighting against gender-based violence.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about">
                <a className="block text-sm hover:underline">About Us</a>
              </Link>
              <Link href="/programs">
                <a className="block text-sm hover:underline">Our Programs</a>
              </Link>
              <Link href="/contact">
                <a className="block text-sm hover:underline">Contact</a>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>Email: info@aminadanjuma.org</p>
              <p>Phone: +2348129206949</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="space-x-4">
              {/* Add social media icons/links here */}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Amina Danjuma Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
