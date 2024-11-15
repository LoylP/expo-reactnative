import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const App = () => {
  const videoUrl = 'http://192.168.1.3:8080/video';

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: videoUrl }}
        style={styles.camera}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: '95%',
    height: '80%',
    backgroundColor: '#000',
    borderRadius: 10,
  },
});

export default App;
