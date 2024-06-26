import useResponsiveSize from "@/utils/useResponsiveSize";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { Image, TouchableOpacity } from "react-native";

export type IconProps = {
  type:
    | "material"
    | "ionicons"
    | "feather"
    | "entypo"
    | "materialIcons"
    | "fontAwesome"
    | "AntDesign";
  name: string;
  size?: number;
  color?: string;
  onPress?: () => void;
  hitSlop?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  style?: any;
};

const Icons: React.FC<IconProps> = ({
  type = "material",
  name,
  size = useResponsiveSize(20),
  color = "black",
  onPress,
  hitSlop,
  style,
}) => {
  let IconComponent: any;
  if (type === "material") IconComponent = MaterialCommunityIcons;
  else if (type === "ionicons") IconComponent = Ionicons;
  else if (type === "feather") IconComponent = Feather;
  else if (type === "entypo") IconComponent = Entypo;
  else if (type === "materialIcons") IconComponent = MaterialIcons;
  else if (type === "fontAwesome") IconComponent = FontAwesome;
  else if (type === "AntDesign") IconComponent = AntDesign;
  else return null;

  return (
    <TouchableOpacity
      onPress={onPress ? onPress : undefined}
      disabled={!onPress}
      hitSlop={hitSlop}
      style={style}
    >
      <IconComponent name={name} size={useResponsiveSize(size)} color={color} />
    </TouchableOpacity>
  );
};

export default Icons;

export const IconsPic = ({
  source,
  size,
  onPress,
  hitSlop,
}: {
  source: any;
  size: number;
  onPress?: () => void;
  hitSlop?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}) => {
  return (
    <TouchableOpacity
      onPress={onPress ? onPress : undefined}
      disabled={!onPress}
      hitSlop={hitSlop}
    >
      <Image
        source={source}
        style={{
          width: useResponsiveSize(size),
          height: useResponsiveSize(size),
          resizeMode: "contain",
        }}
      />
    </TouchableOpacity>
  );
};
