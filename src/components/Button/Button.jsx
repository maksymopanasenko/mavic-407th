import styles from './Button.module.scss';

const Button = ({ text, onClick }) => {
    return (
        <button className={styles.Button} onClick={onClick}>{text}</button>
    );
}

const ButtonLink = ({ text }) => {
    return (
        <a href='https://send.monobank.ua/jar/4okvjAk48N'
            className={styles.Button}
            target="_blank"
            rel="noopener noreferrer"
        >{text}</a>
    );
}

export { Button, ButtonLink };