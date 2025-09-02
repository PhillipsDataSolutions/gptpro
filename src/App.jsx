import { useState } from "react";

export default function App() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = {
      full_name: form.full_name.value,
      email: form.email.value,
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
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-slate-900 to-black text-white text-center px-6">
      <section className="min-h-screen flex flex-col items-center justify-center max-w-5xl">
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

      <p className="mt-8 text-slate-400 text-sm">
        Learn more at{" "}
        <a
          href="https://www.phillipsdatasolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-indigo-400"
        >
          Phillips Data Solutions
        </a>
        .
      </p>

      <section className="mt-24 w-full max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
          Contact
        </h2>
        <form className="space-y-4 bg-slate-900/60 border border-white/10 rounded-2xl p-6" onSubmit={handleSubmit}>
          <input type="text" name="hp" className="hidden" defaultValue="" />
          <input
            required
            placeholder="Full name"
            name="full_name"
            className="bg-slate-900/70 border border-white/10 rounded-xl px-4 py-2.5 w-full"
          />
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            className="bg-slate-900/70 border border-white/10 rounded-xl px-4 py-2.5 w-full"
          />
          <textarea
            placeholder="Message"
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
      </section>

      <footer className="mt-24 text-slate-400 text-sm text-center">
        <p>© {new Date().getFullYear()} TheChatGPTPro. All rights reserved.</p>
        <p>
          Visit{" "}
          <a
            href="https://www.phillipsdatasolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Phillips Data Solutions
          </a>{" "}
          for more.
        </p>
      </footer>
    </main>
  )
}
