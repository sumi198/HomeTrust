
import "next-auth";

declare module "next-auth" {
  interface User {
    role: "CUSTOMER" | "SELLER" | "ADMIN";
  }

  interface Session {
    user: {
      id: string;
      role: "CUSTOMER" | "SELLER" | "ADMIN";
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
    role: "CUSTOMER" | "SELLER" | "ADMIN";
  }
}

import type { DefaultSession } from "next-auth";
