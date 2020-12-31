interface ToggleProps {
  checked: boolean;
  onChange: () => void;
}

export default function Toggle(props: ToggleProps): JSX.Element {
  return (
    <div>
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        checked={props.checked}
        onChange={() => props.onChange()}
      />
    </div>
  );
}
