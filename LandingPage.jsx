import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-100 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">NextGen Grading</h1>
        <p className="text-xl mb-6 italic text-gray-600">The Future of Card Grading</p>
        <p className="text-lg max-w-xl mx-auto mb-8">
          Expert-style pre-grading for sports and trading cards. Know your card’s potential—before paying for official grading.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-2xl shadow hover:bg-gray-800 transition">Join the Waitlist</button>
      </section>

      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-2">1. Upload Your Card</h3>
            <p>Snap a clear photo of the front and back.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">2. Get a Pre-Grade & Report</h3>
            <p>Our proprietary analysis engine delivers an expert-style pre-grade with market comps.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">3. Decide What to Do Next</h3>
            <p>Use your report to choose whether to submit for official grading—or skip the fees.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Collectors Use NextGen Grading</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Fast insights</strong> – No more guesswork</li>
            <li><strong>Save on grading fees</strong> – Grade only what’s worth it</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Proprietary card analysis</strong> – Built by collectors, not just coders</li>
            <li><strong>Market-backed decisions</strong> – Comp data helps you grade smarter</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Pricing Preview</h2>
        <p className="mb-4"><strong>Pay-as-you-go:</strong> $2 per card (bulk discounts available)</p>
        <p className="mb-4"><strong>Power Collectors:</strong></p>
        <ul className="list-none space-y-2">
          <li>$10/month – up to 10 cards</li>
          <li>$20/month – up to 30 cards + premium tools</li>
        </ul>
      </section>

      <section className="py-20 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Grade smarter. Save money. Stay ahead.</h2>
        <button className="bg-black text-white px-6 py-3 rounded-2xl shadow hover:bg-gray-800 transition">Join the Waitlist</button>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        <p>Made by collectors. Built with tech. © {new Date().getFullYear()} NextGen Grading</p>
      </footer>
    </div>
  );
}
