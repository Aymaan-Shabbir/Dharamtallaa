import { useState } from "react";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Must be atleast 6 characters")
    .max(16, "Must not be more than 16 characters"),
});

const Login = () => {
  //step1 , make formdata states
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // step2 make changehandler that updates formData using name and value
  const submitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //step 3 make, error management and submit button handler, obtain results with schema

  const [error, setError] = useState({});

  const submit = (e) => {
    e.preventDefault();
    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      const errorField = result.error.formErrors.fieldErrors;
      setError(errorField);
      return;
    }
  };

  console.log(error);

  return (
    <div className="h-screen flex bg-gray-200 items-center justify-center p-3 flex-col">
      <form className="flex flex-col gap-3 p-3 items-center justify-center border rounded-md bg-white max-w-100">
        <h1>Enter email:</h1>
        <input
          value={formData.email}
          name="email"
          onChange={submitHandler}
          type="email"
          placeholder="eg: Rashee@gmail.com"
          className="border border-black rounded-md p-2 w-80"
        />
        <span className="text-red-600">{error && error.email}</span>
        <h1>Enter password:</h1>
        <input
          value={formData.password}
          name="password"
          onChange={submitHandler}
          type="password"
          placeholder="Enter password"
          className="border border-black rounded-md p-2 w-80"
        />
        <span className="text-red-600">{error && error.password}</span>
        <button
          onClick={submit}
          className="bg-black border rounded p-1 py-2 text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
