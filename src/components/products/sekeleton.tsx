import { Skeleton } from "../ui/skeleton";

export const TabsSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-full h-10 rounded-xl" />

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 ">
        {Array.from({ length: 6 }, (item, index) => (
          <div key={index}>
            <Skeleton className="w-full h-32 rounded-xl" />
            <Skeleton className="w-full mt-2 h-7 rounded-xl" />
            <Skeleton className="mt-2 w-16 h-5 rounded-xl" />
            <Skeleton className="w-full mt-2 h-9 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};
