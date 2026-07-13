import employerHeroBg from "./assets/images/hero-bg.jpg";
import employerHeroBgWebp from "./assets/images/hero-bg.webp";
import employerHeroBgMobileWebp from "./assets/images/hero-bg-mobile.webp";
import * as React from "react";
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

const TESTIMONIALS = [
  {
    company: "Christine’s Bakery",
    name: "Mr Luqman - Recruitment Team",
    quote: "We had a positive experience using Maukerja as our recruitment platform. The system is user-friendly and effective in helping us reach suitable candidates. Overall, we are satisfied with the service and would recommend Maukerja to other employers.",
    img: "https://files.ajobthing.com/employers/189207-1744158248.png"
  },
  {
    company: "Aghilan Enterprise",
    name: "ThievAgi Selva - Recruitment Team",
    quote: "We are very happy with the service compared to the previous job advertisements we posted on other platforms. The AJobThing team keeps checking in and updating us. So we truly appreciate the support and effort.",
    img: "https://files.ajobthing.com/employers/199992-1774682634.png"
  },
  {
    company: "GoodARCH Technology Sdn Bhd",
    name: "Yuen Yun - Recruiter",
    quote: "The company has successfully recruited candidates for three positions through AJobThing recruitment advertising: Account Executive, Warehouse Executive, and Senior Marketing Executive. We would also like to acknowledge the excellent service provided by the AJobThing sales agent who was highly responsive and efficient in assisting with job postings, ensuring smooth and timely recruitment process without unnecessary delays.",
    img: "https://files.ajobthing.com/employers/195238-1756438091.png"
  },
  {
    company: "Foodpanda Malaysia",
    name: "Ms Suruthi – Recruiter",
    quote: "AJobThing has always been accommodating. Their Account Managers and Customer Service are always ready to serve. Using their platform has been an added advantage to our hiring.",
    img: "https://www.maukerja.my/mkt/images/testi/foodpanda.webp"
  }
];

