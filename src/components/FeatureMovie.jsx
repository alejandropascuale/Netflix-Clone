import React from 'react';
import '../styles/FeatureMovie.css'

export default function FeatureMovie({ item }) {
  return (
    <section className='featured'>
        <div>
          {item.original_name}
        </div>
    </section>
  )
}
