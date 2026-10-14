import * as React from "react";
import {
  HeroSection,
  TrustMarquee,
  WhyHireSection,
  ChatSection,
  SuccessStoriesSection,
  UpgradeSection,
  StepsSection,
  FaqSection,
  FinalCtaSection,
} from "./components/landing/sections";
import { 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Target,
  ShieldCheck,
  Star,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Quote,
  Building2,
  Globe,
  Briefcase,
  Zap,
  MessageSquareText,
  FilePlus,
  UserPlus,
  X,
  Check,
  LogIn
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MultiSelect, Option } from "@/components/MultiSelect";
import { COUNTRIES } from "./constants/countries";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
// @ts-ignore

const SUGGESTED_POSITIONS: Option[] = [
  { label: "Marketing Executive", value: "Marketing Executive" },
  { label: "Social Media Executive", value: "Social Media Executive" },
  { label: "Digital Marketing Executive", value: "Digital Marketing Executive" },
  { label: "Marketing Specialist", value: "Marketing Specialist" },
  { label: "Marketing Campaign Specialist", value: "Marketing Campaign Specialist" },
  { label: "Marketing (General)", value: "Marketing (General)" },
  { label: "Others", value: "Others" },
];

const FreeAdsCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = React.useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 6,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  React.useEffect(() => {
    const target = Date.now() + 7 * 24 * 60 * 60 * 1000;
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="bg-amber-50/90 border border-amber-200/80 rounded-xl p-3 my-2 text-center shadow-sm">
      <p className="text-amber-900 font-bold text-xs md:text-sm mb-2">
        Your FREE Job Ads will be expired in 7 days. Use now.
      </p>
      <div className="flex items-center justify-center gap-1.5 text-amber-950">
        <div className="flex flex-col items-center bg-white border border-amber-200/70 rounded-lg px-2 py-1 min-w-[44px]">
          <span className="font-extrabold text-sm md:text-base leading-none">{timeLeft.days}</span>
          <span className="text-[9px] font-bold text-amber-700 uppercase mt-0.5">Days</span>
        </div>
        <span className="font-bold text-amber-800 text-sm">:</span>
        <div className="flex flex-col items-center bg-white border border-amber-200/70 rounded-lg px-2 py-1 min-w-[44px]">
          <span className="font-extrabold text-sm md:text-base leading-none">{formatNumber(timeLeft.hours)}</span>
          <span className="text-[9px] font-bold text-amber-700 uppercase mt-0.5">Hours</span>
        </div>
        <span className="font-bold text-amber-800 text-sm">:</span>
        <div className="flex flex-col items-center bg-white border border-amber-200/70 rounded-lg px-2 py-1 min-w-[44px]">
          <span className="font-extrabold text-sm md:text-base leading-none">{formatNumber(timeLeft.minutes)}</span>
          <span className="text-[9px] font-bold text-amber-700 uppercase mt-0.5">Mins</span>
        </div>
        <span className="font-bold text-amber-800 text-sm">:</span>
        <div className="flex flex-col items-center bg-white border border-amber-200/70 rounded-lg px-2 py-1 min-w-[44px]">
          <span className="font-extrabold text-sm md:text-base leading-none">{formatNumber(timeLeft.seconds)}</span>
          <span className="text-[9px] font-bold text-amber-700 uppercase mt-0.5">Secs</span>
        </div>
      </div>
    </div>
  );
};

interface HiringFormProps {
  onSuccess: () => void;
  onScrollToTestimonials: () => void;
  isOpen: boolean;
}

const FREE_AD_OPTIONS = [
  { label: "Freelance Job Ad", value: "Freelance" },
  { label: "Internship Job Ad", value: "Internship" },
  { label: "Part-time Job Ad", value: "Part-time" },
  { label: "Volunteer Job Ad", value: "Volunteer" },
  { label: "High-Pay Job Ad", value: "High-Pay" },
  { label: "Singapore Job Ad", value: "Singapore" }
];

