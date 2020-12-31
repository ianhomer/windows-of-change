import Link from "next/link";
import styled from "styled-components";

interface JourneyLinkProps {
  name?: string;
}

const StyledLink = styled.a`
  display: block;
  float: left;
  width: 1.5em;
  height: 1.5em;
  text-align: center;
  padding: 0em;
  margin-right: 0.5em;
  border: 1px solid #000;
`;

export default function JourneyLink(props: JourneyLinkProps): JSX.Element {
  return (
    <Link href={"/" + (props?.name ?? "")}>
      <StyledLink>{props.name?.charAt(0) ?? "i"}</StyledLink>
    </Link>
  );
}
