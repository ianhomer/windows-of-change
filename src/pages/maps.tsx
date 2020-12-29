import Layout from "../components/layout";

const content = `
- roadmaps
- Wardley maps
- [Cynefin](https://en.wikipedia.org/wiki/Cynefin_framework)
`;

export default function Page() {
  return <Layout title="Maps" content={content} />;
}

