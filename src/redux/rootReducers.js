import {combineReducers} from 'redux';

import contactReducer  from './contacts/contacts.reducer';

export default combineReducers({
    contact : contactReducer
})