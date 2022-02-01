import React from 'react';
import '../styles/FeatureMovie.css'

export default function FeatureMovie({ item }) {
  console.log(item);
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section className='featured' 
    style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
        <div className='featured--vertical'>
          <div className='featured--horizontal'>
            <div className="featured--name">{item.name}</div>
            <div className="featured--info">
              <div className="featured--points">{item.vote_average} puntos</div>
              <div className="featured--year">{firstDate.getFullYear()}</div>
              <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1? 's': ''}</div>
            </div>
            <div className="featured--description">{item.overview}</div>
            <div className="featured--buttons">
              <a href={`/watch/${item.id}`} className='featured--watchbutton'>▶ Ver</a>
              <a href={`/list/add/${item.id}`} className='featured--mylistbutton'>+ Agregar a mi lista</a>
            </div>
            <div className="featured--genres"><strong>Géneros:</strong> {genres.join(', ')}</div>
          </div>
        </div>
    </section>
  )
}
