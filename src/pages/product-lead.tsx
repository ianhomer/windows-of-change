import Layout from "../components/layout";

const content = `
- design (service / UX)
- do we know what we want?
- what will we do next?
- do we know what we have?
`;

export default function Page() {
  return <Layout content={content} />;
}
