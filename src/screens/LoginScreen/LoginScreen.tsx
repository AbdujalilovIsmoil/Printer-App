import { useState } from 'react';
import { RootStackParamList } from '../../shared/types';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Text,
  View,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface FormProps {
  login: string;
  password: string;
}

const LoginScreen = () => {
  const [isVisibility, setIsVisibility] = useState<boolean>(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [formValues, setFormValues] = useState<FormProps>({
    login: '',
    password: '',
  });

  const sendFormValues = () => {
    if (formValues.login === '' || formValues.password === '') {
      Alert.alert(
        "Ma'lumotlar bo'sh",
        "Login yokida parolni kiritishingiz kerak bo'ladi.",
      );
    } else {
      navigation.navigate('home');

      setFormValues({ login: '', password: '' });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Kirish</Text>
        <Text style={styles.contentText}>
          Ishchi loginingizga xush kelibsiz
        </Text>
      </View>
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <View style={styles.formLabel}>
            <Text style={styles.formLabelText}>Kirish</Text>
          </View>
          <View>
            <TextInput
              autoCorrect={false}
              keyboardType="default"
              value={formValues.login}
              style={styles.formGroupInput}
              placeholder="Kirish kodini kiriting"
              onChangeText={value => {
                setFormValues({ ...formValues, login: value });
              }}
            />
          </View>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formLabel}>
            <Text style={styles.formLabelText}>Parol</Text>
          </View>
          <View style={styles.formBox}>
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              value={formValues.password}
              secureTextEntry={!isVisibility}
              placeholder="Parolingizni kiriting"
              style={[styles.formGroupInput, { paddingRight: 45 }]}
              onChangeText={value => {
                setFormValues({ ...formValues, password: value });
              }}
            />
            <TouchableOpacity
              style={styles.formBoxIconContainer}
              onPress={() => setIsVisibility(prevIsVisible => !prevIsVisible)}
            >
              <Icon
                size={30}
                color="#005146"
                name={isVisibility ? 'visibility-off' : 'visibility'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.formSubmit} onPress={sendFormValues}>
          <Text style={styles.formSubmitText}>Yuborish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    marginBottom: 30,
  },
  contentTitle: {
    fontSize: 32,
    marginBottom: 12,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  contentText: {
    fontSize: 16,
    fontWeight: '500',
  },
  form: {
    width: '100%',
  },
  formGroup: {
    width: '100%',
    marginBottom: 20,
  },
  formGroupInput: {
    padding: 10,
    width: '100%',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 12,
    paddingRight: 12,
    textAlign: 'left',
    borderStyle: 'solid',
    borderColor: '#767a7f',
  },
  formLabel: {},
  formLabelText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  formSubmit: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#005146',
  },
  formSubmitText: {
    fontSize: 14,
    letterSpacing: 1,
    color: '#ffffff',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  formBox: {
    position: 'relative',
  },
  formBoxIconContainer: {
    top: 5,
    right: 10,
    position: 'absolute',
  },
});
