import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test('is-1-5', 'Rating must be a number 1-5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          // actions contain some methods to call on form
          actions.resetForm();
          addReview(values);
        }}>
        {/* Formik provides these props automatically (any name accepted) */}
        {(formikProps) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              // this handles/changes the state behind the scenes for us
              onChangeText={formikProps.handleChange('title')}
              // this
              value={formikProps.values.title}
              onBlur={formikProps.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>{formikProps.touched.title && formikProps.errors.title}</Text>
            <TextInput
              multiline
              minHeight={100}
              style={globalStyles.input}
              placeholder='Review body'
              onChangeText={formikProps.handleChange('body')}
              value={formikProps.values.body}
              onBlur={formikProps.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}>{formikProps.touched.body && formikProps.errors.body}</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Rating (1-5)'
              onChangeText={formikProps.handleChange('rating')}
              value={formikProps.values.rating}
              keyboardType='numeric'
              onBlur={formikProps.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>{formikProps.touched.rating && formikProps.errors.rating}</Text>
            <FlatButton
              text='submit'
              //this runs the function 'onSubmit'
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
