import React from 'react'
import HeaderStyles from '../Styles/HeaderStyles.css'

const Header = (props) => {
    return(
        <div className="main-header">
            <img className="logo-image"
                src="https://i.ibb.co/QMpScsF/No-DB-logo-design2.png"
                alt="Logo"
            />
            <div className="Menu">
                <span>-Home-</span>
                <span>-List of Pets-</span>
                <span>-Medical Records-</span>
                <span>-Employee Directory-</span>
                <span>-Public Portal-</span>
            </div>
        </div>
    )
}

export default Header