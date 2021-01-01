import Layout from "../components/layout";
import { lesson } from "../lessons/goal";

//const lesson = import('../lessons/goal').then(mod => mod.lesson)

export default function Page() {
  return <Layout lesson={lesson} />;
}
