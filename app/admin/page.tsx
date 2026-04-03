import { supabaseAdmin } from "../../lib/supabase";

export const revalidate = 0;

type AuditRow = {
  id?: string | number;
  name?: string;
  email?: string;
  profile_url?: string;
  tier?: string;
  goal?: string;
  challenges?: string;
};

type CustomRow = {
  id?: string | number;
  name?: string;
  email?: string;
  profile_url?: string;
  budget?: number;
  request?: string;
  created_at?: string;
};

export default async function AdminDashboard() {
  let audits: AuditRow[] = [];
  let customRequests: CustomRow[] = [];
  let fetchError: string | null = null;

  try {
    const [auditsRes, customRes] = await Promise.all([
      supabaseAdmin.from("Audits").select("*"),
      supabaseAdmin.from("CustomRequests").select("*"),
    ]);

    if (auditsRes.error) fetchError = `Audits table: ${auditsRes.error.message}`;
    else if (customRes.error) fetchError = `CustomRequests table: ${customRes.error.message}`;
    else {
      audits = (auditsRes.data ?? []) as AuditRow[];
      customRequests = (customRes.data ?? []) as CustomRow[];
    }
  } catch (err: unknown) {
    fetchError = err instanceof Error ? err.message : "Unexpected server error.";
  }

  if (fetchError) {
    return (
      <div className="p-8 text-red-500 font-bold max-w-4xl mx-auto mt-20 text-center">
        Error: {fetchError}
        <br /><br />
        Check your Supabase table names and .env.local keys.
      </div>
    );
  }

  const recentAudits = [...audits].reverse();
  const recentCustom = [...customRequests].reverse();

  return (
    <div className="min-h-screen bg-[#fafafc] p-6 pt-24 sm:p-12 sm:pt-32 font-sans relative">
      {/* Top Brand Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#002eff] to-[#7c3aed]" />

      <div className="max-w-7xl mx-auto space-y-14">

        {/* ── Header ── */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[32px] sm:text-[36px] font-black tracking-tight text-[#0a0a0a] leading-none mb-2">
              Admin Dashboard
            </h1>
            <p className="text-[#555566] font-medium text-[14px]">
              Review all incoming requests in one place.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span className="h-8 px-4 rounded-full bg-white border border-[#e8e8f0] text-[#0a0a0a] text-[12px] font-bold flex items-center shadow-sm">
              Audits: {recentAudits.length}
            </span>
            <span className="h-8 px-4 rounded-full bg-white border border-[#e8e8f0] text-[#0a0a0a] text-[12px] font-bold flex items-center shadow-sm">
              Custom: {recentCustom.length}
            </span>
          </div>
        </div>

        {/* ── Audits Table ── */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[3px] bg-gradient-to-r from-[#002eff] to-[#7c3aed] rounded-full" />
            <h2 className="text-[13px] font-bold text-[#0a0a0a] tracking-wide uppercase">
              Audit Requests
            </h2>
            <span className="ml-auto text-[11px] font-semibold text-[#9999a6] bg-[#f5f5fc] border border-[#e8e8f0] px-2.5 py-1 rounded-full">
              {recentAudits.length} total
            </span>
          </div>

          <div className="bg-white rounded-2xl shadow-[0px_4px_24px_rgba(0,0,0,0.03)] border border-[#e8e8f0] overflow-hidden overflow-x-auto">
            <table className="min-w-full text-left text-[14px] whitespace-nowrap">
              <thead className="bg-[#f7f7fc] border-b border-[#e8e8f0]">
                <tr>
                  {["ID", "Name", "Email", "URL", "Tier", "Goal", "Challenges"].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-bold text-[#9999a6] tracking-[1.5px] uppercase">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e8e8f0] text-[#0a0a0a]">
                {recentAudits.map((audit, index) => (
                  <tr key={String(audit.id ?? index)} className="hover:bg-[#fcfcff] transition-colors group">
                    <td className="px-6 py-5 font-mono text-[12px] text-[#a6a6b8]">#{audit.id ?? "N/A"}</td>
                    <td className="px-6 py-5 font-bold text-[#0a0a0a] group-hover:text-[#002eff] transition-colors">{audit.name}</td>
                    <td className="px-6 py-5 text-[#555566] text-[13px]">{audit.email}</td>
                    <td className="px-6 py-5">
                      <a
                        href={audit.profile_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f5f5fc] text-[12px] font-bold text-[#555566] hover:bg-gradient-to-r hover:from-[#002eff] hover:to-[#7c3aed] hover:text-white transition-all shadow-[0_0_0_1px_#e8e8f0_inset] hover:shadow-none"
                      >
                        Visit ↗
                      </a>
                    </td>
                    <td className="px-6 py-5 capitalize">
                      <span className="px-2.5 py-1 bg-gradient-to-r from-[#002eff]/10 to-[#7c3aed]/10 text-[#7c3aed] rounded-md text-[11px] font-bold border border-[#7c3aed]/20">
                        {audit.tier}
                      </span>
                    </td>
                    <td className="px-6 py-5 capitalize font-semibold text-[#0a0a0a] text-[13px]">
                      {audit.goal?.replace("-", " ") ?? "—"}
                    </td>
                    <td className="px-6 py-5 max-w-[280px] truncate text-[#555566] text-[13px]" title={audit.challenges}>
                      {audit.challenges || "—"}
                    </td>
                  </tr>
                ))}
                {!recentAudits.length && (
                  <tr>
                    <td colSpan={7} className="px-6 py-16 text-center text-[#555566]">
                      <div className="text-[40px] mb-4 opacity-50">📭</div>
                      <div className="font-bold text-[#0a0a0a] mb-1">No audits yet</div>
                      <div className="text-[13px]">Submissions will appear here.</div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Custom Requests Table ── */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[3px] bg-gradient-to-r from-[#7c3aed] to-[#002eff] rounded-full" />
            <h2 className="text-[13px] font-bold text-[#0a0a0a] tracking-wide uppercase">
              Custom Requests
            </h2>
            <span className="ml-auto text-[11px] font-semibold text-[#9999a6] bg-[#f5f5fc] border border-[#e8e8f0] px-2.5 py-1 rounded-full">
              {recentCustom.length} total
            </span>
          </div>

          <div className="bg-white rounded-2xl shadow-[0px_4px_24px_rgba(0,0,0,0.03)] border border-[#e8e8f0] overflow-hidden overflow-x-auto">
            <table className="min-w-full text-left text-[14px] whitespace-nowrap">
              <thead className="bg-[#f7f7fc] border-b border-[#e8e8f0]">
                <tr>
                  {["ID", "Name", "Email", "Profile URL", "Budget", "Request", "Submitted"].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-bold text-[#9999a6] tracking-[1.5px] uppercase">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e8e8f0] text-[#0a0a0a]">
                {recentCustom.map((row, index) => (
                  <tr key={String(row.id ?? index)} className="hover:bg-[#fcfcff] transition-colors group">
                    <td className="px-6 py-5 font-mono text-[12px] text-[#a6a6b8]">#{row.id ?? "N/A"}</td>
                    <td className="px-6 py-5 font-bold text-[#0a0a0a] group-hover:text-[#7c3aed] transition-colors">{row.name}</td>
                    <td className="px-6 py-5 text-[#555566] text-[13px]">{row.email}</td>
                    <td className="px-6 py-5">
                      {row.profile_url ? (
                        <a
                          href={row.profile_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f5f5fc] text-[12px] font-bold text-[#555566] hover:bg-gradient-to-r hover:from-[#7c3aed] hover:to-[#002eff] hover:text-white transition-all shadow-[0_0_0_1px_#e8e8f0_inset] hover:shadow-none"
                        >
                          Visit ↗
                        </a>
                      ) : (
                        <span className="text-[#c0c0d0] text-[12px]">—</span>
                      )}
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-2.5 py-1 bg-gradient-to-r from-[#7c3aed]/10 to-[#002eff]/10 text-[#002eff] rounded-md text-[11px] font-bold border border-[#002eff]/20">
                        ₹{Number(row.budget).toLocaleString("en-IN")}
                      </span>
                    </td>
                    <td className="px-6 py-5 max-w-[320px] truncate text-[#555566] text-[13px]" title={row.request}>
                      {row.request || "—"}
                    </td>
                    <td className="px-6 py-5 text-[#9999a6] text-[12px]">
                      {row.created_at
                        ? new Date(row.created_at).toLocaleDateString("en-IN", {
                            day: "numeric", month: "short", year: "numeric",
                          })
                        : "—"}
                    </td>
                  </tr>
                ))}
                {!recentCustom.length && (
                  <tr>
                    <td colSpan={7} className="px-6 py-16 text-center text-[#555566]">
                      <div className="text-[40px] mb-4 opacity-50">💬</div>
                      <div className="font-bold text-[#0a0a0a] mb-1">No custom requests yet</div>
                      <div className="text-[13px]">Submissions will appear here.</div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
