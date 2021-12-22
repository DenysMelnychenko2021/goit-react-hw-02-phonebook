import s from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => (
  <ul className={s.List}>
    {contacts.map(({ id, inputName, inputNumber, gender }) => (
      <li className={s.Item} key={id}>
        <p>Name: {inputName}</p>
        <p>Number: {inputNumber}</p>
        <p>Gender: {gender}</p>
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
