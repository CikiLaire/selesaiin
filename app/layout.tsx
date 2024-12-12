import "./globals.css";
import { Playfair_Display } from "next/font/google";

const inter = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Selesaiin",
  description:
    "Dengan Selesaiin, rencanakan, lacak, dan selesaikan tugas dengan efisien tanpa ada yang terlewat.",
  keywords:
    "todolist, manajemen tugas, produktivitas, aplikasi pengelola tugas, efisiensi kerja",
  author: "Selesaiin Team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
