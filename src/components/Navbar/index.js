import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const lightLogo =
        'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const darkLogo =
        'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
      const lightTheme =
        'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
      const darkTheme =
        'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const logoUrl = isDarkTheme ? darkLogo : lightLogo
      const themeUrl = isDarkTheme ? lightTheme : darkTheme
      const className = isDarkTheme ? 'dark' : 'light'

      const changeTheme = () => {
        toggleTheme()
      }

      return (
        <div className={`nav-bar-container ${className}`}>
          <div className="nav-inner-container">
            <img src={logoUrl} className="logo-img" alt="website logo" />
            <ul className="data-container">
              <Link to="/" className="link">
                <li className={className}>Home</li>
              </Link>
              <Link to="/about" className="link">
                <li className={className}>About</li>
              </Link>
            </ul>

            <button
              type="button"
              className="theme-button"
              onClick={changeTheme}
              data-testid="theme"
            >
              <img src={themeUrl} className="theme-img" alt="theme" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NavBar
