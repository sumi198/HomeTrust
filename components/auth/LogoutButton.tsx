
import { signOut } from "@/lib/auth";

export default function LogoutButton() {
  async function logoutAction() {
    "use server";

    await signOut({
      redirectTo: "/login",
    });
  }

  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
      >
        Logout
      </button>
    </form>
  );
}
