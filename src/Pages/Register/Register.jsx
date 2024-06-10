import { Link } from "react-router-dom";
import Header from "../../Shared/Header";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import NavBar from "../../Shared/NavBar";




const Register = () => {

    const {createuser} = useContext(AuthContext)
    const [successRegister , setsuccessRegister] = useState(false)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)

        const name = form.get("name")
        const PhotoUrl = form.get("photo")

        const email = form.get("email")
        const password = form.get("password")
        console.log(name, PhotoUrl, email, password)

        // create user 

        createuser(email,password)
        .then(result => {
            console.log(result.user)
            setsuccessRegister(true)
        })
        .catch(error => {
            console.error(error)
            setsuccessRegister(false)
        })

        

    }

    return (


        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="flex justify-center items-center mt-20">


                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <p className="text-center font-bold">PLEASE REGISTER </p>
                    {successRegister && (
                        <p className="text-center text-green-500 font-bold">Register successfully!</p>
                    )}
                    <form onSubmit={handleRegister}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                name="name"
                                placeholder="name"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text"
                                name="photo"
                                placeholder="text"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name="password"

                                placeholder="password"
                                className="input input-bordered"
                                required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Already have an account <Link to='/login' className="font-bold text-blue-800">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;