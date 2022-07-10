import {Component} from 'react'

import PasswordItem from '../PasswordItem'

import './index.css'

const passwordList = [
  {id: 1, website: 'youtube.com', name: 'praveen2', password: 'Sq23@#4'},
  {id: 2, website: 'gmail.com', name: 'rraveen5', password: 'Sq2&*#4'},
  {id: 3, website: 'ymail.com', name: 'araveen6', password: 'Sq2(_#4'},
  {id: 4, website: 'tube.com', name: 'kraveen7', password: 'S4(@#4'},
  {id: 5, website: 'clay.com', name: 'mraveen8', password: 'Sqp53@#4'},
  {id: 6, website: 'kirak.com', name: 'traveen9', password: 'Sq73@#4'},
]

class Passwords extends Component {
  render() {
    return (
      <div className="app-bg-container">
        <div className="app-content-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="password-bg-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="password-manager-image"
            />
            <form className="form-bg-container">
              <h1 className="form-heading">Add New Password</h1>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-img"
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Enter website"
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="website"
                  className="input-img"
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Username"
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="website"
                  className="input-img"
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Password"
                />
              </div>
              <div className="button-container">
                <button className="add-button" type="button">
                  Add
                </button>
              </div>
            </form>
          </div>

          <div className="password-result-bg-container">
            <div className="password-stats-bg-container">
              <div className="password-stats-container">
                <p className="password-stats-heading">Your Passwords</p>
                <p className="password-count">2</p>
              </div>
              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-img"
                />
                <input type="search" placeholder="Search" className="input" />
              </div>
            </div>
            <hr className="horizontal-line" />
            <ul className="list-container">
              {passwordList.map(eachPassword => (
                <PasswordItem
                  passwordDetails={eachPassword}
                  key={eachPassword.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Passwords
