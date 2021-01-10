import Layout from "../../components/layout";
import GraphDiagram from "../../components/graph-diagram";
import graphs from "../../graphs";
import { useRouter } from "next/router";
import { Graph } from "../../types/graph";
import { stringy } from "../../utils/stringish";
import styled from "styled-components";

const LinksDiv = styled.div`
  z-index: 999;
`;

export default function Page() {
  const router = useRouter();
  const gid: string = stringy(router.query["gid"] ?? "index");

  return (
    <Layout>
      {gid in graphs && <GraphDiagram graph={graphs[gid] as Graph} />}
      <LinksDiv>
        {Object.keys(graphs).map((key) => (
          <ul>
            <li>
              <a key={key} href={"/graph/" + key}>
                {key}
              </a>
            </li>
          </ul>
        ))}
      </LinksDiv>
    </Layout>
  );
}
