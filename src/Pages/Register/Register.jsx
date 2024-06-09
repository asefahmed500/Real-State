

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)

        const name = form.get("name")
        const PhotoUrl = form.get("photo")

        const email = form.get("email")
        const password = form.get("password")
        console.log(name,PhotoUrl,email,password)

    }

    return (
        <div className="flex justify-center items-center mt-20">

        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <p className="text-center font-bold">PLEASE REGISTER </p>
            <form onSubmit = {handleRegister}
            className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                    name = "name"
                     placeholder="name" 
                     className="input input-bordered"
                      required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text"
                    name = "photo"
                     placeholder="text" 
                     className="input input-bordered"
                      required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"
                    name = "email"
                     placeholder="email" 
                     className="input input-bordered"
                      required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" 
                    name = "password"
                    
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
            </form>
        </div>
    </div>
    );
};

export default Register;