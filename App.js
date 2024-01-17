
import { Text, View, Image, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import CustomInput from './custominput'
import React, { useState } from 'react'; 

// Import komponen Card jika Anda ingin menggunakannya
// import { Card } from 'react-native-paper';

// Import komponen AssetExample jika Anda ingin menggunakannya
// import AssetExample from './components/AssetExample';

export default function App() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const likefunction = () => {
    setLike(like + 1);
  };
  const dislikefunction = () => {
    setDislike(dislike + 1);
  };
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('./assets/naj.jpeg')}
      />
      <Text style={styles.title}>Reren Nur Najma</Text>
      <Text style={styles.subTitle}>
        Hallo, saya Reren Nur Najma,
        Umurku 17 tahun. kelas 12 sekolah di SMK Telkom Purwokerto, 
        jurusan Rekayasa Perangkat Lunak.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('hallo')}>
        <Text style={styles.textButton}>Contact Me</Text>
      </TouchableOpacity>
      <Text style={styles.projectTitle}>My Recent Project</Text>
      <Image
        style={styles.projecfoto2}
        source={require('./assets/film1.png')}
        
      />
      
      <Image
        style={styles.projecfoto2}
        source={require('./assets/film2.png')}
      />
      <Image
        style={styles.projecfoto2}
        source={require('./assets/film3.png')}
      />
      <Text style={styles.text2}>{like}</Text>
        <TouchableOpacity style={styles.button3} onPress={likefunction}>
          <Image style={styles.avatar4} source={require('./assets/like.png')}/>
        </TouchableOpacity>
        <Text style={styles.text3}>{dislike}</Text>
        <TouchableOpacity style={styles.button4} onPress={dislikefunction}>
          <Image style={styles.avatar5} source={require('./assets/dislike.png')} />
        </TouchableOpacity>
    
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#CE5A67",
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'black',
    fontSize: 20, 
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 7

  },
  subTitle: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingBottom: 10,
    textAlign: 'center',
    marginBottom: 10

  },
  avatar: {
    width: 200,
    height: 300,
    borderRadius: 200,
  },
   button: {
    backgroundColor: '#ffff',
    width: 125,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
      textButton: {
        fontWeight: 'bold',
        color: 'blue'
      },
  projectTitle: {
    color: 'black',
    fontSize: 25, 
    fontWeight: 'bold',
    marginTop: 20,
  },

   projecfoto2: {
    width: 300,
    height: 300,
    rectangle: 300,
    marginTop: 20,
   },
   text2: {
    marginTop: 30,
    marginLeft: -80,
    fontSize: 20,
  },
   avatar4: {
    width: 45,
    height: 45,
    marginTop: -40,
    marginLeft: 20
   },
    text3: {
    marginTop: -30,
    marginRight: -115,
    fontSize: 20,
  },
   avatar5: {
    width: 42,
    height: 42,
    marginTop: -35,
    marginLeft: 200,
  }
});