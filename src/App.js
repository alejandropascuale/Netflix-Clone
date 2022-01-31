import React, { useEffect } from 'react';
import Tmdb from './components/Tmdb';

function App() {

  useEffect( ()=> {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      console.log(list);
    }
    loadAll();
  }, [])

  return (
    <>

    </>
  );
}

export default App;
