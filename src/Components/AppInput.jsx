const AppInput = (props) => {
  return (
    <div className="flex gap-1 flex-col">
      <label className="font-semibold" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className="w-full border border-gray-300 p-1 outline-none"
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        onChange={props.onChange}
        name={props.id}
        value={props.value}
      />
    </div>
  );
};

export default AppInput;
