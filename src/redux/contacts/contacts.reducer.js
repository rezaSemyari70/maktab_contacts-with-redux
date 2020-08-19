import types from './contacts.types';

const initial_state = {
    contactList : [
        {
            id:1,
            firstname : 'Ali',
            lastname : 'Nazari',
            email : 'alinazari@gmail.com',
            phone : '09193472976',
            address : 'shiraz pol hafez'
        },
        {
            id:2,
            firstname : 'Saeed',
            lastname : 'Mohammadi',
            email : 'saeedmohammadi@gmail.com',
            phone : '09103434955',
            address : 'esfahan najafabad',
        },
    ]
}

const contactReducer = (state = initial_state , action) => {
    const {type , payload} = action
    switch(type){
        case types.ADD_CONTACT :
            return {
                ...state,
                contactList : [...state.contactList , payload]
            }

            case types.EDIT_CONTACT :
                return {
                    ...state,
                    contactList : state.contactList.map(item=> item.id == payload.id ? payload : item)
                }
                case types.DELETE_CONTACT :
                    return {
                        ...state,
                        contactList : state.contactList.filter(item=> item.id !== payload)
                    }

        default :
            return state ;
    }
}

export default contactReducer ;