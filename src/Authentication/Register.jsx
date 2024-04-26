import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Register = () => {
    const [show, setShow] = useState(true);
    const { createUser } = useContext(AuthContext);

    const handleCreateUser = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            toast("pleas enter at lest 6 character");
            return;
        } else if (!/^(?=.*[A-Z])(?=.*\d).+/.test(password)) {
            toast("at least 1 uppercase and 1 number");
            return;
        }

        createUser(email, password)
            .then(async (result) => {
                //TODO: call database

                const { data } = await axios.post(
                    "http://localhost:5000/users",

                    {
                        name,
                        email,
                        creationTime: result.user?.metadata.creationTime,
                    },
                    {
                        headers: {
                            "content-type": "application/json",
                        },
                    }
                );
                if (data.acknowledged) {
                    form.reset();
                    toast("Create user successful");
                }
            })
            .catch((err) => {
                console.log(err.message);
                toast("email already in use");
            });
    };

    return (
        <div className="hero min-h-[90vh] ">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-md  bg-base-100">
                    <form onSubmit={handleCreateUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name="name"
                                type="name"
                                placeholder="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
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
                                />{" "}
                                <div
                                    onClick={() => setShow(!show)}
                                    className="absolute top-[25%] right-2 cursor-pointer text-2xl"
                                >
                                    {show ? <FaEye /> : <FaEyeSlash />}
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="flex items-center">
                            <p>Already have Account </p>
                            <Link className="btn btn-link" to={"/login"}>
                                login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
