import { THEME } from "@/constants/theme";
import Slider from "@react-native-community/slider";
import React from "react";
import { Platform } from "react-native";
import SliderThumb from "../../../assets/images/slider-thumb.png";
import SliderThumbAndroid from "../../../assets/images/slider-thumb_3.png";
import { useAppDispatch, useAppSelect } from "@/store/configureStore.hooks";
import { setLovePercentage } from "@/store/modules/test";

const PercentSlider = ({ id }: { id: number }) => {
  const dispatch = useAppDispatch();

  const sliderThumbImage =
    Platform.OS === "ios" ? SliderThumb : SliderThumbAndroid;

  const { love } = useAppSelect((state) => state.test.result);
  const sliderValue = love.find((item) => item.id === id)?.percentage || 0;

  const onChangeSliderValue = (value: number) => {
    dispatch(setLovePercentage({ id, percentage: value }));
  };

  return (
    <Slider
      minimumValue={0}
      maximumValue={100}
      onValueChange={onChangeSliderValue}
      minimumTrackTintColor={"black"}
      maximumTrackTintColor={THEME.palette.gray}
      step={10}
      tapToSeek={true}
      value={sliderValue}
      thumbImage={sliderThumbImage}
    ></Slider>
  );
};

export default PercentSlider;
