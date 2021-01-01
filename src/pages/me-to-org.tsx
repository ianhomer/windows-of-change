import Layout from "../components/layout";

const content = `
- me -> mob -> team -> org
`;

const notes = `
- dream dask board
- context level
  - helicopter to worm
- focus / concentrate on appropriate context level
- zero in on - aim precisely at target
- what should I/we do next
`;

export default function Page() {
  return <Layout content={content} notes={notes} />;
}
