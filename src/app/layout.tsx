import { Recursive } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Foot from "@/components/Foot";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";
import ChatBotScript from "../components/ChatBotScript";

const recursive = Recursive({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <ChatBotScript /> */}
        <ChatBotScript />
      </head>
      <body className={recursive.className}>
        <Navbar />

        <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            <Providers>{children}</Providers>
          </div>
          <Foot />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
