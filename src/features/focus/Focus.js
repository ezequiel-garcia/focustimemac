import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes.js';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What would you like to focus on? </Text>
        <View style={styles.inputConteiner}>
          <TextInput
            style={styles.text}
            value={subject}
            onChangeText={(tmpItem) => {
              setSubject(tmpItem);
            }}
          />
          <RoundedButton
            size={50}
            title="+"
            onPress={() => {
              addSubject(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  innerContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  text: {
    flex: 1,
    marginRight: spacing.md,
  },
  inputConteiner: {
    paddingTop: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
