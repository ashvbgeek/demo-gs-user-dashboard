import { NextPage } from "next";
import BasicProjectDetails from "../../../components/projects/basic-details";
import ProjectLayout from "../../../components/projects/project-layout";

const ProjectDetailsPage: NextPage = () => {
  return (
    <>
      <ProjectLayout>
        <BasicProjectDetails />
      </ProjectLayout>
    </>
  );
};

export default ProjectDetailsPage;
