import { PieChart } from "react-native-chart-kit";
import FlexBox from "../@common/FlexBox";
import { View } from "react-native";
import Typography from "../@common/Typography";
import { spacing } from "@/constants/spacing";

const COLORS = [
  "rgba(131, 167, 234, 1)",
  "#FFC0CB",
  "#800080",
  "#98FF98",
  "#FFA500",
  "#FFD700",
  "#87CEEB",
  "rgb(0, 0, 255)",
  "#E6E6FA",
  "#FDD5B1",
  "#F00",
];

const data = [
  {
    name: "부모님",
    percentage: 20,
    color: COLORS[0],
  },
  {
    name: "연인",
    percentage: 40,
    color: COLORS[1],
  },
  {
    name: "나",
    percentage: 20,
    color: COLORS[2],
  },
];

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const Legend = ({ index }: { index: number }) => {
  return (
    <FlexBox
      alignItems="center"
      gap={spacing.padding}
      styles={{
        paddingVertical: spacing.small,
      }}
    >
      <View
        style={{
          width: 15,
          height: 15,
          backgroundColor: COLORS[index],
          borderRadius: 5,
          marginRight: 5,
        }}
      />
      <Typography size="md">{data[index].percentage}%</Typography>
      <Typography size="md">{data[index].name}</Typography>
    </FlexBox>
  );
};
export const MyPieChart = ({ title }: { title: string }) => {
  return (
    <>
      <Typography
        size="lg"
        weight="bold"
        styles={{
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <FlexBox
        styles={{
          paddingBottom: spacing.gutter,
        }}
      >
        <PieChart
          data={data}
          width={400}
          height={220}
          chartConfig={chartConfig}
          accessor={"percentage"}
          backgroundColor={"transparent"}
          paddingLeft={"0"}
          center={[0, 0]}
          absolute
          hasLegend={false}
        />
        <View
          style={{
            position: "absolute",
            right: 0,
            top: 20,
          }}
        >
          {data.map((d, index) => (
            <Legend index={index} key={d.name} />
          ))}
        </View>
      </FlexBox>
    </>
  );
};
