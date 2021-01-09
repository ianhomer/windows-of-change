import Layout from "../components/layout";
import lesson from "../lessons/north-star";
import styled from "styled-components";

const Image = styled.div`
  box-shadow: 0 0 8px 8px #0e253a inset;
  background-image: url("https://bit.ly/3n6WbHX");
  background-size: 800px;
  background-repeat: no-repeat;
  width: 800px;
  height: 2000px;
  position: absolute;
  top: 5em;
  left: 20em;
`;

export default function Page() {
  return (
    <Layout notes={lesson.notes}>
      <Image />
    </Layout>
  );
}
