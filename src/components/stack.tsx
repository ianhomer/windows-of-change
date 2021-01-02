import styled from "styled-components";

interface StackProps {
  layers: Record<"name" | "scale", string>[];
  properties: string[];
}

const Layer = styled.div`
  display: flex;
  align-items: stretch;
  width: 30em;
  padding: 0em;
  margin: 0em;
`;

const Property = styled.div<{ count: number }>`
  border-radius: 0.5em;
  border: 1px solid #fff;
  padding: 1em;
  margin: 1em;
  width: ${(props) => {
    return 100 / props.count;
  }}%;
`;

export default function Stack(props: StackProps): JSX.Element {
  const properties = props.properties ?? ["name"];
  return (
    <div>
      {props.layers.map((layer) => (
        <Layer>
          {properties.map((property) => {
            return (
              !!layer[property] && (
                <Property count={properties.length}>{layer[property]}</Property>
              )
            );
          })}
        </Layer>
      ))}
    </div>
  );
}
