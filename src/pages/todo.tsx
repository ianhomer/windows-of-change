import Layout from "../components/layout";

const content = `
- dream dashboard - engingeering
`;

const notes = `
- planning / testing / coding / learning
- features NEW
- bug - FIX
- operational metrics - SIGNAL
- is effecting / will effect / might effect
- guardrails
- platform NEXT
- when / events
`;

export default function Page() {
  return <Layout content={content} notes={notes} />;
}
