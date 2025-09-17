import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
  <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 flex flex-col items-start">
            <img src={"/logo.png"} alt="Maison D'or Logo" className="h-32 w-auto mb-6" />
            <h3 className="text-2xl font-display font-bold text-accent">Maison D'or</h3>
            <p className="text-sm leading-relaxed">
              Where culinary artistry meets elegant sophistication. Experience the finest in luxury dining.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-accent" />
                <span>123 Fine Dining Boulevard<br />Culinary District, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-accent" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-accent" />
                <span>reservations@lumiere.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-accent" />
                <div>
                  <div className="font-medium">Dinner Service</div>
                  <div>Tuesday - Sunday: 5:30 PM - 10:00 PM</div>
                  <div className="text-muted-foreground mt-1">Closed Mondays</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="/menu" className="block hover:text-accent transition-colors">Menu</a>
              <a href="/reservations" className="block hover:text-accent transition-colors">Reservations</a>
              <a href="/about" className="block hover:text-accent transition-colors">About Us</a>
              <a href="/gallery" className="block hover:text-accent transition-colors">Gallery</a>
              <a href="/contact" className="block hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; Developed by <a href="https://infinitepixels.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-white">Infinite</a> <a href="https://infinitepixels.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-purple-500">Pixels</a>, all rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;