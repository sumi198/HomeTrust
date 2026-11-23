# Getting Started Web App 
# HomeTrust Next Js 

$env:ADMIN_EMAIL="admin@hometrust.com"
$env:ADMIN_PASSWORD="243439!Password123!"

pnpm db:admin

Remove-Item Env:ADMIN_EMAIL
Remove-Item Env:ADMIN_PASSWORD





## PS E:\Testing\2-nov> git clone https://github.com/sumi198/HomeTrust.git

Cloning into 'HomeTrust'...
remote: Enumerating objects: 57, done.
remote: Counting objects: 100% (57/57), done.
remote: Compressing objects: 100% (47/47), done.
remote: Total 57 (delta 12), reused 34 (delta 1), pack-reused 0 (from 0)
Receiving objects: 100% (57/57), 60.56 KiB | 291.00 KiB/s, done.
Resolving deltas: 100% (12/12), done.
PS E:\Testing\2-nov> cd .\HomeTrust\

# Install Lib & Modules

## PS E:\Testing\2-nov\HomeTrust> pnpm install

Lockfile is up to date, resolution step is skipped
Packages: +353

Progress: resolved 353, reused 353, downloaded 0, added 353, done

dependencies:
+ lucide-react 1.66.0
+ next 16.4.3
+ react 19.3.0
+ react-dom 19.3.0

devDependencies:
+ @tailwindcss/turbopack 4.3.3
+ @types/node 20.19.43
+ @types/react 19.3.0
+ @types/react-dom 19.3.0
+ eslint 9.39.5
+ eslint-config-next 16.4.3
+ tailwindcss 4.3.3
+ typescript 5.9.3

Done in 2m 35.1s using pnpm v10.15.0



First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


## PS E:\Git_HomeTrust\HomeTrust> pnpm run dev

hometrust@0.1.0 dev E:\Git_HomeTrust\HomeTrust
> next dev

▲ Next.js 16.4.3 (Turbopack)
- Local:         http://localhost:3000
- Network:       http://192.168.1.9:3000
✓ Ready in 1595ms
✓ Running next.config.ts took 241ms
- Cache Components enabled
- Partial Prefetching enabled

 GET / 200 in 1351ms (next.js: 476ms, application-code: 876ms)
 GET /map 200 in 173ms (next.js: 24ms, application-code: 148ms)

 # Git & GitHub
PS E:\Testing\2-nov> git clone https://github.com/sumi198/HomeTrust.git

PS E:\Git_HomeTrust\HomeTrust> git status    

PS E:\Git_HomeTrust\HomeTrust> git add .  

PS E:\Git_HomeTrust\HomeTrust> git commit -m "yahan apna message likhein"

PS E:\Git_HomeTrust\HomeTrust> git push origin main


# work on project follow these steps 



