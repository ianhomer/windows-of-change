import Layout from "../components/layout";

const content = `
- goals
- work
- change
- things change
`;

const notes = `
- breaking down changes
- sequencing changes
`;

export default function Page() {
  return <Layout content={content} notes={notes} />;
}
