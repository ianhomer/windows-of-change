import Layout from "../components/layout";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() =>
  import("../lessons/goal").then((mod) => () => <Layout lesson={mod.lesson} />)
);

export default function Page() {
  return (
    <>
      <DynamicComponent />
    </>
  );
}
