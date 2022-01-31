import React, { useEffect, useState } from 'react';
import './App.css'
import MovieRow from './components/MovieRow';
import Tmdb from './components/Tmdb';

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect( ()=> {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }
    loadAll();
  }, [])

  return (
    <div>
      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
          ))}
          {console.log(movieList)}
      </section>
    </div>
  );
}

export default App;
