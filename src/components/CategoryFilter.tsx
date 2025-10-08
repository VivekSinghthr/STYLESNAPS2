import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Filter } from "lucide-react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="bg-background border-b border-border py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-primary" />
            <span className="font-medium text-foreground">Categories:</span>
          </div>
          
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            <Button
              variant={selectedCategory === "All" ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange("All")}
              className={selectedCategory === "All" ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "border-border hover:border-primary hover:text-primary text-foreground"}
            >
              All
            </Button>
            
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(category)}
                className={
                  selectedCategory === category 
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                    : "border-border hover:border-primary hover:text-primary text-foreground"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}