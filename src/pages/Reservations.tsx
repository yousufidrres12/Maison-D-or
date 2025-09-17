import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, Phone, Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    requests: ""
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
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast({
        title: "Please fill in all required fields",
        description: "All fields except special requests are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Reservation Request Submitted",
      description: "We'll contact you within 24 hours to confirm your reservation.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      requests: ""
    });
  };

  const timeSlots = [
    "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"
  ];

  const guestCounts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto fade-in-element">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-primary">
              Reservations
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Secure your table at Maison D'or for an unforgettable fine dining experience. 
              We recommend booking well in advance due to high demand.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="fade-in-element">
              <Card className="shadow-luxury">
                <CardHeader>
                  <CardTitle className="text-2xl font-display">Make a Reservation</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll contact you to confirm your reservation.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="focus:border-accent focus:ring-accent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
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
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="focus:border-accent focus:ring-accent"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleInputChange("date", e.target.value)}
                          className="focus:border-accent focus:ring-accent"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time *</Label>
                        <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                          <SelectTrigger className="focus:border-accent focus:ring-accent">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guests">Number of Guests *</Label>
                        <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                          <SelectTrigger className="focus:border-accent focus:ring-accent">
                            <SelectValue placeholder="Guests" />
                          </SelectTrigger>
                          <SelectContent>
                            {guestCounts.map((count) => (
                              <SelectItem key={count} value={count}>{count}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requests">Special Requests</Label>
                      <Textarea
                        id="requests"
                        value={formData.requests}
                        onChange={(e) => handleInputChange("requests", e.target.value)}
                        className="focus:border-accent focus:ring-accent"
                        placeholder="Dietary restrictions, special occasions, seating preferences..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="btn-luxury w-full">
                      Request Reservation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Information */}
            <div className="space-y-8">
              <div className="fade-in-element">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Calendar className="w-5 h-5 text-accent" />
                      Availability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Dinner Service</h4>
                        <p className="text-muted-foreground">Tuesday - Sunday: 5:30 PM - 10:00 PM</p>
                        <p className="text-sm text-muted-foreground mt-1">Closed Mondays</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Advance Booking</h4>
                        <p className="text-muted-foreground">Reservations accepted up to 60 days in advance</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="fade-in-element">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      Policies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-semibold mb-2">Dress Code</h4>
                        <p className="text-muted-foreground">Smart casual to formal attire required</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Cancellation</h4>
                        <p className="text-muted-foreground">24-hour notice required for cancellations</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Group Dining</h4>
                        <p className="text-muted-foreground">Parties of 8+ require a deposit and fixed menu</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="fade-in-element">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Phone className="w-5 h-5 text-accent" />
                      Contact Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Phone size={16} className="text-accent" />
                        <span>(555) 123-4567</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={16} className="text-accent" />
                        <span>reservations@lumiere.com</span>
                      </div>
                      <div className="mt-4 p-4 bg-accent/5 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          For immediate assistance or same-day reservations, 
                          please call us directly. Our reservations team is 
                          available Tuesday - Sunday, 10:00 AM - 6:00 PM.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

};

export default Reservations;
