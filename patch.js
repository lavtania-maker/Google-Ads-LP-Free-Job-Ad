import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Remove section 1.6
const startIdx = code.indexOf('      {/* SECTION 1.6');
const endIdx = code.indexOf('      {/* SECTION 2 — TESTIMONIALS */}');
if (startIdx !== -1 && endIdx !== -1) {
    code = code.substring(0, startIdx) + code.substring(endIdx);
}

// Update section 1.5 grid classes
code = code.replace(
    '<div className="grid grid-cols-1 md:grid-cols-3 gap-8">',
    '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">'
);

// Add the new item to the array
const oldArrayText = `              {
                title: "Post Job for FREE",
                desc: "Post freelance, part-time, internship, volunteer, high-pay, and Singapore jobs for free. Pay only when you need more.",
                icon: <FilePlus className="h-8 w-8 text-primary" />,
                bgColor: "bg-orange-50",
                iconColor: "bg-orange-100"
              }`;

const newArrayText = `              {
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
              }`;

code = code.replace(oldArrayText, newArrayText);

fs.writeFileSync('src/App.tsx', code);
