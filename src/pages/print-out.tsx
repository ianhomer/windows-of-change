import PrintableLesson from "../components/printable-lesson";
//import windowsOfChange from "../journeys/windows-of-change";
import dynamic from "next/dynamic";
const windowsOfChange = ["goals"];

export default function Page() {
  return (
    <div className="print-out">
      X
      {windowsOfChange.map((name) => (
        <div>{name}</div>
      ))}
      {windowsOfChange.map((name) => {
        const DynamicComponent = dynamic(
          () =>
            import("../lessons/" + name)
              .then((mod) => () => <PrintableLesson lesson={mod.default} />)
              .catch(() => () => <div>Cannot find {name}</div>),
          { loading: () => () => <p>loading</p> }
        );
        return (
          <div>
            {name} {JSON.stringify(DynamicComponent)}
            <DynamicComponent />
          </div>
        );
      })}
    </div>
  );
}
