import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = '01 Metro Boomin = I Am...';
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}/>
        <Text style={styles.title}>
          <Text style={styles.subtitle}>Reproduciendo: </Text> {name}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop:100,
    backgroundColor: '#6424CC',
    borderRadius:5,
  },
  innerContainer:{
    backgroundColor:"#9954ff",
    height:50,
    width:150,
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
  },
  title:{
    fontSize:18,
    fontWeight:'200',
    color:'#fff',
    position: "absolute",
    backgroundColor: "transparent",
    top:12,
    left:10,
  },
  subtitle:{
    fontWeight:"bold",
  }
});
