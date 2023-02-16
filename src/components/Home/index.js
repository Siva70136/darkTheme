// Write your code here
import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const lightImage =
        'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const darkImage =
        'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
      const imageUrl = isDarkTheme ? darkImage : lightImage
      const className = isDarkTheme ? 'dark' : 'light'

      return (
        <div className={`home-container ${className}`}>
          <NavBar />
          <div className="home-inner-container">
            <img src={imageUrl} className="home-img" alt="home" />
            <h1 className="">Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
