import { THEME } from "@/constants/theme";
import { Shadow } from "react-native-shadow-2";

export default function ShadowForProgressBar({
  children,
  radius,
}: {
  children: React.ReactNode;
  radius?: number;
}) {
  return (
    <Shadow
      distance={5}
      offset={[0, 2.5]}
      startColor={THEME.palette.shadow}
      style={{
        borderRadius: radius ? radius : 30,
        width: "100%",
      }}
    >
      {children}
    </Shadow>
  );
}
