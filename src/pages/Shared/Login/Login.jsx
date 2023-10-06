import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Login = () => {

    const {singIn} = useContext(AuthContext)


    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        console.log(form.get('email'))
        const email = form.get('email')
        const password = form.get('password')
        singIn(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#FFF] border mt-14 p-20">
                <h2 className="text-4xl font-semibold text-center ">Login your account</h2>

                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" required className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" required className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have an account <Link className="text-red-400 font-semibold" to={'/register'}>Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;