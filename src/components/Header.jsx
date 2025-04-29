import { FaEdit, FaSearch } from "react-icons/fa";
import { GoMoon } from "react-icons/go";
import { LuSunDim } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <section className="bg-[#E8F3F3] h-24 flex justify-between items-center px-6 ">
      <div className="flex gap-6">
        <p className="flex  items-center">
          <span>Homepage</span> <RiArrowDropDownLine />
        </p>
        <p>About</p>
        <p className="flex items-center">
          <span>Category</span> <RiArrowDropDownLine />
        </p>
        <p className="flex items-center">
          <span>Pages</span> <RiArrowDropDownLine />
        </p>
      </div>
      <div>
        <h2>
          Note<span>Book</span>
        </h2>
      </div>
      <div className="flex items-center gap-6">
        <FaSearch />
        <FaEdit />
        <p>Contact</p>
        <p className="flex items-center">
          <span>English</span> <RiArrowDropDownLine />
        </p>
        <LuSunDim />
        <GoMoon />
      </div>
    </section>
  );
};

export default Header;
