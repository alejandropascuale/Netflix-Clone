import React from 'react';
import '../styles/Header.css'

function Header({ black }) {
  return (
    <header className={black? 'black': ''}>
        <div className='header--logo'>
            <a href='/'>
                <img src='https://1000marcas.net/wp-content/uploads/2020/01/Netflix-simbolo.jpg' alt='Netflix logo' />
            </a>
        </div>
        <div className='header--user'>
            <a href='/'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='usuario'/>
            </a>
        </div>
    </header>
  )
}

export default Header;
