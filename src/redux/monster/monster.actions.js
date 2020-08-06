import types from './monster.type'

export const addMonster = (monster) => {
    return {
        type: types.ADD_MONSTER,
        payload: monster
    }
}
export const deleteMonster = (id) => {
    return {
        type: types.DELETE_MONSTER,
        payload: id
    }
}
export const updateMonster = (monster) => {
    return {
        type: types.UPDATE_MONSTER,
        payload: monster
    }
}
