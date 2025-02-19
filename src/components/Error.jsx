import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex bg-black items-center justify-center w-screen h-screen flex-col flex-wrap">
      <h1 className="font-bold text-2xl text-red-500 m-auto p-10 text-center">
        DEMNNNN!!! THIS PAGE DOES&apos;t EXIST
        <h3 className="text-center">🥺</h3>
        <h3 className="text-center">{err.status}</h3>
        <h3 className="text-center">{err.error.message}</h3>
      </h1>
    </div>
  );
}

export default Error;
