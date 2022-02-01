import React from 'react';
import '../styles/MovieRow.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function MovieRow({ title, items }) {
  return (
    <div className='movieRow'>
        <h2>{title}</h2>
        <div className="movieRow--left">
          <NavigateBeforeIcon style={{fontSize: 50}} />
        </div>
        <div className="movieRow--right">
          <NavigateNextIcon style={{fontSize: 50}} />
        </div>
        <div className='movieRow--listarea'>
          <div className='movieRow--list'>
            {items.results.length > 0 && items.results.map((item, key) => (
              <div className='movieRow--item' key={key}>
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={`${item.name}`} />
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default MovieRow;
