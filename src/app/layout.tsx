import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer, Zoom } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "@/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blackjack",
  description: "Blackjack Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Zoom}
        />
        <main className="main-container">
          <div className="game-container">{children}</div>
        </main>
      </body>
    </html>
  );
}
