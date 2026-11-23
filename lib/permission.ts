
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export type AppRole = "CUSTOMER" | "SELLER" | "ADMIN";

export async function requireUser() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  return session.user;
}

export async function requireRole(role: AppRole) {
  const user = await requireUser();

  if (user.role !== role) {
    switch (user.role) {
      case "ADMIN":
        redirect("/admin");

      case "SELLER":
        redirect("/seller/dashboard");

      default:
        redirect("/customer/dashboard");
    }
  }

  return user;
}
