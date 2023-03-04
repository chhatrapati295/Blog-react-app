import './header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className="header-titles">
        <span className="title-sm">React & Node</span>
        <span className="title-big">Blog</span>
      </div>
      <img src="assets/images/header.jpg" alt="" />
    </div>
  )
}
