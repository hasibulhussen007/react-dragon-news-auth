import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

    const{createUser} = useContext(AuthContext)


    const handleRegister = e =>{
        e.preventDefault()
        const from = new FormData(e.currentTarget)
        const name = from.get('name')
        const photo = from.get('photo')
        const email = from.get('email')
        const password = from.get('password')
        console.log(name,photo,email,password)

        createUser(email,password)
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
                <h2 className="text-4xl font-semibold text-center ">Register your account</h2>

                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" required className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" required className="input input-bordered"   />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" required className="input input-bordered"  />
                        <label className="flex gap-3 mt-2">
                            <input type="checkbox" name=""></input>
                            <p className="items-start">Accept Term & Conditions</p>                            
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account <Link className="text-red-400 font-semibold" to={'/login'}>Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;