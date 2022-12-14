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
        ]}
        project={{
          name: "gluestack project",
          desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quia eligendi corporis nostrum reprehenderit repudiandae, enim
              consequuntur nobis veniam sequi ipsum, placeat porro quae beatae
              sit dolor perspiciatis ratione quam.`,
        }}
        page={{
          title: "Edit gluestack project",
          desc: "Edit basic details of the project name, description",
        }}
      >
        <BasicProjectDetails />
      </ProjectLayout>
    </>
  );
};

export default ProjectDetailsPage;
