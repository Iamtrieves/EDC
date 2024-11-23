const AppClearEventData = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    props.clearFormData();
  };

  return (
    <button
      onClick={submitHandler}
      className="text-white w-full border p-1 rounded-md bg-[red]"
      type={props.submit ? "submit" : "button"}
    >
      Clear Event Data
    </button>
  );
};

export default AppClearEventData;
