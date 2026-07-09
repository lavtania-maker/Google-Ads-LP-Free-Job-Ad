const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const oldSection = `            {[
              {
                title: "Reach 5 Million+ Candidates in One Click",
                desc: "Your job ad goes live across Maukerja, Ricebowl, Epicareer, and partner platforms. One posting, no reposting, no extra cost.",
                icon: <Globe className="h-8 w-8 text-primary" />,
                bgColor: "bg-green-50",
                iconColor: "bg-green-100"
              },
              {
                title: "Chat With Applicants Instantly",
                desc: "Message candidates the moment they apply on AJobThing Chat. Reply faster with templates and AI quick replies, without sharing your personal WhatsApp.",
                icon: <Zap className="h-8 w-8 text-primary" />,
                bgColor: "bg-blue-50",
                iconColor: "bg-blue-100"
              },
              {
                title: "Post Job for FREE",
                desc: "Post freelance, part-time, internship, volunteer, high-pay, and Singapore jobs for free. Pay only when you need more.",
                icon: <FilePlus className="h-8 w-8 text-primary" />,
                bgColor: "bg-orange-50",
                iconColor: "bg-orange-100"
              },
              {
                title: "Screening Is Not Your Job Anymore",
                desc: "Our AI filters and contacts only qualified, interested candidates. Saving you hours of screening. You focus on interviews and hiring the right person.",
                icon: <Users className="h-8 w-8 text-primary" />,
                bgColor: "bg-purple-50",
                iconColor: "bg-purple-100"
              }
            ]`;

const newSection = `            {[
              {
                title: "Reach 5 Million+ Candidates in One Click",
                desc: "Your job ad goes live across Maukerja, Ricebowl, and partner platforms. One posting, no reposting, no extra cost.",
                icon: <img src="https://www.maukerja.my/mkt/images/mk/reason_get3x.png" alt="Reach Candidates" className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />,
                bgColor: "bg-green-50",
                iconColor: "bg-green-100"
              },
              {
                title: "Chat With Applicants Instantly",
                desc: "Message candidates the moment they apply on AJobThing Chat. Reply faster with templates and AI quick replies, without sharing your personal WhatsApp.",
                icon: <img src="https://s3-ap-southeast-1.amazonaws.com/ricebowl/images/marketing-campaign/image-937cc484-7a5b-4825-9127-edc68a91d955.png" alt="Chat With Applicants" className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />,
                bgColor: "bg-blue-50",
                iconColor: "bg-blue-100"
              },
              {
                title: "Post Job for FREE",
                desc: "Post freelance, part-time, internship, volunteer, high-pay, and Singapore jobs for free. Pay only when you need more.",
                icon: <img src="https://s3-ap-southeast-1.amazonaws.com/ricebowl/images/marketing-campaign/image-7e8c886c-ad7d-42f2-be36-64abdb2b1a47.png" alt="Post Job for FREE" className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />,
                bgColor: "bg-orange-50",
                iconColor: "bg-orange-100"
              },
              {
                title: "Screening Is Not Your Job Anymore",
                desc: "Our AI filters and contacts only qualified, interested candidates. Saving you hours of screening. You focus on interviews and hiring the right person.",
                icon: <img src="https://s3-ap-southeast-1.amazonaws.com/ricebowl/images/marketing-campaign/image-8edc4ee1-d023-4cc2-ad5d-e40542f77ebd.png" alt="Screening Is Not Your Job" className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />,
                bgColor: "bg-purple-50",
                iconColor: "bg-purple-100"
              }
            ]`;

code = code.replace(oldSection, newSection);
fs.writeFileSync('src/App.tsx', code);
