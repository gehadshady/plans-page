import { useForm, Controller } from "react-hook-form";
import FilterSelect from "./FilterSelect";

const regions = [
  { id: 1, name: "الرياض" },
  { id: 2, name: "مكة المكرمة" },
  { id: 3, name: "المدينة المنورة" },
  { id: 4, name: "القصيم" },
  { id: 5, name: "الشرقية" },
  { id: 6, name: "عسير" },
  { id: 7, name: "تبوك" },
  { id: 8, name: "حائل" },
  { id: 9, name: "الحدود الشمالية" },
  { id: 10, name: "جازان" },
  { id: 11, name: "نجران" },
  { id: 12, name: "الباحة" },
  { id: 13, name: "الجوف" },
];

const cities = [
  { code: "C1", title: "المدينة الأولى" },
  { code: "C2", title: "المدينة الثانية" },
  { code: "C3", title: "المدينة الثالثة" },
  { code: "C4", title: "المدينة الرابعة" },
];

export const districts = [
  { code: "D1", title: "حي السلامة" },
  { code: "D2", title: "حي النزهة" },
  { code: "D3", title: "حي الشاطئ" },
  { code: "D4", title: "حي الروضة" },
  { code: "D5", title: "حي العزيزية" },
];

const FilterControls = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      region: null,
      city: null,
      district: null,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-evenly items-center gap-4 pb-2 border-b border-gray-200"
    >
      <Controller
        name="region"
        control={control}
        rules={{ required: "إختر المنطقة" }}
        render={({ field }) => (
          <FilterSelect
            {...field}
            label="إختر المنطقة"
            required={true}
            error={errors.region?.message}
            options={regions}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
          />
        )}
      />

      <Controller
        name="city"
        control={control}
        rules={{ required: "إختر المدينة" }}
        render={({ field }) => (
          <FilterSelect
            {...field}
            label="إختر المدينة"
            required={true}
            error={errors.city?.message}
            options={cities}
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option.code}
          />
        )}
      />

      <Controller
        name="district"
        control={control}
        rules={{ required: "إختر الحي" }}
        render={({ field }) => (
          <FilterSelect
            {...field}
            label="إختر الحي"
            required={true}
            error={errors.district?.message}
            options={districts}
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option.code}
          />
        )}
      />

      <button
        type="submit"
        className="flex items-center gap-2.5 bg-primary rounded-xl py-3 px-4  mt-2 text-white text-sm font-bold"
      >
        بحث
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6666 4.79199H11.6666C11.325 4.79199 11.0416 4.50866 11.0416 4.16699C11.0416 3.82533 11.325 3.54199 11.6666 3.54199H16.6666C17.0083 3.54199 17.2916 3.82533 17.2916 4.16699C17.2916 4.50866 17.0083 4.79199 16.6666 4.79199Z"
            fill="white"
          />
          <path
            d="M14.1666 7.29199H11.6666C11.325 7.29199 11.0416 7.00866 11.0416 6.66699C11.0416 6.32533 11.325 6.04199 11.6666 6.04199H14.1666C14.5083 6.04199 14.7916 6.32533 14.7916 6.66699C14.7916 7.00866 14.5083 7.29199 14.1666 7.29199Z"
            fill="white"
          />
          <path
            d="M9.58329 18.1253C4.87496 18.1253 1.04163 14.292 1.04163 9.58366C1.04163 4.87533 4.87496 1.04199 9.58329 1.04199C9.92496 1.04199 10.2083 1.32533 10.2083 1.66699C10.2083 2.00866 9.92496 2.29199 9.58329 2.29199C5.55829 2.29199 2.29163 5.56699 2.29163 9.58366C2.29163 13.6003 5.55829 16.8753 9.58329 16.8753C13.6083 16.8753 16.875 13.6003 16.875 9.58366C16.875 9.24199 17.1583 8.95866 17.5 8.95866C17.8416 8.95866 18.125 9.24199 18.125 9.58366C18.125 14.292 14.2916 18.1253 9.58329 18.1253Z"
            fill="white"
          />
          <path
            d="M18.3333 18.9585C18.175 18.9585 18.0166 18.9002 17.8916 18.7752L16.225 17.1085C15.9833 16.8669 15.9833 16.4669 16.225 16.2252C16.4666 15.9835 16.8666 15.9835 17.1083 16.2252L18.775 17.8919C19.0166 18.1335 19.0166 18.5335 18.775 18.7752C18.65 18.9002 18.4916 18.9585 18.3333 18.9585Z"
            fill="white"
          />
        </svg>
      </button>

      <button className="flex items-center bg-white border border-primary rounded-xl py-3 px-4 mt-2 text-primary text-sm font-bold">
        الخريطة الرقمية للمخططات
      </button>
    </form>
  );
};

export default FilterControls;
