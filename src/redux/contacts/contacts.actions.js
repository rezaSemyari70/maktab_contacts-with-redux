import types from '../contacts/contacts.types';

export const addContact = (contact) => {
    return {
        type : types.ADD_CONTACT,
        payload : contact
    }
}

export const editContact = (contact) => {
    return {
        type : types.EDIT_CONTACT,
        payload : contact
    }
}