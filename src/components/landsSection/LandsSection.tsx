import LandsFilter from "./LandsFilter";
import LandsHeader from "./LandsHeader";
import LandsTable from "./LandsTable";

const LandsSection = () => {
  return (
    <div>
      <LandsHeader />
      <LandsFilter />
      <LandsTable />
    </div>
  );
};

export default LandsSection;
