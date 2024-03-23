import { PieChart } from "react-native-chart-kit";
import FlexBox from "../@common/FlexBox";
import { Pressable, View } from "react-native";
import Typography from "../@common/Typography";
import { spacing } from "@/constants/spacing";
import { useNavigation } from "@react-navigation/native";

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

const Legend = ({
  data,
  index,
}: {
  index: number;
  data: {
    id: string;
    name: string;
    percentage: number;
  };
}) => {
  const navigation = useNavigation();

  const onPress = () => {
    console.log("pressed legedn");

    navigation.navigate("TestDetail", {
      love_id: data.id,
      name: data.name,
    });
  };

  return (
    <Pressable onPress={onPress}>
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
        <Typography size="md">{data.percentage}%</Typography>
        <Typography size="md">{data.name}</Typography>
      </FlexBox>
    </Pressable>
  );
};
export const MyPieChart = ({
  title,
  data,
}: {
  title: string;
  data: {
    love_id: string;
    name: string;
    percentage: number;
  }[];
}) => {
  const pieData = data.map((d) => ({
    id: d.love_id,
    name: d.name,
    percentage: d.percentage,
    color: COLORS[data.indexOf(d)],
  }));

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
          data={pieData}
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
          {pieData.map((d, index) => (
            <Legend
              index={index}
              key={Math.random().toString(36).substring(7)}
              data={d}
            />
          ))}
        </View>
      </FlexBox>
    </>
  );
};
