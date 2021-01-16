const initialState = [];

export const reducer = (state = initialState,action)=>{
    switch (action.type) {
        case "ADD":{
            state.push(action.payload)
            console.log(state)
            return [...state]
        }
        case "DELETE": {
            const filter = state.filter(value => value.id !== action.payload.id)
            console.log(action.payload.id)
            return [...filter]
        }
        default :{
             return state
        }
    }

}