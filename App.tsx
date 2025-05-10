import{useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
 
export default function App() {
const[peso, setPeso] = useState('');
const[altura, setAltura] = useState('');

const[resultado, setResultado] = useState('');
 
  function calcularImc(){
    let msg = "";
    let alturaEmMetro = parseFloat(altura)/100;
    let result = parseFloat(peso)/(alturaEmMetro * alturaEmMetro);

    if(result < 18.5){
      msg = "Abaixo do peso"
    } else if(result <= 24.99) {
      msg = "Peso ideal"
    } else if(result <= 29.99) {
      msg = "Levemente acima do peso"
    } else if(result <= 34.99) {
      msg = "Obesidade grau I"
    } else if(result <= 39.99) {
      msg = "Obesidade grau II"
    } else if(result > 40) {
      msg = "Obesidade grau III"
    }

    setResultado("Valor do IMC: "+result.toFixed(2)+"\n"+msg);
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> IMC </Text>
     
      <View style={styles.bloco}>
          <Text style={styles.label}>Peso</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={peso}
            onChangeText={(valor)=>setPeso(valor)}
          />
      </View>
      <View style={styles.bloco}>
          <Text style={styles.label} >Altura</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={altura}
            onChangeText={(valor)=>setAltura(valor)}
           
          />
      </View>
      <View style={styles.bloco}>
          <TouchableOpacity style={styles.btn} onPress={calcularImc} >
              <Text style={styles.btnTxt}>Calcular</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.titulo}>{resultado}</Text>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  titulo:{
    textAlign:'center',
    fontSize:30,
    marginTop:80
  },
  bloco:{
    width:'100%',
    marginTop:20
  },
  label:{
    width:'80%',
    fontSize:20,
    marginLeft:'10%'
  },
  input:{
    width:'80%',
    fontSize:20,
    marginLeft:'10%',
    borderWidth:1,
    borderRadius:10
  },
  btn:{
    width:'80%',
    marginLeft:'10%',
    backgroundColor:'#000'
  },
  btnTxt:{
    fontSize:30,
    color:"#FFF",
    textAlign:'center'
  }
});