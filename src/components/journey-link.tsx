import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

interface JourneyLinkProps {
  name: string;
}

//  background-color: ${props => {
//    useRouter().pathname !== props.name ? '#ccc' : '#eee';
//  }};

export default function JourneyLink(props: JourneyLinkProps): JSX.Element {
  const router = useRouter();

  const StyledLink = styled.a<{ active: boolean }>`
    background-color: ${(props) => (props.active ? "#ccc" : "#eee")};
    display: block;
    float: left;
    width: 1.5em;
    height: 1.5em;
    text-align: center;
    padding: 0em;
    margin-right: 0.5em;
    border: 1px solid #000;
  `;

  const path = "/" + props.name;

  return (
    <Link href={path}>
      <StyledLink active={router.pathname == path}>
        {props.name.charAt(0)}
      </StyledLink>
    </Link>
  );
}
