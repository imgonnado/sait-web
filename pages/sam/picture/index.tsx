import { ReactElement } from "react";

import CommonLayout from "../../../src/components/Layout/CommonLayout";
import PictureUpload from "../../../src/components/Picture/PictureUpload";
import PictureUploadList from "../../../src/components/Picture/PictureUploadList";

function Index() {
  return (
    <>
      <PictureUpload />
      <PictureUploadList />
    </>
  );
}

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return <CommonLayout header={false}>{page}</CommonLayout>;
};
