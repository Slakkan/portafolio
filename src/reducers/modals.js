const defaultState = {
    contactModal: {
        isOpen: false
    }
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'CONTACT_MODAL':
            return { contactModal: action.contactModal }
        default:
            return state
    }
}