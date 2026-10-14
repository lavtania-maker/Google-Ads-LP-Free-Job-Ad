import * as React from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, Star, UserPlus, Megaphone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import employerHeroBg from "../../assets/images/fb_hr_manager_widescreen_1783483895940.jpg";
import chatReachImg from "../../assets/images/chat-reach.png";
import chatInviteImg from "../../assets/images/chat-invite.png";
import chatAppImg from "../../assets/images/chat-app.png";
import aiJobAdImg from "../../assets/images/product-ai-job-ad.png";
import candidateSearchImg from "../../assets/images/product-candidate-search.png";
import walkInImg from "../../assets/images/product-walk-in.png";
import careImg from "../../assets/images/product-care.png";

type OpenFormProps = { onOpenForm: () => void };

const FREE_JOB_TYPES = ["Freelance", "Part-time", "Internship", "Volunteer", "High-Pay", "Singapore"];

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?kgmid=/g/11bymx0j2z&hl=en-ID&q=AJobThing+-+Your+Ultimate+Recruitment+%26+Hiring+Solution&shem=epsd1,esd2e,ltae,rimspwouoe,sdpie&shndl=30&source=sh/x/loc/osrp/m5/1&kgs=e2b38152e6c48b66&utm_source=epsd1,esd2e,ltae,rimspwouoe,sdpie,sh/x/loc/osrp/m5/1";

const TRUSTED_LOGOS = [
  { name: "Shopee", url: "https://www.maukerja.my/mkt/images/mkrb-companies/shopee.png" },
  { name: "McDonald's", url: "https://www.maukerja.my/mkt/images/mkrb-companies/mcd.png" },
  { name: "Starbucks", url: "https://www.maukerja.my/mkt/images/mkrb-companies/starbucks.png" },
  { name: "Pizza Hut", url: "https://www.maukerja.my/mkt/images/mkrb-companies/pizzahut.png" },
  { name: "Lazada", url: "https://www.maukerja.my/mkt/images/mkrb-companies/lazada.png" },
  { name: "Concentrix", url: "https://www.maukerja.my/mkt/images/mkrb-companies/concentrix.png" },
  { name: "Watsons", url: "https://www.maukerja.my/mkt/images/mkrb-companies/watsons.png" },
  { name: "Foodpanda", url: "https://www.maukerja.my/mkt/images/mkrb-companies/foodpanda.png" },
  { name: "Flash Express", url: "https://www.maukerja.my/mkt/images/mkrb-companies/flash.png" },
  { name: "KFC", url: "https://www.maukerja.my/mkt/images/mkrb-companies/kfc.png" },
  { name: "DHL", url: "https://www.maukerja.my/mkt/images/mkrb-companies/dhl.png" },
];

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: React.ReactNode }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#1A1A1A] leading-tight tracking-tight text-balance">
        {children}
      </h2>
      <div className="h-[5px] w-[76px] bg-primary rounded-full mx-auto mt-[18px]" aria-hidden="true" />
      {sub && (
        <p className="mt-4 text-base text-[#555555] max-w-2xl mx-auto leading-relaxed text-pretty">{sub}</p>
      )}
    </div>
  );
}

function PrimaryButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <Button
      onClick={onClick}
      className="bg-primary hover:brightness-95 text-white h-12 px-7 rounded-[10px] text-[15px] font-bold shadow-[0_8px_18px_-8px_rgba(237,53,84,0.6)] transition-all hover:-translate-y-px cursor-pointer"
    >
      {children}
    </Button>
  );
}

function Stars({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`${className} fill-[#FFC107] text-[#FFC107]`} aria-hidden="true" />
      ))}
    </div>
  );
}

