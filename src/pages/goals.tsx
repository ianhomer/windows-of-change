import Layout from "../components/layout";
import lesson from "../lessons/goals";
//import dynamic from "next/dynamic";

//const DynamicComponent = dynamic(() =>
//import("../lessons/goals").then((mod) => () => (
//<Layout lesson={mod.default} />
//))
//);

export default function Page() {
  return <Layout lesson={lesson} />;
}
