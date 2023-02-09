import React, { useState } from "react";
import { Text, TouchableWithoutFeedback } from "react-native";
import { View } from "react-native";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState("today");
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
      }}
    >
      <TouchableWithoutFeedback onPress={() => setSelectedTab("today")}>
        <View>
          <Text style={{ marginBottom: 10 }}>Today</Text>
          <View
            style={{
              width: "100%",
              height: 3,
              backgroundColor: selectedTab === "today" ? "red" : "#ffff",
            }}
          ></View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setSelectedTab("monthly")}>
        <View>
          <Text style={{ marginBottom: 10 }}>Monthly</Text>
          <View
            style={{
              width: "100%",
              height: 3,
              backgroundColor: selectedTab === "monthly" ? "red" : "#ffff",
            }}
          ></View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setSelectedTab("yearly")}>
        <View>
          <Text style={{ marginBottom: 10 }}>Yearly</Text>
          <View
            style={{
              width: "100%",
              height: 3,
              backgroundColor: selectedTab === "yearly" ? "red" : "#ffff",
            }}
          ></View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setSelectedTab("future")}>
        <View>
          <Text style={{ marginBottom: 10 }}>Future</Text>
          <View
            style={{
              width: "100%",
              height: 3,
              backgroundColor: selectedTab === "future" ? "red" : "#ffff",
            }}
          ></View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Tabs;
