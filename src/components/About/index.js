// Write your code here
import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const lightImage =
        'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const darkImage =
        'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
      const imageUrl = isDarkTheme ? darkImage : lightImage
      const className = isDarkTheme ? 'dark' : 'light'

      return (
        <div className={`home-container ${className}`}>
          <NavBar />
          <div className="home-inner-container">
            <img src={imageUrl} className="home-img" alt="about" />
            <h1 className="">About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
