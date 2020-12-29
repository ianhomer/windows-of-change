import Layout from "../components/layout";

interface BoardProps {
  title: string;
  children: any;
}

export default function Board(props: BoardProps): JSX.Element {
  return (
    <Layout title={props.title}>
      <div>start</div>
    </Layout>
  );
}
