
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = (({ contactlist, onDelete }) => {
    return (
            <div>
                <List>
                    {contactlist.map((contact) => (<li key={contact.id}> <ContactItem
                        contactItem={contact}
                        onDeleteContact={onDelete}/>
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
