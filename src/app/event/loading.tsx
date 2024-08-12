import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col items-center  gap-y-4 pt-28 animate-pulse">
      <Skeleton classes="h-4" />
      <Skeleton classes="h-4 w-[400px]" />
      <Skeleton classes="h-4 w-[430px]" />
    </div>
  );
}
