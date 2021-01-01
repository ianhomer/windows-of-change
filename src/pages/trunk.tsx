import Layout from "../components/layout";

const content = `
- maturity model
- trunk based development
- golden metrics -> production change
- rock solid CI
- TDD / BDD
- Dream change flow
`;

const notes = `
- NFR assertions
- Value of assertions - how effective at raising quality
- What does quality look like?
`;

export default function Page() {
  return <Layout content={content} notes={notes} />;
}
