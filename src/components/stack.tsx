interface StackProps {
  layers: string[];
}

export default function Stack(props: StackProps): JSX.Element {
  return (
    <div>
      {props.layers.map((layer) => (
        <div>{layer}</div>
      ))}
    </div>
  );
}
