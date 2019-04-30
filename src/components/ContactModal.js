import React from 'react'
import ReactModal from 'react-modal'
import { connect } from 'react-redux'
import isEmail from 'validator/lib/isEmail'
import database from '../firebase/firebase'

import { contactModal } from '../actions/modals'

ReactModal.setAppElement('#app')

export class ContactModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: undefined,
            sent: false
        }
    }
    onSubmit = (e) => {
        e.preventDefault()

        if (isEmail(this.state.email)) {
            this.setState(() => ({ sent: true }))
            const data = {
                email: this.state.email,
                message: this.state.message
            }
            database.ref(`contacts`)
            .push(data)
            .then(() =>this.props.closeModal())
        } else {
            const error = `La dirección ${this.state.email} no es válida`
            this.setState(() => ({ error }))
        }
    }
    onEmailChange = (e) => {
        const email = e.target.value
        this.setState(() => ({ email }))
    }
    onMessageChange = (e) => {
        const message = e.target.value
        this.setState(() => ({ message }))
    }
    render() {
        return (
            <ReactModal
                className='modal'
                overlayClassName={{ base: 'modal__overlay', afterOpen: 'modal__overlay--after-open', beforeClose: 'modal__overlay--before-close' }}
                portalClassName='modal__portal'
                isOpen={this.props.isOpen}
                contentLabel='Minimal setup'
                onRequestClose={this.props.closeModal}
                closeTimeoutMS={500}>
                {(this.state.sent && <h3>Sending...</h3>) || (
                    <div>
                        <form className='form' onSubmit={this.onSubmit}>
                            {this.state.error && <p className="form__error">{this.state.error}</p>}
                            <input className='text-input' onChange={this.onEmailChange} placeholder='email@ejemplo.com' />
                            <textarea className='text-area' onChange={this.onMessageChange} placeholder='Deja tu mensaje aquí' />
                            <button className='button'>Enviar</button>
                        </form>
                        <button className="button button--close" onClick={this.props.closeModal}>x</button>
                    </div>)
                }
            </ReactModal>
        )
    }
}

const mapStateToProps = (state) => ({
    isOpen: state.modals.contactModal.isOpen
})

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(contactModal(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactModal)