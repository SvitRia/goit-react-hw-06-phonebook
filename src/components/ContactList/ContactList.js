import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { getContacts, getFilters } from 'redux/selectors';

export const ContactList = (() => {
     const contacts = useSelector(getContacts);
    const FilterName = useSelector(getFilters).name;
    const filteredContacts = [...contacts].filter(({ name }) =>
    name.toUpperCase().includes(FilterName.toUpperCase())
  );

    return (
            <div>
                <List>
                    {filteredContacts.map((contact) => (<li key={contact.id}> <ContactItem
                        contact = {contact} />
                    </li>) 
                )}
                </List>
            </div>
        )
})

// export class ContactList extends Component  {
//     render() {
//          const { contacts, onDelete } = this.props;
//         return (
//             <div>
//                 <List>
//                     {contacts.map((contact) => (<li key={contact.id}> <ContactItem
//                         contactItem={contact}
//                         onDeleteContact={onDelete}/>
//                     </li>) 
//                 )}
//                 </List>
//             </div>
//         )
//     }

// }
