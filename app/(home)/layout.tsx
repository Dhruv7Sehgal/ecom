import Nav from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex flex-1">{children}</div>
      <Footer />
    </main>
  );
};

export default HomeLayout;
