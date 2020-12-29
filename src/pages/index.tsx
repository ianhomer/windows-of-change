import Layout from "../components/layout";
import Link from "next/link";

export default function Index() {
  return (
    <Layout title="Start">
      <p>Getting started ...</p>
      <Link href="/start">start</Link>
      <Link href="/board/dream">board</Link>
    </Layout>
  );
}
