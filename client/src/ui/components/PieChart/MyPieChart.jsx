import { useMediaQuery } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

export default function MyPieChart() {
  const isMobile = useMediaQuery("(max-width:600px)");

  const props = {
    width: isMobile ? 150 : 200,
    height: 200,
  };

  return (
    <PieChart
      {...props}
      series={[
        {
          data: [
            { id: 0, value: 10, label: "Gamers" },
            { id: 1, value: 15, label: "Users" },
            { id: 2, value: 20, label: "Programmers" },
          ],
          type: "pie",
          arcLabel: "label",
        },
      ]}
    />
  );
}
