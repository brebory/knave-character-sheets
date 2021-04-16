import React from 'react';
import { useSelector } from 'react-redux';
import { Card, ControlGroup, FormGroup, InputGroup, NonIdealState } from '@blueprintjs/core';

import characterState, { useAttribute } from '../../State/CharacterState';
import { isValidURL } from '../../Utils/String';

import './Header.css';

export default function Header(props) {
    const [nameSelector, setName] = useAttribute('name');
    const [xpSelector, setXp] = useAttribute('xp');
    const [levelSelector, setLevel] = useAttribute('level');
    const [imageSelector, setImage] = useAttribute('image');

    const name = useSelector(nameSelector);
    const xp = useSelector(xpSelector);
    const level = useSelector(levelSelector);
    const image = useSelector(imageSelector);

    const onChangeName = (event) => {
        characterState.dispatch(setName({ value: event.target.value }));
    };

    const onChangeXp = (event) => {
        characterState.dispatch(setXp({ value: event.target.value }));
    }

    const onChangeLevel = (event) => {
        characterState.dispatch(setLevel({ value: event.target.value }));
    }

    const onChangeImage = (event) => {
        characterState.dispatch(setImage({ value: event.target.value }));
    }

    const clearImage = () => {
        characterState.dispatch(setImage({ value: "" }))
    }

    return (
        <Card
            className="header"
            interactive={true}>
            <ControlGroup className="row">
                <FormGroup
                    className="name"
                    label="Name">
                    <InputGroup
                        placeholder="Character Name"
                        fill={true}
                        value={name}
                        onChange={onChangeName} />
                </FormGroup>
                <FormGroup
                    className="xp"
                    label="Xp">
                    <InputGroup
                        type="number"
                        value={xp}
                        onChange={onChangeXp} />
                </FormGroup>
                <FormGroup
                    className="level"
                    label="Level">
                    <InputGroup
                        type="number"
                        value={level}
                        onChange={onChangeLevel} />
                </FormGroup>
            </ControlGroup>
            { isValidURL(image) ?
                <img className="portrait" src={image} alt={`Character portrait for ${name}`} onClick={clearImage} />
                :
                <NonIdealState
                    icon="mugshot"
                    description="Add an image link to display a portrait."
                    action={
                        <FormGroup label="Portrait">
                            <InputGroup
                                placeholder="Link src..."
                                value={image}
                                onChange={onChangeImage} />
                        </FormGroup>
                    }
                />
            }
        </Card>
    );
}
