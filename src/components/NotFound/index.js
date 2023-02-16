// Write your code here
import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const className = isDarkTheme ? 'dark' : 'light'

      return (
        <div className={`home-container ${className}`}>
          <NavBar />
          <div className="home-inner-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              className="home-img"
              alt="not found"
            />
            <h1 className={className}>Lost your way</h1>
            <p className={className}>We cannot seem to find the page</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
