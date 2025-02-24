import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "@/app/_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis",
  },
  description: "A Luxurious Hotel in the heart of the Grand Italic Dolomites!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className} bg-primary-950 antialiased text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>
            {children}
            </ReservationProvider>
            
            </main>
        </div>
      </body>
    </html>
  );
}
