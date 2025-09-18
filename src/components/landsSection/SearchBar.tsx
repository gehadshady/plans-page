import { useState } from "react";
import type { ChangeEvent } from "react";

type SearchBarProps = {
  placeholder: string;
};

const SearchBar = ({ placeholder }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6667 4.79199H11.6667C11.325 4.79199 11.0417 4.50866 11.0417 4.16699C11.0417 3.82533 11.325 3.54199 11.6667 3.54199H16.6667C17.0084 3.54199 17.2917 3.82533 17.2917 4.16699C17.2917 4.50866 17.0084 4.79199 16.6667 4.79199Z"
            fill="#9A9A9A"
          />
          <path
            d="M14.1667 7.29199H11.6667C11.325 7.29199 11.0417 7.00866 11.0417 6.66699C11.0417 6.32533 11.325 6.04199 11.6667 6.04199H14.1667C14.5084 6.04199 14.7917 6.32533 14.7917 6.66699C14.7917 7.00866 14.5084 7.29199 14.1667 7.29199Z"
            fill="#9A9A9A"
          />
          <path
            d="M9.58335 18.1253C4.87502 18.1253 1.04169 14.292 1.04169 9.58366C1.04169 4.87533 4.87502 1.04199 9.58335 1.04199C9.92502 1.04199 10.2084 1.32533 10.2084 1.66699C10.2084 2.00866 9.92502 2.29199 9.58335 2.29199C5.55835 2.29199 2.29169 5.56699 2.29169 9.58366C2.29169 13.6003 5.55835 16.8753 9.58335 16.8753C13.6084 16.8753 16.875 13.6003 16.875 9.58366C16.875 9.24199 17.1584 8.95866 17.5 8.95866C17.8417 8.95866 18.125 9.24199 18.125 9.58366C18.125 14.292 14.2917 18.1253 9.58335 18.1253Z"
            fill="#9A9A9A"
          />
          <path
            d="M18.3333 18.9585C18.175 18.9585 18.0167 18.9002 17.8917 18.7752L16.225 17.1085C15.9833 16.8669 15.9833 16.4669 16.225 16.2252C16.4667 15.9835 16.8667 15.9835 17.1083 16.2252L18.775 17.8919C19.0167 18.1335 19.0167 18.5335 18.775 18.7752C18.65 18.9002 18.4917 18.9585 18.3333 18.9585Z"
            fill="#9A9A9A"
          />
        </svg>
      </div>
      <input
        type="number"
        value={searchTerm}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full border border-[#EDF1F3] rounded-xl bg-[#F9FAFB] py-3 pr-10 pl-4 text-right  text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
    </div>
  );
};
export default SearchBar;
