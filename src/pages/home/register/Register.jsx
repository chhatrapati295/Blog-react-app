import './register.css'

export default function Login() {
  return (
    <div className='register'>
        <span className="heading">Register</span>
      <form action="">
        <label htmlFor="username">Username</label>
        <input type="text" name='username' placeholder='Enter username' autoFocus />
        <label htmlFor="password">Password</label>
        <input type="text" name='password' placeholder='Enter Password'  />
        <label htmlFor="email">Email</label>
        <input type="text" name='email' placeholder='Enter Email'  />
        <button type="submit" className="btn">Log in</button>
      </form>
    </div>
  )
}
