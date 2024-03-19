import PropTypes from "prop-types";
import {
    Link // 페이지 이동은 하지만 새로고침은 되지 않아서 빠름
} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
    return <div className={styles.movie}>
        <img src={coverImg} alt={title} className={styles.movie__img} />
        <div>
            <h2 className={styles.movie__title}>
                <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
            </h2>
            <h3 className={styles.movie__year}>{year}</h3>
            <p>{summary.length > 200 ? summary.slice(0, 200) + "..." : summary}</p>
            <ul className={styles.movie__genres}>
                {genres?.map(g => <li key={g}>{g}</li>)}
            </ul>
        </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;