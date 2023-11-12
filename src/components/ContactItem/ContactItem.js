
import { ListItem, BtnTrash } from './ContactItem.styled';
import { HiTrash } from 'react-icons/hi';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = (({ contactItem: { id, name, number },}) => {
    const dispatch = useDispatch();
    return (
            <ListItem>
                <span>{name}</span>
                <span>{number}</span>
                <BtnTrash type="button" onClick={() => dispatch(deleteContact(id))}><HiTrash/></BtnTrash>
            </ListItem>
        )
})


