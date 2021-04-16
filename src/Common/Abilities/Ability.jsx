import { useSelector } from 'react-redux';
import { EditableText, Label } from '@blueprintjs/core';

import characterState, { useAttribute } from '../../State/CharacterState';

import './Ability.css';

export default function Ability(props) {
    const name = props.name;
    const [selector, setter] = useAttribute(name);
    const attribute = useSelector(selector);

    const handleChange = (value) => characterState.dispatch(setter({ value: +value }))

    return (
        <tr>
            <td className="cell" colSpan="2">
                <Label className="defense">{attribute + 10}</Label>
            </td>
            <td className="cell" colSpan="2">
                <Label className="name">{name}</Label>
            </td>
            <td className="cell">
                <EditableText className="ability" value={attribute} onChange={handleChange} type="number">
                    {attribute}
                </EditableText>
            </td>
        </tr>
    );
}