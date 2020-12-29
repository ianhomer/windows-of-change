import Layout from "../components/layout";

const content = `
- goals
- work
- change
- things change
`;

export default function Page() {
  return <Layout title="Goals" content={content} />;
}
