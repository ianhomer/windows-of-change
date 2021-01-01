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
        dynamic(() => {
          import("../lessons/" + name)
            .then(() => <div>X{name}</div>)
            .catch(() => <div>Cannot find {name}</div>),
            { loading: () => <p>loading</p> };
        });
        return <div>{name}</div>;
      })}
    </div>
  );
}
