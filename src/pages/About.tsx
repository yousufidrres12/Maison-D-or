import { useEffect, useRef, useState } from "react";
// Animated Counter component that starts when visible
const Counter = ({ to, duration = 2000, className = "" }: { to: number, duration?: number, className?: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const frame = useRef<number>();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * to));
      if (progress < 1) {
        frame.current = requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };
    frame.current = requestAnimationFrame(step);
    return () => frame.current && cancelAnimationFrame(frame.current);
  }, [to, duration, started]);

  return <span ref={ref} className={className}>{count}</span>;
};
import { Card, CardContent } from "@/components/ui/card";
import team1 from "@/assets/team1.jpg";
import team2 from "@/assets/team2.jpg";
import team3 from "@/assets/team3.jpg";
import { Users, Utensils, Heart, Star } from "lucide-react";

const About = () => {
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

  // Team members array with photos
  const teamMembers = [
    {
      name: "Chef Marcel Dubois",
      role: "Executive Chef & Founder",
      description: "Trained in France's finest kitchens, bringing 25+ years of culinary excellence.",
      photo: team1
    },
    {
      name: "Sofia Rodriguez",
      role: "Pastry Chef",
      description: "Award-winning pastry artist creating unforgettable sweet experiences.",
      photo: team2
    },
    {
      name: "James Chen",
      role: "Sommelier",
      description: "Master sommelier curating the perfect wine pairings for each dish.",
      photo: team3
    }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Refined Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center max-w-5xl mx-auto fade-in-element space-y-8">
            <div className="w-16 h-px bg-accent mx-auto"></div>
            <h1 className="text-6xl md:text-7xl font-display font-light text-primary leading-tight">
              Our <span className="italic text-accent">Legacy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A testament to culinary passion, unwavering dedication to excellence, 
              and the relentless pursuit of creating transcendent dining experiences 
              that have defined us for over two decades.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-element">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The culinary artists behind your exceptional dining experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="fade-in-element hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden shadow-lg">
                    <img src={member.photo} alt={member.name} className="object-cover object-center w-full h-full" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">{member.name}</h3>
                  <div className="text-accent font-medium mb-4">{member.role}</div>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
  </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-element">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every dish we create and every service we provide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Utensils,
                title: "Culinary Excellence",
                description: "Every dish is crafted with precision, creativity, and the finest ingredients"
              },
              {
                icon: Heart,
                title: "Passion & Dedication",
                description: "Our team's unwavering commitment to creating memorable experiences"
              },
              {
                icon: Users,
                title: "Exceptional Service",
                description: "Warm hospitality that makes every guest feel truly special"
              },
              {
                icon: Star,
                title: "Innovation",
                description: "Constantly evolving while respecting culinary traditions"
              }
            ].map((value, index) => (
              <Card key={index} className="fade-in-element text-center hover:shadow-luxury transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <value.icon size={24} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Awards Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center fade-in-element">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-primary">
              Recognition
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-accent mb-2">
                  <Counter to={3} duration={2000} className="inline" />
                  <span className="ml-1">⭐</span>
                </div>
                <div className="font-semibold mb-2">Michelin Stars</div>
                <div className="text-sm text-muted-foreground">Awarded 2015-2024</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-accent mb-2">#<Counter to={1} duration={2000} className="inline" /></div>
                <div className="font-semibold mb-2">World's 50 Best</div>
                <div className="text-sm text-muted-foreground">Fine Dining Category 2023</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-accent mb-2"><Counter to={95} duration={2000} className="inline" /></div>
                <div className="font-semibold mb-2">Wine Spectator</div>
                <div className="text-sm text-muted-foreground">Grand Award Winner</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;