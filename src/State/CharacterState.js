import { createSlice, configureStore } from '@reduxjs/toolkit';

const CharacterStateSlice = createSlice({
    name: 'character-state',
    initialState: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
        maxHp: 0,
        currentHp: 0,
        armor: 0,
        name: "",
        level: 0,
        xp: 0,
        imageLink: ""
    },
    reducers: {
        setStrength: (state, action) => {
            state.strength = action.payload.value;
        },
        setDexterity: (state, action) => {
            state.dexterity = action.payload.value;
        },
        setConstitution: (state, action) => {
            state.constitution = action.payload.value;
        },
        setIntelligence: (state, action) => {
            state.intelligence = action.payload.value;
        },
        setWisdom: (state, action) => {
            state.wisdom = action.payload.value;
        },
        setCharisma: (state, action) => {
            state.charisma = action.payload.value;
        },
        setMaxHP: (state, action) => {
            state.maxHp = action.payload.value;
            state.currentHP = Math.min(state.currentHp, state.maxHp);
        },
        setCurrentHP: (state, action) => {
            state.currentHp = Math.min(action.payload.value, state.maxHp);
        },
        setArmor: (state, action) => {
            state.armor = action.payload.value;
        },
        setName: (state, action) => {
            state.name = action.payload.value;
        },
        setLevel: (state, action) => {
            state.level = action.payload.value;
        },
        setXp: (state, action) => {
            state.xp = action.payload.value;
        },
        setImageLink: (state, action) => {
            state.imageLink = action.payload.value;
        }
    }
});

export const {
    setStrength,
    setDexterity,
    setConstitution,
    setIntelligence,
    setWisdom,
    setCharisma,
    setMaxHP,
    setCurrentHP,
    setArmor,
    setName,
    setLevel,
    setXp,
    setImageLink
} = CharacterStateSlice.actions;

export const selectStrength = state => state.strength;
export const selectDexterity = state => state.dexterity;
export const selectConstitution = state => state.constitution;
export const selectIntelligence = state => state.intelligence;
export const selectWisdom = state => state.wisdom;
export const selectCharisma = state => state.charisma;
export const selectName = state => state.name;
export const selectLevel = state => state.level;
export const selectXp = state => state.xp;
export const selectImageLink = state => state.imageLink;

export const useAttribute = name => {
    let selector, setter;

    switch (name.toLowerCase()) {
        case "str":
        case "strength":
            selector = selectStrength;
            setter = setStrength;
            break;
        case "dex":
        case "dexterity":
            selector = selectDexterity;
            setter = setDexterity;
            break;
        case "con":
        case "constitution":
            selector = selectConstitution;
            setter = setConstitution;
            break;
        case "int":
        case "intelligence":
            selector = selectIntelligence;
            setter = setIntelligence;
            break;
        case "wis":
        case "wisdom":
            selector = selectWisdom;
            setter = setWisdom;
            break;
        case "cha":
        case "charisma":
            selector = selectCharisma;
            setter = setCharisma;
            break;
        case "name":
            selector = selectName;
            setter = setName;
            break;
        case "level":
            selector = selectLevel;
            setter = setLevel;
            break;
        case "xp":
            selector = selectXp;
            setter = setXp;
            break;
        case "imageLink":
        case "image":
            selector = selectImageLink;
            setter = setImageLink;
            break;
        default:
            selector = () => null;
            setter = (val) => { };
            break;
    }

    return [selector, setter];
}

export default configureStore({
    reducer: CharacterStateSlice.reducer
});
