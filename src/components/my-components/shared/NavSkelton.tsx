import { Skeleton } from "../../ui/skeleton";

function NavSkelton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-8 w-20 rounded-pill" />
      <Skeleton className="h-8 w-20 rounded-pill" />
      <Skeleton className="h-8 w-20 rounded-pill" />
    </div>
  );
}

export default NavSkelton;
