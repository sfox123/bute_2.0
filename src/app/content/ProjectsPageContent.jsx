"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import data from "@data/projects/data.json";
import AppData from "@data/app.json";

const ProjectsMasonry = dynamic(() => import("@components/ProjectsMasonry"), {
  ssr: false,
});

function ProjectsPageContent() {
  // Display projects in descending order so newest items appear first
  const projects = [...data.projects].sort((a, b) => b.id - a.id);

  return (
    <>
      {/* Portfolio Section */}
      <section>
        <div className="container mil-p-120-120">
          <div className="mil-background-grid mil-softened" />

          <div className="mil-center">
            <p className="mil-text-lg mil-up mil-mb-90">
              Our Projects harness design and technology to create places where{" "}
              <br /> people live, work, and heal.
            </p>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <ProjectsMasonry
              projects={projects}
              categories={AppData.projects.categories}
            />
          </Suspense>
        </div>
      </section>
      {/* Portfolio Section End */}
    </>
  );
}

export default ProjectsPageContent;
