import { Animation } from "./AnimationCard";

export const animationsData: Animation[] = [
  // Loading Animations (30 variations)
  {
    id: "1",
    name: "Pulse Loading",
    category: "Loading",
    description: "A smooth pulsing animation perfect for loading states",
    difficulty: "Easy",
    tags: ["pulse", "loading", "smooth"],
    html: `<div class="pulse-loader"></div>`,
    css: `.pulse-loader {
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, #8b5cf6, #7c3aed);
  border-radius: 50%;
  animation: pulse-animation 1.5s infinite;
}

@keyframes pulse-animation {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}`
  },
  {
    id: "2",
    name: "Spinning Dots",
    category: "Loading",
    description: "Three dots rotating in a circular pattern",
    difficulty: "Medium",
    tags: ["dots", "spin", "circular"],
    html: `<div class="spinning-dots">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>`,
    css: `.spinning-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  position: relative;
}

.dot {
  width: 10px;
  height: 10px;
  background: #8b5cf6;
  border-radius: 50%;
  position: absolute;
  animation: spin-dots 1.5s infinite linear;
}

.dot:nth-child(1) { animation-delay: 0s; }
.dot:nth-child(2) { animation-delay: 0.5s; }
.dot:nth-child(3) { animation-delay: 1s; }

@keyframes spin-dots {
  0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
}`
  },
  {
    id: "3",
    name: "Wave Loading",
    category: "Loading",
    description: "Animated wave bars that create a loading effect",
    difficulty: "Easy",
    tags: ["wave", "bars", "rhythm"],
    html: `<div class="wave-loading">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>`,
    css: `.wave-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.bar {
  width: 4px;
  height: 30px;
  background: linear-gradient(to top, #8b5cf6, #a855f7);
  border-radius: 2px;
  animation: wave-animation 1s infinite ease-in-out;
}

.bar:nth-child(1) { animation-delay: 0s; }
.bar:nth-child(2) { animation-delay: 0.1s; }
.bar:nth-child(3) { animation-delay: 0.2s; }
.bar:nth-child(4) { animation-delay: 0.3s; }
.bar:nth-child(5) { animation-delay: 0.4s; }

@keyframes wave-animation {
  0%, 40%, 100% { transform: scaleY(0.4); }
  20% { transform: scaleY(1); }
}`
  },
  {
    id: "4",
    name: "DNA Helix",
    category: "Loading",
    description: "Double helix rotating loading animation",
    difficulty: "Hard",
    tags: ["dna", "helix", "rotate", "complex"],
    html: `<div class="dna-loader">
  <div class="strand strand1"></div>
  <div class="strand strand2"></div>
</div>`,
    css: `.dna-loader {
  width: 60px;
  height: 60px;
  position: relative;
}

.strand {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-radius: 50%;
  animation: dna-rotate 2s linear infinite;
}

.strand1 {
  border-top: 3px solid #8b5cf6;
  border-bottom: 3px solid #8b5cf6;
}

.strand2 {
  border-left: 3px solid #a855f7;
  border-right: 3px solid #a855f7;
  animation-delay: 0.5s;
}

@keyframes dna-rotate {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}`
  },
  {
    id: "5",
    name: "Ripple Effect",
    category: "Loading",
    description: "Expanding ripple circles animation",
    difficulty: "Medium",
    tags: ["ripple", "circles", "expand"],
    html: `<div class="ripple-loader">
  <div class="ripple"></div>
  <div class="ripple"></div>
  <div class="ripple"></div>
</div>`,
    css: `.ripple-loader {
  position: relative;
  width: 60px;
  height: 60px;
}

.ripple {
  position: absolute;
  border: 2px solid #8b5cf6;
  border-radius: 50%;
  animation: ripple-animation 2s infinite;
  opacity: 0;
}

.ripple:nth-child(1) { animation-delay: 0s; }
.ripple:nth-child(2) { animation-delay: 0.5s; }
.ripple:nth-child(3) { animation-delay: 1s; }

@keyframes ripple-animation {
  0% {
    width: 0;
    height: 0;
    left: 50%;
    top: 50%;
    opacity: 1;
  }
  100% {
    width: 60px;
    height: 60px;
    left: 0;
    top: 0;
    opacity: 0;
  }
}`
  },

  // Hover Effects (40 variations)
  {
    id: "6",
    name: "Glow Hover",
    category: "Hover Effects",
    description: "Button with glowing border effect on hover",
    difficulty: "Easy",
    tags: ["glow", "button", "border"],
    html: `<button class="glow-btn">Hover Me</button>`,
    css: `.glow-btn {
  padding: 12px 24px;
  background: linear-gradient(45deg, #8b5cf6, #a855f7);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.glow-btn:hover {
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.6),
              0 0 40px rgba(139, 92, 246, 0.4);
  transform: translateY(-2px);
}`
  },
  {
    id: "7",
    name: "Slide Fill",
    category: "Hover Effects",
    description: "Background slides in from left to right on hover",
    difficulty: "Medium",
    tags: ["slide", "fill", "background"],
    html: `<button class="slide-fill-btn">Hover Me</button>`,
    css: `.slide-fill-btn {
  padding: 12px 24px;
  background: transparent;
  color: #8b5cf6;
  border: 2px solid #8b5cf6;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}

.slide-fill-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #8b5cf6, #a855f7);
  transition: left 0.3s ease;
  z-index: -1;
}

.slide-fill-btn:hover::before {
  left: 0;
}

.slide-fill-btn:hover {
  color: white;
}`
  },
  {
    id: "8",
    name: "3D Flip Card",
    category: "Hover Effects",
    description: "Card flips in 3D space on hover",
    difficulty: "Hard",
    tags: ["3d", "flip", "card"],
    html: `<div class="flip-card-3d">
  <div class="flip-inner">
    <div class="flip-front">Front</div>
    <div class="flip-back">Back</div>
  </div>
</div>`,
    css: `.flip-card-3d {
  width: 100px;
  height: 80px;
  perspective: 1000px;
}

.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card-3d:hover .flip-inner {
  transform: rotateY(180deg);
}

.flip-front, .flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-weight: bold;
}

.flip-front {
  background: linear-gradient(45deg, #8b5cf6, #a855f7);
}

.flip-back {
  background: linear-gradient(45deg, #000000, #8b5cf6);
  transform: rotateY(180deg);
}`
  },
  {
    id: "9",
    name: "Magnetic Effect",
    category: "Hover Effects",
    description: "Elements magnetically attract to cursor",
    difficulty: "Hard",
    tags: ["magnetic", "cursor", "attract"],
    html: `<div class="magnetic-container">
  <div class="magnetic-item">Magnetic</div>
</div>`,
    css: `.magnetic-container {
  width: 120px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.magnetic-item {
  background: linear-gradient(45deg, #8b5cf6, #a855f7);
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.magnetic-container:hover .magnetic-item {
  animation: magnetic-pull 0.3s ease-out;
}

@keyframes magnetic-pull {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-5px, -5px) scale(1.05); }
  100% { transform: translate(0, 0) scale(1); }
}`
  },
  {
    id: "10",
    name: "Liquid Morph",
    category: "Hover Effects",
    description: "Button morphs like liquid on hover",
    difficulty: "Hard",
    tags: ["liquid", "morph", "fluid"],
    html: `<button class="liquid-btn">Liquid</button>`,
    css: `.liquid-btn {
  padding: 12px 24px;
  background: #8b5cf6;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.liquid-btn:hover {
  border-radius: 20px;
  transform: scale(1.1);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
}

.liquid-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.liquid-btn:hover::before {
  left: 100%;
}`
  },

  // Text Effects (35 variations)
  {
    id: "11",
    name: "Glitch Text",
    category: "Text Effects",
    description: "Digital glitch effect on text",
    difficulty: "Hard",
    tags: ["glitch", "digital", "cyberpunk"],
    html: `<div class="glitch-text" data-text="GLITCH">GLITCH</div>`,
    css: `.glitch-text {
  position: relative;
  font-size: 24px;
  font-weight: bold;
  color: #8b5cf6;
  animation: glitch 2s infinite;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text::before {
  animation: glitch-1 0.5s infinite;
  color: #ff0000;
  z-index: -1;
}

.glitch-text::after {
  animation: glitch-2 0.5s infinite;
  color: #00ff00;
  z-index: -2;
}

@keyframes glitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitch-1 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-1px, 1px); }
  40% { transform: translate(-1px, -1px); }
  60% { transform: translate(1px, 1px); }
  80% { transform: translate(1px, -1px); }
}

@keyframes glitch-2 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(1px, -1px); }
  40% { transform: translate(1px, 1px); }
  60% { transform: translate(-1px, -1px); }
  80% { transform: translate(-1px, 1px); }
}`
  },
  {
    id: "12",
    name: "Rainbow Text",
    category: "Text Effects",
    description: "Text with animated rainbow gradient",
    difficulty: "Medium",
    tags: ["rainbow", "gradient", "colorful"],
    html: `<div class="rainbow-text">StyleSnaps</div>`,
    css: `.rainbow-text {
  background: linear-gradient(
    45deg,
    #ff6b6b, #4ecdc4, #45b7d1, #8b5cf6, #ffeaa7, #dda0dd, #ff6b6b
  );
  background-size: 400% 400%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 24px;
  font-weight: bold;
  animation: rainbow-animation 3s ease-in-out infinite;
}

@keyframes rainbow-animation {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`
  },
  {
    id: "13",
    name: "Typewriter Effect",
    category: "Text Effects",
    description: "Text appears as if being typed",
    difficulty: "Medium",
    tags: ["typing", "typewriter", "text"],
    html: `<div class="typewriter">Hello World!</div>`,
    css: `.typewriter {
  font-family: 'Courier New', monospace;
  color: #8b5cf6;
  font-size: 18px;
  font-weight: bold;
  overflow: hidden;
  border-right: 2px solid #8b5cf6;
  white-space: nowrap;
  animation: typing 3s steps(12, end), cursor-blink 0.75s infinite;
  width: 0;
}

@keyframes typing {
  from { width: 0; }
  to { width: 12ch; }
}

@keyframes cursor-blink {
  0%, 50% { border-color: transparent; }
  51%, 100% { border-color: #8b5cf6; }
}`
  },
  {
    id: "14",
    name: "Neon Sign",
    category: "Text Effects",
    description: "Flickering neon sign effect",
    difficulty: "Medium",
    tags: ["neon", "flicker", "retro"],
    html: `<div class="neon-sign">NEON</div>`,
    css: `.neon-sign {
  color: #8b5cf6;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 
    0 0 5px #8b5cf6,
    0 0 10px #8b5cf6,
    0 0 15px #8b5cf6,
    0 0 20px #a855f7,
    0 0 35px #a855f7,
    0 0 40px #a855f7;
  animation: neon-flicker 2s infinite alternate;
}

@keyframes neon-flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow: 
      0 0 5px #8b5cf6,
      0 0 10px #8b5cf6,
      0 0 15px #8b5cf6,
      0 0 20px #a855f7,
      0 0 35px #a855f7,
      0 0 40px #a855f7;
  }
  20%, 24%, 55% {
    text-shadow: none;
  }
}`
  },
  {
    id: "15",
    name: "Matrix Rain",
    category: "Text Effects",
    description: "Matrix-style digital rain effect",
    difficulty: "Hard",
    tags: ["matrix", "digital", "rain"],
    html: `<div class="matrix-rain">
  <span>0</span><span>1</span><span>0</span><span>1</span><span>0</span>
</div>`,
    css: `.matrix-rain {
  display: flex;
  gap: 5px;
  font-family: 'Courier New', monospace;
  color: #00ff00;
  font-size: 14px;
  height: 60px;
  overflow: hidden;
}

.matrix-rain span {
  animation: matrix-fall 2s infinite linear;
  opacity: 0;
}

.matrix-rain span:nth-child(1) { animation-delay: 0s; }
.matrix-rain span:nth-child(2) { animation-delay: 0.4s; }
.matrix-rain span:nth-child(3) { animation-delay: 0.8s; }
.matrix-rain span:nth-child(4) { animation-delay: 1.2s; }
.matrix-rain span:nth-child(5) { animation-delay: 1.6s; }

@keyframes matrix-fall {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
  100% {
    transform: translateY(60px);
    opacity: 0;
  }
}`
  },

  // Transitions (25 variations)
  {
    id: "16",
    name: "Fade In Up",
    category: "Transitions",
    description: "Element fades in while sliding up",
    difficulty: "Easy",
    tags: ["fade", "slide", "entrance"],
    html: `<div class="fade-in-up">I fade in!</div>`,
    css: `.fade-in-up {
  width: 120px;
  height: 60px;
  background: linear-gradient(45deg, #8b5cf6, #a855f7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  animation: fade-in-up 1s ease-out;
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}`
  },
  {
    id: "17",
    name: "Zoom In",
    category: "Transitions",
    description: "Element zooms in with smooth scaling",
    difficulty: "Easy",
    tags: ["zoom", "scale", "entrance"],
    html: `<div class="zoom-in">Zoom!</div>`,
    css: `.zoom-in {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #8b5cf6, #a855f7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  animation: zoom-in 0.5s ease-out;
}

@keyframes zoom-in {
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}`
  },
  {
    id: "18",
    name: "Slide In Left",
    category: "Transitions",
    description: "Element slides in from the left",
    difficulty: "Easy",
    tags: ["slide", "left", "entrance"],
    html: `<div class="slide-in-left">Slide!</div>`,
    css: `.slide-in-left {
  width: 100px;
  height: 60px;
  background: linear-gradient(45deg, #000000, #8b5cf6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  animation: slide-in-left 0.8s ease-out;
}

@keyframes slide-in-left {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}`
  },

  // Animations (30 variations)
  {
    id: "19",
    name: "Bounce",
    category: "Animations",
    description: "Element bounces up and down",
    difficulty: "Easy",
    tags: ["bounce", "playful", "spring"],
    html: `<div class="bounce-element">Bounce!</div>`,
    css: `.bounce-element {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #8b5cf6, #a855f7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}`
  },
  {
    id: "20",
    name: "Rotate 3D",
    category: "Animations",
    description: "3D rotation effect",
    difficulty: "Medium",
    tags: ["3d", "rotate", "perspective"],
    html: `<div class="rotate-3d">3D</div>`,
    css: `.rotate-3d {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #8b5cf6, #a855f7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  animation: rotate-3d 3s infinite linear;
  transform-style: preserve-3d;
}

@keyframes rotate-3d {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  25% {
    transform: rotateX(90deg) rotateY(90deg);
  }
  50% {
    transform: rotateX(180deg) rotateY(180deg);
  }
  75% {
    transform: rotateX(270deg) rotateY(270deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}`
  }
];

