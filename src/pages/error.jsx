import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-xl my-5">Terjadi kesalahan pada halaman</p>
      <p className="text-lg">{error.statusText || error.message}</p>
    </div>
  );
};

export default Error;
