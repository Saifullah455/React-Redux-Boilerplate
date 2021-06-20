const setData = () => {
    return (dispatch) => {
        dispatch({type: "SETDATA", payload: {name: "TOUSEEF", age: 17, cell: 3162002261, position: "Senior Neuro Sergeon"}})
    }
}

export {
    setData
}