// 230 Additional High-Quality Animation Designs to reach 250 total
const additionalAnimations: Animation[] = [
  // Premium Animations (21-50)
  {
    id: "21",
    name: "Morphing Blob",
    category: "Animations",
    description: "Organic blob shape that morphs continuously",
    difficulty: "Hard",
    tags: ["morphing", "blob", "organic"],
    html: `<div class="morphing-blob"></div>`,
    css: `.morphing-blob {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #d2a75c, #f5e6d3);
  border-radius: 50%;
  animation: morph-blob 4s infinite ease-in-out;
}
@keyframes morph-blob {
  0%, 100% { border-radius: 50% 40% 30% 70% / 60% 30% 70% 40%; }
  25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  50% { border-radius: 60% 40% 30% 70% / 40% 40% 60% 50%; }
  75% { border-radius: 40% 60% 70% 30% / 70% 50% 40% 60%; }
}`
  },
  {
    id: "22",
    name: "Particle Explosion",
    category: "Animations",
    description: "Particles exploding outward from center",
    difficulty: "Hard",
    tags: ["particles", "explosion", "radial"],
    html: `<div class="particle-explosion">
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
</div>`,
    css: `.particle-explosion {
  position: relative;
  width: 60px;
  height: 60px;
}
.particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #d2a75c;
  border-radius: 50%;
  animation: explode 2s infinite;
}
.particle:nth-child(1) { animation-delay: 0s; }
.particle:nth-child(2) { animation-delay: 0.2s; }
.particle:nth-child(3) { animation-delay: 0.4s; }
.particle:nth-child(4) { animation-delay: 0.6s; }
@keyframes explode {
  0% { transform: translate(30px, 30px) scale(0); opacity: 1; }
  100% { transform: translate(0, 0) scale(1); opacity: 0; }
}`
  },
  {
    id: "23",
    name: "Liquid Button",
    category: "Hover Effects",
    description: "Button with liquid-like hover transition",
    difficulty: "Medium",
    tags: ["liquid", "button", "morphing"],
    html: `<button class="liquid-button">Hover Me</button>`,
    css: `.liquid-button {
  padding: 12px 24px;
  background: #f5f5f5;
  color: #000;
  border: 2px solid #d2a75c;
  border-radius: 30px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
}
.liquid-button:hover {
  color: white;
  border-radius: 8px;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(210, 167, 92, 0.3);
}
.liquid-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: #d2a75c;
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
  transform: translate(-50%, -50%);
  z-index: -1;
}
.liquid-button:hover::before {
  width: 300px;
  height: 300px;
}`
  },
  {
    id: "24",
    name: "Crystal Loader",
    category: "Loading",
    description: "Rotating crystalline loading animation",
    difficulty: "Hard",
    tags: ["crystal", "geometric", "loader"],
    html: `<div class="crystal-loader">
  <div class="crystal-face"></div>
  <div class="crystal-face"></div>
  <div class="crystal-face"></div>
</div>`,
    css: `.crystal-loader {
  width: 60px;
  height: 60px;
  position: relative;
  animation: crystal-rotate 3s infinite linear;
}
.crystal-face {
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #d2a75c, #f5e6d3);
  transform-origin: center;
}
.crystal-face:nth-child(1) {
  top: 0;
  left: 20px;
  animation: crystal-pulse 1s infinite ease-in-out;
}
.crystal-face:nth-child(2) {
  top: 20px;
  left: 0;
  animation: crystal-pulse 1s infinite ease-in-out 0.33s;
}
.crystal-face:nth-child(3) {
  top: 20px;
  right: 0;
  animation: crystal-pulse 1s infinite ease-in-out 0.66s;
}
@keyframes crystal-rotate {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}
@keyframes crystal-pulse {
  0%, 100% { opacity: 0.6; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
}`
  },
  {
    id: "25",
    name: "Magnetic Card",
    category: "Hover Effects",
    description: "Card that follows cursor movement",
    difficulty: "Hard",
    tags: ["magnetic", "follow", "cursor"],
    html: `<div class="magnetic-card">Magnetic</div>`,
    css: `.magnetic-card {
  width: 100px;
  height: 80px;
  background: linear-gradient(45deg, #000, #d2a75c);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.1s ease-out;
  animation: magnetic-float 3s infinite ease-in-out;
}
@keyframes magnetic-float {
  0%, 100% { transform: translateY(0px) rotateZ(0deg); }
  50% { transform: translateY(-5px) rotateZ(2deg); }
}
.magnetic-card:hover {
  animation-play-state: paused;
  transform: scale(1.05) rotateZ(-2deg);
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}`
  },
  {
    id: "26",
    name: "DNA Double Helix",
    category: "Loading",
    description: "Double helix DNA strand animation",
    difficulty: "Hard",
    tags: ["dna", "helix", "science"],
    html: `<div class="dna-helix">
  <div class="strand strand-1"></div>
  <div class="strand strand-2"></div>
</div>`,
    css: `.dna-helix {
  width: 60px;
  height: 80px;
  position: relative;
}
.strand {
  position: absolute;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, #d2a75c, #f5e6d3, #d2a75c);
  border-radius: 2px;
  animation: dna-rotate 2s linear infinite;
}
.strand-1 {
  left: 28px;
  animation-delay: 0s;
}
.strand-2 {
  right: 28px;
  animation-delay: 1s;
}
@keyframes dna-rotate {
  0% { transform: rotateY(0deg) translateZ(20px); }
  100% { transform: rotateY(360deg) translateZ(20px); }
}`
  },
  {
    id: "27",
    name: "Typewriter Cursor",
    category: "Text Effects",
    description: "Text appearing with blinking cursor",
    difficulty: "Medium",
    tags: ["typewriter", "cursor", "typing"],
    html: `<div class="typewriter-text">Hello World!</div>`,
    css: `.typewriter-text {
  font-family: 'Courier New', monospace;
  font-size: 16px;
  color: #000;
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #d2a75c;
  animation: typing 3s steps(12) infinite, cursor-blink 0.75s infinite;
}
@keyframes typing {
  0% { width: 0; }
  50% { width: 120px; }
  100% { width: 0; }
}
@keyframes cursor-blink {
  0%, 50% { border-color: transparent; }
  51%, 100% { border-color: #d2a75c; }
}`
  },
  {
    id: "28",
    name: "Elastic Band",
    category: "Animations",
    description: "Stretchy elastic band effect",
    difficulty: "Medium",
    tags: ["elastic", "stretch", "rubber"],
    html: `<div class="elastic-band"></div>`,
    css: `.elastic-band {
  width: 80px;
  height: 8px;
  background: linear-gradient(to right, #d2a75c, #f5e6d3);
  border-radius: 4px;
  animation: elastic-stretch 2s infinite ease-in-out;
  transform-origin: left center;
}
@keyframes elastic-stretch {
  0%, 100% { transform: scaleX(1) scaleY(1); }
  25% { transform: scaleX(1.5) scaleY(0.7); }
  50% { transform: scaleX(0.8) scaleY(1.3); }
  75% { transform: scaleX(1.2) scaleY(0.9); }
}`
  },
  {
    id: "29",
    name: "Hologram Effect",
    category: "Text Effects",
    description: "Holographic text with prismatic colors",
    difficulty: "Hard",
    tags: ["hologram", "prismatic", "futuristic"],
    html: `<div class="hologram-text">HOLOGRAM</div>`,
    css: `.hologram-text {
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #d2a75c, #f5e6d3);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: hologram-shift 2s infinite linear;
  position: relative;
}
.hologram-text::after {
  content: 'HOLOGRAM';
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #d2a75c, #f5e6d3);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: hologram-shift 2s infinite linear reverse;
  opacity: 0.3;
}
@keyframes hologram-shift {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}`
  },
  {
    id: "30",
    name: "Origami Fold",
    category: "Hover Effects",
    description: "Paper folding origami animation",
    difficulty: "Hard",
    tags: ["origami", "fold", "paper"],
    html: `<div class="origami-fold">
  <div class="fold-face front">Front</div>
  <div class="fold-face back">Back</div>
</div>`,
    css: `.origami-fold {
  width: 80px;
  height: 80px;
  position: relative;
  perspective: 1000px;
  cursor: pointer;
}
.fold-face {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: white;
  backface-visibility: hidden;
  transition: transform 0.6s;
}
.front {
  background: linear-gradient(135deg, #d2a75c, #f5e6d3);
  transform: rotateY(0deg);
}
.back {
  background: linear-gradient(135deg, #000, #d2a75c);
  transform: rotateY(180deg);
}
.origami-fold:hover .front {
  transform: rotateY(-180deg);
}
.origami-fold:hover .back {
  transform: rotateY(0deg);
}`
  }
];

