import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import gfm from "remark-gfm";

interface QuoteProps {
  children: string;
  who: string;
}

const QuoteContainer = styled.div`
  @media (min-width: 800px) {
    padding: 4em;
    margin: 4em;
  }
`;

const Words = styled.div`
  padding: 1em;
  @media (min-width: 800px) {
    font-size: 2rem;
    max-width: 30em;
    min-height: 7em;
  }
  @media (max-width: 800px) {
    width: 90%;
  }
  border: 2px solid #fff;
  border-radius: 20px;
`;

const Who = styled.div`
  position: relative;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
  padding-top: 1em;
  z-index: 1;
  @media (min-width: 800px) {
    margin-left: 8em;
    padding-left: 6em;
    width: 40em;
  }
`;

export default function Quote(props: QuoteProps): JSX.Element {
  return (
    <QuoteContainer>
      <Words>
        <ReactMarkdown plugins={[gfm]}>{props.children}</ReactMarkdown>
      </Words>
      <Who>{props.who}</Who>
    </QuoteContainer>
  );
}
