import { ReactNode } from "react";
import RootLayout from "../../Components/Layouts/RootLayout";

export default function AboutPage() {
  return (
    <div className="container mx-auto">
      <h1>This is about</h1>
    </div>
  );
}

AboutPage.getLayout = function getLayout(page: ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
