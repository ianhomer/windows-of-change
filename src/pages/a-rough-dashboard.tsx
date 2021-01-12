import Layout from "../components/layout";
import Image from "next/image";

export default function Page() {
  return (
    <Layout title="When I asked an audience ...">
      <Image
        src="/a-dream-dashboard.png"
        layout="fixed"
        width="1022"
        height="636"
      />
    </Layout>
  );
}
