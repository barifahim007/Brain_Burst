import { ReactNode } from "react";

const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <div>Footer</div>
    </div>
  );
};

export default RootLayout;
