
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
    const { id } = useParams(); // react router가 :id 변수의 값을 여기로 넘겨줌
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
            .json();
        console.log(json.data.movie);
        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {getMovie()}, []);

    return <div className={styles.container}>
        {loading ? (<div className={styles.loader}>
        <span>loading...</span></div>) : (<div className={styles.movie}>
        <h1 className={styles.movie__title}>{movie.title}</h1>
        <img src={movie.large_cover_image} className={styles.movie__image} alt={movie.title}/>
        <p>rating : {movie.rating}</p>
        <p>runtime : {movie.runtime}</p>
        <h4>genres</h4>
        <ul className={styles.movie__genres}>
            {movie.genres?.map(g => <li key={g}>{g}</li>)}
        </ul>
        <h4>description</h4>
        <p>
            {movie.description_full}</p>

    </div>)}
    </div>
}

export default Detail;