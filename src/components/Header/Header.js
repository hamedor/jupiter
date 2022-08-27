import logo from '../../assets/Logo.svg';
import './header.css'


export const Header = () => {
    return(
        <header className='header'>
            <div className='_container'>
                <div className='header__container'>
                    <div className='header__logo'>
                        <img src={logo} alt='company logotype'></img>
                    </div>
                    <ul className='header__list'>
                        <li className='header__item'>About</li>
                        <li className='header__item'>Services</li>
                        <li className='header__item'>Pricing</li>
                        <li className='header__item'>Blog</li>
                    </ul>
                    <div className='header__button'>
                        <button type='button'>Contact</button>
                    </div>
                </div>

                <h1 className='header__heading'>Portfolio</h1>
                <p className="header__text">
                    Agency provides a full service range including technical skills, design, business
                    understanding.
                </p>
            </div>
        </header>
    )
}