import './index.css'

const PasswordItem = props => {
  const {passwordDetails} = props
  const {website, name, password} = passwordDetails
  return (
    <li className="password-item">
      <div className="initialClassName">
        <p className="initial">{name[0]}</p>
      </div>
      <div className="user-details">
        <p className="website-name">{website}</p>
        <p className="user-name">{name}</p>
        <p className="user-password">{password}</p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        alt="delete"
        className="delete-img"
      />
    </li>
  )
}

export default PasswordItem
