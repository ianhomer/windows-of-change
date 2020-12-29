import Link from "next/link";

interface JourneyLinkProps {
  name?: string;
}

export default function JourneyLink(props: JourneyLinkProps): JSX.Element {
  return (
    <Link href={"/" + (props?.name ?? "")}>{props.name?.charAt(0) ?? "i"}</Link>
  );
}
