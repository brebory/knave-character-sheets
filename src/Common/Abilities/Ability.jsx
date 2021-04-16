import { useSelector } from "react-redux";
import { EditableText, Label } from "@blueprintjs/core";

import characterState, { useAttribute } from "../../State/CharacterState";

import "./Ability.css";

export default function Ability(props) {
  const name = props.name;
  const [selector, setter] = useAttribute(name);
  const attribute = useSelector(selector);

  const handleChange = (value) =>
    value >= 0 && value <= 10
      ? characterState.dispatch(setter({ value: +value }))
      : void 0;

  return (
    <tr>
      <td className="cell" colSpan="2">
        <Label className="defense">{attribute + 10}</Label>
      </td>
      <td className="cell" colSpan="2">
        <Label className="name">{name}</Label>
      </td>
      <td className="cell">
        <EditableText
          className="ability"
          value={attribute}
          onChange={handleChange}
          type="number"
          min="0"
          max="10"
        >
          {attribute}
        </EditableText>
      </td>
    </tr>
  );
}
