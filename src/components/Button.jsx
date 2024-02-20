import styles from "./Button.module.css";

// eslint-disable-next-line
function Button({ children, onClick, type }) {
  return (
    <div onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </div>
  );
}

export default Button;
