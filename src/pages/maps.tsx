import Layout from "../components/layout";

const content = `
- roadmaps
- Wardley maps
- [Cynefin](https://en.wikipedia.org/wiki/Cynefin_framework)
`;

const notes = `
- picture of ships wheel
- cloudiness
- thinking in bets
- dangers of resultig
- show how maps guide us
`;

export default function Page() {
  return <Layout content={content} notes={notes} />;
}
