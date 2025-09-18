import SearchBar from "./SearchBar";

const LandsFilter = () => {
  return (
    <div className=" flex justify-between items-end gap-4 pb-4 ">
      <SearchBar placeholder="رقم القطعة" />
      <SearchBar placeholder="رقم المخطط" />
      <button className="flex items-center gap-2.5 bg-primary rounded-xl py-4 px-8  text-white text-sm font-bold">
        عرض
      </button>
    </div>
  );
};

export default LandsFilter;
