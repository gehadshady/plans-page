type FilterTitleProps = {
  title: string;
};
const FilterTitle = ({ title }: FilterTitleProps) => {
  return <h2 className="text-primary font-bold">{title}</h2>;
};

export default FilterTitle;
