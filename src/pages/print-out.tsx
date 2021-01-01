//import windowsOfChange from "../journeys/windows-of-change";
//import dynamic from "next/dynamic";
const windowsOfChange = ["goals"];

export default function Page() {
  return (
    <div className="print-out">
      X {windowsOfChange}
      {windowsOfChange.map(
        (name) => (
          <div>{name}</div>
        )
        //dynamic(() =>
        //  import("../lessons/" + name)
        //    .then((mod) => () => <div>{mod.default}</div>)
        //    .catch(() => () => <div>Cannot find {name}</div>)
        //)
      )}
    </div>
  );
}
