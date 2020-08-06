import types from './monster.type'
const initialState = {
    monsters_list: [
        {id:1,name:'ali' , email:'akpa125@gmail.com'},
        {id:2,name:'hassan' , email:'akpa125@gmail.com'},
        {id:3,name:'hamkar' , email:'akpa125@gmail.com'},
    ],
}
const monsterReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.ADD_MONSTER:
            return {
                ...state,
                monsters_list: [...state.monsters_list, payload]
            }
        case types.DELETE_MONSTER:
            return {
                ...state,
                monsters_list: state.monsters_list.filter(item => item.id !== payload)
            }
        case types.UPDATE_MONSTER:
            return {
                ...state,
                monsters_list: state.monsters_list.map(item => item.id === payload.id ? payload : item)
            }
        default:
            return state
    }
}
export default monsterReducer;
