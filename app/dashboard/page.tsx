
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";


export default async function DashboardRedirectPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  switch (session.user.role) {
    case "ADMIN":
      redirect("/admin");

    case "SELLER":
      redirect("/seller/dashboard");

    case "CUSTOMER":
    default:
      redirect("/customer/dashboard");
  }
}
