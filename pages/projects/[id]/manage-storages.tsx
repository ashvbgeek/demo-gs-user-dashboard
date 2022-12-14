import { NextPage } from "next";
import BasicProjectDetails from "../../../components/projects/basic-details";
import ManageStorages from "../../../components/projects/manage-storage";
import ProjectLayout from "../../../components/projects/project-layout";

const ProjectDetailsPage: NextPage = () => {
  return (
    <>
      <ManageStorages />
    </>
  );
};

export default ProjectDetailsPage;
