import { Lesson } from "../types/lesson";

interface PrintableLessonProps {
  lesson: Lesson;
}

export default function PrintableLesson(
  props: PrintableLessonProps
): JSX.Element {
  return <div>{props.lesson.content}</div>;
}
