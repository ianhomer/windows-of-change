import TextField from "@material-ui/core/TextField";

interface EditableProps {
  children: string;
}

export default function Editable(props: EditableProps): JSX.Element {
  return (
    <TextField
      multiline
      fullWidth
      variant="outlined"
      defaultValue={props.children}
    />
  );
}
