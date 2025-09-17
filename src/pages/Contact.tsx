import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Car, Train } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto fade-in-element">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-primary">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We'd love to hear from you. Get in touch with us for reservations, 
              private dining, events, or any questions about the Maison D'or experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                title: "Location",
                content: "123 Fine Dining Boulevard\nCulinary District, NY 10001",
                action: "Get Directions"
              },
              {
                icon: Phone,
                title: "Phone",
                content: "(555) 123-4567\nReservations & Inquiries",
                action: "Call Now"
              },
              {
                icon: Mail,
                title: "Email",
                content: "info@lumiere.com\nreservations@lumiere.com",
                action: "Send Email"
              }
            ].map((item, index) => (
              <Card key={index} className="fade-in-element text-center hover:shadow-luxury transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground whitespace-pre-line mb-4">{item.content}</p>
                  <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground">
                    {item.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="fade-in-element">
              <Card className="shadow-luxury">
                <CardHeader>
                  <CardTitle className="text-2xl font-display">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Have a question or special request? We're here to help.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="focus:border-accent focus:ring-accent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="focus:border-accent focus:ring-accent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className="focus:border-accent focus:ring-accent"
                        placeholder="What can we help you with?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="focus:border-accent focus:ring-accent"
                        placeholder="Your message..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" className="btn-luxury w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <div className="fade-in-element">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Clock className="w-5 h-5 text-accent" />
                      Hours of Operation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Dinner Service</h4>
                        <p className="text-muted-foreground">Tuesday - Sunday: 5:30 PM - 10:00 PM</p>
                        <p className="text-sm text-muted-foreground mt-1">Last seating at 9:00 PM</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Reservations Office</h4>
                        <p className="text-muted-foreground">Tuesday - Sunday: 10:00 AM - 6:00 PM</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-accent">Closed Mondays</h4>
                        <p className="text-muted-foreground text-sm">For staff training and kitchen preparation</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="fade-in-element">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Car className="w-5 h-5 text-accent" />
                      Getting Here
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-semibold mb-2">Valet Parking</h4>
                        <p className="text-muted-foreground">Complimentary valet parking available</p>
                        <p className="text-muted-foreground">Service hours: 5:00 PM - 11:00 PM</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Public Transportation</h4>
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                          <Train size={14} />
                          <span>Subway: 4, 5, 6 to Grand Central</span>
                        </div>
                        <p className="text-muted-foreground ml-6">5 minute walk from station</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Nearby Landmarks</h4>
                        <p className="text-muted-foreground">Located in the heart of the Culinary District</p>
                        <p className="text-muted-foreground">Next to the Metropolitan Art Museum</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="fade-in-element">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl">Private Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Planning a special celebration? Our private dining rooms can accommodate 
                      intimate gatherings of 8 to large events of up to 100 guests.
                    </p>
                    <Button variant="outline" className="w-full hover:bg-accent hover:text-accent-foreground">
                      Learn About Private Dining
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
              Find Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Located in the prestigious Culinary District of Manhattan
            </p>
          </div>
          
          <div className="fade-in-element">
            <Card className="overflow-hidden shadow-luxury">
              <div className="bg-muted/20 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-display font-semibold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    123 Fine Dining Boulevard<br />
                    Culinary District, NY 10001
                  </p>
                  <Button className="mt-4 btn-luxury">
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;