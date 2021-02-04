import React, {
  useState,
} from 'react';

import {
  Text,
  View,
  TextInput,
} from 'react-native';

import styles from './styles';

function Home() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dni, setDNI] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <TextInput
        style={styles.field}
        onChangeText={function(text) {
          setFirstName(text);
        }}
        value={firstName}
        maxLength={20}
        placeholder="Inserte su nombre"
        placeholderTextColor="#ff0000"
      />
      <TextInput
        style={styles.field}
        onChangeText={(text) => setLastName(text)}
        value={lastName}
        maxLength={20}
        caretHidden={true}
        placeholder="Inserte su apellido"
      />

      <TextInput
        style={styles.field}
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCompleteType="email"
        keyboardType="email-address"
        placeholder="Inserte su e-mail"
      />

      <TextInput
        style={styles.field}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Inserte su password"
        secureTextEntry
      />

      <TextInput
        style={styles.field}
        onChangeText={(text) => setDNI(text)}
        value={dni}
        keyboardType="numeric"
        placeholder="Inserte su DNI"
      />

    <TextInput
        style={styles.field}
        onChangeText={(text) => setNotes(text)}
        value={notes}
        multiline
        placeholder="Inserte sus comentarios"
      />
      <Text>{`Hola ${firstName} ${lastName}`}</Text>
      <Text>Hi {firstName} {lastName}</Text>
    </View>
  );
}

export default Home;
