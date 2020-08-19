import {createSelector} from 'reselect';

const contactList = state => state.contact.contactList;

export const contactId = createSelector(
    contactList , 
    (contactItem) => contactItem.length + 1
)