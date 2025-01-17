import { useContext, useState } from "react";
import { loginContextObj } from "./LoginContext";
import { MdEditNote } from "react-icons/md";
import { MdOutlineDataSaverOn } from "react-icons/md";
import { useForm } from "react-hook-form";
import { IoAlarmOutline } from "react-icons/io5";

function UserProfile() {
  const { currentUser, setCurrentUser } = useContext(loginContextObj);
  const [userEditSatus, setUserEditStatus] = useState(false);
  const { register, handleSubmit, setValue } = useForm(); //set value is used for editing  the resource

  function onUserProfileEdit() {
    setUserEditStatus(true);
    //display existing user information in the form
    setValue("username", currentUser.username);
    setValue("email", currentUser.email);
    setValue("dob", currentUser.dob);
  }

  function onModifiedUserSave(modifiedUser) {
    console.log(modifiedUser);
    fetch(`http://localhost:3000/users/${currentUser.id}`, {
      headers: { "Content-type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(modifiedUser),
    })
      .then((res) => res.json())
      .then((editedUser) => {
        setCurrentUser(editedUser);
        setUserEditStatus(false);
      })
      .catch((err) => console.log("err is", err));
  }

  return (
    <div className="text-center mt-5">
      <h2 className="m-auto mt-4">User-Profile</h2>

      {userEditSatus === false ? (
        <div className="card mt-5 bg-secondary rounded-5 p-3">
          <div className="card-body">
            <p className="lead mt-4 fs-3 text-light">{currentUser.username}</p>
            <p className="lead fs-4 text-light">{currentUser.email}</p>
            <p className="lead fs-4 text-light">{currentUser.dob}</p>
            <button
              className="btn btn-warning fw-bold"
              onClick={onUserProfileEdit}
            >
              {" "}
              <MdEditNote className="fs-3 me-3" /> Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <form
          className="mt-4 w-50 mx-auto "
          onSubmit={handleSubmit(onModifiedUserSave)}
        >
          <input
            type="text"
            {...register("username")}
            id=""
            className="form-control mb-3"
            disabled
          />
          <input
            type="email"
            {...register("email")}
            id=""
            className="form-control mb-3"
          />
          <input
            type="date"
            {...register("dob")}
            id=""
            className="form-control mb-3"
          />
          <button className="btn btn-success">
            {" "}
            <MdOutlineDataSaverOn className="me-3" />
            Save
          </button>
        </form>
      )}
    </div>
  );
}

export default UserProfile;
