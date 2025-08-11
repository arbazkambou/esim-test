import { Spinner } from "./Spinner";

function PageLoading() {
  return (
    <div className="flex h-[80vh] w-full items-center justify-center">
      <Spinner />
    </div>
  );
}

export default PageLoading;
