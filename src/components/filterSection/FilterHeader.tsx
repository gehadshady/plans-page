import FilterLogo from "./FilterLogo";
import FilterTitle from "./FilterTitle";

const FilterHeader = () => {
  return (
    <div className="flex items-center gap-3 my-6">
      <FilterLogo />
      <FilterTitle title="تصفية حسب البيانات الأساسية :" />
    </div>
  );
};

export default FilterHeader;
