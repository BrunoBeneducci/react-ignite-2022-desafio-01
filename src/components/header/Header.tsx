import logoTodoApp from '../../assets/logo-todo-app.svg';
import styles from '../header/style.module.css';

const Header = () => {
    return (
      <header className={styles.header}>
        <img src={logoTodoApp} alt="" />
      </header>
    )
}

export default Header;