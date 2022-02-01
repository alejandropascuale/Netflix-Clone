import React from 'react';
import '../styles/FeatureMovie.css'

export default function FeatureMovie({ item }) {
  console.log(item);
  let firstDate = new Date(item.first_air_date);

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
              <div className="featured-year">2099</div>
              <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1? 's': ''}</div>
            </div>
            <div className="featured--description">{item.overview}</div>
            <div className="featured--buttons">

            </div>
            <div className="featured--genres"><strong>Géneros:</strong> ...</div>
          </div>
        </div>
    </section>
  )
}
