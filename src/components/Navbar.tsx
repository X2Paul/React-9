import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
      <ul className="navbarList">
        <li className="navbarItem">
          <NavLink className="navbarLink" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="navbarLink" to="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink className="navbarLink" to="/users">Users</NavLink>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar