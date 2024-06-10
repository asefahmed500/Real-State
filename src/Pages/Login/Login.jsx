import { Link } from "react-router-dom";
import Header from "../../Shared/Header";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import NavBar from "../../Shared/NavBar";

const Login = () => {
    const { signin } = useContext(AuthContext);
    const [loginSuccess, setLoginSuccess] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);

        // Sign in user
        signin(email, password)
            .then(result => {
                console.log(result.user);
                setLoginSuccess(true); // Set success message
            })
            .catch(error => {
                console.error(error);
                setLoginSuccess(false); // Optionally handle login failure
            });
    };

    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="flex justify-center items-center mt-20">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <p className="text-center font-bold">PLEASE LOGIN </p>
                    {loginSuccess && (
                        <p className="text-center text-green-500 font-bold">Logged in successfully!</p>
                    )}
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>
                            Dont have an account? <Link to='/register' className="font-bold text-blue-800">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
