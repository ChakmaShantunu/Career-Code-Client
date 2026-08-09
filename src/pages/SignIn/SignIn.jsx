import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";


const SignIn = () => {

    const { signInUser } = use(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const user = Object.fromEntries(formData.entries());
        console.log(user);

        // sign in user
        signInUser(user.email, user.password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div className="card bg-base-100 w-full mx-auto my-12 p-6 max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold text-center">Sign In now!</h1>
            <div className="card-body">
                <form onSubmit={handleSignIn} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Enter Email" />
                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Enter Password" />
                    <button className="btn btn-neutral mt-4">Sign In</button>
                </form>
                <p>Don't have an account? Please <Link to="/register" className="underline text-blue-400">Register</Link></p>
            </div>
        </div>
    );
};

export default SignIn;