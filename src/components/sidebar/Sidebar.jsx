import './sidebar.css'
import {Facebook, Instagram, Pinterest, Twitter} from '@mui/icons-material'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <span className="sidebar-title">ABOUT ME</span>
      <div className="img-cont">
      <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
      <p className="img-text">Jane is an experienced graphic designer with over 10 years of experience specializing in logo design. Besides hosting several graphic design seminars, Jane creates relevant and original logos that enhance a company's brand recognition.</p>
      </div>
      <span className="sidebar-title">CATEGORIES</span>
      <ul className="category-lists">
        <li className="category-item">Life</li>
        <li className="category-item">Music</li>
        <li className="category-item">Sport</li>
        <li className="category-item">Tech</li>
        <li className="category-item">Style</li>
        <li className="category-item">Cinema</li>
      </ul>
      <span className="sidebar-title">FOLLOW US</span>
        <div className="sidebar-icons">
            <Facebook className='sidebar-icon'/>
            <Instagram className='sidebar-icon'/>
            <Twitter className='sidebar-icon'/>
            <Pinterest className='sidebar-icon'/>
        </div>
    </div>
  )
}
