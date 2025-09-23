import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Start from "./Start";

export default function App() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <Start/>
      <Footer />
    </div>
  );
}
