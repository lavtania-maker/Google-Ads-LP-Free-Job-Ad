const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const oldMapping = `            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(237,53,84,0.15)] transition-all duration-500 flex flex-col items-center text-center"
              >
                <div className={\`w-20 h-20 \${card.iconColor} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner\`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800 leading-tight">{card.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{card.desc}</p>
              </motion.div>
            ))`;

const newMapping = `            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(237,53,84,0.15)] transition-all duration-500 flex flex-col items-center text-center"
              >
                <div className="w-28 h-28 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800 leading-tight">{card.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{card.desc}</p>
              </motion.div>
            ))`;

code = code.replace(oldMapping, newMapping);

// Also we need to increase the size of the images inside the array!
code = code.replace(/className="w-12 h-12 object-contain"/g, 'className="w-full h-full object-contain"');

fs.writeFileSync('src/App.tsx', code);
