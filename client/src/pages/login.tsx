import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LogIn, Mail, Lock, ArrowRight } from "lucide-react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please enter your email and password");
      return;
    }

    setError(null);
    console.log("Login payload", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/20 via-blue-900/10 to-indigo-900/20" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#1e3a8a]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />

      <Card className="relative w-full max-w-md border-border/50 bg-card/60 backdrop-blur-xl shadow-xl">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <Badge
              variant="secondary"
              className="mb-4 bg-[#1e3a8a]/10 text-[#1e3a8a] border-[#1e3a8a]/20"
            >
              <LogIn className="w-3 h-3 mr-1" />
              Welcome Back
            </Badge>
            <h1 className="text-2xl font-bold">Sign in to DEODAI</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Continue building, learning, and earning
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 rounded-xl border bg-background focus:ring-2 focus:ring-[#1e3a8a] outline-none"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 rounded-xl border bg-background focus:ring-2 focus:ring-[#1e3a8a] outline-none"
              />
            </div>

            {error && <p className="text-sm text-red-500 text-center">{error}</p>}

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white"
            >
              Sign In
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <div className="flex items-center justify-between mt-4 text-sm">
            <Link href="/forgot-password" className="text-muted-foreground hover:text-[#1e3a8a]">
              Forgot password?
            </Link>
          </div>

          <p className="text-sm text-center text-muted-foreground mt-6">
            Don’t have an account?{" "}
            <Link href="/register" className="text-[#1e3a8a] hover:underline">
              Create one
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
