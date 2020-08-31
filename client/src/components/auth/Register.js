import React, {useState} from 'react'

export const Register = () => {

const [user, setUser] = useState({
  name: '',
  email: '',
  password: '',
  password2: ''
});

const {name, email, password, password2} = user;


  return (
    <div className='form-container'>
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form>
        <div className="form-group">
          <label>
            
          </label>

        </div>
      </form>
    </div>
  )
}

export default Register