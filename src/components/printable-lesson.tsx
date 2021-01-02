import { Lesson } from "../types/lesson";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const Wrapper = styled.div`
  border: 1px solid #000;
  margin: 0.5em;
  padding: 0.5em;
`;

const Notes = styled.div`
  border: 1px dotted #666;
  margin: 0.5em;
  padding: 0.5em;
`;

const Image = styled.img`
  border: 1px solid #999;
  float: right;
`;

interface PrintableLessonProps {
  name: string;
  lesson: Lesson;
}

export default function PrintableLesson(
  props: PrintableLessonProps
): JSX.Element {
  return (
    <Wrapper>
      <h2>{props.name}</h2>
      {props.lesson?.content && (
        <ReactMarkdown children={props.lesson.content} />
      )}
      {props.lesson?.notes && (
        <Notes>
          <ReactMarkdown children={props.lesson.notes} />
        </Notes>
      )}
      {props.lesson?.assets &&
        props.lesson.assets.map((asset) => (
          <Image width={asset.width} src={asset.url} />
        ))}
    </Wrapper>
  );
}
