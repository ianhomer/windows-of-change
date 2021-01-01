import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px dashed #000;
  margin: 0.5em;
  padding: 0.5em;
`;

interface PrintableLessonNotFoundProps {
  name: string;
}

export default function PrintableLessonNotFound(
  props: PrintableLessonNotFoundProps
): JSX.Element {
  return (
    <Wrapper>
      <h2>{props.name}</h2>
    </Wrapper>
  );
}
