import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";



const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        
    }



    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2  lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-500">Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })}  placeholder="Photo Url" className="input input-bordered" />
                                {errors.photo && <span className="text-red-500">Photo url is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-red-600">This field is required</span>}
                                {errors.password?.type === "minLength" && (
                                    <p role="alert">Must be 5 character</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p role="alert">Must be 10 character</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p role="alert">please provide strong password</p>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Sign Up" />
                            </div>
                            <p><Link to="/login">You already registered? Please Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;