import Layout from "../components/layout";

const content = `
- silos
- mulitple streams of work
- peer reviews
- knowledge share
`;

const notes = `
- diagram of multiple streams of work + inter-coordination
- how siloing creates extra work to do
  - to compensate misalignment
- waste
`;

export default function Page() {
  return <Layout content={content} notes={notes} />;
}
