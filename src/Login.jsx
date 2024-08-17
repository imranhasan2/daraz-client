import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { signInWithPopup } from "firebase/auth";
import auth from "./firebase.config";
import Swal from "sweetalert2";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate, } from "react-router-dom";


const Login = () => {

    const { signIn, } = useContext(AuthContext);
    const location = useLocation()
    const navigate =useNavigate()

    const googleProvider = new GoogleAuthProvider;
    const githubProvider = new GithubAuthProvider;

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        signIn(email, password)
            .then(result => {


                navigate( location?.state ? location.state : '/')


                console.log(result.user)
                Swal.fire({
                    title: 'Success!',
                    text: 'Login SuccessFully',
                    icon: 'Success',
                    confirmButtonText: 'ok'
                })

            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    title: 'error',
                    text: 'provide a valid email and pass',
                    icon: 'error',
                    confirmButtonText: 'ok'
                })
            })
    }

    const handleGoogleSignIn = (e) => {
        e.preventDefault()
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'Success!',
                    text: 'Login SuccessFully',
                    icon: 'Success',
                    confirmButtonText: 'ok'
                })
            })
            .catch(error => {
                console.log(error)
            })

    }

    const handleGithubSignIn = (e) => {
        e.preventDefault()
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'Success',
                    text: 'Login SuccessFully',
                    icon: 'Success',
                    confirmButtonText: 'ok'
                })
            })
            .catch(error => {
                console.log(error)
            })

    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {/* <div className="space-y-2">
                            <button onClick={handleGoogleSignIn} className="btn btn-outline">Google Sign In</button>
                            <button onClick={handleGithubSignIn} className="btn btn-outline ml-4">GitHub Sign In</button>
                        </div> */}
                        <p>Don't Have an Account?<Link to="/register" className="text-blue-500">Register</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;