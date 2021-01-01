import Layout from "../components/layout";

const content = `
North Star
`;

const notes = `
- zoom in
- show layers north star -> task
- timescales
- focus
`;

export default function Page() {
  return <Layout content={content} notes={notes} />;
}
