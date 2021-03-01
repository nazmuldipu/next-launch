// import Link from 'next/link';
import Joi from "joi-browser";
import useForm from './../utils/useForm';

export default function LoginForm({ onSubmit, error }) {
    const schema = {
        username: Joi.string()
            .required()
            .regex(/^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$/, "Phone")
            .label("Phone number"),
        password: Joi.string().required().label("Password"),
    };

    const { data, renderInput, renderButton, validateSubmit } = useForm({
        schema,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateSubmit(e)) {
            onSubmit(data);
        }
    };

    return (
        <div className="bg-light border p-3">
            <span className="form-text text-danger text-center">{error}</span>
            <form onSubmit={handleSubmit}>
                {renderInput("username", "Phone Number")}
                {renderInput("password", "Password", "password")}
                {renderButton("Login")}
            </form>
        </div>
    );
}