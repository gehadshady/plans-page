import {
  DataGrid,
  gridPageCountSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import MuiPagination from "@mui/material/Pagination";
import type { TablePaginationProps } from "@mui/material/TablePagination";
import type { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "city",
    headerName: "المدينة / الحي",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "plotId",
    headerName: "رقم القطعة",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "planId",
    headerName: "رقم المخطط",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "area",
    headerName: "المساحة",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "map",
    headerName: "عرض على الخريطة",
    flex: 1,
    align: "center",
    headerAlign: "center",
    sortable: false,
    renderCell: () => (
      <div className="h-full flex cursor-pointer items-center justify-center">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="26" height="26" rx="4" fill="#F0E7FE" />
          <path
            d="M15 18.78C14.8734 18.78 14.7467 18.7333 14.6467 18.6333L10.3 14.2867C9.59335 13.58 9.59335 12.42 10.3 11.7133L14.6467 7.36668C14.84 7.17335 15.16 7.17335 15.3534 7.36668C15.5467 7.56001 15.5467 7.88001 15.3534 8.07335L11.0067 12.42C10.6867 12.74 10.6867 13.26 11.0067 13.58L15.3534 17.9267C15.5467 18.12 15.5467 18.44 15.3534 18.6333C15.2534 18.7267 15.1267 18.78 15 18.78Z"
            fill="#6610F2"
          />
        </svg>
      </div>
    ),
  },
];

const rows = [
  { id: 1, city: "الرياض / نجد", plotId: 19, planId: 889, area: "5984 م²" },
  { id: 2, city: "الرياض / نجد", plotId: 13, planId: 456, area: "5984 م²" },
  { id: 3, city: "الرياض / نجد", plotId: 12, planId: 897, area: "5984 م²" },
  { id: 4, city: "الرياض / نجد", plotId: 34, planId: 234, area: "5984 م²" },
  { id: 5, city: "الرياض / نجد", plotId: 45, planId: 897, area: "5984 م²" },
  { id: 6, city: "الرياض / نجد", plotId: 43, planId: 887, area: "5984 م²" },
  { id: 7, city: "الرياض / نجد", plotId: 23, planId: 234, area: "5984 م²" },
  { id: 8, city: "الرياض / نجد", plotId: 23, planId: 234, area: "5984 م²" },
  { id: 9, city: "الرياض / نجد", plotId: 23, planId: 234, area: "5984 م²" },
  { id: 10, city: "الرياض / نجد", plotId: 23, planId: 234, area: "5984 م²" },
  { id: 11, city: "الرياض / نجد", plotId: 23, planId: 234, area: "5984 م²" },
  { id: 12, city: "الرياض / نجد", plotId: 23, planId: 234, area: "5984 م²" },
  { id: 13, city: "الرياض / نجد", plotId: 23, planId: 234, area: "5984 م²" },
  { id: 14, city: "الرياض / نجد", plotId: 23, planId: 234, area: "5984 م²" },
  { id: 15, city: "الرياض / نجد", plotId: 23, planId: 234, area: "5984 م²" },
  { id: 16, city: "الرياض / نجد", plotId: 23, planId: 234, area: "5984 م²" },
  { id: 17, city: "الرياض / نجد", plotId: 23, planId: 234, area: "5984 م²" },
  { id: 18, city: "الرياض / نجد", plotId: 23, planId: 234, area: "5984 م²" },
  { id: 19, city: "الرياض / نجد", plotId: 23, planId: 234, area: "5984 م²" },
  { id: 20, city: "الرياض / نجد", plotId: 23, planId: 234, area: "5984 م²" },
  { id: 21, city: "الرياض / نجد", plotId: 23, planId: 234, area: "5984 م²" },
  { id: 22, city: "الرياض / نجد", plotId: 23, planId: 234, area: "5984 م²" },
];

function Pagination({
  page,
  onPageChange,
  className,
}: Pick<TablePaginationProps, "page" | "onPageChange" | "className">) {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <MuiPagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event as any, newPage - 1);
      }}
    />
  );
}

export default function CustomPaginationGrid() {
  // export default function StyledArabicTable() {
  return (
    <div dir="rtl" style={{ height: 420, width: "100%" }}>
      <DataGrid
        slotProps={{
          basePagination: {
            material: {
              ActionsComponent: Pagination,
            },
          },
        }}
        rows={rows}
        columns={columns.map((col) => ({ ...col, sortable: false }))}
        pageSizeOptions={[6]}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 6 } },
        }}
      />
    </div>
  );
}
