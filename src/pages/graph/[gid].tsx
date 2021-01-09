import Layout from "../../components/layout";
import GraphDiagram from "../../components/graph-diagram";
import graphs from "../../graphs";
import { useRouter } from "next/router";
import { Graph } from "../../types/graph";
import { stringy } from "../../utils/stringish";

export default function Page() {
  const router = useRouter();
  const gid: string = stringy(router.query["gid"] ?? "index");

  return (
    <Layout>
      {gid != "index" && (
        <GraphDiagram graph={graphs[gid] as Graph} className="inline" />
      )}
      <div>
        {Object.keys(graphs).map((key) => (
          <a key={key} href={"/graph/" + key}>
            {key}
          </a>
        ))}
      </div>
    </Layout>
  );
}
