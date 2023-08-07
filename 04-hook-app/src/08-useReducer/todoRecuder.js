export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];
        case '[TODO] Remove Todo':
            return initialState.filter(element => element.id !== action.payload);
        case '[TODO] Toggle Todo':
            return initialState.map((element) => {

                if(action.payload === element.id){
                    return {
                        ...element,
                        done: !element.done
                    }
                }
                return element;
            })
        default:
            return initialState;
    }
}