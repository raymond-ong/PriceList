import React from 'react';
import {
  Button,
  TouchableHighlight,
  View,
  SafeAreaView, // To make sure we don't display anything on the notch of the phone
  StyleSheet,
  Text,
  TextInput
} from 'react-native';
import { useForm, Controller } from "react-hook-form";
import SupplierDropdown from '../components/SupplierDropdown';
import SupplierDropdown2 from '../components/SupplierDropdown2';

function CreateScreen() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          firstName: '',
          lastName: ''
        }
      });

    const onSubmit = data => console.log('[OnSubmit]', data);

    // Form UI - start
    return <View style={styles.mainContainer}>
        {/* [A] Product Name*/}
        <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Product Name:</Text>
            <Controller
            control={control}
            rules={{
            required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style = {styles.textField}
            />
            )}
            name="productName" // will be used during onSubmit
        />
            {errors.firstName && <Text style={styles.fieldError}>*This is required</Text>}
        </View>

      {/* [B] Product Type*/}
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Product Type:</Text>
        <Controller
            control={control}
            rules={{
            maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style = {styles.textField}
            />
            )}
            name="productType"
        />
      </View>

      {/* [C] Supplier*/}
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Supplier:</Text>
        <Controller
            control={control}
            rules={{
            maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
                //<SupplierDropdown/>
                <SupplierDropdown2 
                    onChange={onChange}
                    value={value}
                    onBlur={onBlur}
                />
            )}
            name="supplier"
        />
      </View>      

      {/* [D] Submit Button */}
      <TouchableHighlight title="Submit" onPress={handleSubmit(onSubmit)}  style = {styles.submitBtnContainer}>
        <View>
            <Text style = {styles.submitBtnText}>
                Submit
            </Text>
        </View>
      </TouchableHighlight>
    </View>
    // Form UI - end
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10
    },
    fieldContainer: {
        marginBottom: 10
    },
    fieldLabel: {
        fontWeight: 'bold'
    },
    textField: {
        borderWidth : 1,
        //borderColor: 'blue',
        borderColor: '#c5cacf',
        borderRadius: 5,        
        fontSize: 18,
        backgroundColor: "#f5faff"
    },
    // TODO: Change the border color onblur/onactive
    textFieldActive: {
        borderColor: 'blue'
    },
    textFieldInactive: {
        borderColor: 'gray',        
    },
    submitBtnContainer: {
        marginTop: 10,
        backgroundColor: "blue",
        borderRadius: 5,
        padding: 8,                
    },
    submitBtnText: {
        fontWeight: 'bold',
        textAlign: "center",
        color: 'white',
        fontSize: 18,
    },
    fieldError: {
        color: 'red',
        textAlign: 'right',
        marginRight: 10
    }
});


export default CreateScreen;