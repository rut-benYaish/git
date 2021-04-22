import produce from 'immer'


const iState = {
    addedProducts: []
}

export default produce((state, action) => {
    switch (action.type) {

        case 'ADD_PRODUCT':
            { state.addedProducts.push(action.payLoad) }
            break
        case 'ADD_ONE_PRODUCT':
            { state.addedProducts.find(x => x.id === action.payLoad.id).amount += 1 }
            break
        case 'CALEAR_PRODUCT':
            { state.addedProducts = state.addedProducts.filter(x => x.id != action.payLoad.id) }
            break
    }
}, iState)