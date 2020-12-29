import Board from "../../components/board";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import stringy from "../../utils/stringy";

export default function Index() {
  const router = useRouter();
  const { bid } = router.query;

  return (
    <Layout title="Board">
      <Board title={stringy(bid)}>
        <div>board content</div>
      </Board>
    </Layout>
  );
}
