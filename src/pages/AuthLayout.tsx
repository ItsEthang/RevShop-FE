import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-2 lg:col-span-1">
        <Outlet />
      </div>
      <div>
        <div className="bg-[url(https://i.ibb.co/kgmX9Pzz/fo-background.webp)] bg-cover bg-center h-screen hidden lg:block"></div>
      </div>
    </div>
  );
};

export default Layout;
