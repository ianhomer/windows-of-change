import Layout from "../components/layout";

const content = `
1. Reality (The Unknowable)
2. Experience
3. Attention
4. Theories
5. Judgments
6. Beliefs
7. The Obvious

We **experience** a lens onto **reality**. Some of this we pay **attention** to
and create **theories** that allow us to **judge** what we have seen to form our
**beliefs** leading us to what we think is **obvious**.

thx Woody Zuill
`;

export default function Page() {
  return <Layout title="From Reality to Obvious" content={content} />;
}
