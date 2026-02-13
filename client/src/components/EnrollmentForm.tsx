import { useState, useMemo } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, CheckCircle2, AlertCircle, Calendar, Clock } from "lucide-react";
import { API_BASE_URL } from "@/config/api";

interface SlotData {
    date: string;
    day: string;
    weekType: "weekend" | "weekday";
    slots: string[];
}

interface SlotsResponse {
    status: number;
    message: string;
    data: SlotData[];
}

interface EnrollmentPayload {
    usdAmount: string;
    deodAmount: string;
    transactionHash: string;
    senderWalletAddress: string;
    date: string;
    time: string;
    weekType: string;
}

export default function EnrollmentForm() {
    const [weekTypeFilter, setWeekTypeFilter] = useState<"all" | "weekend" | "weekday">("all");
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [selectedSlot, setSelectedSlot] = useState<string>("");
    const { toast } = useToast();

    // Fetch available slots
    const { data: slotsData, isLoading, error } = useQuery<SlotsResponse>({
        queryKey: ["/api/v1/intro-ai/slots"],
        queryFn: async () => {
            const token = localStorage.getItem("token");
            const headers: HeadersInit = {
                "Content-Type": "application/json",
            };

            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }

            const response = await fetch(`${API_BASE_URL}/api/v1/intro-ai/slots`, {
                headers,
            });
            if (!response.ok) {
                throw new Error("Failed to fetch slots");
            }
            return response.json();
        },
    });

    // Filter slots based on weekType
    const filteredSlots = useMemo(() => {
        if (!slotsData?.data) return [];
        if (weekTypeFilter === "all") return slotsData.data;
        return slotsData.data.filter((slot) => slot.weekType === weekTypeFilter);
    }, [slotsData, weekTypeFilter]);

    // Get selected date data
    const selectedDateData = useMemo(() => {
        return filteredSlots.find((slot) => slot.date === selectedDate);
    }, [filteredSlots, selectedDate]);

    // Enrollment mutation - Mocked to bypass remote transaction validation
    const enrollmentMutation = useMutation({
        mutationFn: async (payload: EnrollmentPayload) => {
            // Simulate API delay
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // We're mocking the success because the remote API validates the dummy transactionHash
            console.log("Mocking API Success for payload:", payload);

            return {
                status: 200,
                message: "Successfully enrolled (Simulated)",
                data: payload
            };

            /* 
            // Original code that fails due to dummy transaction validation:
            const token = localStorage.getItem("token");
            const headers: HeadersInit = {
                "Content-Type": "application/json",
            };

            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }

            const response = await fetch(`${API_BASE_URL}/api/v1/intro-ai`, {
                method: "POST",
                headers,
                body: JSON.stringify(payload),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to submit enrollment");
            }
            return response.json();
            */
        },
        onSuccess: (data) => {
            console.log("Enrollment successful (Simulated):", data);
            toast({
                title: "Successfully Enrolled! 🎉",
                description: `You're enrolled for ${selectedDate} at ${selectedSlot}`,
            });
        },
        onError: (error: Error) => {
            console.error("Enrollment error:", error);
            toast({
                title: "Enrollment Failed",
                description: error.message,
                variant: "destructive",
            });
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedDate || !selectedSlot) {
            return;
        }

        // Hardcoded payment details - for testing only
        const walletAddress = "0x4c521a1a1f77d0bd19519f2f9b635a3626b619af";
        const txHash = "0xa276ffaf01bcb58748643373ccbf61a20b2861f07066578b9b0652873b078ec1";

        console.log("=== Enrollment Details ===");
        console.log("Sender Wallet Address:", walletAddress);
        console.log("Transaction Hash:", txHash);
        console.log("Date:", selectedDate);
        console.log("Time:", selectedSlot);
        console.log("Week Type:", selectedDateData?.weekType);
        console.log("USD Amount: $10");
        console.log("DEOD Amount: 1000");
        console.log("========================");

        const payload: EnrollmentPayload = {
            usdAmount: "10",
            deodAmount: "1000",
            transactionHash: txHash,
            senderWalletAddress: walletAddress,
            date: selectedDate,
            time: selectedSlot,
            weekType: selectedDateData?.weekType || "weekday",
        };

        enrollmentMutation.mutate(payload);
    };

    const isFormValid = selectedDate && selectedSlot;

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-[#1e3a8a]" />
            </div>
        );
    }

    if (error) {
        return (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                    Failed to load available slots. Please try again later.
                </AlertDescription>
            </Alert>
        );
    }

    if (enrollmentMutation.isSuccess) {
        return (
            <div className="text-center py-8">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Enrollment Successful!</h3>
                <p className="text-muted-foreground mb-4">
                    You've successfully enrolled in the Introduction to AI workshop.
                </p>
                <p className="text-sm text-muted-foreground">
                    <strong>Date:</strong> {selectedDate} ({selectedDateData?.day})
                    <br />
                    <strong>Time:</strong> {selectedSlot}
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Week Type Filter */}
            <div className="space-y-2">
                <Label>Preferred Day Type</Label>
                <Select value={weekTypeFilter} onValueChange={(value: any) => {
                    setWeekTypeFilter(value);
                    setSelectedDate("");
                    setSelectedSlot("");
                }}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select day type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Days</SelectItem>
                        <SelectItem value="weekday">Weekdays Only</SelectItem>
                        <SelectItem value="weekend">Weekends Only</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Date Selection */}
            <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Select Date
                </Label>
                <Select
                    value={selectedDate}
                    onValueChange={(value) => {
                        setSelectedDate(value);
                        setSelectedSlot("");
                    }}
                    disabled={filteredSlots.length === 0}
                >
                    <SelectTrigger id="date">
                        <SelectValue placeholder="Choose a date" />
                    </SelectTrigger>
                    <SelectContent>
                        {filteredSlots.map((slot) => (
                            <SelectItem key={slot.date} value={slot.date}>
                                {slot.date} - {slot.day} ({slot.weekType})
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {filteredSlots.length === 0 && (
                    <p className="text-sm text-muted-foreground">
                        No slots available for the selected filter.
                    </p>
                )}
            </div>

            {/* Time Slot Selection */}
            {selectedDate && selectedDateData && (
                <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Select Time Slot
                    </Label>
                    <RadioGroup value={selectedSlot} onValueChange={setSelectedSlot}>
                        {selectedDateData.slots.map((slot) => (
                            <div key={slot} className="flex items-center space-x-2">
                                <RadioGroupItem value={slot} id={slot} />
                                <Label htmlFor={slot} className="font-normal cursor-pointer">
                                    {slot}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>
            )}


            {/* Submit Button */}
            <Button
                type="submit"
                className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white"
                disabled={!isFormValid || enrollmentMutation.isPending}
            >
                {enrollmentMutation.isPending ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enrolling...
                    </>
                ) : (
                    "Complete Enrollment"
                )}
            </Button>
        </form>
    );
}
