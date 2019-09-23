import axios from 'axios';

/* 
function that take in the Token 
 - check if the Token is in the local storage 
	 - yes, add to the header
	 - no, delete it from the header
 */

const setAuthToken = token => {
  if (token) {
    // if in the local storage
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    // if not a token - delete it
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