const TRUSTED_LOGOS = [
  // Line 1
  { name: "Shopee", url: "https://www.maukerja.my/mkt/images/mkrb-companies/shopee.png", isBig: true },
  { name: "McDonald's", url: "https://www.maukerja.my/mkt/images/mkrb-companies/mcd.png", isBig: true },
  { name: "Starbucks", url: "https://www.maukerja.my/mkt/images/mkrb-companies/starbucks.png", isBig: true },
  { name: "Pizza Hut", url: "https://www.maukerja.my/mkt/images/mkrb-companies/pizzahut.png", isBig: true },
  // Line 2
  { name: "Lazada", url: "https://www.maukerja.my/mkt/images/mkrb-companies/lazada.png", isBig: true },
  { name: "Concentrix", url: "https://www.maukerja.my/mkt/images/mkrb-companies/concentrix.png" },
  { name: "Watsons", url: "https://www.maukerja.my/mkt/images/mkrb-companies/watsons.png", isBig: true },
  { name: "Foodpanda", url: "https://www.maukerja.my/mkt/images/mkrb-companies/foodpanda.png", isBig: true },
  // Line 3
  { name: "Flash Express", url: "https://www.maukerja.my/mkt/images/mkrb-companies/flash.png", isBig: true },
  { name: "Pizza Hut", url: "https://www.maukerja.my/mkt/images/mkrb-companies/pizzahut.png", isBig: true },
  { name: "KFC", url: "https://www.maukerja.my/mkt/images/mkrb-companies/kfc.png", isBig: true },
  { name: "DHL", url: "https://www.maukerja.my/mkt/images/mkrb-companies/dhl.png" },
];

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
      headcount: formData.positionsPlanned || "N/A",
      hiring_timeline: formData.fullTimeNeeds || "Not specified",
      has_ajobthing_account: formData.hasAJobThingAccount,
      ...utmData
    };

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmittedHasAccount(formData.hasAJobThingAccount);

      // Reset form state
      setFormData({
        fullName: "",
        workEmail: "",
        companyName: "",
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
                Start Posting Your FREE Job Ads Now*!
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
            </div>
          ) : (
            <div className="space-y-3.5 w-full">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 leading-tight">
                Almost There to Post Free Job Ads*!
              </h3>
              <div className="bg-slate-50 rounded-xl p-3.5 text-left max-w-sm mx-auto border border-slate-100/80 shadow-sm">
                <p className="text-slate-500 font-bold mb-2 text-[10px] tracking-wider uppercase">
                  Follow these steps:
                </p>
                <ol className="space-y-2 text-slate-600 font-medium text-xs md:text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="flex items-center justify-center bg-[#ED3554] text-white font-bold rounded-full h-5 w-5 text-[10px] shrink-0 mt-0.5">1</span>
                    <span>
                      Click the <a href="https://www.ajobthing.com/register?utm_campaign=googleads&utm_medium=registerbutton&utm_source=LP-freejobads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold decoration-primary/30 decoration-2">Register</a> button below
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex items-center justify-center bg-[#ED3554] text-white font-bold rounded-full h-5 w-5 text-[10px] shrink-0 mt-0.5">2</span>
                    <span>Fill in the register form</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex items-center justify-center bg-[#ED3554] text-white font-bold rounded-full h-5 w-5 text-[10px] shrink-0 mt-0.5">3</span>
                    <span>Start posting your FREE Job Ad</span>
                  </li>
                </ol>
              </div>

              <p className="text-slate-600 font-medium text-[11px] md:text-xs leading-relaxed max-w-sm mx-auto px-2">
                After you click the register button below, You’ll be redirected to AJobThing, the official employer platform to post jobs on Maukerja.
              </p>

              <div className="max-w-[110px] mx-auto pt-0.5">
                <img loading="lazy" 
                  src="https://s3-ap-southeast-1.amazonaws.com/ricebowl/images/marketing-campaign/image-ec64e417-6572-4498-90f7-0591b5b3eaff.png" 
                  alt="AJobThing & Maukerja" 
                  className="w-full h-auto object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          )}
          
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
                onClick={() => window.open("https://www.ajobthing.com/register?utm_campaign=googleads&utm_medium=registerbutton&utm_source=LP-freejobads", "_blank")}
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
          <button 
            onClick={onScrollToTestimonials}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-3 hover:bg-white/20 transition-all cursor-pointer"
          >
            <img loading="lazy" 
              src="https://www.ajobthing.com/mkt/images/ajt/google.svg" 
              alt="Google" 
              className="h-2.5 w-2.5 brightness-0 invert" 
              referrerPolicy="no-referrer"
            />
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-2 w-2 fill-[#FFC107] text-[#FFC107]" />)}
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wider">4.9 Google Reviews</span>
          </button>
        <h3 className="text-xl font-bold tracking-tight">Start Hiring for FREE</h3>
      </div>
      <div className="pt-2 px-6 pb-6 md:pt-3 md:px-8 md:pb-8 space-y-4 bg-white">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="fullName" className="text-sm font-semibold text-slate-700">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input 
                id="fullName" 
                required
                value={formData.fullName}
                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                placeholder="Enter your full name" 
                className="h-10 border-slate-200 bg-white rounded-xl focus-visible:ring-primary font-medium placeholder:text-slate-400 placeholder:font-normal shadow-sm" 
                autoFocus={isOpen}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="workEmail" className="text-sm font-semibold text-slate-700">
                Work Email <span className="text-red-500">*</span>
              </Label>
              <Input 
                id="workEmail" 
                type="email" 
                required
                value={formData.workEmail}
                onChange={(e) => setFormData(prev => ({ ...prev, workEmail: e.target.value }))}
                placeholder="Enter your work email" 
                className="h-10 border-slate-200 bg-white rounded-xl focus-visible:ring-primary font-medium placeholder:text-slate-400 placeholder:font-normal shadow-sm" 
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <div className="flex h-10 w-full rounded-xl border border-slate-200 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-0 transition-all group/phone shadow-sm">
                <div className="flex items-center border-r border-slate-200 bg-slate-100/30">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-full px-3 gap-1 rounded-none hover:bg-slate-100/50 border-none transition-colors group/trigger"
                      >
                        <img loading="lazy" 
                          src={COUNTRIES.find(c => c.code === phoneCode)?.flag} 
                          alt="Flag" 
                          className="w-6 h-4 object-cover rounded-sm ring-1 ring-black/5" 
                        />
                        <ChevronDown className="h-3 w-3 text-slate-400 group-hover/trigger:text-primary transition-colors" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[300px] p-0" align="start">
                      <Command>
                        <CommandInput placeholder="Search country..." className="h-9" />
                        <CommandList>
                          <CommandEmpty>No country found.</CommandEmpty>
                          <CommandGroup>
                            {COUNTRIES.map((c) => (
                              <CommandItem
                                key={`${c.iso}-${c.code}`}
                                value={`${c.name} ${c.code}`}
                                onSelect={() => {
                                  setPhoneCode(c.code);
                                }}
                                className="gap-3 py-2 cursor-pointer"
                              >
                                <div className="flex items-center gap-3 flex-1">
                                  <img loading="lazy" src={c.flag} alt={c.iso} className="w-5 h-3.5 object-cover rounded-sm shadow-sm" />
                                  <span className="font-bold text-sm text-slate-700 min-w-[40px]">{c.code}</span>
                                  <span className="text-xs text-slate-500 font-medium truncate">{c.name}</span>
                                </div>
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="flex items-center px-0 bg-white">
                  <span className="font-bold text-slate-800 text-sm whitespace-nowrap pl-3 pr-1">{phoneCode}</span>
                </div>
                <Input 
                  id="phone" 
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/[^0-9]/g, ""))}
                  placeholder="123 456 789"
                  className="flex-1 border-none shadow-none focus-visible:ring-0 rounded-none bg-transparent h-full font-bold text-slate-900 px-1 placeholder:text-slate-300 transition-all font-mono" 
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="companyName" className="text-sm font-semibold text-slate-700">
                  Company Name <span className="text-red-500">*</span>
              </Label>
              <Input 
                id="companyName" 
                required
                value={formData.companyName}
                onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                placeholder="Enter Company Name" 
                className="h-10 border-slate-200 bg-white rounded-xl focus-visible:ring-primary font-medium placeholder:text-slate-400 placeholder:font-normal shadow-sm" 
              />
            </div>

            <div className="space-y-1">
              <Label className="text-sm font-semibold text-slate-700">Select the free job ad you want to claim <span className="text-slate-400 font-normal">(optional)</span></Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    type="button"
                    variant="outline" 
                    className="w-full justify-between h-10 border-slate-200 bg-white rounded-xl font-medium text-slate-700 shadow-sm text-left px-3 hover:bg-white"
                  >
                    <span className="truncate">
                      {selectedFreeAds.length === 0 
                        ? "Select free job ad options" 
                        : selectedFreeAds.length === FREE_AD_OPTIONS.length 
                          ? "All 6 Free Job Ads selected" 
                          : selectedFreeAds.map(val => FREE_AD_OPTIONS.find(o => o.value === val)?.label || val).join(", ")}
                    </span>
                    <ChevronDown className="h-4 w-4 opacity-50 ml-2 shrink-0" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-3 bg-white border border-slate-200 rounded-xl shadow-xl space-y-2 z-[150]" align="start">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Free Job Ads</span>
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="sm" 
                      className="h-auto p-1 text-xs text-primary font-bold hover:bg-transparent"
                      onClick={() => {
                        if (selectedFreeAds.length === FREE_AD_OPTIONS.length) {
                          setSelectedFreeAds([]);
                        } else {
                          setSelectedFreeAds(FREE_AD_OPTIONS.map(o => o.value));
                        }
                      }}
                    >
                      {selectedFreeAds.length === FREE_AD_OPTIONS.length ? "Deselect All" : "Select All"}
                    </Button>
                  </div>
                  <div className="space-y-2 max-h-[220px] overflow-y-auto">
                    {FREE_AD_OPTIONS.map(opt => {
                      const checked = selectedFreeAds.includes(opt.value);
                      return (
                        <div 
                          key={opt.value} 
                          className="flex items-center gap-3 cursor-pointer py-1 px-1.5 hover:bg-slate-50 rounded-lg transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            if (checked) {
                              setSelectedFreeAds(selectedFreeAds.filter(v => v !== opt.value));
                            } else {
                              setSelectedFreeAds([...selectedFreeAds, opt.value]);
                            }
                          }}
                        >
                          <Checkbox 
                            checked={checked} 
                            onCheckedChange={() => {}}
                          />
                          <span className="text-sm text-slate-700 font-medium select-none">{opt.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-1">
              <Label className="text-sm font-semibold text-slate-700">Do you also have full-time hiring needs? <span className="text-red-500">*</span></Label>
              <Select 
                value={formData.fullTimeNeeds}
                onValueChange={(val) => {
                  setFormData(prev => ({ 
                    ...prev, 
                    fullTimeNeeds: val,
                    positionsPlanned: val && val.startsWith("Yes") ? prev.positionsPlanned : ""
                  }));
                }}
              >
                <SelectTrigger className="w-full h-10 border-slate-200 bg-white rounded-xl font-medium text-slate-700 shadow-sm">
                  <SelectValue placeholder="Select full-time needs" />
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
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="space-y-1 overflow-hidden"
              >
                <Label className="text-sm font-semibold text-slate-700">How many full-time positions are you planning to hire? <span className="text-red-500">*</span></Label>
                <Select 
                  value={formData.positionsPlanned}
                  onValueChange={(val) => setFormData(prev => ({ ...prev, positionsPlanned: val }))}
                >
                  <SelectTrigger className="w-full h-10 border-slate-200 bg-white rounded-xl font-medium text-slate-700 shadow-sm">
                    <SelectValue placeholder="Select positions planned" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-6">1-6</SelectItem>
                    <SelectItem value="7-15">7-15</SelectItem>
                    <SelectItem value="16-30">16-30</SelectItem>
                    <SelectItem value="More than 30">More than 30</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
            )}

            <div className="space-y-2">
              <Label className="text-sm font-semibold text-slate-700">Do you have an AJobThing account to post job on Maukerja? <span className="text-red-500">*</span></Label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, hasAJobThingAccount: "Yes" }))}
                  className={`h-11 rounded-xl border font-bold text-sm transition-all flex items-center justify-center cursor-pointer shadow-sm ${
                    formData.hasAJobThingAccount === "Yes"
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, hasAJobThingAccount: "No" }))}
                  className={`h-11 rounded-xl border font-bold text-sm transition-all flex items-center justify-center cursor-pointer shadow-sm ${
                    formData.hasAJobThingAccount === "No"
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  No
                </button>
              </div>
            </div>

          </div>

          <div className="pt-1">
            <Button 
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-primary text-white hover:brightness-90 text-lg font-bold shadow-xl shadow-primary/10 rounded-2xl group transition-all"
            >
              {loading ? "Submitting..." : "Start Hiring for FREE"}
              {!loading && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
            </Button>
          </div>
        </form>
        
        <div className="space-y-2">
          <p className="text-[9px] text-center text-[#555555] leading-normal font-medium px-4 tracking-tighter">
            We value your privacy. By completing this form, you consent to us reaching out regarding our products and services as outlined in our privacy policy.
          </p>
          <Separator className="bg-slate-100" />
          <p className="text-[10px] text-center font-bold text-slate-400 flex items-center justify-center gap-1 uppercase tracking-tight">
            Are you a jobseeker? <a href="https://www.maukerja.my/register" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Sign up here instead</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [selectedPositions, setSelectedPositions] = React.useState<string[]>([]);
  const [isHiringModalOpen, setIsHiringModalOpen] = React.useState(false);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth;
      const index = Math.round(scrollPosition / cardWidth);
      setActiveSlide(index);
    }
  };

  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: "smooth"
      });
    }
  };

  const prevSlide = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  const nextSlide = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1A1A1A] overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <header className={`fixed top-0 left-0 right-0 z-[100] w-full shadow-sm shadow-slate-100/50 transition-all duration-300 ${isHiringModalOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        {/* SECTION 1 — TOP NAV (Jobseeker link) */}
        <div className="bg-[#F8F9FA] py-2 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
            <a href="https://www.maukerja.my/" target="_blank" rel="noopener noreferrer" className="text-[10px] sm:text-xs font-bold text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
              Looking for a Job? <span className="text-primary">(I'm a Jobseeker)</span>
            </a>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="bg-[#ED3554]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-14 md:h-16 items-center">
              <a href="https://www.maukerja.my/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:opacity-90 transition-opacity">
                <img loading="lazy" 
                  src="https://www.maukerja.my/mkt/images/logo-mk.png" 
                  alt="Maukerja" 
                  className="h-10 w-auto"
                  referrerPolicy="no-referrer"
                />
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

      {/* Spacer to prevent fixed header from overlapping content */}
      <div className="h-[88px] md:h-[96px]" />

      {/* SECTION 1 — HERO BANNER */}
      <section className="relative w-full overflow-hidden min-h-[500px] sm:min-h-[580px] md:h-[620px] flex items-center bg-[#F3F4F6]">
        {/* Full bleed background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={employerHeroBg} 
            srcSet={`${employerHeroBgMobileWebp} 800w, ${employerHeroBgWebp} 1376w`}
            sizes="100vw"
            alt="Employer hiring landscape" 
            className="w-full h-full object-cover object-[98%_top] md:object-[right_top] lg:object-[95%_top] select-none"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            decoding="async"
          />
          {/* Gentle overlay to guarantee text legibility on super small screens */}
          <div className="absolute inset-0 bg-black/5 lg:bg-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-xl lg:max-w-lg xl:max-w-xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-md p-8 sm:p-12 rounded-[2rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100/50 flex flex-col gap-3"
            >
              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-[2.25rem] xl:text-[2.65rem] font-extrabold leading-[1.3] md:leading-tight tracking-normal md:tracking-tight text-slate-900">
                  Post Jobs for{" "}
                  <span className="relative inline-block px-2">
                    {/* Glowing effect background */}
                    <span className="absolute inset-0 z-0 bg-gradient-to-r from-amber-500/15 via-orange-500/30 to-amber-500/15 blur-[8px] rounded-full animate-pulse" />
                    
                    {/* Shining text */}
                    <span className="relative z-10 italic bg-gradient-to-r from-[#FF9800] via-[#FF5722] to-[#FF9800] bg-clip-text text-transparent animate-shimmer font-bold">
                      FREE*
                    </span>

                    {/* Double-Loop Underline SVG */}
                    <svg 
                      className="absolute -bottom-1.5 md:-bottom-2 left-0 w-full h-2.5 md:h-3 text-[#FF5722] overflow-visible pointer-events-none animate-underline" 
                      viewBox="0 0 100 12" 
                      preserveAspectRatio="none"
                    >
                      {/* First loop */}
                      <path
                        d="M2,4 Q50,8 98,3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="animate-draw-1"
                      />
                      {/* Second loop */}
                      <path
                        d="M6,8 Q50,11 94,6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="animate-draw-2"
                      />
                    </svg>
                  </span>{" "}
                  <br />
                  <span className="block mt-1 md:mt-2">
                    Get Qualified Candidates in 72 Hours
                  </span>
                </h1>
                <p className="mt-5 text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                  One post, seen by 5 million+ job seekers. Chat with applicants right away. No personal WhatsApp needed.
                </p>
              </div>

              <div className="flex flex-col gap-3 -mt-1">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <Button 
                    onClick={() => setIsHiringModalOpen(true)}
                    className="w-full sm:w-auto bg-primary hover:brightness-90 text-white px-8 h-12 md:h-14 rounded-xl text-sm md:text-base font-bold shadow-lg shadow-primary/15 transition-all transform hover:scale-105"
                  >
                    Start Hiring for FREE
                  </Button>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-sm mx-auto lg:mx-0">
                  *Enjoy FREE Job Ads for Freelance, Part-time, Internship, Volunteer, High-Pay, and Singapore jobs.
                </p>
              </div>

              {/* Google Rating Below Button */}
              <div className="border-t border-slate-100/80 pt-4 mt-2 flex flex-col items-center sm:flex-row sm:items-center gap-3">
                <div className="flex items-center gap-2">
                  <img 
                    src="https://www.ajobthing.com/mkt/images/ajt/google.svg" 
                    alt="Google" 
                    className="h-4 w-4" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-3 w-3 fill-[#FFC107] text-[#FFC107]" />)}
                  </div>
                </div>
                <div className="hidden sm:block h-4 w-px bg-slate-200" />
                <p className="text-[10px] md:text-xs font-bold text-slate-800 uppercase tracking-wider text-center sm:text-left">
                  4.9 Rating <a 
                    href="https://www.google.com/search?q=ajobthing+malaysia#lrd=0x31cc4986cfea123b:0xf231fba79e701aaf,1,,,," 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 font-bold ml-1 hover:text-primary transition-colors underline decoration-slate-200 underline-offset-2"
                  >
                    on Google reviews
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infinite Running Logo Marquee Centered under the Hero Columns */}
      <div className="border-t border-slate-100 pt-12 mt-0 w-full overflow-hidden relative flex flex-col items-center bg-white">
            {/* Fade overlays */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <p className="text-sm sm:text-base font-bold text-[#7C8CA1] tracking-[0.25em] uppercase mb-10 text-center px-4 leading-relaxed">
              Trusted by Over<br className="sm:hidden" /> 15,000+ Top Employers
            </p>

            <div className="w-full overflow-hidden whitespace-nowrap">
              <motion.div 
                className="inline-flex gap-20 items-center"
                animate={{
                  x: [0, -1500],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicating logos for infinite scroll effect */}
                {[...TRUSTED_LOGOS, ...TRUSTED_LOGOS, ...TRUSTED_LOGOS, ...TRUSTED_LOGOS].map((logo: any, i: number) => (
                  <div key={i} className="flex-none opacity-75 hover:opacity-100 transition-all duration-300">
                    <img loading="lazy" 
                      src={logo.url} 
                      alt={logo.name} 
                      className={`${logo.isBig ? "h-14 sm:h-20" : "h-11 sm:h-16"} w-auto object-contain`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

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

      {/* SECTION 1.5 — WHY HIRE MARKETING */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-normal md:tracking-tight leading-[1.3] md:leading-tight">
              Why Employers Hire Faster on <span className="text-[#ED3554]">Maukerja by AJobThing</span>
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mt-6 mb-10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Reach 5 Million+ Candidates in One Click",
                desc: "Your job ad goes live across Maukerja, Ricebowl, and partner platforms. One posting, no reposting, no extra cost.",
                icon: <img loading="lazy" src="https://www.maukerja.my/mkt/images/mk/reason_get3x.png" alt="Reach Candidates" className="w-full h-full object-contain" referrerPolicy="no-referrer" />,
                bgColor: "bg-green-50",
                iconColor: "bg-green-100"
              },
              {
                title: "Chat With Applicants Instantly",
                desc: "Message candidates the moment they apply on AJobThing Chat. Reply faster with templates and AI quick replies, without sharing your personal WhatsApp.",
                icon: <img loading="lazy" src="https://s3-ap-southeast-1.amazonaws.com/ricebowl/images/marketing-campaign/image-937cc484-7a5b-4825-9127-edc68a91d955.png" alt="Chat With Applicants" className="w-full h-full object-contain" referrerPolicy="no-referrer" />,
                bgColor: "bg-blue-50",
                iconColor: "bg-blue-100"
              },
              {
                title: "Post Job for FREE",
                desc: "Post freelance, part-time, internship, volunteer, high-pay, and Singapore jobs for free. Pay only when you need more.",
                icon: <img loading="lazy" src="https://s3-ap-southeast-1.amazonaws.com/ricebowl/images/marketing-campaign/image-7e8c886c-ad7d-42f2-be36-64abdb2b1a47.png" alt="Post Job for FREE" className="w-full h-full object-contain" referrerPolicy="no-referrer" />,
                bgColor: "bg-orange-50",
                iconColor: "bg-orange-100"
              },
              {
                title: "Screening Is Not Your Job Anymore",
                desc: "Our AI filters and contacts only qualified, interested candidates. Saving you hours of screening. You focus on interviews and hiring the right person.",
                icon: <img loading="lazy" src="https://s3-ap-southeast-1.amazonaws.com/ricebowl/images/marketing-campaign/image-8edc4ee1-d023-4cc2-ad5d-e40542f77ebd.png" alt="Screening Is Not Your Job" className="w-full h-full object-contain" referrerPolicy="no-referrer" />,
                bgColor: "bg-purple-50",
                iconColor: "bg-purple-100"
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(237,53,84,0.15)] transition-all duration-500 flex flex-col items-center text-center"
              >
                <div className="w-28 h-28 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800 leading-tight">{card.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 2 — TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-[#FFF5F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-[#1A1A1A] leading-[1.3] md:leading-tight tracking-normal md:tracking-tight">
              Want to See Real Results? <br />
              Read from Our Success Stories
            </h2>
            <p className="text-lg md:text-xl text-[#555555] max-w-3xl mx-auto font-medium leading-relaxed">
              HR teams across Malaysia have been hiring better, <br />
              faster with <span className="text-[#ED3554]">Maukerja by AJobThing</span>
            </p>
            
            {/* Horizontal Badge */}
            <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-4 bg-white px-8 py-4 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-50">
              <img loading="lazy" 
                src="https://www.ajobthing.com/mkt/images/ajt/google.svg" 
                alt="Google" 
                className="h-5 w-5" 
                referrerPolicy="no-referrer"
              />
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-5 w-5 fill-[#FFC107] text-[#FFC107]" />)}
              </div>
              <span className="text-xl font-bold text-[#1A1A1A]">4.9</span>
              <div className="h-6 w-px bg-slate-200 sm:block hidden" />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest italic">Best Recruitment Portal in Malaysia</span>
              <div className="h-6 w-px bg-slate-200 sm:block hidden" />
              <a 
                href="https://www.google.com/search?q=ajobthing+malaysia#lrd=0x31cc4986cfea123b:0xf231fba79e701aaf,1,,,," 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-medium text-slate-400 hover:text-primary transition-colors underline decoration-slate-200 underline-offset-4"
              >
                See all our reviews (2,600+ Reviews)
              </a>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-6xl mx-auto">
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start">
                  <Card className="h-full border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-[1.5rem] bg-white group/card">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex items-center gap-6 mb-6">
                        <img loading="lazy" src={t.img} alt={t.company} className="h-16 w-auto object-contain shrink-0" />
                        <div>
                          <h4 className="font-bold text-[#1A1A1A] tracking-tight text-base uppercase">{t.company}</h4>
                          <p className="text-xs font-bold text-slate-400">{t.name}</p>
                        </div>
                      </div>
                      <p className="text-[#555555] text-sm leading-relaxed relative z-10 font-medium">
                        {t.quote}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute -left-4 md:-left-12 top-[40%] -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-slate-800 text-white rounded-full flex items-center justify-center shadow-xl z-20 hover:bg-primary transition-all disabled:opacity-30"
              disabled={activeSlide === 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute -right-4 md:-right-12 top-[40%] -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-slate-800 text-white rounded-full flex items-center justify-center shadow-xl z-20 hover:bg-primary transition-all disabled:opacity-30"
              disabled={activeSlide >= Math.ceil(TESTIMONIALS.length / 1) - 1}
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: Math.ceil(TESTIMONIALS.length) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSlide === i ? "bg-primary w-4" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>

            {/* Video Testimonial in High-Fidelity MacBook Pro Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-20 max-w-4xl mx-auto px-6 w-full"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-800">
                Watch our client's success story using Maukerja
              </h3>
              {/* MacBook Mockup Container with extra horizontal margins for the wider body */}
              <div className="relative w-[90%] mx-auto select-none">
                
                {/* 1. Screen / Bezel Frame (The Lid) */}
                <div className="relative z-10 w-full mx-auto rounded-t-2xl md:rounded-t-3xl border-[6px] sm:border-[10px] md:border-[12px] border-[#1e2022] bg-[#0c0d0e] shadow-2xl aspect-[16/10] overflow-hidden">
                  
                  {/* Safari Browser Header */}
                  <div className="h-6 sm:h-8 bg-[#1e2022] border-b border-black/30 flex items-center px-3 sm:px-4 justify-between">
                    <div className="flex gap-1.5 shrink-0">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FF5F56] block" />
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFBD2E] block" />
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#27C93F] block" />
                    </div>
                    <div className="bg-black/35 rounded text-[8px] sm:text-[10px] text-slate-400 py-0.5 sm:py-1 px-4 sm:px-6 text-center truncate border border-white/5 max-w-[50%] font-mono h-3 sm:h-4 w-32 sm:w-48">
                    </div>
                    <div className="w-8 sm:w-12 shrink-0" /> {/* Spacer */}
                  </div>

                  {/* Inside Display Area */}
                  <div className="relative w-full h-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] bg-black">
                    {!isVideoPlaying ? (
                      <div 
                        onClick={() => setIsVideoPlaying(true)}
                        className="absolute inset-0 cursor-pointer group/video overflow-hidden"
                      >
                        {/* HIGH RESOLUTION REAL YOUTUBE THUMBNAIL */}
                        <div className="absolute inset-0 bg-slate-950">
                          <img loading="lazy" 
                            src="https://img.youtube.com/vi/dA9R41LtX7s/maxresdefault.jpg" 
                            alt="Maukerja Success Story Video Thumbnail"
                            className="w-full h-full object-cover opacity-90 scale-100 group-hover:scale-[1.03] transition-transform duration-700"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              // Fallback in case maxresdefault is not available
                              (e.target as HTMLImageElement).src = "https://img.youtube.com/vi/dA9R41LtX7s/hqdefault.jpg";
                            }}
                          />
                          {/* Rich dark gradient for contrast */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                        </div>

                        {/* Central Play Button Interface */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                          {/* Red glowing button with pulse */}
                          <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#ED3554] rounded-full flex items-center justify-center shadow-2xl shadow-[#ED3554]/40 group-hover:scale-110 transition-transform duration-500">
                            <div className="absolute inset-0 bg-[#ED3554] rounded-full animate-ping opacity-35" />
                            {/* SVG Triangle */}
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dA9R41LtX7s?autoplay=1&rel=0"
                        title="Maukerja Success Story"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    )}
                  </div>
                </div>

                {/* 2. Sleek Aluminum MacBook Body (Base is wider than screen) */}
                <div className="relative z-20 h-2.5 sm:h-4 w-[110%] -left-[5%] bg-gradient-to-b from-[#e2e8f0] via-[#cbd5e1] to-[#94a3b8] rounded-b-xl border-t border-white/50 shadow-md">
                  
                  {/* Outer edge high reflection lines */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-white/70" />
                  
                  {/* Center Notch (Screen opener indent / Trackpad notch) */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-20 sm:w-32 h-1.5 sm:h-2 bg-[#475569]/30 rounded-b-md border-b border-white/25" />
                </div>

                {/* 3. Extremely realistic bottom foot profile & dark ambient drop shadow */}
                <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[106%] h-1 sm:h-2 bg-gradient-to-b from-black/45 to-transparent blur-md rounded-full opacity-70" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW IT WORKS (Moved right after Testimonials) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] leading-[1.3] md:leading-tight tracking-normal md:tracking-tight">
              Easy Hire in 3 Simple Steps
            </h2>
            <p className="mt-4 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto font-medium">
              See how our fast and simple recruiting workflow helps you secure qualified talent in record time.
            </p>
          </div>

          {/* High-Fidelity Elegant Steps Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
            
            {/* CARD 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.05)] border border-slate-100/80 p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 group"
            >
              <div>
                <div className="w-16 h-16 rounded-[1.25rem] bg-[#F8F9FA] border border-slate-100 shadow-sm flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 text-slate-700">
                  <UserPlus className="h-7 w-7" />
                </div>
                <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">
                  STEP 1
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4 group-hover:text-primary transition-colors">
                  Register on Our Platform
                </h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
                  Fill in the form and verify that you're an employer from your company.
                </p>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.05)] border border-slate-100/80 p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 group"
            >
              <div>
                <div className="w-16 h-16 rounded-[1.25rem] bg-[#F8F9FA] border border-slate-100 shadow-sm flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 text-slate-700">
                  <Briefcase className="h-7 w-7" />
                </div>
                <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">
                  STEP 2
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4 group-hover:text-primary transition-colors">
                  Advertise Your Job Opening for FREE
                </h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
                  Follow our step-by-step instructions to craft an appealing job post.
                </p>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.05)] border border-slate-100/80 p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 group"
            >
              <div>
                <div className="w-16 h-16 rounded-[1.25rem] bg-[#F8F9FA] border border-slate-100 shadow-sm flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 text-slate-700">
                  <Zap className="h-7 w-7" />
                </div>
                <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">
                  STEP 3
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4 group-hover:text-primary transition-colors">
                  Get Applications Instantly
                </h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
                  Get relevant candidates that match with your job requirements with AI filtering.
                </p>
              </div>
            </motion.div>

          </div>

          <div className="mt-12 sm:mt-20 text-center px-4">
            <Button 
              onClick={() => setIsHiringModalOpen(true)}
              className="w-full sm:w-auto bg-primary hover:brightness-90 text-white px-8 sm:px-16 h-14 sm:h-16 rounded-2xl text-base sm:text-xl font-bold shadow-2xl shadow-primary/10 group transition-all"
            >
              Start Hiring for FREE <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HIRING SOLUTIONS */}
      {false && (
      <section className="py-24 bg-[#FFF5F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">OUR HIRING SOLUTION</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Personalized Employer Branding Profile",
                desc: "Show off your company's unique culture to attract young and talented marketing people by matching your brand with your hiring plans.",
                img: "https://www.maukerja.my/mkt/images/mk/hiringsol_1.png"
              },
              {
                title: "AJobThing Chat",
                desc: "Chat with candidates directly inside AJobThing without using your personal number. Keep your contact details strictly confidential.",
                img: "https://s3-ap-southeast-1.amazonaws.com/ricebowl/images/marketing-campaign/image-cdf8e649-ea1f-4fac-bceb-79593e7d6031.png"
              }
            ].map((sol, i) => (
              <Card key={i} className="border-none shadow-sm h-full rounded-[3rem] overflow-hidden bg-white group">
                <div className={`aspect-[16/10] overflow-hidden ${sol.title === "AJobThing Chat" ? "bg-[#FFF5F6] p-6" : ""}`}>
                  <img loading="lazy" 
                    src={sol.img} 
                    alt={sol.title} 
                    className={`w-full h-full ${sol.title === "AJobThing Chat" ? "object-contain group-hover:scale-105" : "object-cover group-hover:scale-110"} transition-transform duration-700`} 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A] group-hover:text-primary transition-colors">{sol.title}</h3>
                  <p className="text-[#555555] leading-relaxed mb-8 font-medium">
                    {sol.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* SECTION 5 — FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1A1A1A]">FAQs</h2>
            <p className="text-lg text-[#555555] font-semibold italic">Frequently asked questions from employers</p>
          </div>
          
          <Accordion className="w-full space-y-4">
            {[
              {
                q: "How to claim this free job ad?",
                a: (
                  <span>
                    Its easy! Just{" "}
                    <button 
                      onClick={() => setIsHiringModalOpen(true)}
                      className="text-[#ED3554] hover:underline font-bold cursor-pointer"
                    >
                      fill out the form above
                    </button>{" "}
                    and register an employer account on AJobThing. Once registered, the FREE job ad will be available for you to use immediately.
                  </span>
                )
              },
              {
                q: "What types of jobs can I post for free?",
                a: (
                  <span>
                    You can post jobs for FREE if you're hiring for any of these six job types:
                    <ul className="list-disc pl-6 my-3 space-y-1">
                      <li>Freelance</li>
                      <li>Internship</li>
                      <li>Part-time</li>
                      <li>Volunteer</li>
                      <li>High-Pay Jobs</li>
                      <li>Singapore Jobs</li>
                    </ul>
                    Just select the eligible job type in the claim form, and you'll be able to start posting your job for FREE.
                  </span>
                )
              },
              {
                q: "What if I need full-time staff later?",
                a: "If you have full-time hiring needs, our Account Manager will contact you via WhatsApp to provide personalized hiring support and help you hire top talent within 72 hours."
              },
              {
                q: "Does the free posting include distribution to other platforms?",
                a: "Yes. Your job ad will appear across AJobThing platforms like Maukerja, Ricebowl, and Epicareer to reach more jobseekers."
              },
              {
                q: "Can I upgrade to get more visibility?",
                a: (
                  <span>
                    Yes. You may upgrade anytime by buying job ads or choosing an à la carte or yearly job ads package option.{" "}
                    <a 
                      href="https://www.ajobthing.com/pricing/instant-job-ad"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#ED3554] hover:underline font-bold"
                    >
                      See pricing
                    </a>
                  </span>
                )
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-none bg-white rounded-3xl px-8 shadow-sm">
                <AccordionTrigger className="text-lg font-bold text-left hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#555555] text-base leading-relaxed pb-8 font-medium">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 7 — PERSONALIZED SOLUTION */}
      {false && (
      <section className="py-12 bg-[#FFF5F6] mb-24 rounded-[3rem] max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <img loading="lazy" 
              src="https://www.maukerja.my/mkt/images/mk/cta.svg" 
              alt="Hiring Solution" 
              className="h-64 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-center md:text-left order-1 md:order-2">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 leading-tight">
              Need a personalized hiring solution? Contact us today!
            </h3>
            <p className="text-lg text-[#555555] mb-8 font-medium">
              We can design solutions that fit your goals and budget.
            </p>
            <Button 
              onClick={() => setIsHiringModalOpen(true)}
              className="bg-[#ED3554] hover:bg-[#D42F4B] text-white px-10 h-14 rounded-2xl text-lg font-bold shadow-xl shadow-[#ED3554]/20 transition-all transform hover:scale-105"
            >
              Start Hiring for FREE
            </Button>
          </div>
        </div>
      </section>
      )}

      {/* Final Footer */}
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


