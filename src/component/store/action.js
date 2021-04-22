export function addProduct(newPuple) {
    return { type: 'ADD_PRODUCT', payLoad: newPuple }
}

export function addOneProduct(newPuple) {
    return { type: 'ADD_ONE_PRODUCT', payLoad: newPuple }
}

export function clearProduct(id) {
    return { type: 'CALEAR_PRODUCT', payLoad: id }
}

function convertActionName(actionName) {//addPupil
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();//ADD_PUPIL
}

const actions = new Proxy(
    {},
    {
        get: function (target, prop) {
            if (target[prop] === undefined)
                return function (args) {
                    return { type: convertActionName(prop), payLoad: args }
                }
            else
                return target[prop];
        },

    }
)
export default actions;