const HiringForm = ({ onSuccess, onScrollToTestimonials, isOpen }: HiringFormProps) => {
  const [loading, setLoading] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [submittedHasAccount, setSubmittedHasAccount] = React.useState<string>("");
  const [phoneCode, setPhoneCode] = React.useState("+60");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [selectedFreeAds, setSelectedFreeAds] = React.useState<string[]>([]);
  const [formData, setFormData] = React.useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    positionToPost: "",
    claimedFreeJobAd: "",
    fullTimeNeeds: "",
    positionsPlanned: "",
    hasAJobThingAccount: ""
  });

  React.useEffect(() => {
    if (isOpen) {
      setFormData({
        fullName: "",
        workEmail: "",
        companyName: "",
        positionToPost: "",
        claimedFreeJobAd: "",
        fullTimeNeeds: "",
        positionsPlanned: "",
        hasAJobThingAccount: ""
      });
      setSelectedFreeAds([]);
      setPhoneNumber("");
      setShowSuccess(false);
      setSubmittedHasAccount("");
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.workEmail || !phoneNumber || !formData.companyName || !formData.fullTimeNeeds || !formData.hasAJobThingAccount) {
      alert("Please fill in all required fields.");
      return;
    }

    if (formData.fullTimeNeeds && formData.fullTimeNeeds.startsWith("Yes") && !formData.positionsPlanned) {
      alert("Please specify how many positions you are planning to hire.");
      return;
    }

    setLoading(true);

    // Capture UTMs from URL
    const urlParams = new URLSearchParams(window.location.search);
    const sourceVal = urlParams.get("utm_source") || "Google Ads";

    // Generate dynamic special note
    const claimedAd = selectedFreeAds.join(", ") || "None";
    let claimedAdShort = "no free job ads";
    if (selectedFreeAds.length > 0) {
      if (selectedFreeAds.length === FREE_AD_OPTIONS.length) {
        claimedAdShort = "All 6 Free Job Ads";
      } else {
        claimedAdShort = selectedFreeAds.join(", ");
      }
    }

    let dynamicSpecialNote = "";
    const hasFullTime = formData.fullTimeNeeds && formData.fullTimeNeeds.startsWith("Yes");
    if (!hasFullTime) {
      dynamicSpecialNote = `${sourceVal} - Only want ${claimedAdShort}*`;
    } else {
      let urgency = "Hiring Urgent";
      if (formData.fullTimeNeeds === "Yes, hiring next month") {
        urgency = "Hiring next month";
      } else if (formData.fullTimeNeeds === "Yes, in 2–3 months") {
        urgency = "Hiring in 2–3 months";
      }
      const count = formData.positionsPlanned ? `${formData.positionsPlanned} people` : "some people";
      dynamicSpecialNote = `${sourceVal} - ${urgency} - ${count} - ${claimedAdShort.toLowerCase()}*`;
    }

    const utmData = {
      utm_source: urlParams.get("utm_source") || "",
      utm_medium: urlParams.get("utm_medium") || "",
      utm_campaign: urlParams.get("utm_campaign") || "",
      "utm_special note": dynamicSpecialNote,
      // Fallback keys to ensure robust integration with multiple spreadsheet schemas
      "utm_special_note": dynamicSpecialNote,
      "special_note": dynamicSpecialNote,
      "special_notes": dynamicSpecialNote,
      "note": dynamicSpecialNote
    };

    const payload = {
      timestamp: new Date().toLocaleString(),
      company_name: formData.companyName,
      full_name: formData.fullName,
      email: formData.workEmail,
      phone_number: `${phoneCode}${phoneNumber}`,
      claimed_free_job_ad: selectedFreeAds.join(", ") || "None specified",
      position_to_post: formData.positionToPost || "Not specified",
      headcount: formData.positionsPlanned || "N/A",
      hiring_timeline: formData.fullTimeNeeds || "Not specified",
      has_ajobthing_account: formData.hasAJobThingAccount,
      ...utmData
    };

    try {
      // If you are deploying on a static host (like Vercel, Netlify, or Hostinger),
      // the local Express server (/api/submit-lead) will not exist.
      // We must fetch the Google Apps Script directly from the client side.
      // Make sure to replace this with your actual deployed Apps Script Web App URL!
      const scriptUrl = import.meta.env.VITE_APPS_SCRIPT_URL || "https://script.google.com/macros/s/AKfycby_Jxr3h1SMi6OKl4b3I6HAiJkxuucFcFKnav-vwjY-FKy0tw7Tv-dj7GJAI62mPbci0g/exec";
      
      const response = await fetch(scriptUrl, {
        method: "POST",
        // Using text/plain avoids CORS preflight OPTIONS request
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });

      // Also send data to Lark webhook
      try {
        const larkWebhookUrl = "https://ajobthing.sg.larksuite.com/base/automation/webhook/event/TpQ0aWjDrwcHXXh1BOalwHBmgFb";
        
        let jobCategory = "";
        if (selectedFreeAds.length > 0) {
          const firstSelected = FREE_AD_OPTIONS.find(o => o.value === selectedFreeAds[0]);
          jobCategory = firstSelected ? firstSelected.value : selectedFreeAds[0];
        }

        const larkPayload = {
          "COMPANY_NAME": formData.companyName,
          "HIRING_JOB_TITLE": formData.positionToPost,
          "PHONE": `${phoneCode}${phoneNumber}`,
          "EMAIL": formData.workEmail,
          "JOB_CATEGORY": jobCategory,
          "LEAD_SOURCE": "google_ads"
        };

        await fetch(larkWebhookUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(larkPayload)
        });
      } catch (larkError) {
        console.error("Lark webhook failed:", larkError);
      }

      // Google Apps Script usually returns 200 OK even for errors,
      // so you should check the response if you can.
      // Since it might redirect, response.ok is generally sufficient if the redirect succeeds.
      if (!response.ok) {
        throw new Error(`Submission failed with status: ${response.status}`);
      }

      // Track successful form submission with Google Analytics
      if (typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'submit_free_job_ads');
      }

      setSubmittedHasAccount(formData.hasAJobThingAccount);

      // Reset form state
      setFormData({
        fullName: "",
        workEmail: "",
        companyName: "",
        positionToPost: "",
        claimedFreeJobAd: "",
        fullTimeNeeds: "",
        positionsPlanned: "",
        hasAJobThingAccount: ""
      });
      setSelectedFreeAds([]);
      setPhoneNumber("");
      
      setShowSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (showSuccess) {
    const isYes = submittedHasAccount === "Yes";

    return (
      <div className="rounded-[2rem] overflow-hidden bg-white relative">
        <div className="p-5 md:p-8 text-center flex flex-col items-center gap-4">
          <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-1 animate-bounce">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12, stiffness: 200 }}
            >
              <CheckCircle2 className="h-8 w-8 text-green-500" />
            </motion.div>
          </div>
          
          {isYes ? (
            <div className="space-y-3.5 w-full">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 leading-tight">
                Enjoy 60 FREE Job Ads for a limited time!
              </h3>
              <div className="bg-slate-50 rounded-xl p-3.5 text-left max-w-sm mx-auto border border-slate-100/80 shadow-sm">
                <p className="text-slate-500 font-bold mb-2 text-[10px] tracking-wider uppercase">
                  FOLLOW THESE STEPS:
                </p>
                <ol className="space-y-2 text-slate-600 font-medium text-xs md:text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="flex items-center justify-center bg-primary text-white font-bold rounded-full h-5 w-5 text-[10px] shrink-0 mt-0.5">1</span>
                    <span>
                      Click button below to <a href="https://www.ajobthing.com/login?utm_campaign=googleads&utm_medium=loginbutton&utm_source=LP-freejobads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold decoration-primary/30 decoration-2">Login</a> as Employers on AJobThing
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex items-center justify-center bg-primary text-white font-bold rounded-full h-5 w-5 text-[10px] shrink-0 mt-0.5">2</span>
                    <span>Check your FREE Job Ad Package on the dashboard.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex items-center justify-center bg-primary text-white font-bold rounded-full h-5 w-5 text-[10px] shrink-0 mt-0.5">3</span>
                    <span>Start posting your FREE Job Ad</span>
                  </li>
                </ol>
              </div>
              <p className="text-slate-600 font-medium text-[11px] md:text-xs leading-relaxed max-w-sm mx-auto px-2">
                📣 If you have full-time hiring needs, our hiring support team will reach out via WhatsApp to help.
              </p>

              <div className="max-w-[240px] mx-auto pt-1">
                <img
                  loading="lazy"
                  src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGl4MGJlbWJ1eXVkbjY2OWNpMzFrbTFldTN5emRsZGRzbXUwMm1paiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4K26WUN7KecyHw7fSi/giphy.gif"
                  alt="Thank You Animation"
                  className="w-full h-auto object-contain rounded-xl shadow-sm mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              <FreeAdsCountdown />
            </div>
          ) : (
            <div className="space-y-3.5 w-full">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 leading-tight">
                Enjoy 60 FREE Job Ads for a limited time!
              </h3>
              <div className="bg-slate-50 rounded-xl p-4 text-center max-w-sm mx-auto border border-slate-100/80 shadow-sm">
                <p className="text-slate-900 font-bold text-sm mb-1">Don’t have an account yet?</p>
                <p className="text-slate-600 font-medium text-sm mb-3">No worries! We can help you create one.</p>
                <p className="text-slate-600 font-medium text-sm">
                  <a href="https://wa.me/60189666610?text=Hi+admin%2C+I+just+filled+out+the+form+on+Google+Ads+and+would+like+to+know+more+about+your+hiring+packages.+Could+you+share+more+info%3F" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">
                    Contact us
                  </a> on WhatsApp for help.
                </p>
              </div>

              <div className="max-w-[240px] mx-auto pt-1">
                <img
                  loading="lazy"
                  src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGl4MGJlbWJ1eXVkbjY2OWNpMzFrbTFldTN5emRsZGRzbXUwMm1paiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4K26WUN7KecyHw7fSi/giphy.gif"
                  alt="Thank You Animation"
                  className="w-full h-auto object-contain rounded-xl shadow-sm mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              <FreeAdsCountdown />
            </div>
          )}

          <div className="max-w-[110px] mx-auto pt-0.5">
            <img loading="lazy" src="https://s3-ap-southeast-1.amazonaws.com/ricebowl/images/marketing-campaign/image-ec64e417-6572-4498-90f7-0591b5b3eaff.png" alt="AJobThing & Maukerja" className="w-full h-auto object-contain rounded-lg" referrerPolicy="no-referrer" />
          </div>

          <div className="w-full mt-1 flex flex-col gap-2.5">
            {isYes ? (
              <Button 
                className="w-full h-12 bg-primary hover:brightness-90 text-white font-bold text-base rounded-xl shadow-lg shadow-primary/10 flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer"
                onClick={() => window.open("https://www.ajobthing.com/login?utm_campaign=googleads&utm_medium=loginbutton&utm_source=LP-freejobads", "_blank")}
              >
                Login
                <ArrowRight className="h-5 w-5" />
              </Button>
            ) : (
              <Button 
                className="w-full h-12 bg-[#ED3554] hover:bg-[#D32F4F] text-white font-bold text-base rounded-xl shadow-lg shadow-red-500/10 flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer"
                onClick={() => window.open("https://wa.me/60189666610?text=Hi+admin%2C+I+just+filled+out+the+form+on+Google+Ads+and+would+like+to+know+more+about+your+hiring+packages.+Could+you+share+more+info%3F", "_blank")}
              >
                Register
                <ArrowRight className="h-5 w-5" />
              </Button>
            )}
            <Button 
              variant="outline" 
              className="w-full h-10 border-slate-200 hover:bg-slate-50 text-slate-500 rounded-xl font-bold text-xs transition-colors cursor-pointer"
              onClick={onSuccess}
            >
              Done & Close
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[2.5rem] overflow-hidden bg-white">
      <div className="bg-primary pt-5 pb-3 px-5 text-white text-center flex flex-col items-center">
        <button onClick={onScrollToTestimonials} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-3 hover:bg-white/20 transition-all cursor-pointer">
          <img loading="lazy" src="https://www.ajobthing.com/mkt/images/ajt/google.svg" alt="Google" className="h-2.5 w-2.5 brightness-0 invert" referrerPolicy="no-referrer" />
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-2 w-2 fill-[#FFC107] text-[#FFC107]" />
            ))}
          </div>
          <span className="text-[9px] font-bold uppercase tracking-wider">4.9 Google Reviews</span>
        </button>
        <h3 className="text-xl font-bold tracking-tight">Start Hiring for FREE</h3>
      </div>
      <div className="pt-2 px-6 pb-6 md:pt-3 md:px-8 md:pb-8 space-y-4 bg-white">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="fullName" className="text-sm font-semibold text-slate-700">Full Name <span className="text-red-500">*</span></Label>
              <Input id="fullName" required value={formData.fullName} onChange={(e) => setFormData(p => ({...p, fullName: e.target.value}))} placeholder="Enter your full name" className="h-10 border-slate-200 bg-white rounded-xl focus-visible:ring-primary font-medium placeholder:text-slate-400 placeholder:font-normal shadow-sm" autoFocus={isOpen} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="workEmail" className="text-sm font-semibold text-slate-700">Work Email <span className="text-red-500">*</span></Label>
              <Input id="workEmail" type="email" required value={formData.workEmail} onChange={(e) => setFormData(p => ({...p, workEmail: e.target.value}))} placeholder="Enter your work email" className="h-10 border-slate-200 bg-white rounded-xl focus-visible:ring-primary font-medium placeholder:text-slate-400 placeholder:font-normal shadow-sm" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number <span className="text-red-500">*</span></Label>
              <div className="flex h-10 w-full rounded-xl border border-slate-200 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-0 transition-all group/phone shadow-sm">
                <div className="flex items-center border-r border-slate-200 bg-slate-100/30 shrink-0">
                  <Popover>
                    <PopoverTrigger render={<Button variant="ghost" size="sm" className="h-full px-3 gap-1 rounded-none hover:bg-slate-100/50 border-none transition-colors group/trigger" />}>
                      <img loading="lazy" src={COUNTRIES.find(c => c.code === phoneCode)?.flag} alt="Flag" className="w-6 h-4 object-cover rounded-sm ring-1 ring-black/5" />
                      <ChevronDown className="h-3 w-3 text-slate-400 group-hover/trigger:text-primary transition-colors" />
                    </PopoverTrigger>
                    <PopoverContent className="w-[300px] p-0" align="start">
                      <Command>
                        <CommandInput placeholder="Search country..." className="h-9" />
                        <CommandList>
                          <CommandEmpty>No country found.</CommandEmpty>
                          <CommandGroup>
                            {COUNTRIES.map((country) => (
                              <CommandItem
                                key={country.code}
                                value={country.name}
                                onSelect={() => setPhoneCode(country.code)}
                                className="flex items-center justify-between py-2 cursor-pointer"
                              >
                                <div className="flex items-center gap-2">
                                  <img loading="lazy" src={country.flag} alt={country.name} className="w-6 h-4 object-cover rounded-sm ring-1 ring-black/10" />
                                  <span>{country.name}</span>
                                </div>
                                <span className="text-slate-400 text-sm font-medium">{country.code}</span>
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <span className="text-sm font-medium text-slate-600 px-2 pr-4 pointer-events-none">{phoneCode}</span>
                </div>
                <Input type="tel" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value.replace(/[^0-9]/g, ""))} placeholder="12 345 6789" className="h-full border-none bg-transparent rounded-none focus-visible:ring-0 px-3 font-medium placeholder:text-slate-400 placeholder:font-normal" />
              </div>
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="companyName" className="text-sm font-semibold text-slate-700">Company Name <span className="text-red-500">*</span></Label>
              <Input id="companyName" required value={formData.companyName} onChange={(e) => setFormData(p => ({...p, companyName: e.target.value}))} placeholder="Enter your company name" className="h-10 border-slate-200 bg-white rounded-xl focus-visible:ring-primary font-medium placeholder:text-slate-400 placeholder:font-normal shadow-sm" />
            </div>

            <div className="space-y-1">
              <Label className="text-sm font-semibold text-slate-700">Select the free job ad you want to claim <span className="text-slate-400 font-normal">(optional)</span></Label>
              <Popover>
                <PopoverTrigger render={<Button variant="outline" className="w-full justify-between h-10 border-slate-200 bg-white rounded-xl font-medium text-slate-700 shadow-sm text-left px-3 hover:bg-white" />}>
                  <span className="truncate">
                    {selectedFreeAds.length === 0 
                      ? "Select free job ad options" 
                      : selectedFreeAds.length === FREE_AD_OPTIONS.length 
                        ? "All 6 Free Job Ads selected" 
                        : selectedFreeAds.map(val => FREE_AD_OPTIONS.find(o => o.value === val)?.label || val).join(", ")}
                  </span>
                  <ChevronDown className="h-4 w-4 opacity-50 ml-2 shrink-0" />
                </PopoverTrigger>
                <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-3 bg-white border border-slate-200 rounded-xl shadow-xl space-y-2 z-[150]" align="start">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Free Job Ads</span>
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="sm" 
                      className="h-6 px-2 text-xs font-bold text-primary hover:bg-primary/10 rounded-md cursor-pointer"
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedFreeAds(selectedFreeAds.length === FREE_AD_OPTIONS.length ? [] : FREE_AD_OPTIONS.map(o => o.value)); }}
                    >
                      {selectedFreeAds.length === FREE_AD_OPTIONS.length ? "Deselect All" : "Select All"}
                    </Button>
                  </div>
                  {FREE_AD_OPTIONS.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedFreeAds(prev => prev.includes(option.value) ? prev.filter(v => v !== option.value) : [...prev, option.value]); }}>
                      <Checkbox id={option.value} checked={selectedFreeAds.includes(option.value)} className="rounded-md border-slate-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary pointer-events-none" />
                      <Label htmlFor={option.value} className="text-sm font-medium text-slate-700 cursor-pointer pointer-events-none flex-1">{option.label}</Label>
                    </div>
                  ))}
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-1">
              <Label htmlFor="positionToPost" className="text-sm font-semibold text-slate-700">What position do you want to post? <span className="text-slate-400 font-normal">(optional)</span></Label>
              <Input id="positionToPost" value={formData.positionToPost} onChange={(e) => setFormData(p => ({...p, positionToPost: e.target.value}))} placeholder="e.g. Sales Executive, Cashier" className="h-10 border-slate-200 bg-white rounded-xl focus-visible:ring-primary font-medium placeholder:text-slate-400 placeholder:font-normal shadow-sm" />
            </div>

            <div className="space-y-1.5">
              <Label className="text-sm font-semibold text-slate-700">Do you also have full-time hiring needs? <span className="text-red-500">*</span></Label>
              <Select value={formData.fullTimeNeeds} onValueChange={(value) => setFormData(p => ({...p, fullTimeNeeds: value, positionsPlanned: value === "Not yet planned" ? "" : p.positionsPlanned}))}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes, urgent hiring">Yes, urgent hiring</SelectItem>
                  <SelectItem value="Yes, hiring next month">Yes, hiring next month</SelectItem>
                  <SelectItem value="Yes, in 2–3 months">Yes, in 2–3 months</SelectItem>
                  <SelectItem value="Not yet planned">Not yet planned</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.fullTimeNeeds && formData.fullTimeNeeds.startsWith("Yes") && (
              <div className="space-y-1.5 animate-in slide-in-from-top-2 fade-in duration-200">
                <Label className="text-sm font-semibold text-slate-700">How many full-time positions are you planning to hire? <span className="text-red-500">*</span></Label>
                <Select value={formData.positionsPlanned} onValueChange={(value) => setFormData(p => ({...p, positionsPlanned: value}))}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {["1-6", "7-15", "16-30", "More than 30"].map((num) => (
                      <SelectItem key={num} value={num}>{num}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="space-y-1.5">
              <Label className="text-sm font-semibold text-slate-700">Do you have an AJobThing account? <span className="text-red-500">*</span></Label>
              <div className="flex gap-4 items-center">
                <label className="flex items-center space-x-2 cursor-pointer bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 hover:border-primary/50 transition-all">
                  <input type="radio" name="hasAccount" value="Yes" className="text-primary focus:ring-primary h-4 w-4" onChange={(e) => setFormData(p => ({...p, hasAJobThingAccount: e.target.value}))} checked={formData.hasAJobThingAccount === "Yes"} required />
                  <span className="text-sm font-medium text-slate-700">Yes</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 hover:border-primary/50 transition-all">
                  <input type="radio" name="hasAccount" value="No" className="text-primary focus:ring-primary h-4 w-4" onChange={(e) => setFormData(p => ({...p, hasAJobThingAccount: e.target.value}))} checked={formData.hasAJobThingAccount === "No"} required />
                  <span className="text-sm font-medium text-slate-700">No</span>
                </label>
              </div>
            </div>
          </div>

          <Button type="submit" disabled={loading} className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold text-base rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center mt-2 cursor-pointer transition-all active:scale-[0.98]">
            {loading ? "Submitting..." : "Submit"}
          </Button>
          
          <p className="text-[10px] text-center text-slate-400 mt-3 leading-relaxed">
            By clicking "Submit", you agree to our <a href="https://www.ajobthing.com/terms-and-condition" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">Terms of Use</a> and <a href="https://www.ajobthing.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default function App() {
  const [isHiringModalOpen, setIsHiringModalOpen] = React.useState(false);
  const openForm = () => setIsHiringModalOpen(true);

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-primary/20 selection:text-primary">
      {/* SECTION 1 - TOP NAV */}
      <header className={`fixed top-0 left-0 right-0 z-[100] w-full shadow-sm shadow-slate-100/50 transition-all duration-300 ${isHiringModalOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <div className="bg-[#F8F9FA] py-2 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
            <a href="https://www.maukerja.my/" target="_blank" rel="noopener noreferrer" className="text-[10px] sm:text-xs font-bold text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
              Looking for a Job? <span className="text-primary">(I'm a Jobseeker)</span>
            </a>
          </div>
        </div>
        
        {/* SECTION 2 - MAIN NAV */}
        <nav className="bg-[#ED3554]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-14 md:h-16 items-center">
              <a href="https://www.maukerja.my/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:opacity-90 transition-opacity">
                <img loading="lazy" src="https://www.maukerja.my/mkt/images/logo-mk.png" alt="Maukerja" className="h-10 w-auto" referrerPolicy="no-referrer" />
              </a>
              <div className="flex items-center">
                <Button 
                  variant="ghost" 
                  className="text-xs font-bold text-white uppercase tracking-widest hover:bg-white/10 rounded-xl"
                  onClick={() => setIsHiringModalOpen(true)}
                >
                  Start Hiring for FREE
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>


      <main className="pt-[88px] md:pt-[100px]">
        <HeroSection onOpenForm={openForm} />
        <TrustMarquee />

        {/* Hiring Modal */}
        <Dialog open={isHiringModalOpen} onOpenChange={setIsHiringModalOpen}>
          <DialogContent className="sm:max-w-[480px] p-0 border-none bg-transparent shadow-none overflow-hidden rounded-[2.5rem] max-h-[90vh] overflow-y-auto custom-scrollbar">
            <DialogTitle className="sr-only">Hiring Form</DialogTitle>
            <HiringForm 
              isOpen={isHiringModalOpen}
              onSuccess={() => setIsHiringModalOpen(false)}
              onScrollToTestimonials={() => {
                setIsHiringModalOpen(false);
                setTimeout(() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }), 300);
              }}
            />
          </DialogContent>
        </Dialog>

        <WhyHireSection />
        <ChatSection />
        <SuccessStoriesSection />
        <UpgradeSection onOpenForm={openForm} />
        <StepsSection onOpenForm={openForm} />
        <FaqSection onOpenForm={openForm} />
        <FinalCtaSection onOpenForm={openForm} />
      {/* Final Footer */}
      </main>
      <footer className="bg-white text-[#1A1A1A] pt-20 pb-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 mb-16">
            {/* Column 1 */}
            <div>
              <h4 className="font-bold text-sm mb-6 text-[#1A1A1A]">Bagi Pekerja</h4>
              <ul className="space-y-3 text-[#007bff] text-[13px] font-medium">
                <li><a href="https://www.maukerja.my/category" target="_blank" rel="noopener noreferrer" className="hover:underline">Cari Kerja Berdasarkan Kategori</a></li>
                <li><a href="https://www.maukerja.my/states" target="_blank" rel="noopener noreferrer" className="hover:underline">Cari Kerja Berdasarkan Lokasi</a></li>
                <li><a href="https://www.maukerja.my/overseas" target="_blank" rel="noopener noreferrer" className="hover:underline">Cari Kerja Berdasarkan Negara</a></li>
                <li><a href="https://www.maukerja.my/jobseekers-testimonial" target="_blank" rel="noopener noreferrer" className="hover:underline">Testimoni</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-bold text-sm mb-6 text-[#1A1A1A]">Syarikat-syarikat</h4>
              <ul className="space-y-3 text-[#007bff] text-[13px] font-medium">
                <li><a href="https://www.maukerja.my/company/all" target="_blank" rel="noopener noreferrer" className="hover:underline">Profil Syarikat</a></li>
                <li><a href="https://www.maukerja.my/company/all/by-location" target="_blank" rel="noopener noreferrer" className="hover:underline">Syarikat mengikuti Lokasi</a></li>
                <li><a href="https://www.maukerja.my/company/all/by-industry" target="_blank" rel="noopener noreferrer" className="hover:underline">Syarikat mengikuti Industri</a></li>
                <li><a href="https://www.maukerja.my/company/all/by-type" target="_blank" rel="noopener noreferrer" className="hover:underline">Syarikat mengikuti Jenis</a></li>
                <li><a href="https://www.maukerja.my/company/all/by-size" target="_blank" rel="noopener noreferrer" className="hover:underline">Syarikat mengikuti Saiz</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-bold text-sm mb-6 text-[#1A1A1A]">Panduan Kerjaya</h4>
              <ul className="space-y-3 text-[#007bff] text-[13px] font-medium">
                <li><a href="https://www.maukerja.my/career-advice" target="_blank" rel="noopener noreferrer" className="hover:underline">Tip Kerjaya</a></li>
                <li><a href="https://www.maukerja.my/resume?entry_point=homepage" target="_blank" rel="noopener noreferrer" className="hover:underline">Muat Naik Resume</a></li>
                <li><a href="https://www.maukerja.my/career-advice/forum" target="_blank" rel="noopener noreferrer" className="hover:underline">Forum</a></li>
                <li><a href="https://www.maukerja.my/career-advice/blog" target="_blank" rel="noopener noreferrer" className="hover:underline">Blog</a></li>
                <li><a href="https://www.maukerja.my/career-advice/career-tools/salary-checker" target="_blank" rel="noopener noreferrer" className="hover:underline">Semak Gaji</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-bold text-sm mb-6 text-[#1A1A1A]">Bagi Majikan</h4>
              <ul className="space-y-3 text-[#007bff] text-[13px] font-medium">
                <li><a href="https://www.ajobthing.com/register?utm_source=maukerjaLiteWebsite&utm_medium=footer" target="_blank" rel="noopener noreferrer" className="hover:underline">Iklan Jawatan Kosong</a></li>
                <li><a href="https://www.ajobthing.com/pricing" target="_blank" rel="noopener noreferrer" className="hover:underline">Harga Pakej</a></li>
                <li><a href="https://www.ajobthing.com/product/instant-job-ad" target="_blank" rel="noopener noreferrer" className="hover:underline">Cari Pekerja Dalam 72 Jam</a></li>
                <li><a href="https://www.ajobthing.com/resources/recruitment-tools/job-description" target="_blank" rel="noopener noreferrer" className="hover:underline">Kit HR</a></li>
                <li><a href="https://www.ajobthing.com/resources/recruiter-advice" target="_blank" rel="noopener noreferrer" className="hover:underline">Info Majikan</a></li>
                <li><a href="https://www.maukerja.my/employers-testimonial" target="_blank" rel="noopener noreferrer" className="hover:underline">Testimoni</a></li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <h4 className="font-bold text-sm mb-6 text-[#1A1A1A]">Bantuan</h4>
              <ul className="space-y-3 text-[#007bff] text-[13px] font-medium">
                <li><a href="https://support.maukerja.my/hc/en-us" target="_blank" rel="noopener noreferrer" className="hover:underline">Soalan Lazim</a></li>
                <li><a href="https://www.maukerja.my/about" target="_blank" rel="noopener noreferrer" className="hover:underline">Tentang Kami</a></li>
                <li><a href="https://www.maukerja.my/settings/contact-us" target="_blank" rel="noopener noreferrer" className="hover:underline">Hubungi Kami</a></li>
                <li><a href="https://www.maukerja.my/company/maukerja-malaysia-agensi-pekerjaan-ajobthing-sdn-bhd/jobs" target="_blank" rel="noopener noreferrer" className="hover:underline">Kerja dengan Maukerja</a></li>
              </ul>
            </div>

            {/* Column 6: Apps */}
            <div className="col-span-2 lg:col-span-1">
              <h4 className="font-bold text-sm mb-6 text-[#1A1A1A]">Download Our Apps</h4>
              <div className="space-y-3">
                <a href="https://play.google.com/store/apps/details?id=my.maukerja.applicant" target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-105">
                  <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-[42px] w-auto" />
                </a>
                <a href="https://apps.apple.com/my/app/maukerja-malaysia-job-search/id1383614538" target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-105">
                  <img loading="lazy" src="https://www.maukerja.my/mkt/images/appstore.png" alt="App Store" className="h-[40px] w-auto" />
                </a>
                <a href="https://news.google.com/publications/CAAqBwgKMPiIoQswkJO5Aw?hl=en-ID&gl=ID&ceid=ID:en" target="_blank" rel="noopener noreferrer" className="block mt-4 transition-transform hover:scale-105">
                  <img loading="lazy" src="https://www.maukerja.my/mkt/images/googlenews.png" alt="Google News" className="h-8 w-auto" />
                </a>
              </div>
            </div>

            {/* Column 7: Social */}
            <div className="col-span-2 lg:col-span-1">
              <h4 className="font-bold text-sm mb-6 text-[#1A1A1A]">Follow us</h4>
              <div className="flex gap-2">
                <a href="https://www.facebook.com/MauKerja" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#3B5998] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                  <Facebook className="h-4 w-4 fill-current" />
                </a>
                <a href="https://x.com/MauKerjaMY" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white hover:opacity-80 transition-opacity p-2">
                  <svg viewBox="0 0 24 24" className="h-full w-full fill-current" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                <a href="https://www.youtube.com/c/MaukerjaMy" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                  <div className="h-4 w-4 fill-current"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></div>
                </a>
                <a href="https://www.instagram.com/maukerja.malaysia/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
          <Separator className="bg-slate-100 mb-8" />
          
          <div className="text-center text-slate-400 font-bold text-[13px]">
            <p>Copyright Agensi Pekerjaan Ajobthing Sdn Bhd | SSM (1036935K) \ EA License Number JTKSM 232C</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


