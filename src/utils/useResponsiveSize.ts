import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const useResponsiveSize = (fontSize: number) => {
  return Math.round((fontSize * windowWidth) / 430);
};

export default useResponsiveSize;
