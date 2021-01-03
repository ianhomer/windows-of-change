import ReactMarkdown from "react-markdown";
import styled from "styled-components";

interface QuoteProps {
  children: string;
  who: string;
}

const QuoteContainer = styled.div`
  padding: 4em;
  margin: 4em;
`;

const Words = styled.div`
  font-size: 2rem;
  padding: 1em;
  width: 30em;
  min-height: 7em;
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
  margin-left: 15em;
  padding-left: 15em;
`;

export default function Quote(props: QuoteProps): JSX.Element {
  return (
    <QuoteContainer>
      <Words>
        <ReactMarkdown>{props.children}</ReactMarkdown>
      </Words>
      <Who>{props.who}</Who>
    </QuoteContainer>
  );
}
