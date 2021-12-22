import s from './Container.module.css';

export const Container = ({ children, title }) => {
  return (
    <section className={s.Wrapper}>
      <h1 className={s.Heading}>{title}</h1>
      {children}
    </section>
  );
};
