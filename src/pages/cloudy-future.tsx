import Layout from "../components/layout";

const content = `
Cloudy Future

Now

Validate Value

Distant Unclear
`;

const notes = `
- mindful and acceptance of lack of certaintity
- don't fear this
- get confidence and validation of path
- environmental impacts - things that affect us and frame what we can do
`;

export default function Page() {
  return <Layout content={content} notes={notes} />;
}
