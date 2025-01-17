import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  function handleFormSubmit(newUser) {
    // console.log(newUser)
    //make HTTP POST req to save newUser in API
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        if (res.status === 201) {
          navigate("/Login");
        }
      })
      .catch((err) => console.log("err", err));
  }
  return (
    <div className="mt-5">
      <h2 className="display-3 text-center text-secondary">
        User registration
      </h2>
      <form
        className="w-50 mx-auto mt-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="mb-3">
          <label htmlFor="un" className="form-label">
            Username
          </label>
          <input
            type="text"
            {...register("username")}
            id="un"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pw" className="form-label">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            id="pw"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="em" className="from-label">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            id="em"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="db" className="from-label">
            Date of birth
          </label>
          <input
            type="date"
            {...register("dob")}
            id="db"
            className="form-control"
          />
        </div>
        {/*submit button */}
        <button className="btn btn-dark d-block mx-auto" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