export function HeroSection({ onOpenForm }: OpenFormProps) {
  return (
    <section className="relative w-full overflow-hidden py-8 md:py-14 bg-[#F3F4F6]">
      <img
        src={employerHeroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[98%_top] md:object-[right_top] select-none"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent to-60%" aria-hidden="true" />

      <div className="relative max-w-[1100px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[540px] bg-white/95 backdrop-blur-md rounded-[22px] shadow-[0_12px_40px_-14px_rgba(0,0,0,0.18)] p-7 sm:p-9"
        >
          <h1 className="text-[2rem] md:text-[2.5rem] font-bold leading-tight text-[#1A1A1A] text-balance">
            Post Jobs for <span className="italic text-primary">FREE*</span>
            <br />
            Chat with Candidates &amp; Hire in 72 Hours
          </h1>
          <p className="mt-4 mb-5 text-[15.5px] text-[#555555] leading-relaxed">
            One post on Maukerja, Ricebowl &amp; Epicareer. Chat with applicants the moment they apply, no personal
            WhatsApp needed.
          </p>

          <p className="text-[10px] font-bold tracking-[0.14em] text-[#555555] mb-2">FREE FOR THESE JOBS:</p>
          <ul className="flex flex-wrap gap-2 mb-6">
            {FREE_JOB_TYPES.map((type) => (
              <li
                key={type}
                className="border border-[#ececec] rounded-full text-[10.5px] font-bold tracking-wide px-3 py-1.5 uppercase text-[#1A1A1A]"
              >
                {type}
              </li>
            ))}
          </ul>

          <PrimaryButton onClick={onOpenForm}>Start Hiring for FREE</PrimaryButton>

          <p className="mt-3 text-[11.5px] text-[#555555] leading-relaxed">
            *FREE job ads for Freelance, Part-time, Internship, Volunteer, High-Pay and Singapore jobs. Full-time jobs use
            paid job ads.
          </p>

          <div className="mt-5 pt-4 border-t border-[#ececec] flex flex-wrap items-center gap-2.5 text-xs">
            <img src="https://www.ajobthing.com/mkt/images/ajt/google.svg" alt="Google" className="h-4 w-4" />
            <Stars />
            <span className="font-bold text-[#1A1A1A]">4.9 RATING</span>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#555555] hover:text-primary transition-colors"
            >
              ON GOOGLE REVIEWS · 2,600+
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function TrustMarquee() {
  const logos = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS];
  return (
    <div className="pt-9 pb-3 bg-white text-center">
      <p className="text-[11px] font-bold tracking-[0.2em] text-[#374B5C] mb-4 px-5">
        TRUSTED BY OVER 15,000+ TOP EMPLOYERS
      </p>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <motion.div
          className="flex gap-4 w-max py-1"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
        >
          {logos.map((logo, i) => (
            <img
              key={i}
              loading="lazy"
              src={logo.url}
              alt={i < TRUSTED_LOGOS.length ? logo.name : ""}
              className="h-[46px] w-auto rounded-lg bg-white shadow-[0_1px_4px_rgba(0,0,0,0.1)]"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const WHY_CARDS = [
  {
    title: "Reach 6M+ Jobseekers in One Post",
    desc: "Your job goes live on Maukerja, Ricebowl and Epicareer. One post, no reposting, no extra cost.",
    img: "https://www.maukerja.my/mkt/images/mk/reason_get3x.png",
  },
  {
    title: "Chat With Applicants Instantly",
    desc: "Reply the moment they apply with AJobThing Chat. Use templates and AI quick replies, no personal WhatsApp needed.",
    img: "https://s3-ap-southeast-1.amazonaws.com/ricebowl/images/marketing-campaign/image-937cc484-7a5b-4825-9127-edc68a91d955.png",
  },
  {
    title: "6 Job Types Are FREE",
    desc: "Freelance, part-time, internship, volunteer, high-pay and Singapore jobs. Pay only when you need more.",
    img: "https://s3-ap-southeast-1.amazonaws.com/ricebowl/images/marketing-campaign/image-7e8c886c-ad7d-42f2-be36-64abdb2b1a47.png",
  },
  {
    title: "AI Does the Screening",
    desc: "AI finds and notifies qualified, interested candidates. You focus on interviews and hiring.",
    img: "https://s3-ap-southeast-1.amazonaws.com/ricebowl/images/marketing-campaign/image-8edc4ee1-d023-4cc2-ad5d-e40542f77ebd.png",
  },
];

const cardClass = "bg-white rounded-[18px] shadow-[0_10px_30px_-14px_rgba(0,0,0,0.18)]";

export function WhyHireSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-[1100px] mx-auto px-5">
        <SectionTitle>
          Why Employers Hire Faster on <span className="text-primary">Maukerja by AJobThing</span>
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px] mt-12">
          {WHY_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`${cardClass} px-6 py-8 text-center`}
            >
              <img loading="lazy" src={card.img} alt="" className="w-[84px] h-[84px] mx-auto mb-3.5 object-contain" />
              <h3 className="text-[19px] font-bold leading-snug text-[#1A1A1A]">{card.title}</h3>
              <p className="text-sm text-[#555555] mt-2.5 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CHAT_TABS = [
  {
    title: "Reach candidates instantly",
    desc: "Get notified the moment someone applies and start chatting right away. Check their profile and resume inside the chat.",
    img: chatReachImg,
  },
  {
    title: "Invite to interview in one tap",
    desc: "Send interview invites in the chat and see who accepted. Message many candidates at once for walk-ins.",
    img: chatInviteImg,
  },
  {
    title: "All chats in the AJobThing App",
    desc: "Chat with candidates from your phone. No need to share your personal WhatsApp, so you reach candidates faster.",
    img: chatAppImg,
  },
];

export function ChatSection() {
  const [active, setActive] = React.useState(0);
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-5">
        <SectionTitle sub="No more chasing candidates by phone or sharing your personal WhatsApp. Talk to them, screen them and book interviews in one place.">
          Chat Direct. <span className="text-primary">Hire 2X Faster.</span>
        </SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center mt-12">
          <div role="tablist" aria-label="AJobThing Chat features" className="flex flex-col gap-3 min-w-0">
            {CHAT_TABS.map((tab, i) => {
              const selected = active === i;
              return (
                <button
                  key={tab.title}
                  role="tab"
                  id={`chat-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="chat-panel"
                  onClick={() => setActive(i)}
                  className={`flex gap-3.5 text-left bg-white rounded-2xl p-[18px] border-[1.5px] transition-all cursor-pointer ${
                    selected
                      ? "border-primary shadow-[0_10px_24px_-14px_rgba(237,53,84,0.5)]"
                      : "border-[#ececec] hover:border-primary/40"
                  }`}
                >
                  <span className={`font-bold text-sm ${selected ? "text-primary" : "text-[#bbbbbb]"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-[17px] font-bold text-[#1A1A1A]">{tab.title}</span>
                    {selected && <span className="block text-sm text-[#555555] mt-1.5 leading-relaxed">{tab.desc}</span>}
                  </span>
                </button>
              );
            })}
          </div>
          <div id="chat-panel" role="tabpanel" aria-labelledby={`chat-tab-${active}`} className="min-w-0">
            <img src={CHAT_TABS[active].img} alt={CHAT_TABS[active].title} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

const STORIES = [
  {
    company: "GOODARCH TECHNOLOGY",
    name: "Yuen Yun – Recruiter",
    big: "3 roles",
    bigSub: "filled through AJobThing",
    quote:
      "We successfully recruited for three positions: Account Executive, Warehouse Executive and Senior Marketing Executive. The sales agent was highly responsive and efficient.",
    img: "https://files.ajobthing.com/employers/195238-1756438091.png",
  },
  {
    company: "AGHILAN ENTERPRISE",
    name: "ThievAgi Selva – Recruitment Team",
    big: "Better",
    bigSub: "than other platforms we used",
    quote:
      "We are very happy with the service compared to the previous job ads we posted on other platforms. The AJobThing team keeps checking in and updating us.",
    img: "https://files.ajobthing.com/employers/199992-1774682634.png",
  },
  {
    company: "CHRISTINE’S BAKERY",
    name: "Mr Luqman – Recruitment Team",
    big: "Easy",
    bigSub: "to use and effective",
    quote:
      "The system is user-friendly and effective in helping us reach suitable candidates. We would recommend Maukerja to other employers.",
    img: "https://files.ajobthing.com/employers/189207-1744158248.png",
  },
];

const VIDEO_ID = "2D5_9AYVjBQ";

export function SuccessStoriesSection() {
  const [playing, setPlaying] = React.useState(false);
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-[1100px] mx-auto px-5">
        <SectionTitle
          sub={
            <>
              HR teams across Malaysia hire better, faster with{" "}
              <span className="text-primary">Maukerja by AJobThing</span>
            </>
          }
        >
          Want to See Real Results? <span className="text-primary">Read Our Success Stories</span>
        </SectionTitle>

        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 mx-auto flex flex-wrap items-center justify-center gap-3 bg-white rounded-[18px] sm:rounded-full shadow-[0_6px_18px_-10px_rgba(0,0,0,0.25)] px-6 py-2.5 w-fit text-xs text-center"
        >
          <img src="https://www.ajobthing.com/mkt/images/ajt/google.svg" alt="Google" className="h-[18px] w-[18px]" />
          <Stars className="h-4 w-4" />
          <span className="text-base font-bold text-[#1A1A1A]">4.9</span>
          <span className="italic font-bold text-[10.5px] tracking-[0.08em] text-[#374B5C]">
            BEST RECRUITMENT PORTAL IN MALAYSIA
          </span>
          <span className="text-[#555555]">2,600+ reviews</span>
        </a>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-9">
          {STORIES.map((s) => (
            <article key={s.company} className={`${cardClass} p-6`}>
              <div className="flex gap-3 items-center mb-3.5">
                <img
                  loading="lazy"
                  src={s.img}
                  alt={`${s.company} logo`}
                  className="w-[42px] h-[42px] rounded-[10px] object-contain border border-[#ececec] shrink-0"
                />
                <div>
                  <h3 className="text-sm font-bold text-[#1A1A1A]">{s.company}</h3>
                  <p className="text-[11px] font-semibold text-primary">{s.name}</p>
                </div>
              </div>
              <p className="text-[30px] font-bold text-primary leading-none">{s.big}</p>
              <p className="text-xs font-semibold text-[#555555] mt-1 mb-3">{s.bigSub}</p>
              <blockquote className="text-[13px] text-[#555555] leading-relaxed">{`“${s.quote}”`}</blockquote>
            </article>
          ))}
        </div>

        <div className="max-w-[640px] mx-auto mt-9 rounded-[18px] overflow-hidden shadow-[0_14px_34px_-16px_rgba(0,0,0,0.4)] bg-black">
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Client success story using Maukerja"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="block w-full aspect-video border-0"
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              aria-label="Play success story video"
              className="group relative block w-full cursor-pointer"
            >
              <img
                loading="lazy"
                src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                onError={(e) => {
                  const img = e.currentTarget;
                  img.onerror = null;
                  img.src = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;
                }}
                alt="Client success story using Maukerja"
                className="w-full aspect-video object-cover"
              />
              <span className="absolute inset-0 m-auto w-[68px] h-[68px] rounded-full bg-primary text-white flex items-center justify-center shadow-[0_8px_20px_-6px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-110">
                <svg className="w-7 h-7 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

const PRODUCTS = [
  {
    tab: "AI Job Ad",
    isNew: true,
    title: "Write your job ad in seconds",
    sub: "Just type the job title. AI writes the full job ad for you.",
    points: [
      { b: "Job description in 1 click", s: "Duties, requirements and qualifications, written for the Malaysian market." },
      { b: "Salary guide in RM", s: "See the usual salary range and skills for the role before you post." },
      { b: "English, BM & Mandarin", s: "Switch your job ad language in one click to reach more candidates." },
    ],
    cta: "Try AI Job Ad",
    img: aiJobAdImg,
  },
  {
    tab: "AI Candidate Search",
    isNew: true,
    title: "Find candidates yourself",
    sub: "Search 250,000+ candidate profiles. No need to wait for applications.",
    points: [
      { b: "Filter by location & salary", s: "Also by experience, language and when they can start work." },
      { b: "New matches every day", s: "AI recommends suitable candidates daily, with a match score." },
      { b: "Save and chat in one place", s: "Keep your shortlist in folders and message candidates directly." },
    ],
    cta: "Search Candidates",
    img: candidateSearchImg,
  },
  {
    tab: "Smart Walk-In",
    isNew: true,
    title: "Walk-in interviews, made easy",
    sub: "Post your walk-in interview day online. Candidates check in with a QR code.",
    points: [
      { b: "Live in 5 minutes", s: "Just add the date, venue and the roles you are hiring for." },
      { b: "Seen by 2.5M+ active jobseekers", s: "Featured on the Maukerja & Ricebowl homepage and Walk-In page." },
      { b: "No more paper forms", s: "See who came, who is interviewing and who is shortlisted, live." },
    ],
    cta: "Create Walk-In Day",
    img: walkInImg,
  },
  {
    tab: "Company Branding",
    isNew: false,
    title: "Show why people love working with you",
    sub: "Your own company page on Maukerja & Ricebowl.",
    points: [
      { b: "Show your culture & open jobs", s: "Photos, benefits, office locations and all your vacancies in one page." },
      { b: "Easier to find online", s: "Better company visibility on Google Search and ChatGPT." },
      { b: "Jobseekers can follow you", s: "Followers get your updates, can drop their resume and chat with you." },
    ],
    cta: "Build Company Page",
    img: "https://www.maukerja.my/mkt/images/mk/hiringsol_1.png",
  },
  {
    tab: "AJobThing Care",
    isNew: false,
    title: "Not enough applicants? We help you.",
    sub: "AJobThing Care is included with every paid job ad and candidate search.",
    points: [
      { b: "Expert review of your job ad", s: "Our hiring experts suggest changes to attract the right candidates." },
      { b: "Extra help when results are slow", s: "We optimise and boost your job ad to get more applicants." },
      { b: "Dedicated support", s: "A real person to guide your hiring from start to finish." },
    ],
    cta: "Talk to Us",
    img: careImg,
  },
];

export function UpgradeSection({ onOpenForm }: OpenFormProps) {
  const [active, setActive] = React.useState(0);
  const product = PRODUCTS[active];
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-5">
        <SectionTitle sub="Start free. When you need full-time staff or more candidates, add the tools that fit.">
          Need More? <span className="text-primary">Upgrade Anytime</span>
        </SectionTitle>

        <div className="bg-white rounded-[22px] shadow-[0_10px_30px_-14px_rgba(0,0,0,0.18)] p-5 sm:p-[26px] mt-11">
          <div
            role="tablist"
            aria-label="Hiring products"
            className="flex flex-wrap gap-2 border-b border-[#ececec] pb-[18px] mb-7"
          >
            {PRODUCTS.map((p, i) => {
              const selected = active === i;
              return (
                <button
                  key={p.tab}
                  role="tab"
                  id={`product-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="product-panel"
                  onClick={() => setActive(i)}
                  className={`px-4 py-2.5 rounded-full text-sm font-bold transition-colors cursor-pointer ${
                    selected ? "bg-primary text-white" : "bg-[#F8F9FA] text-[#555555] hover:text-[#1A1A1A]"
                  }`}
                >
                  {p.tab}
                  {p.isNew && (
                    <span
                      className={`inline-block text-[9.5px] font-bold rounded-full px-[7px] py-0.5 ml-1.5 align-[3px] ${
                        selected ? "bg-white text-primary" : "bg-primary text-white"
                      }`}
                    >
                      NEW
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div
            id="product-panel"
            role="tabpanel"
            aria-labelledby={`product-tab-${active}`}
            className="grid grid-cols-1 lg:grid-cols-2 gap-9 items-center"
          >
            <div className="min-w-0">
              <h3 className="text-2xl md:text-[28px] font-bold leading-tight text-[#1A1A1A]">{product.title}</h3>
              <p className="text-base text-[#555555] mt-2.5 mb-[22px]">{product.sub}</p>
              <ul className="flex flex-col gap-4 mb-[26px]">
                {product.points.map((pt) => (
                  <li key={pt.b} className="flex gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-px">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-base font-bold text-[#1A1A1A]">{pt.b}</span>
                      <span className="block text-[13.5px] text-[#555555] mt-0.5">{pt.s}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <PrimaryButton onClick={onOpenForm}>{product.cta}</PrimaryButton>
            </div>
            <div className="min-w-0">
              <img src={product.img} alt={product.title} className="w-full h-auto rounded-[14px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    icon: UserPlus,
    title: "Register for FREE",
    desc: "Fill in the form and create your AJobThing employer account (or log in).",
  },
  {
    icon: Megaphone,
    title: "Post Your FREE Job",
    desc: "Choose a free job type and post your job. It goes live on Maukerja, Ricebowl and Epicareer.",
  },
  {
    icon: MessageCircle,
    title: "Chat & Hire",
    desc: "Chat with applicants the moment they apply and hire within 72 hours.",
  },
];

export function StepsSection({ onOpenForm }: OpenFormProps) {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-[1100px] mx-auto px-5">
        <SectionTitle>
          <span className="text-primary">Easy Hire</span> in 3 Simple Steps
        </SectionTitle>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-[22px] mt-12">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${cardClass} overflow-hidden text-center`}
              >
                <div className="bg-primary text-white font-bold text-xs tracking-[0.12em] py-2.5">STEP {i + 1}</div>
                <div className="px-[22px] py-[26px]">
                  <span className="w-14 h-14 rounded-2xl bg-[#fdeef1] text-primary flex items-center justify-center mx-auto">
                    <Icon className="w-7 h-7" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold mt-3 text-[#1A1A1A]">{step.title}</h3>
                  <p className="text-sm text-[#555555] mt-2 leading-relaxed">{step.desc}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>
        <div className="text-center mt-9">
          <PrimaryButton onClick={onOpenForm}>
            Start Hiring for FREE <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ onOpenForm }: OpenFormProps) {
  const faqs: { q: string; a: React.ReactNode }[] = [
    {
      q: "How do I claim the free job ad?",
      a: (
        <>
          <button onClick={onOpenForm} className="text-primary font-bold hover:underline cursor-pointer">
            Fill in the form
          </button>{" "}
          and register (or log in to) your AJobThing employer account. Your free job ad is ready to use right away.
        </>
      ),
    },
    {
      q: "Which jobs can I post for free?",
      a: "Freelance, part-time, internship, volunteer, high-pay and Singapore jobs. Choose the job type when you post, and it is free.",
    },
    {
      q: "Where will my free job appear?",
      a: "On Maukerja, Ricebowl and Epicareer, so more jobseekers see it. Applicants can chat with you straight away.",
    },
    {
      q: "What if I also need full-time staff?",
      a: "Tell us in the form. Your account manager will contact you to plan your full-time hiring and help you get candidates within 72 hours.",
    },
    {
      q: "Can I upgrade for more visibility?",
      a: (
        <>
          Yes, anytime. Buy job ads or choose an à la carte or yearly package, and add AI Job Ad, AI Candidate Search or
          Smart Walk-In.{" "}
          <a
            href="https://www.ajobthing.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-bold hover:underline"
          >
            See pricing
          </a>
        </>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[780px] mx-auto px-5">
        <SectionTitle sub="Frequently asked questions from employers">FAQs</SectionTitle>
        <Accordion defaultValue={["faq-0"]} className="w-full flex flex-col gap-3 mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${i}`}
              className="border-none bg-white rounded-[14px] px-[22px] shadow-[0_6px_18px_-12px_rgba(0,0,0,0.25)]"
            >
              <AccordionTrigger className="text-[15px] font-bold text-left text-[#1A1A1A] hover:no-underline py-[18px]">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#555555] leading-relaxed pb-[18px]">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function FinalCtaSection({ onOpenForm }: OpenFormProps) {
  return (
    <section className="pb-16 md:pb-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="bg-[#fdeef1] rounded-[22px] grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 py-9 md:px-11">
          <img
            loading="lazy"
            src="https://www.maukerja.my/mkt/images/mk/cta.svg"
            alt=""
            className="w-full max-h-64 object-contain"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-[30px] font-bold leading-tight text-[#1A1A1A] text-balance">
              Your next hire is one free job post away.
            </h2>
            <p className="text-[#555555] mt-3 mb-[22px]">Post for FREE today and start chatting with candidates.</p>
            <PrimaryButton onClick={onOpenForm}>Start Hiring for FREE</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
