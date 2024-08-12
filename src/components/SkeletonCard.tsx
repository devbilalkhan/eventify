import Skeleton from "./Skeleton";

type SkeletonCardProps = {};

function SkeletonCard(props: SkeletonCardProps) {
  return (
    <div className="space-y-6 max-w-[300px]">
      <Skeleton classes="h-12 w-12 rounded-full" />
      <Skeleton classes="h-4 w-[250px]" />
      <Skeleton classes="h-4 w-[150px]" />
    </div>
  );
}

export default SkeletonCard;
