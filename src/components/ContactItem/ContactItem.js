
import { ListItem, BtnTrash } from './ContactItem.styled';
import { HiTrash } from 'react-icons/hi';

export const ContactItem = (({ contactItem: { id, name, number }, onDeleteContact }) => {
    return (
            <ListItem>
                <span>{name}</span>
                <span>{number}</span>
                <BtnTrash type="button" onClick={() => onDeleteContact(id)}> <HiTrash/></BtnTrash>
            </ListItem>
        )
})

// export class ContactItem extends Component {
//     render() {
//         const {
//             contactItem: { id, name, number },
//             onDeleteContact,
//         } = this.props;
        // return (
        //     <ListItem>
        //         <span>{name}</span>
        //         <span>{number}</span>
        //         <BtnTrash type="button" onClick={() => onDeleteContact(id)}> <HiTrash/></BtnTrash>
        //     </ListItem>
        // )
