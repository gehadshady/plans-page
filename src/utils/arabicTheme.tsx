import { createTheme } from "@mui/material/styles";
import { arEG } from "@mui/material/locale";
import type {} from "@mui/x-data-grid/themeAugmentation";

const theme = createTheme(
  {
    direction: "rtl",
    typography: {
      fontFamily: "Almarai, sans-serif",
    },
    palette: {
      DataGrid: {
        bg: "#FFFFFF",
        headerBg: "#F5F5F5",
      },
    },
    components: {
      MuiTablePagination: {
        defaultProps: {
          labelDisplayedRows: ({ from, to, count }) => {
            const total = count !== -1 ? count : `أكثر من ${to}`;
            return `عرض ${from}–${to} من ${total}`;
          },
          labelRowsPerPage: "عدد الصفوف في الصفحة", // لو حبيتي تعربيها كمان
        },
      },
      MuiPagination: {
        styleOverrides: {
          root: {
            display: "flex",
            justifyContent: "center",
            padding: "8px",
            borderRadius: "12px",
            backgroundColor: "#fff",
          },
          ul: {
            gap: "8px",
          },
        },
      },
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            color: "#030311",
            borderRadius: "8px",
            fontFamily: "Cairo",
            fontWeight: 600,
            backgroundColor: "#F5F5F5",
            "&.Mui-selected": {
              backgroundColor: "#6610F2",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#520dc2",
              },
            },
          },

          previousNext: {
            backgroundColor: "transparent",
            color: "#6610F2",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#000",
            },
          },

          icon: {
            fontSize: "20px",
          },
        },
      },
      MuiDataGrid: {
        defaultProps: {
          disableColumnMenu: true,
          disableColumnResize: true,
        },
        styleOverrides: {
          virtualScroller: {
            minHeight: "unset !important",
            flexGrow: "unset !important",
          },
          root: {
            "&.MuiDataGrid-root": {},
            overflow: "hidden",
            border: "none",
            "& .MuiDataGrid-virtualScroller": {
              border: "1px solid #E5E7EB",
              borderRadius: 12,
            },
            "& .MuiDataGrid-columnSeparator": { display: "none" },
            "& .MuiDataGrid-sortIcon": { opacity: 0 },
            "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus": {
              outline: "none",
            },
          },
          row: {
            "&:nth-of-type(odd)": { backgroundColor: "#ffffff" },
            "&:nth-of-type(even)": { backgroundColor: "#F5F5F580" },
            "&.Mui-selected": { backgroundColor: "transparent" },
            "&:nth-of-type(odd):hover": { backgroundColor: "#ffffff" },
            "&:nth-of-type(even):hover": { backgroundColor: "#F5F5F580" },
            color: "#030311B2",
          },
          columnHeaderTitle: {
            color: "#4B5563",
            fontSize: "14px",
            fontWeight: 700,
          },
          footerContainer: {
            border: "none",
          },
        },
      },
    },
  },
  arEG
);

export default theme;
