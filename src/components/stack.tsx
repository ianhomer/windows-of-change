import styled from "styled-components";

interface StackProps {
  layers: { [key: string]: string }[];
  sky?: string;
  ground?: string;
  properties?: string[];
}

const Layer = styled.div`
  display: flex;
  align-items: stretch;
  width: 60em;
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
Property.defaultProps = { count: 1 };

const EmptyProperty = styled.div<{ count: number }>`
  border: 1px solid auto;
  padding: 1em;
  margin: 1em;
  width: ${(props) => {
    return 100 / props.count;
  }}%;
`;

EmptyProperty.defaultProps = { count: 1 };

const Bound = styled.div`
  text-align: center;
`;

export default function Stack(props: StackProps): JSX.Element {
  const properties = props.properties ?? ["name"];
  return (
    <div>
      <Bound>{props.sky ?? "sky"}</Bound>
      {props.layers.map((layer) => (
        <Layer>
          {properties.map((property) => {
            return property in layer ? (
              <Property count={properties.length}>{layer[property]}</Property>
            ) : (
              <EmptyProperty count={properties.length} />
            );
          })}
        </Layer>
      ))}
      <Bound>{props.ground ?? "ground"}</Bound>
    </div>
  );
}
