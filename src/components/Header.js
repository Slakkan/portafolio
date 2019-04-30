import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ContactModal from './ContactModal'
import { contactModal } from '../actions/modals';

export const Header = ({ openModal }) => (
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
                <button
                    className="button button--link"
                    onClick={openModal}
                >Contacto</button>
                <ContactModal />
            </div>
        </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    openModal: () => dispatch(contactModal(true))
})

export default connect(undefined, mapDispatchToProps)(Header)