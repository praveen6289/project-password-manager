import {Component} from 'react'
import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'orange',
  'green',
  'pumpkin',
  'light-sea-green',
  'carnelian',
  'grey',
  'vivid-cerulean',
]

class Passwords extends Component {
  state = {
    passwordsList: [],
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    searchInput: '',
    isChecked: false,
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUserNameInput = event => {
    this.setState({userNameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onAddUserPassword = event => {
    event.preventDefault()
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const {websiteInput, userNameInput, passwordInput} = this.state
    const newUserPasswordDetails = {
      id: v4(),
      website: websiteInput,
      name: userNameInput,
      password: passwordInput,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newUserPasswordDetails],
      websiteInput: '',
      userNameInput: '',
      passwordInput: '',
    }))
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onChecked = () => {
    this.setState(prev => ({isChecked: !prev.isChecked}))
  }

  deleteUser = passwordId => {
    const {passwordsList} = this.state
    this.setState({
      passwordsList: passwordsList.filter(
        eachUser => eachUser.id !== passwordId,
      ),
    })
  }

  render() {
    const {
      websiteInput,
      userNameInput,
      passwordInput,
      passwordsList,
      searchInput,
      isChecked,
    } = this.state

    const userPasswordsResults = passwordsList.filter(eachUser =>
      eachUser.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

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
              className="password-manager-sm-image"
            />
            <form
              className="form-bg-container"
              onSubmit={this.onAddUserPassword}
            >
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
                  value={websiteInput}
                  onChange={this.onChangeWebsiteInput}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-img"
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Username"
                  value={userNameInput}
                  onChange={this.onChangeUserNameInput}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-img"
                />
                <input
                  type="password"
                  className="input"
                  placeholder="Enter Password"
                  value={passwordInput}
                  onChange={this.onChangePasswordInput}
                />
              </div>
              <div className="button-container">
                <button className="add-button" type="submit">
                  Add
                </button>
              </div>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
              alt="password manager"
              className="password-manager-lg-image"
            />
          </div>

          <div className="password-result-bg-container">
            <div className="password-stats-bg-container">
              <div className="password-stats-container">
                <h1 className="password-stats-heading">Your Passwords</h1>
                <p className="password-count">{passwordsList.length}</p>
              </div>
              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-img"
                />
                <input
                  type="search"
                  placeholder="Search"
                  className="input"
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
            <hr className="horizontal-line" />
            <div className="show">
              <input
                type="checkbox"
                className="check-box"
                id="showPassword"
                onChange={this.onChecked}
                checked={isChecked}
              />
              <label className="show-password" htmlFor="showPassword">
                Show Passwords
              </label>
            </div>
            <div>
              {userPasswordsResults.length > 0 ? (
                <ul className="list-container">
                  {userPasswordsResults.map(eachUser => (
                    <PasswordItem
                      passwordDetails={eachUser}
                      key={eachUser.id}
                      deleteUser={this.deleteUser}
                      isChecked={isChecked}
                    />
                  ))}
                </ul>
              ) : (
                <div className="no-password-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    className="no-password-img"
                    alt="no passwords"
                  />
                  <p className="no-password">No Passwords</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Passwords
