import { useState } from "react";
import { Copy, Play, Pause, Check, Eye } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "./ui/dialog";
import { toast } from "sonner@2.0.3";

export interface Animation {
  id: string;
  name: string;
  category: string;
  description: string;
  css: string;
  html: string;
  difficulty: "Easy" | "Medium" | "Hard";
  tags: string[];
}

interface AnimationCardProps {
  animation: Animation;
}

export function AnimationCard({
  animation,
}: AnimationCardProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy code");
    }
  };

  const fullCode = `<!-- HTML -->
${animation.html}

<style>
/* CSS */
${animation.css}
</style>`;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800";
      case "Hard":
        return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800";
      default:
        return "bg-secondary text-secondary-foreground border-border";
    }
  };

  return (
    <Card className="group relative overflow-hidden border-border hover:border-primary hover:shadow-lg transition-all duration-300 animate-bounce-in bg-card">
      {/* Preview Area */}
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-card-foreground">
            {animation.name}
          </CardTitle>
          <div className="flex items-center space-x-1">
            <Badge
              variant="secondary"
              className={getDifficultyColor(
                animation.difficulty,
              )}
            >
              {animation.difficulty}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Animation Preview */}
        <div className="relative h-32 bg-gradient-to-br from-muted via-secondary to-accent rounded-lg border border-border overflow-hidden">
          <div
            className={`h-full w-full flex items-center justify-center ${isPlaying ? "animation-running" : "animation-paused"}`}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: animation.html,
              }}
              className="preview-container"
            />
          </div>

          {/* Play/Pause overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-background/90 hover:bg-background border border-border"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-muted-foreground line-clamp-2">
          {animation.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {animation.tags.slice(0, 3).map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs border-border text-muted-foreground"
            >
              {tag}
            </Badge>
          ))}
          {animation.tags.length > 3 && (
            <Badge
              variant="outline"
              className="text-xs border-border text-muted-foreground"
            >
              +{animation.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 mr-2"
              >
                <Eye className="h-4 w-4 mr-1" />
                Preview
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  {animation.name}
                  <Badge
                    className={getDifficultyColor(
                      animation.difficulty,
                    )}
                  >
                    {animation.difficulty}
                  </Badge>
                </DialogTitle>
                <DialogDescription>
                  {animation.description} - Preview and copy the
                  complete CSS animation code.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                {/* Large Preview */}
                <div className="h-64 bg-gradient-to-br from-muted via-secondary to-accent rounded-lg border border-border flex items-center justify-center">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: animation.html,
                    }}
                  />
                </div>

                {/* Code Display */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground">
                      Complete Code
                    </h4>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(fullCode)}
                      className=""
                    >
                      {copied ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      {copied ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-auto max-h-64 border border-border text-foreground">
                    <code className="text-foreground">{fullCode}</code>
                  </pre>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button
            variant="default"
            size="sm"
            onClick={() => copyToClipboard(fullCode)}
            className=""
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardContent>

      {/* Embedded styles for preview */}
      <style
        dangerouslySetInnerHTML={{ __html: animation.css }}
      />
    </Card>
  );
}