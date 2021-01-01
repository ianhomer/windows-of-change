import JourneyLink from "./journey-link";
import styled from "styled-components";
import windowsOfChange from "../journeys/windows-of-change";

const Wrapper = styled.div`
  display: block;
  position: absolute;
  bottom: 0%;
`;

export default function Journey(): JSX.Element {
  return (
    <Wrapper>
      {windowsOfChange.map((name) => (
        <JourneyLink name={name} />
      ))}
    </Wrapper>
  );
}
