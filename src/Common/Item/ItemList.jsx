import { Card } from "@blueprintjs/core";
import { useSelector } from "react-redux";

import Item from "./Item";
import { useAttribute } from "../../State/CharacterState";

import "./ItemList.css";

const renderEnabledSlots = (slots) =>
  Array(Math.ceil(slots / 2))
    .fill(null)
    .map((_, index) => (
      <tr key={index} height="10%">
        <td>
          <Item />
        </td>
        <td>{index * 2 + 1 < slots ? <Item /> : <Item disabled={true} />}</td>
      </tr>
    ));

const renderDisabledSlots = (slots) =>
  Array(Math.floor((20 - slots) / 2))
    .fill(null)
    .map((_, index) => (
      <tr key={index} height="10%">
        <td>
          <Item disabled={true} />
        </td>
        <td>
          <Item disabled={true} />
        </td>
      </tr>
    ));

export default function ItemList(props) {
  const [conSelector, _] = useAttribute("CON");
  const constitution = useSelector(conSelector);
  const slots = constitution + 10;

  return (
    <Card interactive={true} className="item-list column">
      <p className="title">Item Slots</p>
      <div className="fill">
        <table>
          <tbody>
            {renderEnabledSlots(slots)}
            {renderDisabledSlots(slots)}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
