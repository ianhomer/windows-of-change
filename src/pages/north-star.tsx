import Layout from "../components/layout";

const content = `
North Star
`;

const notes = `
- zoom in
- show layers north star -> task
- timescales
- focus
- how do you know what you've done is good?
- how do you know when your decision was a good one?
- did you just get lucky?
- were you just unlucky?
`;

export default function Page() {
  return <Layout content={content} notes={notes} />;
}
