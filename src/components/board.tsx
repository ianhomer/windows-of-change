
interface BoardProps {
  title: string;
  children: any;
}

export default function Board(props: BoardProps): JSX.Element {
  return (
    <>
      <div>board component : {props.title}</div>
    </>
  );
}
