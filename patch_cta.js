const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf8');

// Replace FREE with FREE*
code = code.replace(
  '<span className="relative z-10 italic bg-gradient-to-r from-[#FF9800] via-[#FF5722] to-[#FF9800] bg-clip-text text-transparent animate-shimmer font-bold">\n                      FREE\n                    </span>',
  '<span className="relative z-10 italic bg-gradient-to-r from-[#FF9800] via-[#FF5722] to-[#FF9800] bg-clip-text text-transparent animate-shimmer font-bold">\n                      FREE*\n                    </span>'
);

const oldCta = `<Button 
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-primary text-white hover:brightness-90 text-lg font-bold shadow-xl shadow-primary/10 rounded-2xl group transition-all"
            >
              {loading ? "Submitting..." : "Start Hiring for FREE"}
              {!loading && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
            </Button>
          </div>
        </form>`;

const newCta = `<Button 
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-primary text-white hover:brightness-90 text-lg font-bold shadow-xl shadow-primary/10 rounded-2xl group transition-all"
            >
              {loading ? "Submitting..." : "Start Hiring for FREE"}
              {!loading && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
            </Button>
            <p className="mt-3 text-center text-xs text-slate-500 font-medium leading-relaxed">
              *Enjoy FREE Job Ads for Freelance, Part-time, Internship, Volunteer, High-Pay, and Singapore jobs.
            </p>
          </div>
        </form>`;

code = code.replace(oldCta, newCta);
fs.writeFileSync('src/App.tsx', code);
