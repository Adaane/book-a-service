import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';
import { Input } from 'antd';

const API_KEY = "AIzaSyBVB4oxTZoBpcvt3NbYIHQVLqhAmfuaioE"

const UserAddressContainer = props => {

  const [query, setQuery] = useState('')

  let autocomplete = ""

  const handleScriptLoad = () => {
    // Declare Options For Autocomplete 

    // Initialize Google Autocomplete 
    /*global google*/
    autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'));
    // Fire Event when a suggested name is selected
    autocomplete.addListener('place_changed',
      handlePlaceSelect);
  }

  const handlePlaceSelect = () => {
    let addressObject = autocomplete.getPlace();    
    setQuery(addressObject.formatted_address)
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }



  return (
    <div>
      <Script url={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`}
        onLoad={handleScriptLoad}
      /> 
      <Input placeholder="Rechercher une adresse" 
        allowClear 
        onChange={handleChange}
        className="input-field"
        id="autocomplete"
        hintText="Search City"
        value={query}
        type="text" />
    </div>
  );
};

UserAddressContainer.propTypes = {
  
};

export default UserAddressContainer;