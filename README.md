This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
PS E:\Testing\2-nov> git clone https://github.com/sumi198/HomeTrust.git
Cloning into 'HomeTrust'...
remote: Enumerating objects: 57, done.
remote: Counting objects: 100% (57/57), done.
remote: Compressing objects: 100% (47/47), done.
remote: Total 57 (delta 12), reused 34 (delta 1), pack-reused 0 (from 0)
Receiving objects: 100% (57/57), 60.56 KiB | 291.00 KiB/s, done.
Resolving deltas: 100% (12/12), done.
PS E:\Testing\2-nov> cd .\HomeTrust\
PS E:\Testing\2-nov\HomeTrust> pnpm install
Lockfile is up to date, resolution step is skipped
Packages: +353



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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are 



















HomeTrust/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   ├── buy/
│   │   └── page.tsx
│   ├── rent/
│   │   └── page.tsx
│   ├── map/
│   │   └── page.tsx
│   ├── property/
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   ├── list-property/
│   │   └── page.tsx
│   │
│   ├── login/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   │
│   ├── customer/
│   │   └── dashboard/
│   │       └── page.tsx
│   │
│   ├── seller/
│   │   └── dashboard/
│   │       └── page.tsx
│   │
│   ├── admin/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── properties/
│   │   │   ├── page.tsx
│   │   │   ├── new/
│   │   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── users/
│   │   │   └── page.tsx
│   │   └── enquiries/
│   │       └── page.tsx
│   │
│   └── api/
│       ├── properties/
│       │   └── route.ts
│       ├── enquiries/
│       │   └── route.ts
│       └── admin/
│           └── properties/
│               └── route.ts
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNavigation.tsx
│   ├── property/
│   │   ├── PropertyCard.tsx
│   │   ├── PropertyGrid.tsx
│   │   └── PropertyFilters.tsx
│   └── admin/
│       ├── AdminSidebar.tsx
│       └── AdminHeader.tsx
│
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   ├── permissions.ts
│   └── validations/
│
├── prisma/
│   └── schema.prisma
│
├── public/
│
├── next.config.ts
├── package.json
└── pnpm-lock.yaml