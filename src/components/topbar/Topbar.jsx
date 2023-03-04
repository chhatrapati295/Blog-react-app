import './topbar.css'
import {Facebook , Instagram , Pinterest, Search, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="left-topbar">
          <Facebook/>
          <Instagram/>
          <Twitter/>
          <Pinterest/>
        </div>
      <div className="mid-topbar">
      <ul className="nav-items">
        <li className="nav-item">
        <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/single">Blog</Link>
        </li>
        <li className="nav-item">
        <Link to="/create">Create</Link>
        </li>
        <li className="nav-item">
        <Link to="/register">Register</Link>
        </li>
        <li className="nav-item">
        <Link to="/login">LogOut</Link>
        </li>
      </ul>
      </div>
      <div className="right-topbar">
        <Link to="/settings">
        <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
        </Link>
      </div>
    </div>
  )
}
