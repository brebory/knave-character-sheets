import { Classes, EditableText } from "@blueprintjs/core";

export default function Item(props) {
  return props.disabled ? (
    <EditableText
      disabled={props.disabled}
      className={Classes.SKELETON + " fill"}
    />
  ) : (
    <EditableText disabled={props.disabled} className="fill" />
  );
}
