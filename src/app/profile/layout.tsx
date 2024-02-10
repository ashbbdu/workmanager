import React from "react";

const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div>Profile Header</div>
      {children}
      <div>Profile Footer</div>
    </div>
  );
};

export default ProfileLayout;
