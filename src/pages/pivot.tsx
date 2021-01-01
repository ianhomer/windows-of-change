import Layout from "../components/layout";

const content = `
Pivot
`;

const notes = `
- learning decision points
- reducing inventory / wip / emotional attachment => to make pivoting less emotional
`;

export default function Page() {
  return <Layout content={content} notes={notes} />;
}
