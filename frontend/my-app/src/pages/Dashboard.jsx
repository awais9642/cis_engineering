import "./Dashboard.css";

/* ── Static Data ── */
const orders = [
  {
    id: "PO-2024-0041",
    company: "Al Fardan Aluminium LLC",
    product: "Aluminium Composite Panels — 6mm",
    amount: "Rs. 4,20,000",
    date: "28 Apr 2024",
    stage: 4,
    statusLabel: "Delivery",
    statusClass: "badge-blue",
  },
  {
    id: "PO-2024-0040",
    company: "Noor Glass & Structures",
    product: "Tempered Glass 12mm — 200 sheets",
    amount: "Rs. 2,50,000",
    date: "25 Apr 2024",
    stage: 6,
    statusLabel: "Invoiced",
    statusClass: "badge-green",
  },
  {
    id: "PO-2024-0039",
    company: "Dubai Fix Technical Services",
    product: "Spider Fittings & Clamps",
    amount: "Rs. 98,500",
    date: "22 Apr 2024",
    stage: 5,
    statusLabel: "GRN Pending",
    statusClass: "badge-amber",
  },
  {
    id: "QT-2024-0038",
    company: "Horizon Facades LLC",
    product: "Structural Silicone — 500 units",
    amount: "Rs. 1,75,000",
    date: "20 Apr 2024",
    stage: 2,
    statusLabel: "Quotation",
    statusClass: "badge-blue",
  },
  {
    id: "INQ-2024-0037",
    company: "Emirates Glass Works",
    product: "Float Glass 8mm — 300 sheets",
    amount: "—",
    date: "18 Apr 2024",
    stage: 1,
    statusLabel: "Inquiry",
    statusClass: "badge-muted",
  },
];

const STEPS = ["Inquiry", "Quotation", "PO", "DC", "GRN", "Invoice"];

const activity = [
  { color: "#00c2a8", text: <><strong>GRN signed</strong> by Dubai Fix Technical Services</>, time: "2 hours ago" },
  { color: "#3b82f6", text: <><strong>Quotation QT-2024-0038</strong> sent to Horizon Facades</>, time: "5 hours ago" },
  { color: "#00c2a8", text: <><strong>DC-2024-0041</strong> generated — 200 panels dispatched</>, time: "Yesterday, 3:40 PM" },
  { color: "#00c2a8", text: <><strong>Invoice INV-2024-0040</strong> raised — Rs. 2,50,000</>, time: "Yesterday, 11:00 AM" },
  { color: "#e8a020", text: <><strong>Payment overdue</strong> on INV-2024-0033 — Skyline</>, time: "2 days ago" },
];

const pending = [
  { doc: "GRN — DC-2024-0039", desc: "Dubai Fix Technical Services", action: "Mark Received", color: "#e8a020" },
  { doc: "Invoice — PO-2024-0041", desc: "Al Fardan Aluminium LLC", action: "Raise Invoice", color: "#00c2a8" },
  { doc: "Quotation — INQ-2024-0037", desc: "Emirates Glass Works", action: "Send Quote", color: "#3b82f6" },
];

/* ── Row Pipeline ── */
const RowPipeline = ({ stage }) => (
  <div className="row-pipeline">
    {STEPS.map((s, i) => (
      <div key={s} style={{ display: "flex", alignItems: "center" }}>
        <div
          className={`dot ${i + 1 < stage ? "done" : i + 1 === stage ? "active" : ""}`}
          title={s}
        />
        {i < STEPS.length - 1 && (
          <div className={`dot-line ${i + 1 < stage ? "done" : ""}`} />
        )}
      </div>
    ))}
  </div>
);

/* ── Nav Item ── */
const NavItem = ({ icon, label, active, badge }) => (
  <button className={`nav-item ${active ? "active" : ""}`}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {icon}
    </svg>
    {label}
    {badge && <span className="nav-badge">{badge}</span>}
  </button>
);

