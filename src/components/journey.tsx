import JourneyLink from "./journey-link";

export default function Journey(): JSX.Element {
  return (
    <>
      <JourneyLink />
      <JourneyLink name="north-star" />
      <JourneyLink name="goals" />
      <JourneyLink name="reality-to-obvious" />
      <JourneyLink name="maps" />
    </>
  );
}
