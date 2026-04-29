import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-[#07070e] min-h-screen pt-[68px]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-20">
          <header className="mb-10 pb-8 border-b border-[#e8e8f0] dark:border-[#242440]">
            <p className="text-[11px] font-semibold text-[#9999a6] dark:text-[#6060a0] tracking-[2px] uppercase mb-3">
              Legal
            </p>
            <h1 className="font-black text-[32px] sm:text-[42px] tracking-[-1px] text-[#0a0a0a] dark:text-[#eeeeff] leading-tight mb-3">
              {title}
            </h1>
            <p className="text-[13px] text-[#555566] dark:text-[#8888bb]">
              Last updated: {lastUpdated}
            </p>
          </header>
          <article className="legal-prose text-[15px] leading-[26px] text-[#333344] dark:text-[#b0b0d0]">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
