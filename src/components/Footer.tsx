import { Heart, Github, Twitter, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-background via-secondary to-accent text-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-foreground rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground">StyleSnaps</h3>
                <p className="text-muted-foreground text-sm">CSS Animation Gallery</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              The ultimate collection of CSS animations and effects. Copy, paste, and bring your websites to life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Browse Animations</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Latest Updates</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Categories</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Loading Animations</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Hover Effects</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Text Effects</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Transitions</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://x.com/Vivekkk_s', '_blank')}
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-muted-foreground text-sm">
              Follow us for updates and new animations!
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2025 StyleSnaps. Made with <Heart className="h-4 w-4 inline text-red-400" /> for developers.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            250+ Animations • Free Forever • Open Source
          </p>
        </div>
      </div>
    </footer>
  );
}