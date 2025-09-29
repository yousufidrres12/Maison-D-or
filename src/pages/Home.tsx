import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Award, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";
import featuredDish from "@/assets/featured-dish.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const Home = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".fade-in-element");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Dramatic Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-dramatic opacity-30"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent/20 rounded-full animate-drift"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-accent/25 rounded-full animate-glow"></div>
        
        <div className="relative z-10 text-center text-white px-8 max-w-6xl">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-light leading-tight animate-fade-in">
              <span className="block opacity-90">Culinary</span>
              <span className="block text-accent font-medium transform -translate-x-4">Artistry</span>
              <span className="block text-sm md:text-lg font-body font-light tracking-[0.5em] uppercase opacity-70 mt-4">
                Refined • Extraordinary • Unforgettable
              </span>
            </h1>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-xl font-light leading-relaxed animate-slide-up opacity-80">
                Where every dish tells a story, every flavor creates a memory, 
                and every moment becomes part of your culinary journey.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <NavLink to="/reservations">
                <Button variant="dramatic" className="text-lg px-12 py-6 min-w-[200px]">
                  Reserve Experience
                </Button>
              </NavLink>
              <NavLink to="/menu">
                <Button variant="outline" className="bg-white/5 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-12 py-6 min-w-[200px]">
                  Discover Menu
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-white/30"></div>
          <div className="w-2 h-2 bg-accent rounded-full mt-2 mx-auto animate-glow"></div>
        </div>
      </section>

      {/* Artistic Welcome Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto relative">
          <div className="asymmetric-grid items-center gap-20">
            <div className="fade-in-element space-y-8">
              <div className="space-y-4">
                <div className="w-16 h-px bg-accent"></div>
                <h2 className="text-5xl md:text-6xl font-display font-light text-primary leading-tight">
                  A Symphony of<br />
                  <span className="italic text-accent">Flavors</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <p>
                  For over two decades, Maison D'or has redefined the boundaries of culinary artistry. 
                  Each dish emerges from our kitchen as a carefully orchestrated masterpiece.
                </p>
                <p className="text-base text-foreground opacity-90">
                  Our award-winning chefs transform the finest seasonal ingredients into 
                  unforgettable experiences, earning us recognition among the world's finest establishments.
                </p>
              </div>
              
              <div className="staggered-layout">
                <div className="text-center hover-lift p-6 rounded-xl bg-card/50 backdrop-blur-sm">
                  <div className="text-4xl font-display font-light text-accent mb-2">21</div>
                  <div className="text-sm uppercase tracking-wider opacity-70">Years Mastery</div>
                </div>
                <div className="text-center hover-lift p-6 rounded-xl bg-card/50 backdrop-blur-sm">
                  <div className="text-4xl font-display font-light text-accent mb-2">⭐⭐⭐</div>
                  <div className="text-sm uppercase tracking-wider opacity-70">Michelin Stars</div>
                </div>
              </div>
              
              <NavLink to="/about">
                <Button variant="copper" className="mt-8">
                  Discover Our Legacy
                </Button>
              </NavLink>
            </div>
            
            <div className="fade-in-element hover-float">
              <img 
                src={restaurantInterior} 
                alt="Maison D'or Restaurant Interior" 
                className="rounded-3xl shadow-dramatic w-full h-[600px] object-cover transform rotate-1"
              />
            </div>
            
            <div className="fade-in-element space-y-6">
              <div className="bg-gradient-subtle p-8 rounded-2xl shadow-card hover-lift">
                <h3 className="text-xl font-display mb-4 text-foreground">Philosophy</h3>
                <p className="text-foreground leading-relaxed">
                  "Cuisine is the language through which we express our passion, 
                  our culture, and our commitment to excellence."
                </p>
                <div className="mt-4 text-sm font-medium text-accent">— Chef Marcel Dubois</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Experience Section */}
      <section className="section-padding bg-gradient-subtle relative">
        <div className="container mx-auto relative">
          <div className="content-spacing">
            <div className="text-center max-w-4xl mx-auto fade-in-element">
              <h2 className="text-5xl md:text-6xl font-display font-light mb-8 text-foreground">
                Beyond <span className="italic text-accent">Dining</span>
              </h2>
              <p className="text-xl text-foreground leading-relaxed">
                An orchestrated symphony where every element contributes to your extraordinary experience
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 mt-20">
              {[
                {
                  icon: ChefHat,
                  title: "Culinary Mastery",
                  description: "Our chefs trained in the world's most prestigious kitchens bring decades of refinement to every creation",
                  accent: "bg-accent/10 text-accent"
                },
                {
                  icon: Award,
                  title: "Global Recognition",
                  description: "Three Michelin stars and countless accolades recognize our unwavering commitment to excellence",
                  accent: "bg-primary/10 text-primary"
                },
                {
                  icon: Clock,
                  title: "Orchestrated Precision",
                  description: "Every moment is choreographed to create a seamless flow from arrival to final course",
                  accent: "bg-accent/10 text-accent"
                },
                {
                  icon: MapPin,
                  title: "Iconic Setting",
                  description: "Located in the heart of the city's most prestigious culinary district",
                  accent: "bg-primary/10 text-primary"
                }
              ].map((feature, index) => (
                <Card key={index} className="fade-in-element hover-lift group border-0 bg-background/60 backdrop-blur-sm w-full">
                  <CardContent className="p-5 md:p-10">
                    <div className="flex items-start space-x-4 md:space-x-6">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center ${feature.accent} group-hover:scale-110 transition-all duration-500 flex-shrink-0`}>
                        <feature.icon size={20} className="md:w-6 md:h-6" />
                      </div>
                      <div className="flex-1 space-y-3 md:space-y-4 min-w-0">
                        <h3 className="text-lg md:text-2xl font-display font-medium leading-tight">{feature.title}</h3>
                        <p className="text-sm md:text-base text-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artistic Featured Creation */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 fade-in-element order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-copper opacity-10 rounded-3xl blur-xl group-hover:opacity-20 transition-all duration-700"></div>
                <img 
                  src={featuredDish} 
                  alt="Signature Creation" 
                  className="relative rounded-3xl shadow-dramatic w-full h-[500px] object-cover transform -rotate-1 group-hover:rotate-0 transition-all duration-700"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              </div>
            </div>
            
            <div className="lg:col-span-5 fade-in-element order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <div className="w-20 h-px bg-accent"></div>
                <h2 className="text-5xl md:text-6xl font-display font-light text-foreground leading-tight">
                  Our<br />
                  <span className="italic text-accent">Masterpiece</span>
                </h2>
                
                <h3 className="text-3xl font-display font-medium text-foreground">
                  Wagyu Beef Medallions
                </h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  A5 Wagyu beef, aged to perfection and enhanced with truffle-infused jus. 
                  Each element harmoniously composed with seasonal vegetables and delicate micro herbs.
                </p>
                
                <div className="bg-gradient-subtle p-6 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-4xl font-display font-light text-accent">$125</div>
                      <div className="text-sm text-foreground mt-1">Part of our Chef's Tasting Experience</div>
                    </div>
                    <div className="text-right text-sm text-foreground">
                      <div>Wine pairing</div>
                      <div className="font-medium">recommended</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <NavLink to="/menu">
                <Button variant="luxury" className="w-full lg:w-auto">
                  Discover Our Menu
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Dramatic CTA Section */}
      <section className="section-padding bg-gradient-dramatic text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Ccircle fill=\"%23ffffff\" opacity=\"0.03\" cx=\"20\" cy=\"20\" r=\"1\"/%3E%3C/g%3E%3C/svg%3E')" }}></div>
        </div>
        <div className="container mx-auto text-center relative px-4 md:px-6">
          <div className="max-w-4xl mx-auto fade-in-element space-y-12">
            <div className="space-y-8">
              <div className="w-24 h-px bg-accent mx-auto"></div>
              <h2 className="text-5xl md:text-7xl font-display font-light leading-tight">
                Begin Your<br />
                <span className="italic text-accent">Culinary Journey</span>
              </h2>
              <p className="text-xl md:text-2xl text-[#14213d] leading-relaxed max-w-2xl mx-auto font-semibold drop-shadow-lg">
                Every table tells a story. Every dish creates a memory. 
                Reserve your place in our culinary narrative.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-8 px-2">
              <NavLink to="/reservations" className="w-full sm:w-auto">
                <Button variant="copper" className="text-base md:text-lg px-8 md:px-16 py-6 md:py-7 w-full sm:min-w-[200px] md:min-w-[250px]">
                  Reserve Your Table
                </Button>
              </NavLink>
              <NavLink to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="bg-white/10 border-white/40 text-[#14213d] hover:bg-white/20 backdrop-blur-sm text-base md:text-lg px-8 md:px-16 py-6 md:py-7 w-full sm:min-w-[200px] md:min-w-[250px] font-bold shadow-lg">
                  Private Events
                </Button>
              </NavLink>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 pt-16 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-display text-accent">Tue - Sat</div>
                <div className="text-sm opacity-70 text-[#14213d]">5:30 PM - 10:00 PM</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-display text-accent">Reservations</div>
                <div className="text-sm opacity-70 text-[#14213d]">Essential</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-display text-accent">Dress Code</div>
                <div className="text-sm opacity-70 text-[#14213d]">Smart Elegant</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;