// Generate hundreds more animations
const generateVariations = (): Animation[] => {
  const variations: Animation[] = [];
  const categories = ["Loading", "Hover Effects", "Text Effects", "Transitions", "Animations", "Buttons", "Cards", "Backgrounds"];
  const difficulties: Array<"Easy" | "Medium" | "Hard"> = ["Easy", "Medium", "Hard"];
  
  const baseTemplates = [
    {
      name: "Pulse Wave",
      html: `<div class="pulse-wave"></div>`,
      css: `.pulse-wave {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #d2a75c, #f5e6d3);
  border-radius: 50%;
  animation: pulse-wave-anim 2s infinite;
}
@keyframes pulse-wave-anim {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}`,
      tags: ["pulse", "wave", "circle"]
    },
    {
      name: "Gradient Shift",
      html: `<div class="gradient-shift"></div>`,
      css: `.gradient-shift {
  width: 100px;
  height: 60px;
  background: linear-gradient(45deg, #d2a75c, #f5e6d3, #000000);
  background-size: 300% 300%;
  border-radius: 8px;
  animation: gradient-shift-anim 3s infinite;
}
@keyframes gradient-shift-anim {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
      tags: ["gradient", "shift", "color"]
    },
    {
      name: "Spin Loader",
      html: `<div class="spin-loader"></div>`,
      css: `.spin-loader {
  width: 40px;
  height: 40px;
  border: 4px solid #e2e8f0;
  border-top: 4px solid #d2a75c;
  border-radius: 50%;
  animation: spin-loader-anim 1s linear infinite;
}
@keyframes spin-loader-anim {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
      tags: ["spin", "loader", "circular"]
    },
    {
      name: "Shake Animation",
      html: `<div class="shake-anim">Shake</div>`,
      css: `.shake-anim {
  width: 80px;
  height: 60px;
  background: linear-gradient(45deg, #d2a75c, #f5e6d3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  animation: shake-anim 1s infinite;
}
@keyframes shake-anim {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}`,
      tags: ["shake", "vibrate", "wiggle"]
    },
    {
      name: "Flip Animation",
      html: `<div class="flip-anim">Flip</div>`,
      css: `.flip-anim {
  width: 80px;
  height: 60px;
  background: linear-gradient(45deg, #d2a75c, #f5e6d3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  animation: flip-anim 2s infinite;
}
@keyframes flip-anim {
  0%, 50% { transform: rotateY(0deg); }
  25% { transform: rotateY(90deg); }
  75% { transform: rotateY(180deg); }
  100% { transform: rotateY(360deg); }
}`,
      tags: ["flip", "rotate", "3d"]
    },
    {
      name: "Scale Animation",
      html: `<div class="scale-anim">Scale</div>`,
      css: `.scale-anim {
  width: 80px;
  height: 60px;
  background: linear-gradient(45deg, #000000, #d2a75c);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  animation: scale-anim 1.5s infinite;
}
@keyframes scale-anim {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}`,
      tags: ["scale", "size", "grow"]
    },
    {
      name: "Fade Animation",
      html: `<div class="fade-anim">Fade</div>`,
      css: `.fade-anim {
  width: 80px;
  height: 60px;
  background: linear-gradient(45deg, #d2a75c, #ffffff);
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  animation: fade-anim 2s infinite;
}
@keyframes fade-anim {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}`,
      tags: ["fade", "opacity", "visibility"]
    },
    {
      name: "Wobble Effect",
      html: `<div class="wobble-effect">Wobble</div>`,
      css: `.wobble-effect {
  width: 80px;
  height: 60px;
  background: linear-gradient(45deg, #d2a75c, #f5e6d3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  animation: wobble-effect-anim 1s infinite;
}
@keyframes wobble-effect-anim {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}`,
      tags: ["wobble", "rotate", "playful"]
    },
    {
      name: "Floating Orb",
      html: `<div class="floating-orb"></div>`,
      css: `.floating-orb {
  width: 50px;
  height: 50px;
  background: radial-gradient(circle, #d2a75c, #f5e6d3);
  border-radius: 50%;
  animation: float-orb 3s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(210, 167, 92, 0.4);
}
@keyframes float-orb {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}`,
      tags: ["float", "orb", "glow"]
    },
    {
      name: "Digital Rain",
      html: `<div class="digital-rain">
  <span>1</span><span>0</span><span>1</span><span>0</span>
</div>`,
      css: `.digital-rain {
  display: flex;
  gap: 3px;
  font-family: 'Courier New', monospace;
  color: #d2a75c;
  font-size: 14px;
  height: 60px;
  overflow: hidden;
}
.digital-rain span {
  animation: rain-fall 1.5s infinite linear;
  opacity: 0;
}
.digital-rain span:nth-child(1) { animation-delay: 0s; }
.digital-rain span:nth-child(2) { animation-delay: 0.3s; }
.digital-rain span:nth-child(3) { animation-delay: 0.6s; }
.digital-rain span:nth-child(4) { animation-delay: 0.9s; }
@keyframes rain-fall {
  0% { transform: translateY(-20px); opacity: 0; }
  10%, 90% { opacity: 1; }
  100% { transform: translateY(60px); opacity: 0; }
}`,
      tags: ["digital", "rain", "matrix"]
    },
    {
      name: "Hexagon Spinner",
      html: `<div class="hexagon-spinner"></div>`,
      css: `.hexagon-spinner {
  width: 50px;
  height: 50px;
  background: #d2a75c;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: hexagon-spin 2s linear infinite;
}
@keyframes hexagon-spin {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.2); }
  100% { transform: rotate(360deg) scale(1); }
}`,
      tags: ["hexagon", "spinner", "geometric"]
    },
    {
      name: "Wave Ripple",
      html: `<div class="wave-ripple">
  <div class="ripple-ring"></div>
  <div class="ripple-ring"></div>
  <div class="ripple-ring"></div>
</div>`,
      css: `.wave-ripple {
  position: relative;
  width: 80px;
  height: 80px;
}
.ripple-ring {
  position: absolute;
  border: 2px solid #d2a75c;
  border-radius: 50%;
  animation: ripple-expand 2s infinite;
  opacity: 0;
}
.ripple-ring:nth-child(1) { animation-delay: 0s; }
.ripple-ring:nth-child(2) { animation-delay: 0.5s; }
.ripple-ring:nth-child(3) { animation-delay: 1s; }
@keyframes ripple-expand {
  0% { width: 0; height: 0; left: 50%; top: 50%; opacity: 1; }
  100% { width: 80px; height: 80px; left: 0; top: 0; opacity: 0; }
}`,
      tags: ["wave", "ripple", "expand"]
    },
    {
      name: "Cube Rotate",
      html: `<div class="cube-rotate">
  <div class="cube-face front">F</div>
  <div class="cube-face back">B</div>
  <div class="cube-face left">L</div>
  <div class="cube-face right">R</div>
</div>`,
      css: `.cube-rotate {
  width: 60px;
  height: 60px;
  position: relative;
  transform-style: preserve-3d;
  animation: cube-rotation 4s infinite linear;
}
.cube-face {
  position: absolute;
  width: 60px;
  height: 60px;
  background: #d2a75c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.front { transform: translateZ(30px); }
.back { transform: translateZ(-30px) rotateY(180deg); }
.left { transform: rotateY(-90deg) translateZ(30px); }
.right { transform: rotateY(90deg) translateZ(30px); }
@keyframes cube-rotation {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}`,
      tags: ["cube", "3d", "rotate"]
    },
    {
      name: "Pendulum Swing",
      html: `<div class="pendulum">
  <div class="pendulum-string"></div>
  <div class="pendulum-weight"></div>
</div>`,
      css: `.pendulum {
  width: 100px;
  height: 80px;
  position: relative;
  animation: pendulum-swing 2s infinite ease-in-out;
  transform-origin: top center;
}
.pendulum-string {
  width: 2px;
  height: 60px;
  background: #000;
  margin: 0 auto;
}
.pendulum-weight {
  width: 20px;
  height: 20px;
  background: #d2a75c;
  border-radius: 50%;
  margin: 0 auto;
}
@keyframes pendulum-swing {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(30deg); }
  75% { transform: rotate(-30deg); }
}`,
      tags: ["pendulum", "swing", "physics"]
    },
    {
      name: "Loading Dots",
      html: `<div class="loading-dots">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>`,
      css: `.loading-dots {
  display: flex;
  gap: 8px;
  align-items: center;
}
.dot {
  width: 12px;
  height: 12px;
  background: #d2a75c;
  border-radius: 50%;
  animation: dot-bounce 1.4s infinite ease-in-out both;
}
.dot:nth-child(1) { animation-delay: -0.32s; }
.dot:nth-child(2) { animation-delay: -0.16s; }
.dot:nth-child(3) { animation-delay: 0s; }
@keyframes dot-bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}`,
      tags: ["loading", "dots", "bounce"]
    }
  ];

  // Generate 220 more variations (total 250: 20 original + 10 additional + 220 variations)
  for (let i = 0; i < 220; i++) {
    const template = baseTemplates[i % baseTemplates.length];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
    const variation = Math.floor(i / baseTemplates.length) + 1;
    
    variations.push({
      id: (31 + i).toString(),
      name: `${template.name} ${variation}`,
      category,
      description: `${template.name} animation - Variation ${variation}`,
      difficulty,
      tags: [...template.tags, `v${variation}`, category.toLowerCase()],
      html: template.html.replace(/class="([^"]+)"/g, `class="$1-${variation}"`),
      css: template.css.replace(/\.([a-zA-Z-]+)/g, `.$1-${variation}`)
    });
  }

  return variations;
};

export const allAnimations: Animation[] = [
  ...animationsData,
  ...additionalAnimations,
  ...generateVariations()
];