const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const newSection = `
      {/* SECTION 1.6 — SCREENING IS NOT YOUR JOB ANYMORE */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 relative"
            >
              {/* Abstract representation of AI filtering */}
              <div className="aspect-square max-w-md mx-auto bg-white rounded-full shadow-2xl p-12 border-4 border-slate-50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow"></div>
                <div className="bg-primary/5 rounded-full p-10 w-full h-full flex flex-col items-center justify-center relative z-10 gap-4">
                    <div className="bg-white shadow-xl rounded-2xl p-4 w-full max-w-[200px] transform -rotate-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold shrink-0">✓</div>
                        <div className="text-left">
                          <div className="text-xs font-bold text-slate-800">Qualified Match</div>
                          <div className="text-[10px] text-slate-500">Ready for interview</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white shadow-xl rounded-2xl p-4 w-full max-w-[200px] transform rotate-3 translate-x-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold shrink-0">✓</div>
                        <div className="text-left">
                          <div className="text-xs font-bold text-slate-800">Interested</div>
                          <div className="text-[10px] text-slate-500">Contacted via AI</div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 text-center md:text-left"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                Screening Is Not Your Job Anymore
              </h2>
              <div className="h-1.5 w-20 bg-primary rounded-full mb-8 mx-auto md:mx-0" />
              <p className="text-lg sm:text-xl text-[#555555] font-medium leading-relaxed">
                Our AI filters and contacts only qualified, interested candidates. Saving you hours of screening. You focus on interviews and hiring the right person.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
`;

code = code.replace(
  '      {/* SECTION 2 — TESTIMONIALS */}',
  newSection + '\n      {/* SECTION 2 — TESTIMONIALS */}'
);

fs.writeFileSync('src/App.tsx', code);
