import JourneyLink from "./journey-link";
import styled from "styled-components";
import windowsOfChange from "../journeys/windows-of-change";

interface JourneyProps {
  transition?: (direction: number) => boolean;
}

const Nexter = styled.div`
  @media (min-width: 800px) {
    display: none;
  }
  @media (max-width: 800px) {
    position: absolute;
    right: 0%;
  }
`;

const StyledLink = styled.a<{ active: boolean }>`
  display: block;
  float: left;
  text-align: center;
  padding: 0.2em;
  margin-right: 0.5em;
  border: 1px solid #fff;
`;

const Index = styled.div`
  @media (min-width: 800px) {
    display: block;
    position: absolute;
    bottom: 0%;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export default function Journey(props: JourneyProps): JSX.Element {
  return (
    <>
      <Nexter>
        <StyledLink onClick={() => props.transition(-1)}>p</StyledLink>
        <StyledLink onClick={() => props.transition(1)}>n</StyledLink>
      </Nexter>
      <Index>
        {windowsOfChange.map((name, i) => (
          <JourneyLink key={i} name={name} />
        ))}
      </Index>
    </>
  );
}
