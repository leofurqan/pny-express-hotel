import {React, useState} from 'react'
import axios from 'axios'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const style = {
        "borderRadius": "1rem"
    }

    function submitLogin() {
        axios.post('http://localhost:4000/loginUser', {
            user_email: email,
            user_password: password
        }).then((r) => {
            if(r.data.status) {
                
            } else {
                console.log(r.data.message)
            }
        }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={style}>
                            <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                        <div className="form-outline form-white mb-4">
                                            <input type="email" name="user_email" id="typeEmailX" className="form-control  form-control-lg" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                                            <label className="form-label" htmlFor="typeEmailX">Email</label>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input type="password" name="user_password" id="typePasswordX" className="form-control form-control-lg" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                                            <label className="form-label" htmlFor="typePasswordX">Password</label>
                                        </div>

                                        <button onClick={submitLogin} className="btn btn-outline-light btn-lg px-5">Login</button>
                                    </div>

                                <div>
                                    <p className="mb-0">Don't have an account? <a href="/signup" className="text-white-50 fw-bold">Sign Up</a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
