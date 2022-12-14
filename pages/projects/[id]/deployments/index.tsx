import { NextPage } from "next";
import BasicProjectDetails from "../../../../components/projects/basic-details";
import DeploymentsPage from "../../../../components/projects/deplyments";
import ManageDatabases from "../../../../components/projects/manage-databases";
import ProjectLayout from "../../../../components/projects/project-layout";

const ManageDatabasesPage: NextPage = () => {
  return (
    <>
      <DeploymentsPage />
    </>
  );
};

export default ManageDatabasesPage;
