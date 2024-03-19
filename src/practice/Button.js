import PropTypes from "prop-types";
import styles from "./Button.module.css"; // 특정 css 파일만 가져와서 적용 가능

function Button({text}) {
    return <button className={styles.btn}>{text}</button> // css 파일 내 클래스 이름과 동일하게
}

Button.propTypes= {
    text : PropTypes.string.isRequired,
}


export default Button;