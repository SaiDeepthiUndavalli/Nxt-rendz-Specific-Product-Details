/* eslint-disable prettier/prettier */
import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">
            Marriage is a Spiritual and Emotional Union
          </h1>
          <img
            src="https://img.freepik.com/free-photo/beautiful-wedding-walk-nature-ukraine-sumy_8353-5800.jpg?w=2000"
            alt="wedding-profile"
            className="home-mobile-img"
          />
          <p className="home-description">
            Marriage is the beginning—the beginning of the family—and is a
            life-long commitment. It also provides an opportunity to grow in
            selflessness as you serve your wife and children. Marriage is more
            than a physical union.
          </p>
          <Link to="/products">
            <button type="button" className="shop-now-button">
              Search Profile
            </button>
          </Link>
        </div>
        <img
          src="https://img.freepik.com/free-photo/beautiful-wedding-walk-nature-ukraine-sumy_8353-5800.jpg?w=2000"
          alt="wedding-profile"
          className="home-desktop-img"
        />
      </div>
    </>
  )
}

export default Home
