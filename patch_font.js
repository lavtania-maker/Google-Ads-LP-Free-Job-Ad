import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');

const changes = [
  {
    find: 'className="text-3xl sm:text-4xl lg:text-[2.25rem] xl:text-[2.65rem] font-bold leading-[1.3] md:leading-tight tracking-normal md:tracking-tight text-slate-900"',
    replace: 'className="text-3xl sm:text-4xl lg:text-[2.25rem] xl:text-[2.65rem] font-extrabold leading-[1.3] md:leading-tight tracking-normal md:tracking-tight text-slate-900"'
  },
  {
    find: 'className="text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-normal md:tracking-tight leading-[1.3] md:leading-tight"',
    replace: 'className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-normal md:tracking-tight leading-[1.3] md:leading-tight"'
  },
  {
    find: 'className="text-3xl md:text-5xl font-bold mb-6 text-[#1A1A1A] leading-[1.3] md:leading-tight tracking-normal md:tracking-tight"',
    replace: 'className="text-3xl md:text-5xl font-extrabold mb-6 text-[#1A1A1A] leading-[1.3] md:leading-tight tracking-normal md:tracking-tight"'
  },
  {
    find: 'className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-[1.3] md:leading-tight tracking-normal md:tracking-tight"',
    replace: 'className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] leading-[1.3] md:leading-tight tracking-normal md:tracking-tight"'
  },
  {
    find: 'className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A1A]"',
    replace: 'className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1A1A1A]"'
  }
];

changes.forEach(({find, replace}) => {
  code = code.replace(find, replace);
});

fs.writeFileSync('src/App.tsx', code);
