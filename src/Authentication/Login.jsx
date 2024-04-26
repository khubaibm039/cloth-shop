import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [show, setShow] = useState(true);

    const handleLoginUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then((result) => {
                console.log(result.user);
                toast("User Login successful");
                form.reset();
            })
            .catch((err) => {
                console.log(err.message);
                toast("please enter correct password");
            });
    };

    return (
        <div className="hero min-h-[90vh]">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-md 	 bg-base-100">
                    <form onSubmit={handleLoginUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    name="password"
                                    type={show ? "password" : "text"}
                                    placeholder="password"
                                    className="input input-bordered w-full"
                                    required
                                />
                                <div
                                    onClick={() => setShow(!show)}
                                    className="absolute top-[25%] right-2 cursor-pointer text-2xl"
                                >
                                    {show ? <FaEye /> : <FaEyeSlash />}
                                </div>
                            </div>
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="flex items-center">
                            <p>Have No Account </p>
                            <Link className="btn btn-link" to={"/register"}>
                                register
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
