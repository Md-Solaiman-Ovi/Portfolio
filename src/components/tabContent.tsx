import React from "react";

const TabContent = ({
  isActive,
  children,
}: {
  isActive: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className={`${isActive ? "block" : "hidden"} w-full text-white`}>
      {children}
    </div>
  );
};

export default TabContent;
