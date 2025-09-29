import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("tasting");

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

  const menuItems = {
    tasting: [
      {
        name: "Chef's Tasting Menu",
        description: "A 7-course journey through our chef's seasonal creations, featuring the finest ingredients and innovative techniques",
        price: "$195",
        badge: "Signature",
        dietary: ["Contains dairy", "Gluten-free option available"]
      },
      {
        name: "Vegetarian Tasting Menu", 
        description: "A plant-based exploration showcasing the beauty and complexity of seasonal vegetables and grains",
        price: "$165",
        badge: "Vegetarian",
        dietary: ["Vegetarian", "Vegan option available"]
      }
    ],
    appetizers: [
      {
        name: "Hokkaido Scallops",
        description: "Pan-seared diver scallops, cauliflower purée, crispy pancetta, micro herbs",
        price: "$38",
        badge: "Chef's Choice",
        dietary: ["Contains shellfish", "Gluten-free"]
      },
      {
        name: "Foie Gras Terrine",
        description: "House-made terrine, Sauternes gelée, toasted brioche, seasonal fruit compote",
        price: "$45",
        badge: "Premium",
        dietary: ["Contains dairy", "Contains gluten"]
      },
      {
        name: "Oyster Selection",
        description: "Daily selection of East and West Coast oysters, mignonette, cocktail sauce",
        price: "$4 each",
        badge: "Market Price",
        dietary: ["Contains shellfish"]
      },
      {
        name: "Tuna Tartare",
        description: "Yellowfin tuna, avocado, cucumber, citrus dressing, sesame tuile",
        price: "$32",
        badge: null,
        dietary: ["Contains fish", "Contains sesame"]
      }
    ],
    mains: [
      {
        name: "Wagyu Beef Medallions",
        description: "A5 Wagyu beef, truffle jus, roasted bone marrow, seasonal vegetables",
        price: "$125",
        badge: "Signature",
        dietary: ["Contains dairy"]
      },
      {
        name: "Lobster Thermidor",
        description: "Maine lobster, cognac cream sauce, gruyère, herb butter, duchess potatoes",
        price: "$85",
        badge: "Classic",
        dietary: ["Contains shellfish", "Contains dairy"]
      },
      {
        name: "Duck Breast",
        description: "Roasted duck breast, cherry gastrique, duck leg confit, wild rice pilaf",
        price: "$58",
        badge: null,
        dietary: ["Contains dairy"]
      },
      {
        name: "Halibut",
        description: "Pan-roasted Atlantic halibut, saffron beurre blanc, fennel confit, caviar",
        price: "$62",
        badge: "Seasonal",
        dietary: ["Contains fish", "Contains dairy"]
      }
    ],
    desserts: [
      {
        name: "Dark Chocolate Soufflé",
        description: "Warm chocolate soufflé, crème anglaise, gold leaf, raspberry coulis",
        price: "$24",
        badge: "Signature",
        dietary: ["Contains dairy", "Contains eggs"]
      },
      {
        name: "Lemon Tart",
        description: "Meyer lemon curd, almond crust, Italian meringue, candied lemon zest",
        price: "$18",
        badge: null,
        dietary: ["Contains dairy", "Contains eggs", "Contains nuts"]
      },
      {
        name: "Cheese Selection",
        description: "Curated selection of artisanal cheeses, honeycomb, dried fruits, nuts",
        price: "$28",
        badge: "Artisanal",
        dietary: ["Contains dairy", "Contains nuts"]
      }
    ]
  };

  const categories = [
    { id: "tasting", name: "Tasting Menus", description: "Complete culinary experiences" },
    { id: "appetizers", name: "Appetizers", description: "Perfect beginnings" },
    { id: "mains", name: "Main Courses", description: "Our signature dishes" },
    { id: "desserts", name: "Desserts", description: "Sweet conclusions" }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Elegant Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center max-w-5xl mx-auto fade-in-element space-y-8">
            <div className="w-16 h-px bg-accent mx-auto"></div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-light text-primary leading-tight tracking-tight break-words">
              Culinary <span className="italic text-accent">Compositions</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Each dish represents a carefully orchestrated masterpiece, where seasonal ingredients 
              meet innovative techniques in perfect harmony. Three Michelin stars honor 
              our unwavering commitment to culinary excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 w-full mb-12 h-auto p-1 bg-muted rounded-xl gap-2 sm:gap-0">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col w-full h-auto px-4 py-4 text-left data-[state=active]:bg-background data-[state=active]:shadow-card rounded-lg min-w-0"
                >
                  <div className="font-semibold text-base break-words leading-tight min-w-0">{category.name}</div>
                  <div className="text-xs text-muted-foreground mt-1 break-words leading-tight min-w-0">{category.description}</div>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(menuItems).map(([categoryId, items]) => (
              <TabsContent key={categoryId} value={categoryId} className="mt-0">
                <div className="grid gap-6">
                  {items.map((item, index) => (
                    <Card key={index} className="fade-in-element hover:shadow-luxury transition-all duration-300 group">
                      <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <CardTitle className="text-xl font-display">{item.name}</CardTitle>
                              {item.badge && (
                                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                                  {item.badge}
                                </Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {item.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.dietary.map((diet, dietIndex) => (
                                <Badge key={dietIndex} variant="outline" className="text-xs">
                                  {diet}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="mt-4 lg:mt-0 lg:ml-8">
                            <div className="text-2xl font-display font-bold text-accent text-right">
                              {item.price}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Wine Pairing Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-element">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
              Wine Pairings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your dining experience with our expertly curated wine selections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="fade-in-element text-center hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-display font-semibold mb-4">Standard Pairing</h3>
                <div className="text-3xl font-display font-bold text-accent mb-4">$65</div>
                <p className="text-muted-foreground">
                  Carefully selected wines to complement each course
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in-element text-center hover:shadow-luxury transition-all duration-300 border-accent">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-accent text-accent-foreground">Recommended</Badge>
                <h3 className="text-xl font-display font-semibold mb-4">Premium Pairing</h3>
                <div className="text-3xl font-display font-bold text-accent mb-4">$125</div>
                <p className="text-muted-foreground">
                  Exceptional wines from renowned vintages and regions
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in-element text-center hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-display font-semibold mb-4">Reserve Pairing</h3>
                <div className="text-3xl font-display font-bold text-accent mb-4">$250</div>
                <p className="text-muted-foreground">
                  Rare and collectible wines from our private cellar
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto fade-in-element">
            <p className="text-muted-foreground leading-relaxed">
              <strong>Please note:</strong> Our menu changes seasonally to reflect the finest ingredients available. 
              We accommodate dietary restrictions and allergies with advance notice. All prices are subject to change 
              and do not include service charge.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;