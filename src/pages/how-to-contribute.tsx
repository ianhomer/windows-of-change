import Layout from "../components/layout";

const content = `
- maturity model on how easy it is to contribute to do work
- how to contribute
- how to make change
- quick dev & test loop
`;

const notes = `
- what does perfect local dev look like
- dream set up
`;

export default function Page() {
  return <Layout content={content} notes={notes} />;
}
