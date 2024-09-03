import searchIcon from "../assets/WeatherWhiteIcons/search.png";
const Input = ({ onClick, onChange, options, onSubmit, value }) => {
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex justify-center items-center px-4 h-12  sm:w-80 gap-2 shadow-sm lg:h-14 lg:w-[500px] xl:w-[803px] xl:h-[62px] rounded-[40px] xl:px-[33px] xl:gap-[29px]"
      >
        <button type="submit" onClick={onClick} className="w-4 xl:w-11">
          <img src={searchIcon} alt="searchIcon" />
        </button>
        <input
          className="bg-transparent w-full outline-none h-full"
          value={value}
          type="text"
          placeholder="Search for your city..."
          onChange={onChange}
        />
      </form>
      <div className="">
        {options &&
          options.map((item, index) => (
            <div key={index}>
              {item.name}, {item.country}
            </div>
          ))}
      </div>
    </>
  );
};

export default Input;
