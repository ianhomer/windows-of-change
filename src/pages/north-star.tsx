import Layout from "../components/layout";
import lesson from "../lessons/north-star";
import styled from "styled-components";

const Image = styled.img`
  border: 1px solid #999;
`;

export default function Page() {
  return (
    <Layout notes={lesson.notes}>
      <Image width={800} src="https://bit.ly/3n6WbHX" />
    </Layout>
  );
}
