import { useState, useEffect } from "react";

export default function Login() {
  const [userForm, setUserForm] = useState({
    userEmail: "",
    password: "",
  });
  const [formErrors, setFormError] = useState({
    emailErr: null,
    passwordErr: null,
  });
  useEffect(() => {
    console.log(userForm);
  }, [userForm]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userForm);
  };
  const handleFormChange = (e) => {
      console.log(e.target.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/))
    if (e.target.id === "email") {
      setUserForm({
        ...userForm,
        userEmail: e.target.value,
      });
      setFormError({
        ...formErrors,
        emailErr:
          e.target.value.length === 0
            ? "this filed is required"
            : !e.target.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) 
            ? "Email not confirm"
            : null,
      });
    } else if (e.target.id === "pass") {
      setUserForm({
        ...userForm,
        password: e.target.value,
      });
      setFormError({
        ...formErrors,
        passwordErr:
          e.target.value.length === 0
            ? "this filed is required"
            : e.target.value.length < 8
            ? "password must 8 or more Charactiers"
            :null
      });
    }
  };
  return (
    <>
      <div className="container m-5">
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              value={userForm.userEmail}
              onChange={(e) => handleFormChange(e)}
            />
            <div className="text-danger">
                {formErrors.emailErr}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="pass"
              value={userForm.password}
              onChange={(e) => handleFormChange(e)}
            />
            <div className="text-danger">
                {formErrors.passwordErr}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
