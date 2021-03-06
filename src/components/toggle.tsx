interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function Toggle(props: ToggleProps): JSX.Element {
  return (
    <div style={{ zIndex: 9 }}>
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        checked={props.checked}
        onChange={(event) => {
          props.onChange(event.target.checked);
        }}
      />
    </div>
  );
}
