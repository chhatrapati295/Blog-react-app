import { AccountCircle } from '@mui/icons-material'
import Sidebar from '../../../components/sidebar/Sidebar'
import './settings.css'

export default function settings() {
  return (
    <div className="setting-content">
    <div className='settings'>
        <div className="box1">
            <span className="title">
                Update Your Account
            </span>
            <span className="delete" >Delete Account</span>
        </div>
        <span className="profile-text">Profile Picture</span>
        <div className="imgbox">
            <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="img" />
            <label htmlFor="icon"><AccountCircle  className='icon-logo'/></label>
            <input type="file" name="" id="icon" style={{display : 'none'}} />
        </div>
        <form action="">
            <label htmlFor="username">Username</label>
            <input type="text" name='username' autoFocus placeholder='Ex. Jane Smith' />
            <label htmlFor="email">Email</label>
            <input type="text" name='email' placeholder='Ex. jane99@gmail.com' />
            <label htmlFor="password">Password</label>
            <input type="text" name='password' placeholder='password' />
        </form>
        <button type="submit" className='submit'>Update</button>
    </div>
    <Sidebar/>
    </div>
  )
}
