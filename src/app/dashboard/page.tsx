import React from "react";
import ProjectForm from "~/components/forms/project-form";
import ResumeForm from "~/components/forms/resume-form";

export default function Dashboard() {
  return (
    <div>
      <ResumeForm />
      <ProjectForm />
    </div>
  );
}
