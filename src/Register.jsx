import { useContext } from "react";
import { AuthContext } from "./AuthProvider"
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";


const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 6){
           return Swal.fire({
                title: 'error',
                text: 'password must be 6 character',
                icon: 'error',
                confirmButtonText: 'ok'
              })
        }
        if(!/[A-Z]/.test(password)){
           return Swal.fire({
                title: 'error',
                text: 'Password contains at least one uppercase letter',
                icon: 'error',
                confirmButtonText: 'ok'
              })
        }
        if(!/[a-z]/.test(password)){
           return Swal.fire({
                title: 'error',
                text: 'Password contains at least one lowercase letter',
                icon: 'error',
                confirmButtonText: 'ok'
              })
        }



        console.log(email,password)



        createUser(email, password)
            .then(result => {
                console.log(result.user)
                // .then(res => res.json())
                // .then (data => console.log(data))
                Swal.fire({
                    title: 'congrats',
                    text: 'you have successfully registered',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            })
            .catch(error => console.error(error))


    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have an Account? <span><Link to="/login" className="text-xl text-blue-400">Please Login</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;