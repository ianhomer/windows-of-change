import Layout from "../components/layout";
import Image from "next/image";

export default function Page() {
  return (
    <Layout>
      <p>
        When I asked the audience ... on a random mobbing call ... the audience
        said ...
      </p>
      <Image
        src="/a-dream-dashboard.png"
        layout="fixed"
        width="1022"
        height="636"
      />
    </Layout>
  );
}
