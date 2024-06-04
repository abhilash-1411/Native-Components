
import React from 'react';
import CompanyData from './components/CompanyData';


import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';           

const App=()=> {
  return (
    <View>
    <Text>Components</Text>
      <Button title='Press Me'></Button>
      <UserData/>
      <CompanyData/>
    </View>

  );
}

const UserData=()=>{
  return(
    <View>
      <Text style={{fontSize:20}}>Name:Abhilash</Text>
      <Text style={{fontSize:20}}>Age:22</Text>
      <Text style={{fontSize:20}}>Email:abhi@gmail.com</Text>
    </View>
  )
}





export default App;
