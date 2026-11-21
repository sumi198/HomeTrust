
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
