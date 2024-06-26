import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icons from "./Icons";
import styled, { useTheme } from "styled-components/native";
import Typography from "./Typography";
import { useNavigation } from "@react-navigation/native";
import { spacing } from "@/constants/spacing";

const Container = styled.View<{ notchTop: number }>`
  padding: ${(props) => props.notchTop + spacing.offset}px ${spacing.offset}px
    ${spacing.small}px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: "red";
`;

const Blank = styled.View`
  width: 35px;
  height: 35px;
`;

const PageHeader = ({
  headerLeftShown = true,
  headerLeft,
  headerRight,
  title,
}: {
  headerLeftShown?: boolean;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
  title?: string;
}) => {
  const { top: NOTCH_TOP } = useSafeAreaInsets();

  const theme = useTheme();
  const navigation = useNavigation();

  const headerLeftColor = theme.palette.black;

  const HeaderLeft = () => (
    <Icons
      type="feather"
      name="chevron-left"
      size={35}
      color={headerLeftColor}
      onPress={() => {
        navigation.goBack();
      }}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    />
  );

  return (
    <Container notchTop={NOTCH_TOP}>
      {headerLeftShown ? headerLeft ? headerLeft : <HeaderLeft /> : <Blank />}
      {title && (
        <Typography size="lg" weight="regular">
          {title}
        </Typography>
      )}
      {headerRight ? headerRight : <Blank />}
    </Container>
  );
};

export default PageHeader;
