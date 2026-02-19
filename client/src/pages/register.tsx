import { useState } from "react";
import { Link,useLocation  } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useParams } from "wouter";
import { UserPlus, User, Mail, Phone, Lock, ArrowRight } from "lucide-react";
import { API_BASE_URL } from "@/config/api";
import { Wallet } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
export default function Register() {
  const { toast } = useToast();
  console.log("URL:", window.location.search);
  const searchParams = new URLSearchParams(window.location.search);
const referralFromUrl = searchParams.get("ref") || "";

  const [walletAddress, setWalletAddress] = useState("");

  const [form, setForm] = useState({   
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
   referral: referralFromUrl,
  });

  const connectWallet = async () => {
  try {
    if (!window.ethereum) {
      alert("Install MetaMask");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setWalletAddress(accounts[0]);

     toast({
      title: "Wallet Connected 🎉",
      description: `${accounts[0].slice(0,6)}...${accounts[0].slice(-4)}`,
    });
  } catch (err) {
    console.error(err);
  }
};


  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [, setLocation] = useLocation();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

console.log("Referral from URL:", referralFromUrl);

   const refWalletAddress =
  referralFromUrl || form.referral || null;

 if (!walletAddress) {
    setError("Please connect your wallet before registering");
    return;
  }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError(null);
    setLoading(true);

    

    try {
      const res = await fetch( `http://192.168.1.63:3000/api/v1/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          phone: form.phone,
          confirmPassword: form.confirmPassword,
          wallet_address: walletAddress,
          ref_wallet_address: refWalletAddress || null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      console.log("Registration success:", data);

      if (data.data?.token) {
  const token = data.data.token;

  localStorage.setItem("token", token);

  // 🔥 UPDATE USER PROFILE
  await fetch(`http://192.168.1.63:3000/api/v1/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      wallet_address: walletAddress,
      ref_wallet_address: refWalletAddress || null,
    }),
  });
}
    setLocation("/login");
    

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
              <UserPlus className="w-3 h-3 mr-1" />
              Create Account
            </Badge>
            <h1 className="text-2xl font-bold">Join DEODAI</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Start building, learning, and earning with AI
            </p>
          </div>
          
          
       <div className="absolute top-4 right-4">
  <Button
    type="button"
    onClick={connectWallet}
    className={`h-14 w-14 p-0 rounded-full
      bg-[#1e3a8a] hover:bg-[#1e3a8a]/90
      text-white shadow-md
      flex items-center justify-center
      transition-all duration-300
      hover:scale-105 hover:shadow-lg
      active:scale-95
      ${walletAddress ? "ring-2 ring-blue-300" : ""}
    `}
    title={walletAddress ? walletAddress : "Connect Wallet"}
  >
    <Wallet className="!h-6 !w-6 transition-transform duration-300 group-hover:rotate-6" strokeWidth={2.1} />
  </Button>
</div>








          <form onSubmit={handleSubmit} className="space-y-4">
          
            <div className="relative">
  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
  <input
    name="name"
    placeholder="Full name"
    value={form.name}
    onChange={handleChange}
    required
    className="w-full pl-10 pr-4 py-2 rounded-xl border bg-background focus:ring-2 focus:ring-[#1e3a8a] outline-none"
  />
</div>
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
              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={form.phone}
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

            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 rounded-xl border bg-background focus:ring-2 focus:ring-[#1e3a8a] outline-none"
              />
            </div>

           <div className="relative">
  <input
    name="referral"
    placeholder="Referral Wallet Address (optional)"
    value={form.referral}
    onChange={handleChange}
    disabled={!!referralFromUrl}
    className={`w-full pl-4 pr-4 py-2 rounded-xl border bg-background focus:ring-2 focus:ring-[#1e3a8a] outline-none ${
      referralFromUrl ? "opacity-70 cursor-not-allowed" : ""
    }`}
  />
</div>

            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white"
            >
              {loading ? "Creating Account..." : "Create Account"}
              {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>

          <p className="text-sm text-center text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-[#1e3a8a] hover:underline">
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
