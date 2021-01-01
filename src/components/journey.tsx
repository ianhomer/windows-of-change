import JourneyLink from "./journey-link";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  position: absolute;
  bottom: 0%;
`;

export default function Journey(): JSX.Element {
  return (
    <Wrapper>
      <JourneyLink name="" />
      <JourneyLink name="start" />
      <JourneyLink name="do" />
      <JourneyLink name="happiness" />
      <JourneyLink name="north-star" />
      <JourneyLink name="goals" />
      <JourneyLink name="reality-to-obvious" />
      <JourneyLink name="maps" />
      <JourneyLink name="cloudy-future" />
      <JourneyLink name="pivot" />
      <JourneyLink name="silos" />
      <JourneyLink name="guard-rails" />
      <JourneyLink name="how-to-contribute" />
      <JourneyLink name="things-change-do" />
      <JourneyLink name="trunk" />
      <JourneyLink name="tensions" />
      <JourneyLink name="me-to-org" />
      <JourneyLink name="todo" />
      <JourneyLink name="delivery-lead" />
      <JourneyLink name="product-lead" />
      <JourneyLink name="technical-lead" />
      <JourneyLink name="worth-knowing" />
      <JourneyLink name="turn-up-the-good" />
      <JourneyLink name="delete-something" />
      <JourneyLink name="wip" />
      <JourneyLink name="wrap" />
      <JourneyLink name="try/d3-force" />
      <JourneyLink name="try/board-1" />
    </Wrapper>
  );
}
