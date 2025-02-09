import Greet from "../components/auth/Greet";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-2 lg:col-span-1">
        <Greet />
      </div>
      <div>
        <div className="bg-[url(https://i.ibb.co/kgmX9Pzz/fo-background.webp)] bg-cover bg-center h-screen hidden lg:block"></div>
      </div>
    </div>
  );
};

export default LoginPage;
