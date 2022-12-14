import { NextPage } from "next";
import BasicProjectDetails from "../../../components/projects/basic-details";
import ManageDatabases from "../../../components/projects/manage-databases";
import ProjectLayout from "../../../components/projects/project-layout";

const ManageDatabasesPage: NextPage = () => {
  return (
    <>
      <ManageDatabases />
    </>
  );
};

export default ManageDatabasesPage;
