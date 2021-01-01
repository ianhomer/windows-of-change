import PrintableLesson from "../components/printable-lesson";
import PrintableLessonNotFound from "../components/printable-lesson-not-found";
import windowsOfChange from "../journeys/windows-of-change";
import dynamic from "next/dynamic";

export default function Page() {
  return (
    <div className="print-out">
      {windowsOfChange.map((name) => {
        const DynamicComponent = dynamic(
          () =>
            import("../lessons/" + name)
              .then((mod) => () => (
                <PrintableLesson name={name} lesson={mod.default} />
              ))
              .catch(() => () => <PrintableLessonNotFound name={name} />),
          { loading: () => <p>loading</p> }
        );
        return (
          <div>
            <DynamicComponent />
          </div>
        );
      })}
    </div>
  );
}
