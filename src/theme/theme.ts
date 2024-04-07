import { PaletteColor, PaletteColorOptions, createTheme } from "@mui/material";

// カスタムカラーを使うためにMUIの型を拡張
declare module "@mui/material/styles" {
  interface Palette {
    incomeColor: PaletteColor;
    expenseColor: PaletteColor;
    balanceColor: PaletteColor;
  }
  // createThemeでテーマを作成する際の初期設定のようなもの（PaletteColorOptionsの場合、そのプロパティーが必須ではなくなる）
  // ?（オプショナル）をつけることで、そのプロパティーが存在しなくてもエラーが起きない
  interface PaletteOptions {
    incomeColor?: PaletteColorOptions;
    expenseColor?: PaletteColorOptions;
    balanceColor?: PaletteColorOptions;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans JP, Roboto, "Helvetica Neue", Arial, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  // MUIでカスタムカラーを作成
  palette: {
    incomeColor: {
      main: "#2196f3",
      light: "#bbdefb",
      dark: "#1976d2",
    },
    expenseColor: {
      main: "#f44336",
      light: "#ffcdd2",
      dark: "#d32f2f"
    },
    balanceColor: {
      main: "#4caf50",
      light: "#c8e6c9",
      dark: "#388e3c",
    }
  }
})
