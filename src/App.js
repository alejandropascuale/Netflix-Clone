import React, { useEffect, useState } from 'react';
import './App.css'
import MovieRow from './components/MovieRow';
import Tmdb from './components/Tmdb';
import FeatureMovie from './components/FeatureMovie';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect( ()=> {
    const loadAll = async () => {
      // get all list of data
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Chose a random from originals from feature
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      setFeatureData(chosen);
    }
    loadAll();
  }, [])

  return (
    <div className='page'>
      {featureData &&
        <FeatureMovie item={featureData} />
      }
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
