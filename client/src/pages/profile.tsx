import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getMe } from "@/utils/auth";
import { API_BASE_URL } from "@/config/api";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { CLAIM_URL, TRANSFER_CONTRACT_ADDRESS } from "@/config/env";
import { Copy } from "lucide-react";
import { ethers } from "ethers";
import { TRANSFER_CONTRACT_ABI } from "@/config/abi";

export default function Profile() {
    const [user, setUser] = useState<any>(null);
    const [, setLocation] = useLocation();
    const [coupons, setCoupons] = useState([]);
    const [couponOpen, setCouponOpen] = useState(false);
    const [couponData, setCouponData] = useState<any>(null);
    const [hasPurchesedCourse, setHasPurchesedCourse] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch(`${API_BASE_URL}/api/v1/coupons/my-coupons`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((r) => r.json())
            .then((j) => {
                const active = (j?.data || []).filter(
                    (c: any) => c.isActive && !c.isRedeemed,
                );
                setCoupons(active);
            });
    }, []);

    const checkHasPurchesedCourse = async (walletAddress: string) => {
        if (!window.ethereum) return;
        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const transferContract = new ethers.Contract(
                TRANSFER_CONTRACT_ADDRESS,
                TRANSFER_CONTRACT_ABI,
                provider,
            );

            const purchased =
                await transferContract.hasPurchased(walletAddress);
            setHasPurchesedCourse(purchased);
        } catch (error) {
            console.error("Failed to check purchased course:", error);
        }
    };

    useEffect(() => {
        getMe().then((data) => {
            if (!data) {
                setLocation("/login");
            } else {
                setUser(data);
                if (data.wallet_address) {
                    checkHasPurchesedCourse(data.wallet_address);
                }
            }
        });
    }, []);

    if (!user) {
        return (
            <div className="min-h-screen bg-muted/40 py-10 px-4 flex justify-center items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1e3a8a]"></div>
                <span className="ml-3 text-muted-foreground">
                    Loading profile...
                </span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-muted/40 py-10 px-4 flex justify-center">
            <div className="w-full max-w-4xl space-y-6">
                {/* Profile Card */}
                <Card className="shadow-lg">
                    <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <h1 className="text-2xl font-bold">
                                {user.name}{" "}
                                <span className="text-sm text-muted-foreground bg-muted/40 p-1.5 rounded-lg border border-border">
                                    {user.wallet_address.slice(0, 6)}...
                                    {user.wallet_address.slice(-4)}
                                </span>
                            </h1>
                            <p className="text-muted-foreground">
                                {user.email}
                            </p>
                            <p className="text-muted-foreground text-sm">
                                {user.phone}
                            </p>
                            {hasPurchesedCourse ? (
                                <p className="text-muted-foreground text-sm mt-3">
                                    Refferal Link:{" "}
                                    <a
                                        className="text-blue-600 cursor-pointer flex items-center justify-center  gap-2"
                                        onClick={() => {
                                            navigator.clipboard.writeText(
                                                "https://deod.ai/register?ref=" +
                                                    user.wallet_address,
                                            );
                                            alert("Copied to clipboard");
                                        }}
                                        title="Copy to clipboard"
                                    >
                                        <span className="text-xs">
                                            {"https://deod.ai/register?ref=" +
                                                user.wallet_address}
                                        </span>{" "}
                                        <Copy className="w-4 h-4" />
                                    </a>
                                </p>
                            ) : (
                                <p className="text-muted-foreground text-sm mt-3 bg-yellow-100 p-2 rounded border border-yellow-200">
                                    You have not purchased a course yet. Please
                                    purchase a course to get a referral link.
                                </p>
                            )}
                        </div>

                        <Button
                            className="bg-[#1e3a8a] text-white"
                            onClick={() => setLocation("/")}
                        >
                            Go Home
                        </Button>
                    </CardContent>
                </Card>

                {/* Coupons Section */}
                <Card className="shadow-lg">
                    <CardContent className="p-6">
                        <h2 className="text-xl font-semibold mb-4">
                            Your Active Coupons
                        </h2>

                        {coupons.length === 0 && (
                            <p className="text-muted-foreground text-sm">
                                No active coupons available
                            </p>
                        )}

                        <div className="grid md:grid-cols-2 gap-4">
                            {coupons.map((c: any) => (
                                <div
                                    key={c._id}
                                    className="border rounded-xl p-4 flex justify-between items-center bg-white shadow-sm"
                                >
                                    <div>
                                        <p className="text-xs text-muted-foreground">
                                            Coupon Code
                                        </p>
                                        <p className="font-bold text-lg tracking-widest text-indigo-600">
                                            {c.code}
                                        </p>

                                        {/* Status Badge */}
                                        <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700 font-medium">
                                            Active
                                        </span>
                                        <div className="mt-2">
                                            <p className="text-xs text-muted-foreground">
                                                Coupon redeem functionality is
                                                not available yet. we are
                                                working on it.
                                            </p>
                                        </div>
                                    </div>

                                    {/* <a
        href={`${CLAIM_URL}/login?token=${authToken}&coupon=${c.redemptionToken}`}
        target="_blank"
        rel="noopener noreferrer"
      > */}

                                    <Button
                                        size="sm"
                                        disabled
                                        className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white"
                                    >
                                        Redeem
                                    </Button>
                                    {/* </a> */}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Coupon Popup */}
                <Dialog open={couponOpen} onOpenChange={setCouponOpen}>
                    <DialogContent className="max-w-md p-6 text-center">
                        {couponData && (
                            <>
                                <DialogHeader>
                                    <DialogTitle>Redeem Coupon</DialogTitle>
                                </DialogHeader>

                                <div className="border border-dashed rounded-xl px-4 py-4 my-4">
                                    <p className="text-xs text-muted-foreground">
                                        Coupon Code
                                    </p>
                                    <p className="text-2xl font-bold tracking-widest text-indigo-600">
                                        {couponData.code}
                                    </p>
                                </div>

                                {/* <a
                                    href={`${CLAIM_URL}/login?token=${authToken}&coupon=${couponData.redemptionToken}`}
                                    target="_blank"
                                >
                                    <Button className="w-full bg-[#1e3a8a] text-white">
                                        Claim & Continue Payment
                                    </Button>
                                </a> */}
                                <a href={`${CLAIM_URL}`} target="_blank">
                                    <Button className="w-full bg-[#1e3a8a] text-white">
                                        Claim Coupon
                                    </Button>
                                </a>
                            </>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