/* ── Dashboard ── */
const Dashboard = () => {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-mark">
            <svg viewBox="0 0 24 24">
              <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <div>
            <div className="logo-text">CIS <span>ENGINEERING</span></div>
          </div>
        </div>

        <div className="nav-group">
          <div className="nav-group-label">Main</div>
          <NavItem active label="Dashboard" icon={<><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>} />
          <NavItem label="Inquiries" badge="2" icon={<><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>} />
          <NavItem label="Quotations" icon={<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>} />
          <NavItem label="Purchase Orders" badge="3" icon={<><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></>} />
        </div>

        <div className="nav-group">
          <div className="nav-group-label">Logistics</div>
          <NavItem label="Delivery Challans" icon={<><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 6v4h-7V8z"/><circle cx="5.5" cy="18.5" r="1.5"/><circle cx="18.5" cy="18.5" r="1.5"/></>} />
          <NavItem label="GRN" badge="1" icon={<><polyline points="20 6 9 17 4 12"/></>} />
          <NavItem label="Invoices" icon={<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></>} />
        </div>

        <div className="nav-group">
          <div className="nav-group-label">Reports</div>
          <NavItem label="Customers" icon={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></>} />
          <NavItem label="Analytics" icon={<><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>} />
        </div>

        <div className="sidebar-footer">
          <div className="user-avatar">AW</div>
          <div>
            <div className="user-name">Awais</div>
            <div className="user-role">Admin</div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="main">

        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Operations Dashboard</h1>
          <p className="page-sub">CIS Engineering — Document Pipeline Overview</p>
        </div>

        {/* Stats */}
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-label">Active Orders</div>
            <div className="stat-value">14</div>
            <div className="stat-meta up">↑ 3 this week</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Pending GRN</div>
            <div className="stat-value">3</div>
            <div className="stat-meta warn">Needs action</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Revenue (Apr)</div>
            <div className="stat-value">Rs. 18.2L</div>
            <div className="stat-meta up">↑ 12% vs Mar</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Open Invoices</div>
            <div className="stat-value">5</div>
            <div className="stat-meta warn">Rs. 6.4L pending</div>
          </div>
        </div>

        {/* Pipeline */}
        <div className="section-title">Document Pipeline</div>
        <div className="pipeline-card">
          {STEPS.map((step, i) => (
            <div key={step} style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? 1 : "none" }}>
              <div className="pipeline-step">
                <div className={`step-circle ${i < 3 ? "done" : i === 3 ? "active" : ""}`}>
                  {i < 3 ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <div className={`step-label ${i < 3 ? "done" : i === 3 ? "active" : ""}`}>{step}</div>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`step-connector ${i < 3 ? "done" : ""}`} />
              )}
            </div>
          ))}
        </div>

        {/* Orders Table */}
        <div className="table-card">
          <div className="table-card-header">
            <div className="section-title">Recent Orders</div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button className="btn btn-ghost">Export</button>
              <button className="btn btn-primary">+ New Inquiry</button>
            </div>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Stage</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td><span className="doc-id">{o.id}</span></td>
                  <td><span className="company-name">{o.company}</span></td>
                  <td style={{ color: "var(--muted)", fontSize: "13px" }}>{o.product}</td>
                  <td><span className="amount">{o.amount}</span></td>
                  <td style={{ color: "var(--muted)", fontSize: "13px" }}>{o.date}</td>
                  <td><RowPipeline stage={o.stage} /></td>
                  <td><span className={`badge ${o.statusClass}`}>{o.statusLabel}</span></td>
                  <td><a className="action-link">View →</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Activity + Pending */}
        <div className="two-col">
          <div className="list-card">
            <div className="list-card-header">
              <div className="section-title">Recent Activity</div>
            </div>
            {activity.map((a, i) => (
              <div className="activity-item" key={i}>
                <div className="activity-dot" style={{ background: a.color }} />
                <div>
                  <div className="activity-text">{a.text}</div>
                  <div className="activity-time">{a.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="list-card">
            <div className="list-card-header">
              <div className="section-title">Pending Actions</div>
            </div>
            {pending.map((p, i) => (
              <div className="pending-item" key={i}>
                <div>
                  <div className="pending-doc">{p.doc}</div>
                  <div className="pending-desc">{p.desc}</div>
                </div>
                <button
                  className="pending-btn"
                  style={{ color: p.color, borderColor: p.color + "44" }}
                >
                  {p.action}
                </button>
              </div>
            ))}
            <div className="pending-item" style={{ justifyContent: "center" }}>
              <a className="action-link">View all →</a>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;