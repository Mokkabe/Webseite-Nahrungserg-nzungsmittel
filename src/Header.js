import React from "react";

export default function Header() {
  return (
    <header className="bg-lime-700 text-blue-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-lg font-bold">Pfotenplus</h1>

        <nav className="flex gap-6">
          <a
            href="/"
            className="hover:underline hover:text-white transition"
          >
            Home
          </a>
          <a
            href="/about"
            className="hover:underline hover:text-white transition"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:underline hover:text-white transition"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
