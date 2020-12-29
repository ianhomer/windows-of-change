import Link from "next/link";

interface JourneyLinkProps {
  name?: string;
}

export default function JourneyLink(props: JourneyLinkProps): JSX.Element {
  return <Link href={"/" + (props?.name ?? "")}>x</Link>;
}
