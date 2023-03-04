import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <span className="heading">Log In</span>
      <form action="">
        <label htmlFor="username">Username</label>
        <input type="text" name='username' placeholder='Enter username' autoFocus />
        <label htmlFor="password">Password</label>
        <input type="text" name='password' placeholder='Enter Password'  />
        <button type="submit" className="btn">Log in</button>
      </form>
    </div>
  )
}
