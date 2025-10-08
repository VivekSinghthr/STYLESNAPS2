import { TrendingUp, Zap, Star } from "lucide-react";

interface StatsBarProps {
  totalAnimations: number;
  filteredCount: number;
}

export function StatsBar({ totalAnimations, filteredCount }: StatsBarProps) {
  return (
    <div className="bg-gradient-to-r from-muted to-secondary border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary rounded-lg">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Total Animations</p>
                <p className="text-lg font-bold text-foreground">{totalAnimations}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary rounded-lg">
                <TrendingUp className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Showing</p>
                <p className="text-lg font-bold text-foreground">{filteredCount}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary rounded-lg">
                <Star className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Categories</p>
                <p className="text-lg font-bold text-foreground">8</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-foreground">Free • Open Source</p>
              <p className="text-xs text-muted-foreground">Copy & Paste Ready</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}