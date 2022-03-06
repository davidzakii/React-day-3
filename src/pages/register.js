import { useState, useEffect } from "react";

export default function Register() {
  const [userForm, setUserForm] = useState({
    name: "",
    userEmail: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormError] = useState({
    nameErr: null,
    userNameErr: null,
    emailErr: null,
    passwordErr: null,
    confirmPasswordErr: null,
  });
  useEffect(() => {
    console.log(userForm);
  }, [userForm]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  const handleFormChange = (e) => {
    //console.log(e.target.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/))
    // console.log(e.target.value)
    console.log(userForm.password)
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
            : !e.target.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
            ? "password contain at least on of lawercase and uppercase and number and special character "
            : null
          });
    } else if (e.target.id === "confirmPassword") {
        setUserForm({
          ...userForm,
          confirmPassword: e.target.value,
        });
        setFormError({
          ...formErrors,
          confirmPasswordErr:
            e.target.value.length === 0
              ? "this filed is required"
              : e.target.value !== userForm.password
              ? "this password not confirm"
              :null
        });
      } else if (e.target.id === "name") {
      setUserForm({
        ...userForm,
        name: e.target.value,
      });
      setFormError({
        ...formErrors,
        nameErr: e.target.value.length === 0 
        ? "this field is required" 
        : null,
      });
    } else if (e.target.id === "userName") {
        setUserForm({
          ...userForm,
          userName: e.target.value,
        });
        setFormError({
          ...formErrors,
          userNameErr: e.target.value.length === 0 
          ? "this field is required" 
          : null,
        });
      }
  };

  return (
    <>
      <div className="container  m-5">
        <form  onSubmit={(e) => handleFormSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              value={userForm.name}
              onChange={(e) => handleFormChange(e)}
            />
            <div className="text-danger">{formErrors.nameErr}</div>
          </div>
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
            <div className="text-danger">{formErrors.emailErr}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              aria-describedby="emailHelp"
              value={userForm.userName}
              onChange={(e) => handleFormChange(e)}
            />
            <div className="text-danger">{formErrors.userNameErr}</div>
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
            <div className="text-danger">{formErrors.passwordErr}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              aria-describedby="emailHelp"
              value={userForm.confirmPassword}
              onChange={(e) => handleFormChange(e)}
            />
            <div className="text-danger">{formErrors.confirmPasswordErr}</div>
          </div>
          <button  type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
