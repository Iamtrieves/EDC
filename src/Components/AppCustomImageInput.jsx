import { useRef } from "react";

const AppCustomImageInput = (props) => {
  const fileInputRef = useRef(null);

  const clickHandler = () => {
    fileInputRef.current.click();
  };

  const changeHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        props.setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <label className="block font-semibold mb-0.5">{props.label}</label>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={changeHandler}
      />
      {!props.image ? (
        <section
          className="h-9 text-black bg-white mb-3.5 border border-[#D9D9D9] rounded-[5px] p-1 flex items-center"
          onClick={clickHandler}
        >
          Click to Choose an Image (Max 1.5 MB)
        </section>
      ) : (
        <section className="h-24 border rounded-[5px]">
          <img
            src={props.image}
            alt={props.label}
            className="size-full object-cover rounded-[5px]"
            onClick={clickHandler}
          />
        </section>
      )}
    </div>
  );
};

export default AppCustomImageInput;
