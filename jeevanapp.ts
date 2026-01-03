import { useState } from "react";
import { ArrowUp } from "lucide-react";

const GradientPanel = () => {
  const [prompt, setPrompt] = useState("Ask Lovable to build your saas startup.");

  return (
    <div className="relative hidden h-screen w-1/2 overflow-hidden md:block">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-bg" />
      
      {/* Floating prompt box */}
      <div className="absolute left-1/2 top-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="rounded-2xl bg-background/95 backdrop-blur-sm shadow-2xl p-4">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="flex-1 bg-transparent text-foreground text-sm outline-none placeholder:text-muted-foreground"
              placeholder="Ask Lovable to build your saas startup."
            />
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-200 hover:scale-105">
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Rounded corner mask for the left edge */}
      <div className="absolute left-0 top-0 h-full w-4 bg-background" style={{ borderTopRightRadius: '1rem', borderBottomRightRadius: '1rem' }} />
    </div>
  );
};

export default GradientPanel;
import { useState } from "react";
import BrandLogo from "@/components/ui/BrandLogo";
import SocialButton from "./SocialButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/>
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/>
    <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" fill="#FBBC05"/>
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12Z"/>
  </svg>
);

const LoginForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Continue with email:", email);
  };

  return (
    <div className="flex min-h-screen w-full flex-col justify-center px-8 md:w-1/2 md:px-16 lg:px-24">
      <div className="mx-auto w-full max-w-sm animate-fade-in">
        <BrandLogo />
        
        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-foreground">
          Log in
        </h1>

        <div className="mt-8 space-y-3">
          <SocialButton icon={<GoogleIcon />}>
            Continue with Google
          </SocialButton>
          <SocialButton icon={<GitHubIcon />}>
            Continue with GitHub
          </SocialButton>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-4 text-muted-foreground">Or</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-lg border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:ring-foreground"
            />
          </div>
          <Button
            type="submit"
            className="h-12 w-full rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-200 hover:opacity-90"
          >
            Continue
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <a href="#" className="font-medium text-foreground underline underline-offset-4 hover:opacity-80">
            Create your account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const SocialButton = ({ icon, children, className, ...props }: SocialButtonProps) => {
  return (
    <button
      className={cn(
        "flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-secondary hover:border-muted-foreground/30",
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default SocialButton;
const BrandLogo = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-pulse-soft"
    >
      <path
        d="M20 4C20 4 8 12 8 22C8 28.627 13.373 34 20 34C26.627 34 32 28.627 32 22C32 12 20 4 20 4Z"
        fill="url(#gradient)"
      />
      <defs>
        <linearGradient id="gradient" x1="8" y1="4" x2="32" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F97316" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BrandLogo;
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

@layer base {
  :root {
    --background: 40 33% 98%;
    --foreground: 20 10% 10%;

    --card: 40 33% 98%;
    --card-foreground: 20 10% 10%;

    --popover: 40 33% 98%;
    --popover-foreground: 20 10% 10%;

    --primary: 20 10% 10%;
    --primary-foreground: 40 33% 98%;

    --secondary: 40 20% 94%;
    --secondary-foreground: 20 10% 10%;

    --muted: 40 20% 94%;
    --muted-foreground: 20 10% 45%;

    --accent: 40 20% 94%;
    --accent-foreground: 20 10% 10%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 40 20% 88%;
    --input: 40 20% 88%;
    --ring: 20 10% 10%;

    --radius: 0.75rem;

    /* Custom gradient colors */
    --gradient-cream: 40 33% 95%;
    --gradient-blue: 210 80% 75%;
    --gradient-pink: 340 80% 75%;
    --gradient-orange: 20 90% 70%;

    /* Accent brand */
    --brand-orange: 20 100% 55%;
    --brand-pink: 340 80% 55%;
  }

  .dark {
    --background: 20 10% 8%;
    --foreground: 40 33% 98%;

    --card: 20 10% 10%;
    --card-foreground: 40 33% 98%;

    --popover: 20 10% 10%;
    --popover-foreground: 40 33% 98%;

    --primary: 40 33% 98%;
    --primary-foreground: 20 10% 10%;

    --secondary: 20 15% 15%;
    --secondary-foreground: 40 33% 98%;

    --muted: 20 15% 15%;
    --muted-foreground: 40 20% 65%;

    --accent: 20 15% 15%;
    --accent-foreground: 40 33% 98%;

    --destructive: 0 62% 30%;
    --destructive-foreground: 40 33% 98%;

    --border: 20 15% 18%;
    --input: 20 15% 18%;
    --ring: 40 33% 98%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-sans antialiased;
    font-family: 'Inter', system-ui, sans-serif;
  }
}

@layer utilities {
  .gradient-bg {
    background: linear-gradient(
      180deg,
      hsl(var(--gradient-cream)) 0%,
      hsl(var(--gradient-blue)) 50%,
      hsl(var(--gradient-pink)) 80%,
      hsl(var(--gradient-orange)) 100%
    );
  }

  .text-brand-gradient {
    background: linear-gradient(135deg, hsl(var(--brand-orange)), hsl(var(--brand-pink)));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}
import LoginForm from "@/components/auth/LoginForm";
import GradientPanel from "@/components/auth/GradientPanel";

const Index = () => {
  return (
    <main className="flex min-h-screen bg-background">
      <LoginForm />
      <GradientPanel />
    </main>
  );
};

export default Index;
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          orange: "hsl(var(--brand-orange))",
          pink: "hsl(var(--brand-pink))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
