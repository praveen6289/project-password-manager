import './index.css'

const PasswordItem = props => {
  const {passwordDetails, isChecked, deleteUser} = props
  const {id, website, name, password, initialClassName} = passwordDetails
  console.log(isChecked)

  const passwordItem = isChecked ? (
    <p className="user-password">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )

  const onClickDeleteUser = () => {
    deleteUser(id)
  }

  return (
    <li className="password-item">
      <div className="password-item-details">
        <div className={initialClassName}>
          <p className="initial">{name[0].toUpperCase()}</p>
        </div>
        <div className="user-details">
          <p className="website-name">{website}</p>
          <p className="user-name">{name}</p>
          {passwordItem}
        </div>
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onClickDeleteUser}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default PasswordItem
