import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [streamType, setStreamType] = useState('camera'); 
  const baseUrl = 'http://127.0.0.1:8000'; 

  const getStreamUrl = () => {
    switch(streamType) {
      case 'pose':
        return `${baseUrl}/pose`;
      case 'action':
        return `${baseUrl}/action`;
      default:
        return `${baseUrl}/camera`;
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: getStreamUrl() }}
        style={styles.camera}
        resizeMode="contain"
      />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, streamType === 'camera' && styles.activeButton]} 
          onPress={() => setStreamType('camera')}
        >
          <Text style={styles.buttonText}>Camera</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, streamType === 'pose' && styles.activeButton]} 
          onPress={() => setStreamType('pose')}
        >
          <Text style={styles.buttonText}>Pose</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, streamType === 'action' && styles.activeButton]} 
          onPress={() => setStreamType('action')}
        >
          <Text style={styles.buttonText}>Action</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9ff',
    alignItems: 'center',
    paddingVertical: 20,
  },
  camera: {
    width: '95%',
    height: '80%',
    backgroundColor: '#000',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#1d4ed8',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;