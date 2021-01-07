import Layout from "../components/layout";
import lesson from "../lessons/north-star";
import styled from "styled-components";

const Image = styled.img`
  border: 1px solid #999;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (max-width: 800px) {
    width: 90%;
  }

  width: 800px;
`;

export default function Page() {
  return (
    <Layout notes={lesson.notes}>
      <Image src="https://bit.ly/3n6WbHX" />
    </Layout>
  );
}
