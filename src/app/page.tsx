import Footer from "~/components/footer";
import Header from "~/components/header";
import ProjectList from "~/components/project-list";

export default function HomePage() {
  return (
    <div className="text-sm">
      <Header />

      <div className="mt-16 flex flex-col gap-16">
        <ProjectList category="software" />
        <ProjectList category="hardware" />
      </div>

      <Footer />
    </div>
  );
}
