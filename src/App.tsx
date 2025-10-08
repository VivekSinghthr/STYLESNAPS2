import { useState, useMemo } from "react";
import { Header } from "./components/Header";
import { CategoryFilter } from "./components/CategoryFilter";
import { StatsBar } from "./components/StatsBar";
import { AnimationCard } from "./components/AnimationCard";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { allAnimations } from "./components/AnimationData";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(allAnimations.map(anim => anim.category)));
    return cats.sort();
  }, []);

  // Filter animations based on search and category
  const filteredAnimations = useMemo(() => {
    return allAnimations.filter(animation => {
      const matchesSearch = searchTerm === "" || 
        animation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animation.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === "All" || animation.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-right" />
      
      {/* Header */}
      <Header 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
      />

      {/* Category Filter */}
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Stats Bar */}
      <StatsBar 
        totalAnimations={allAnimations.length}
        filteredCount={filteredAnimations.length}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-muted to-accent text-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-bounce-in">
              Welcome to <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">StyleSnaps</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-foreground/90 animate-slide-in-right">
              The Ultimate CSS Animation Gallery
            </p>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
              Discover, preview, and copy 250+ stunning CSS animations and effects. 
              From smooth hover effects to complex loading animations - everything you need to bring your websites to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 animate-float border border-border">
                ✨ 250+ Animations
              </div>
              <div className="bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 animate-float animate-delay-500 border border-border">
                🎨 8 Categories
              </div>
              <div className="bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 animate-float animate-delay-1000 border border-border">
                📋 Copy & Paste Ready
              </div>
              <div className="bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 animate-float animate-delay-1500 border border-border">
                🤎 Free Forever
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredAnimations.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No animations found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or category filter.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {selectedCategory === "All" ? "All Animations" : selectedCategory}
                </h2>
                <p className="text-muted-foreground">
                  {filteredAnimations.length} animation{filteredAnimations.length !== 1 ? 's' : ''} available
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAnimations.map((animation, index) => {
                const delayClass = index < 4 ? `animate-delay-${(index + 1) * 100}` : '';
                return (
                  <div
                    key={animation.id}
                    className={`animate-bounce-in ${delayClass}`}
                  >
                    <AnimationCard animation={animation} />
                  </div>
                );
              })}
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}