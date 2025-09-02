import { useState } from "react";

export default function App() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = {
      full_name: form.full_name.value,
      email: form.email.value,
      name: form.company.value,
      websiteform_current_tools: form.websiteform_current_tools.value,
      websiteform_message: form.websiteform_message.value,
      hp: form.hp.value,
    };

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        const err = await res.json();
        setStatus(err.error || "error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-black text-white text-center px-6">
      <section className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          AI Workflows That Save Time & Eliminate Busywork
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-10">
          Explore how AI can automate repetitive tasks, improve accuracy, and free your team to focus on growth.
        </p>
        <a
          href="https://www.phillipsdatasolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-indigo-500 to-cyan-500 text-black font-extrabold text-xl md:text-2xl px-6 py-4 rounded-2xl shadow-lg hover:scale-105 transition">
          Visit the real ChatGPT Pro → Phillips Data Solutions
        </a>
      </section>

      <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {[
          { title: "Workflow Automation", desc: "Turn scattered manual tasks into seamless, automated flows." },
          { title: "AI Enrichment", desc: "Automatically classify, enrich, and clean data for accuracy." },
          { title: "System Integration", desc: "Sync CRM, email, and business tools without data drift." },
          { title: "Operational Efficiency", desc: "Save hours each week and improve team productivity." },
          { title: "Data Quality", desc: "Deduplicate, validate, and maintain trustworthy records." },
          { title: "Scalable AI", desc: "Build automations that grow with your business needs." },
        ].map((f, i) => (
          <div key={i} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-slate-300 text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Let's streamline your
              <span className="animate-shine bg-gradient-to-r from-blue-400 via-[#c9e4ff] to-blue-400 bg-clip-text text-transparent">
                " workflows"
              </span>
            </h2>
            <p className="mt-3 text-slate-300">
              Tell us where time is being lost. We will run a quick discovery and
              propose a plan that saves hours each week.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                Email:
                <a
                  href="mailto:ian@phillipsdatasolutions.com"
                  className="underline hover:text-white"
                >
                  ian@phillipsdatasolutions.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                Phone:
                <a
                  className="underline hover:text-white clicktocall"
                  id="+16092882858-0"
                  title="Call via 8x8"
                  tabIndex={0}
                  rel="noopener"
                >
                  +1 (609) 288-2858
                </a>
              </div>
              <a
                href="https://www.linkedin.com/company/phillips-data-solutions/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white"
              >
                LinkedIn
              </a>
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">Start a Free Discovery</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" name="hp" className="hidden" defaultValue="" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  required
                  placeholder="Full name"
                  name="full_name"
                  className="bg-slate-900/70 border border-white/10 rounded-xl px-4 py-2.5"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="bg-slate-900/70 border border-white/10 rounded-xl px-4 py-2.5"
                />
              </div>
              <input
                placeholder="Company / Organization (optional)"
                name="company"
                className="bg-slate-900/70 border border-white/10 rounded-xl px-4 py-2.5 w-full"
              />
              <input
                placeholder="Current tools (e.g., HubSpot, Microsoft 365, Shopify, Google)"
                name="websiteform_current_tools"
                className="bg-slate-900/70 border border-white/10 rounded-xl px-4 py-2.5 w-full"
              />
              <textarea
                placeholder="What is not working today?"
                name="websiteform_message"
                className="bg-slate-900/70 border border-white/10 rounded-xl px-4 py-2.5 w-full min-h-[120px]"
                maxLength={2000}
              ></textarea>
              <button
                type="submit"
                className="w-full rounded-2xl px-5 py-3 bg-white text-slate-900 font-medium shadow-sm hover:bg-white/90 disabled:opacity-50"
                disabled={status === "loading"}
              >
                Send
              </button>
              {status === "sent" && (
                <p className="text-green-400 text-xs text-center">
                  Thanks! We'll reply within one business day.
                </p>
              )}
              {status !== "idle" && status !== "loading" && status !== "sent" && (
                <p className="text-red-400 text-xs text-center">{status}</p>
              )}
              {status === "loading" && (
                <p className="text-xs text-slate-400 text-center">Sending...</p>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer className="mt-24 text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} TheChatGPTPro. All rights reserved.</p>
      </footer>
    </main>
  )
}
