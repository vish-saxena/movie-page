
import Movie from './components/Movie';
import './App.css';
const App = function () {

  //props objects
  const firstMovie= {
    image : 'https://www.deccanherald.com/sites/dh/files/article_images/2020/05/19/World-470707478-1581845039.jpg',
    tittle : 'World Famous Lover',
    aurthor : 'Vijay Deverakonda,',
    price : 'Rating: 9.8/10 ',
  };

  const secondMovie = {
    image : 'https://wallpaperaccess.com/full/3566179.jpg',
    tittle : 'Taxiwala',
    aurthor : 'Vijay Deverakonda',
    price : 'Rating: 8.7/10 ', 
  };

  const thirdMovie = {
    image : 'https://m.media-amazon.com/images/M/MV5BOTdhODUxYzYtNzc1Zi00YTMzLThhYzAtMTk3YzIwMjQwYzMwXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg',
    tittle : 'Bheeshma',
    aurthor : 'Nithiin, Rashmika',
    price : 'Rating: 8.4/10 ',
  }

  const fourthMovie = {
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpY7nqTEJqjOkzMsYfSEN6Y_KWsM1q1I6Xw&usqp=CAU',
    tittle : 'Dear Comrade',
    aurthor : 'Vijay, Rashmika',
    price : 'Rating: 9/10 ',
  }

  const fifthMovie = {
    image : 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Tadap_film_poster.jpg/220px-Tadap_film_poster.jpg',
    tittle : 'Tadap',
    aurthor : 'Ahan Shetty',
    price : 'Rating: 6.9/10 ',
  }

  const sixthMovie = {
    image : 'https://m.media-amazon.com/images/M/MV5BZWE0MGM3YzEtM2ZmNi00NmMyLWE5OGEtMGJkNjVlOThhOTEwXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg',
    tittle : 'Most Eligible Bachelor',
    aurthor : 'Akhil Akkineni, Pooja Hegde ',
    price : 'Rating: 6.1/10',
  };

  return (
    <section className='movie'>
        <div className='movie-tittle'>
          <h1>Neclipse</h1>
        </div>
        
        <div className='movies'>
          <Movie
              image={firstMovie.image}
              tittle={firstMovie.tittle}
              aurthor={firstMovie.aurthor}
              price={firstMovie.price}
          />

          <Movie
              image={secondMovie.image}
              tittle={secondMovie.tittle}
              aurthor={secondMovie.aurthor}
              price={secondMovie.price}
          />

          <Movie
              image={thirdMovie.image}
              tittle={thirdMovie.tittle}
              aurthor={thirdMovie.aurthor}
              price={thirdMovie.price}
          />

          <Movie
              image={fourthMovie.image}
              tittle={fourthMovie.tittle}
              aurthor={fourthMovie.aurthor}
              price={fourthMovie.price}
          />

          <Movie
              image={fifthMovie.image}
              tittle={fifthMovie.tittle}
              aurthor={fifthMovie.aurthor}
              price={fifthMovie.price}
          />

          <Movie
              image={sixthMovie.image}
              tittle={sixthMovie.tittle}
              aurthor={sixthMovie.aurthor}
              price={sixthMovie.price}
          />

        </div>
   </section>
  );
};

export default App;  