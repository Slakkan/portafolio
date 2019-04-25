import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <div>
                    <Link className="header__title" to='/'>
                        <h1>PORTAFOLIO</h1>
                    </Link>
                    <Link className="header__title" to='/aboutme'>
                        <h1>SOBRE MI</h1>
                    </Link>
                </div>
                <button className="button button--link">Contacto</button>
            </div>
        </div>
    </header>
)


export default Header