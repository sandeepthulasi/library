const User = ({ id, name, email, Edituser, Deleteuser }) => {
  return (
    <>
      <div className="user flex flex-col m-3 p-2 bg-gray-200 rounded">
        <div className="name align-middle mt-5 mb-3 w-full text-center">
          {name}
        </div>
        <div className="email mb-3 w-full text-center">{email}</div>
        <div className="btns flex flex-row justify-evenly">
          <button
            type="button"
            onClick={() => Edituser(id)}
            className="bg-blue-400 p-3 rounded m-1 text-white w-full "
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => Deleteuser(id)}
            className="bg-red-800 p-3 rounded m-1 text-white w-full "
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default User;