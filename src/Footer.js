import React from "react";
const EMAIL = "kontakt@pfotenplus.at";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-5xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 gap-2">
        {/* Brand */}
        <a href="/" className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-blue-100"></span>
          PfotenPlus
        </a>

        {/* Kontakt */}
        <a
          href={`mailto:${EMAIL}`}
          className="hover:text-blue-600 transition"
        >
          ✉️ {EMAIL}
        </a>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} PfotenPlus
        </p>
      </div>
    </footer>
  );
}
