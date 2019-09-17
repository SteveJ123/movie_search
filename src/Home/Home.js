import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZ } from '../config';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import HeroImage from '../elements/HeroImage/HeroImage';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import SearchBar from '../elements/SearchBar/SearchBar';
import Spinner from '../elements/Spinner/Spinner';
import './Home.css';
import axios from 'axios';



export default class Home extends Component {

    state={
        movies: [],
        heroImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: ''
    }

 componentDidMount(){
        this.setState({loading: true});
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
         this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {
        console.log("fetchitems", endpoint);
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            console.log(result);
            this.setState({
                movies: [...this.state.movies, ...result.results],
                heroImage: this.state.heroImage || result.results[0],
                loading: false,
                currentPage: result.page,
        totalPages: result.total_pages
            })
        })        
    }

    searchTerm = (searchTerm) => {
        let endPoint = '';
        this.setState({
            movies:[],
            loading: true,
            searchTerm: searchTerm
        });

        if(searchTerm === ''){
            endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        }else{
            
            endPoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
        }
        this.fetchItems(endPoint);
    }

    loadMoreItems = () =>{
        let endpoint = '';
        this.setState({loading:true});

        if(this.state.searchTerm === ''){
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
        }else{
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
        }

        this.fetchItems(endpoint);
    }


    render() {
        console.log("heroImage", this.state.heroImage);
        
        return (
            <div>
                                
                { this.state.heroImage ? 
                <div>
                <HeroImage image={`${IMAGE_BASE_URL}${POSTER_SIZE}/${this.state.heroImage.backdrop_path}`}
                    title={this.state.heroImage.title}
                    text={this.state.heroImage.text}/>
                    <SearchBar callback={this.searchTerm} />                   
                </div>: null}

                {this.state.heroImage ? 
                <div className="rmdb-grid">
                <FourColGrid
                    header={this.state.searchTerm ? 'SEARCH RESULT' : 'POPULAR MOVIES' }
                >
                    {this.state.movies.map( (element, i)=>{
                        console.log("fourcolgrid", element);
                        return(
                            <MovieThumb
                            key={i}
                            clickable={true}
                            image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : null }
                            movieId={element.id}
                        movieName={element.original_title}                            
                            />
                    )})}

                    {/* {this.state.movies.map ( (element, i) => {
              return (<MovieThumb
                        key={i}
                        clickable={true}
                        image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                        movieId={element.id}
                        movieName={element.original_title}
                     />) */}
            {/* })}                 */}
                    </FourColGrid>                    
                    </div> : null}
                    {this.state.loading ? <Spinner/> : null}
                    {(this.state.currentPage <= this.state.totalPages && !this.state.loading) ?
                    <LoadMoreBtn text="Load More" onClick={this.loadMoreItems} /> : null    
                }                               
                
                {/* <LoadMoreBtn onClick={this.loadMoreItems}/> */}
                
                
                <Spinner/>
                
            </div>
        )
    }
}

