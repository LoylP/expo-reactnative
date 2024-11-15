import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Page = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* <ImageBackground source={require('../assets/images/sample.jpg')} style={{width: '95%', height: '80%', backgroundColor: '#000', borderRadius: 10}}> */}
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          paddingBottom: 50,
          paddingHorizontal: 30,
          gap: 10,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "600",
            textAlign: "center",
            letterSpacing: 1.5,
            lineHeight: 36,
          }}
        >
          Welcome App
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            fontWeight: "500",
            textAlign: "center",
            letterSpacing: 1.2,
            lineHeight: 22,
          }}
        >
          This is an application used to manage area monitoring and possible
          event actions.
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "crimson",
            paddingVertical: 15,
            marginVertical: 20,
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={() => router.replace("/(tabs)")}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#000",
  },
});
