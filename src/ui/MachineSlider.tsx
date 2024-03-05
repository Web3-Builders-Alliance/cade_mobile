import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";

const { height, width } = Dimensions.get("window");
const MachineSlider = () => {
  const [data, setData] = useState([1, 1, 1, 1, 1, 1]);
  const [currentIndex,setCurrentIndex] = useState(0)
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ height: height / 2}}>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x/width).toFixed(0));
          }}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width: width - 50,
                  height: height / 2,
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <TouchableOpacity
                  disabled={false}
                  style={{
                    width: "90%",
                    height: "90%",
                    backgroundColor: "red",
                    borderRadius: 10,
                  }}
                ></TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: width,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.map((item, index) => {
          return <View
          style={{
            width : currentIndex==index ?30 : 8,
            height : currentIndex==index ?10 : 8,
            borderRadius : currentIndex==index ?5 : 4,
            backgroundColor : currentIndex==index ? "red" : "white",
            marginLeft : 5
          }}
          >
          </View>;
        })}
      </View>
    </View>  
  );
};

export default MachineSlider;
