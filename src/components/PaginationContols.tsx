import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationContolsProps = {
  prevPath: string;
  nextPath: string;
};

type LinkProps = {
  direction: string;
  path: string;
};
function PaginationContols(props: PaginationContolsProps) {
  const { prevPath, nextPath } = props;
  return (
    <section className="flex justify-between w-full my-4">
      {prevPath !== "" ? (
        <LinkComponent path={prevPath} direction="prev" />
      ) : (
        <div />
      )}
      {nextPath !== "" ? (
        <LinkComponent path={nextPath} direction="next" />
      ) : (
        <div />
      )}
    </section>
  );
}

function LinkComponent(props: LinkProps) {
  return (
    <Link
      className="text-white px-5 py-3 bg-white/5 rounded-lg flex items-center 
      gap-x-1 opacity-75 hover:bg-white/10"
      href={props.path}
    >
      {props.direction === "prev" && (
        <>
          <ArrowLeftIcon /> {props.direction}{" "}
        </>
      )}
      {props.direction === "next" && (
        <>
          {props.direction}
          <ArrowRightIcon />
        </>
      )}
    </Link>
  );
}

export default PaginationContols;
