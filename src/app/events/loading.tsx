import Skeleton from "@/components/Skeleton";
import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <div className="flex flex-wrap max-w-[1100px] justify-center mx-auto gap-20 animate-pulse px-[20px] py-24">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
