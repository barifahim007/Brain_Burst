import { ReactNode } from "react";
import RootLayout from "../../Components/Layouts/RootLayout";

export default function HomePage() {
  return (
    <>
      <div className="container mx-auto">
        <h1>This is home page</h1>
      </div>
    </>
  );
}

HomePage.getLayout = function getLayout(page: ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
