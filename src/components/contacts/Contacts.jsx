import s from './Contacts.module.css';
export const Contacts = ({ children, title }) => {
  return (
    <div>
      <h2 className={s.Heading}>{title}</h2>
      {children}
    </div>
  );
};
