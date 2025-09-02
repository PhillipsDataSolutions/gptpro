export default function App() {
  return (
    <main className=\"min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-black text-white text-center px-6\">
      <section className=\"max-w-3xl\">
        <h1 className=\"text-4xl md:text-6xl font-bold mb-6\">
          AI Workflows That Save Time & Eliminate Busywork
        </h1>
        <p className=\"text-lg md:text-xl text-slate-300 mb-10\">
          Explore how AI can automate repetitive tasks, improve accuracy, and free your team to focus on growth.
        </p>
        <a
          href=\"https://www.phillipsdatasolutions.com\"
          target=\"_blank\"
          rel=\"noopener noreferrer\"
          className=\"inline-block bg-gradient-to-r from-indigo-500 to-cyan-500 text-black font-extrabold text-xl md:text-2xl px-6 py-4 rounded-2xl shadow-lg hover:scale-105 transition\">
          Visit the real ChatGPT Pro → Phillips Data Solutions
        </a>
      </section>

      <section className=\"mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl\">
        {[
          { title: \"Workflow Automation\", desc: \"Turn scattered manual tasks into seamless, automated flows.\" },
          { title: \"AI Enrichment\", desc: \"Automatically classify, enrich, and clean data for accuracy.\" },
          { title: \"System Integration\", desc: \"Sync CRM, email, and business tools without data drift.\" },
          { title: \"Operational Efficiency\", desc: \"Save hours each week and improve team productivity.\" },
          { title: \"Data Quality\", desc: \"Deduplicate, validate, and maintain trustworthy records.\" },
          { title: \"Scalable AI\", desc: \"Build automations that grow with your business needs.\" },
        ].map((f, i) => (
          <div key={i} className=\"rounded-xl border border-slate-800 bg-slate-900/50 p-6 shadow-md hover:shadow-lg transition\">
            <h3 className=\"text-xl font-semibold mb-2\">{f.title}</h3>
            <p className=\"text-slate-300 text-sm\">{f.desc}</p>
          </div>
        ))}
      </section>

      <footer className=\"mt-24 text-slate-400 text-sm\">
        <p>© {new Date().getFullYear()} TheChatGPTPro. All rights reserved.</p>
      </footer>
    </main>
  )
}