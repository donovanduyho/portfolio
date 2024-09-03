import Link from "next/link";
import Footer from "~/components/footer";
import ProjectList from "~/components/project-list";

export default function HomePage() {
  return (
    <div className="text-sm">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold">Donovan Ho</h1>
        <Link href="/">
          <span className="text-[#808080]">Resume</span>
        </Link>
        <Link href="/">
          <span className="text-[#808080]">Project Logs</span>
        </Link>
      </div>

      <div className="mt-16 flex flex-col gap-16">
        <ProjectList category="software" />
        <ProjectList category="hardware" />
      </div>

      <Footer />
    </div>
  );
}
