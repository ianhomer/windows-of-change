import Board from "../../components/board";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import stringish from "../../utils/stringish";

export default function Index() {
  const router = useRouter();
  const { bid } = router.query;

  return (
    <Layout title="Board">
      <Board title={stringish(bid ?? "not-set")}>
        <div>board content</div>
      </Board>
    </Layout>
  );
}
