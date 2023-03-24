import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';


const login = async() =>{
}

export default function App() {

  const [user, onChangeUser] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <SafeAreaView  style={styles.container}>
           
      <TextInput
        style={styles.input}
        onChangeText={onChangeUser}
        value={user}
        placeholder="example@email.com"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="password"
        
      />

      <TouchableOpacity
        onPress={login}
        style={styles.button}>
          <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    borderRadius:5,
    padding: 10,
  },
  button:{
    marginTop: 10,
    marginBottom: 8,
    width: 170,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange'
  },
  textButton:{
    color: "white"
  }
});
