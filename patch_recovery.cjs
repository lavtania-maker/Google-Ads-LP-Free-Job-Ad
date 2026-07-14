const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const splitIndex = code.indexOf('<div className="max-w-[110px] mx-auto pt-0.5">');
const secondPartIndex = code.indexOf('<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">');

if (splitIndex !== -1 && secondPartIndex !== -1) {
  const codeBefore = code.substring(0, splitIndex);
  const codeAfter = code.substring(secondPartIndex);

  const newMiddle = `
              <div className="max-w-[110px] mx-auto pt-0.5">
                <img loading="lazy" src="https://s3-ap-southeast-1.amazonaws.com/ricebowl/images/marketing-campaign/image-ec64e417-6572-4498-90f7-0591b5b3eaff.png" alt="AJobThing & Maukerja" className="w-full h-auto object-contain rounded-lg" referrerPolicy="no-referrer" />
              </div>
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
                <div className="flex items-center border-r border-slate-200 bg-slate-100/30">
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
                  <span className="text-sm font-medium text-slate-600 px-2 pointer-events-none">{phoneCode}</span>
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

            <div className="space-y-1.5">
              <Label className="text-sm font-semibold text-slate-700">Are you planning to hire for Full-time needs? <span className="text-red-500">*</span></Label>
              <div className="flex gap-4 items-center">
                <label className="flex items-center space-x-2 cursor-pointer bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 hover:border-primary/50 transition-all">
                  <input type="radio" name="fullTimeNeeds" value="Yes" className="text-primary focus:ring-primary h-4 w-4" onChange={(e) => setFormData(p => ({...p, fullTimeNeeds: e.target.value}))} checked={formData.fullTimeNeeds === "Yes"} required />
                  <span className="text-sm font-medium text-slate-700">Yes</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 hover:border-primary/50 transition-all">
                  <input type="radio" name="fullTimeNeeds" value="No" className="text-primary focus:ring-primary h-4 w-4" onChange={(e) => { setFormData(p => ({...p, fullTimeNeeds: e.target.value, positionsPlanned: ""})); }} checked={formData.fullTimeNeeds === "No"} required />
                  <span className="text-sm font-medium text-slate-700">No</span>
                </label>
              </div>
            </div>

            {formData.fullTimeNeeds === "Yes" && (
              <div className="space-y-1.5 animate-in slide-in-from-top-2 fade-in duration-200">
                <Label className="text-sm font-semibold text-slate-700">How many positions? <span className="text-red-500">*</span></Label>
                <div className="flex flex-wrap gap-2">
                  {["1-2", "3-5", "6-10", "11-20", "20+"].map((num) => (
                    <label key={num} className={\`flex items-center space-x-2 cursor-pointer px-3 py-1.5 rounded-lg border transition-all \${formData.positionsPlanned === num ? "bg-primary/5 border-primary text-primary shadow-sm" : "bg-slate-50 border-slate-200 text-slate-600 hover:border-primary/30"}\`}>
                      <input type="radio" name="positionsPlanned" value={num} className="sr-only" onChange={(e) => setFormData(p => ({...p, positionsPlanned: e.target.value}))} checked={formData.positionsPlanned === num} required />
                      <span className="text-sm font-bold">{num}</span>
                    </label>
                  ))}
                </div>
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
            {loading ? "Submitting..." : "Next"}
          </Button>
          
          <p className="text-[10px] text-center text-slate-400 mt-3 leading-relaxed">
            By clicking "Next", you agree to our <a href="https://www.ajobthing.com/terms-and-condition" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">Terms of Use</a> and <a href="https://www.ajobthing.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default function App() {
  const [isHiringModalOpen, setIsHiringModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-primary/20 selection:text-primary">
      {/* SECTION 1 - TOP NAV */}
      <header className={\`fixed top-0 left-0 right-0 z-[100] w-full shadow-sm shadow-slate-100/50 transition-all duration-300 \${isHiringModalOpen ? "opacity-0 pointer-events-none" : "opacity-100"}\`}>
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

      {/* HIRING MODAL */}
      <Dialog open={isHiringModalOpen} onOpenChange={setIsHiringModalOpen}>
        <DialogContent className="sm:max-w-md p-0 border-none bg-transparent shadow-none [&>button]:hidden z-[200]">
          <HiringForm 
            onSuccess={() => setIsHiringModalOpen(false)} 
            onScrollToTestimonials={() => {
              setIsHiringModalOpen(false);
              document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
            }}
            isOpen={isHiringModalOpen}
          />
        </DialogContent>
      </Dialog>

      <main className="pt-[88px] md:pt-[100px]">
        {/* SECTION 1 — HERO BANNER */}
        <section className="relative w-full overflow-hidden min-h-[500px] sm:min-h-[580px] md:h-[620px] flex items-center bg-[#F3F4F6]">
          {/* Full bleed background image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={employerHeroBg} 
              srcSet={\`\${employerHeroBgMobileWebp} 800w, \${employerHeroBgWebp} 1376w\`}
              sizes="100vw"
              alt="Employer hiring landscape" 
              className="w-full h-full object-cover object-[98%_top] md:object-[right_top] lg:object-[95%_top] select-none"
              referrerPolicy="no-referrer"
              fetchPriority="high"
            />
            {/* Subtle gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/5 lg:bg-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">`;

  fs.writeFileSync('src/App.tsx', codeBefore + newMiddle + codeAfter);
} else {
  console.log("Indexes not found", splitIndex, secondPartIndex);
}
