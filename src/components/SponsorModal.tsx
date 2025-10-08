import { useState } from 'react';
import { Heart, Sparkles, Coffee } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import qrCodeImage from 'figma:asset/01df90c11bf830afbd81100df6d48ea0964beec9.png';

export function SponsorModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="group">
          <Heart className="h-4 w-4 mr-2 group-hover:text-red-500 transition-colors" />
          Sponsor
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-md text-center">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 text-2xl">
            <Sparkles className="h-6 w-6 text-yellow-500" />
            You're Amazing!
            <Sparkles className="h-6 w-6 text-yellow-500" />
          </DialogTitle>
          <DialogDescription className="text-lg">
            Thank you for wanting to support StyleSnaps! 🎉
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-6 space-y-6">
          {/* Cute Message */}
          <div className="space-y-3">
            <div className="text-4xl">☕️✨</div>
            <p className="text-foreground">
              Scan this QR code to buy us a coffee and help keep the animations flowing! 
            </p>
            <p className="text-sm text-muted-foreground">
              Every sip fuels more creative CSS magic! 🪄
            </p>
          </div>
          
          {/* QR Code */}
          <div className="flex justify-center">
            <div className="p-4 bg-white rounded-lg shadow-lg border border-border">
              <img 
                src={qrCodeImage} 
                alt="Sponsor QR Code" 
                className="w-48 h-48 mx-auto"
              />
            </div>
          </div>
          
          {/* Bottom Message */}
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-1 text-red-500">
              <Heart className="h-4 w-4 animate-pulse" />
              <span className="text-sm font-medium">Made with love for developers</span>
              <Heart className="h-4 w-4 animate-pulse" />
            </div>
            <p className="text-xs text-muted-foreground">
              Your support helps us create even more awesome animations! 🚀
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}