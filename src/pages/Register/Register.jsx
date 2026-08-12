
import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import SocialLogin from "../Shared/SocialLogin";


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const user = Object.fromEntries(formData.entries());
        console.log(user);

        createUser(user.email, user.password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="card bg-base-100 w-full mx-auto my-12 p-6 max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold text-center">Register now!</h1>

            {/* <div>
                <Lottie animationData={registerAnimation} loop={true}></Lottie>
            </div> */}
            <div className="card-body">
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name="name" className="input" placeholder="Enter Name" />
                    <label className="label">Address</label>
                    <input type="text" name="address" className="input" placeholder="Enter Address" />
                    <label className="label">Phone Number</label>
                    <input type="text" name="phone" className="input" placeholder="Enter Phone Number" />
                    <label className="label">Photo</label>
                    <input type="text" name="photo" className="input" placeholder="Enter Photo URL" />
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Enter Email" />
                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Enter Password" />
                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
                <SocialLogin></SocialLogin>
                <p>Already have an account? Please <Link to="/login" className="underline text-blue-400">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;