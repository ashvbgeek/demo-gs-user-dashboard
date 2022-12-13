import { NextPage } from "next";
import BasicProjectDetails from "../../../components/projects/basic-details";
import ProjectLayout from "../../../components/projects/project-layout";

const ProjectDetailsPage: NextPage = () => {
  return (
    <>
      <ProjectLayout
        breadcrumbs={[
          {
            name: "Home",
            to: "/",
          },
          {
            name: "Projects",
            to: "/projects",
          },
          {
            name: "gluestack",
            to: "/projects/22",
          },
          {
            name: "Manage Storage",
            to: "/projects/22/manage-storages",
          },
        ]}
        project={{
          name: "gluestack project",
          desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quia eligendi corporis nostrum reprehenderit repudiandae, enim
              consequuntur nobis veniam sequi ipsum, placeat porro quae beatae
              sit dolor perspiciatis ratione quam.`,
        }}
        page={{
          title: "Manage Storage",
          desc: "Create, update, delete database for the project",
        }}
      >
        <BasicProjectDetails />
      </ProjectLayout>
    </>
  );
};

export default ProjectDetailsPage;
