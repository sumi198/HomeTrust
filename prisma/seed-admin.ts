import "dotenv/config";
import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";

async function main() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    throw new Error("ADMIN_EMAIL and ADMIN_PASSWORD are required.");
  }

  if (password.length < 12) {
    throw new Error("Admin password must be at least 12 characters.");
  }

  if (Buffer.byteLength(password, "utf8") > 72) {
    throw new Error("Admin password must not exceed 72 UTF-8 bytes.");
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const admin = await prisma.user.upsert({
    where: { email },
    update: {
      name: "HomeTrust Admin",
      passwordHash,
      role: "ADMIN",
    },
    create: {
      name: "HomeTrust Admin",
      email,
      passwordHash,
      role: "ADMIN",
    },
  });

  console.log("Admin account ready:", admin.email);
}

main()
  .catch((error) => {
    console.error("Admin setup failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
