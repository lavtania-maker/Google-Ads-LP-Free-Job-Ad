import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');

if (!code.includes('Users,')) {
    code = code.replace('UserPlus,', 'Users,\n  UserPlus,');
    fs.writeFileSync('src/App.tsx', code);
}
