import types from '../contacts/contacts.types';

export const addContact = (contact) => {
    return {
        type : types.ADD_CONTACT,
        payload : contact
    }
}