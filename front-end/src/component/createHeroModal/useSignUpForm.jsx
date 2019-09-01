import {useState} from 'react';

const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({});
    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
      }
      callback();
    }
    const handleInputChange = (event) => {
      event.persist();
      if(event.target.id === 'outlined-button-file'){
        setInputs(inputs => ({...inputs, [event.target.id]: event.target.files[0]}));
      } else{
        setInputs(inputs => ({...inputs, [event.target.id]: event.target.value}));
      }
    }
    return {
      handleSubmit,
      handleInputChange,
      inputs
    };
  }

export default useSignUpForm;