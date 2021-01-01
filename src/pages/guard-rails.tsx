import Layout from "../components/layout";

const content = `
- danger
- empowered
- guardrails
`;

const notes = `
- diagram of guardrails - work taking place within guardrails
- protecting from danger
- safeguarding
- frame decisions that can be made autonomously / rapidly
`;

export default function Page() {
  return <Layout content={content} notes={notes} />;
}
