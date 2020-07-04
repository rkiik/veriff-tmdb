import React, {useState, useEffect} from "react";

import { Link } from "react-router-dom";
import { getMovie, getSimilarMovies, getRecommendations } from '../api/tmdbClient';
import VeriffModal from '../components/Veriff/Modal';
import { connect } from "react-redux";

function Movie(props: any) {
    const [movie, setMovie]: [any, any] = useState([]);
    const [similarMovies, setSimilarMovies]: [any, any] = useState([]);
    const [recommendedMovies, setRecommendedMovies]: [any, any] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            const { data } = await getMovie(props.match.params.id);
            setMovie(data);
        };

        const fetchSimilarMovies = async () => {
            const { data } = await getSimilarMovies(props.match.params.id);
            setSimilarMovies(data);
        };

        const fetchRecommendations = async () => {
            const { data } = await getRecommendations(props.match.params.id);
            setRecommendedMovies(data);
        };

        Promise.all([
            fetchMovie(),
            fetchSimilarMovies(),
            fetchRecommendations()
        ])
    }, []);
    
    console.log("Verified?", props.verifiedAdult)
  return (
    <div>
        {true && <VeriffModal/>}
        <h1>{movie.title}</h1>
        {props.favouriteMovies.join(" ")}
        <ul className="">
            <li>
            <Link to="/">Go Home</Link>
            </li>
        </ul>
    </div>
  );
}

const mapStateToProps = ({ movies: { favouriteMovies, verifiedAdult }}: any) => ({ favouriteMovies, verifiedAdult });

export default connect(mapStateToProps, null)(Movie);