import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from "@/assets/hero-restaurant.jpg";
import featuredDish from "@/assets/featured-dish.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const galleryItems = [
    {
      id: 1,
      src: heroImage,
      title: "Main Dining Room",
      category: "interior",
      description: "Our elegant main dining space with intimate lighting"
    },
    {
      id: 2,
      src: featuredDish,
      title: "Wagyu Beef Medallions",
      category: "food",
      description: "Our signature A5 Wagyu with truffle jus"
    },
    {
      id: 3,
      src: restaurantInterior,
      title: "Private Dining",
      category: "interior",
      description: "Intimate private dining room for special occasions"
    },
    {
      id: 4,
      src: gallery1,
      title: "Appetizer Selection",
      category: "food",
      description: "Artistic presentation of our seasonal appetizers"
    },
    {
      id: 5,
      src: gallery2,
      title: "Chef's Special",
      category: "food",
      description: "Daily special featuring locally sourced ingredients"
    },
    {
      id: 6,
      src: gallery3,
      title: "Dessert Artistry",
      category: "food",
      description: "Our pastry chef's creative sweet masterpieces"
    },
    {
      id: 7,
      src: gallery4,
      title: "Wine Cellar",
      category: "interior",
      description: "Our extensive collection of fine wines"
    }
  ];

  const categories = [
    { id: "all", name: "All", count: galleryItems.length },
    { id: "food", name: "Cuisine", count: galleryItems.filter(item => item.category === "food").length },
    { id: "interior", name: "Interior", count: galleryItems.filter(item => item.category === "interior").length }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto fade-in-element">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-primary">
              Gallery
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A visual journey through our culinary artistry and elegant atmosphere. 
              Discover the beauty that awaits you at Maison D'or.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 h-auto p-2 bg-muted rounded-xl max-w-md mx-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col h-auto p-4 text-center data-[state=active]:bg-background data-[state=active]:shadow-card rounded-lg"
                >
                  <div className="font-semibold text-sm">{category.name}</div>
                  <Badge variant="secondary" className="mt-1 text-xs">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item, index) => (
                  <Card 
                    key={item.id} 
                    className="fade-in-element overflow-hidden hover:shadow-luxury transition-all duration-300 group cursor-pointer"
                    onClick={() => setSelectedImage(item.src)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.src} 
                        alt={item.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-accent text-accent-foreground">
                          {item.category === "food" ? "Cuisine" : "Interior"}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-display font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              className="absolute top-4 right-4 text-white hover:text-accent text-2xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Visit Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto fade-in-element">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
              Experience It Yourself
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              These images capture just a glimpse of the Maison D'or experience. 
              Reserve your table today and discover the artistry, flavors, and ambiance 
              that have made us a destination for culinary excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/reservations" className="btn-luxury inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-luxury hover:scale-105">
                Reserve Your Table
              </a>
              <a href="/menu" className="btn-gold inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-accent hover:scale-105">
                View Our Menu
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;