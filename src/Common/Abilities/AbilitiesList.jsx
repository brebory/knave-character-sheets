import { HTMLTable } from '@blueprintjs/core';
import Ability from './Ability';

import './AbilitiesList.css';

export default function AbilitiesList(props) {

    return (
        <HTMLTable className="abilities-list" interactive={true}>
            <thead>
                <tr>
                    <th className="header-cell" colSpan="2">Defense</th>
                    <th className="header-cell" colSpan="2">Ability</th>
                    <th className="header-cell">Bonus</th>
                </tr>
            </thead>
            <tbody>
                <Ability name="STR" />
                <Ability name="DEX" />
                <Ability name="CON" />
                <Ability name="INT" />
                <Ability name="WIS" />
                <Ability name="CHA" />
            </tbody>
        </HTMLTable>
    )
}