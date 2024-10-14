import React from 'react';
import { useForm } from 'react-hook-form';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANVtBYYRLvLjgSiJcobw35bHmPepAwChU",
    authDomain: "portfolio-39293.firebaseapp.com",
    projectId: "portfolio-39293",
    storageBucket: "portfolio-39293.appspot.com",
    messagingSenderId: "179277164385",
    appId: "1:179277164385:web:faf485cd87c6bfe0f35f20",
    measurementId: "G-HRWJLFHN4C"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ContactForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFormSubmission = async (data) => {
    try {
      // Add form data to Firestore
      await addDoc(collection(db, 'submissions'), data);
      onSubmit(); // Notify parent component to show portfolio
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmission)} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
      <label>Name:</label>
      <input type="text" {...register("name", { required: true })} />
      {errors.name && <span>This field is required</span>}

      <label>Email:</label>
      <input type="email" {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}

      <label>Phone Number:</label>
      <input type="tel" {...register("phone")} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
