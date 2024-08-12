import { cn } from '@/lib/utils';

type SkeletonProps = {
  classes?: string
}
export default function Skeleton({classes}: SkeletonProps) {
  return <div className={cn("h-4 w-[550px] rounded-md bg-white/5", classes)}></div>;
}
