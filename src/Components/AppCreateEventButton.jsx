import { Link } from "react-router-dom";
const AppCreateEventButton = () => {
  const submitHandler = (e) => {
    // e.preventDefault();
    console.log("Event Created");
  };

  return (
    <Link
      to="/email"
      onClick={submitHandler}
      className="text-white text-center w-full border p-1 rounded-md bg-[green] "
    >
      Create Event
    </Link>
  );
};

export default AppCreateEventButton;
