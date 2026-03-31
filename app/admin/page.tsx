import { supabaseAdmin } from "../../lib/supabase";

export const revalidate = 0; // Disable static caching so it always fetches fresh data

export default async function AdminDashboard() {
  const { data: audits, error } = await supabaseAdmin
    .from("Audits")
    .select("*");

  if (error) {
    return (
      <div className="p-8 text-red-500 font-bold max-w-4xl mx-auto mt-20 text-center">
        Error fetching data: {error.message}. 
        <br/><br/>
        Please check if SUPABASE_SERVICE_ROLE_KEY is perfectly correct in your .env.local file!
      </div>
    );
  }

  // Fallback sort if `created_at` or `id` column names are different or missing
  const recentAudits = audits?.reverse() || [];

  return (
    <div className="min-h-screen bg-[#fafafc] p-6 pt-24 sm:p-12 sm:pt-32 font-sans relative">
      {/* Top Brand Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#002eff] to-[#7c3aed]" />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-[32px] sm:text-[36px] font-black tracking-tight text-[#0a0a0a] leading-none mb-2">
              Admin Dashboard
            </h1>
            <p className="text-[#555566] font-medium text-[14px]">
              Review incoming audit requests smoothly.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span className="h-8 px-4 rounded-full bg-white border border-[#e8e8f0] text-[#0a0a0a] text-[12px] font-bold flex items-center shadow-sm">
              Total Audits: {recentAudits.length}
            </span>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-[0px_4px_24px_rgba(0,0,0,0.03)] border border-[#e8e8f0] overflow-hidden overflow-x-auto relative z-10">
          <table className="min-w-full text-left text-[14px] whitespace-nowrap">
            <thead className="bg-[#f7f7fc] border-b border-[#e8e8f0]">
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold text-[#9999a6] tracking-[1.5px] uppercase">ID</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[#9999a6] tracking-[1.5px] uppercase">Name</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[#9999a6] tracking-[1.5px] uppercase">Email</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[#9999a6] tracking-[1.5px] uppercase">URL</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[#9999a6] tracking-[1.5px] uppercase">Tier</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[#9999a6] tracking-[1.5px] uppercase">Goal</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[#9999a6] tracking-[1.5px] uppercase">Challenges</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e8e8f0] text-[#0a0a0a]">
              {recentAudits.map((audit, index) => (
                <tr key={audit.id || index} className="hover:bg-[#fcfcff] transition-colors group">
                  <td className="px-6 py-5 font-mono text-[12px] text-[#a6a6b8]">#{audit.id || "N/A"}</td>
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
                  <td className="px-6 py-5 capitalize font-semibold text-[#0a0a0a] text-[13px]">{audit.goal.replace("-", " ")}</td>
                  <td className="px-6 py-5 max-w-[280px] truncate text-[#555566] text-[13px]" title={audit.challenges}>
                    {audit.challenges || "No challenges listed"}
                  </td>
                </tr>
              ))}
              {!recentAudits.length && (
                <tr>
                  <td colSpan={7} className="px-6 py-16 text-center text-[#555566]">
                    <div className="text-[40px] mb-4 opacity-50">📭</div>
                    <div className="font-bold text-[#0a0a0a] mb-1">No audits received yet</div>
                    <div className="text-[13px]">When users submit the form, they will appear here.</div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
