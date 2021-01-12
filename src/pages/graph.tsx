import Layout from "../components/layout";

export default function Page() {
  const content = `
- [More Graphs](/graph/single)
`;
  return (
    <Layout
      title="Playground"
      background="https://live.staticflickr.com/4877/45885658845_cfe291fae2_k.jpg"
      content={content}
    />
  );
}
