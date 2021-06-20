const INITIAL_STATE = {
    users: [{
        name: "SAIF ULLAH",
        age: 23,
        cell: 3341841705,
        position: "Research Scientist at PIAI"
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SETDATA":
            console.log(action.payload);
            return{
                ...state.users,
                users : [...state.users, action.payload]
            }
    }
    return state;
}