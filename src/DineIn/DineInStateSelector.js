import React,{useState} from 'react'

export default function DineInStateSelector() {
    const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const states = ['Andhra Pradesh', 'Telengana', 'Karnataka', 'Maharastra'];
  const cities = {
    'Andhra Pradesh': ['Vizag', 'Kakinada', 'Rajahmundry','Vijayawada'],
    'Telengana': ['Hyderabad', 'Warangal', 'Siddipet', 'Nizamabad'],
    'Karnataka': ['Raichur', 'Banglore', 'Manglore', 'Mysore'],
    'Maharastra': ['Mumbai', 'Pune', 'Nagpur','Solapur'],
  };
  const cityRedirects = {
    'Hyderabad': '/DineIn/telangana/hyderabad',
    'Warangal': '/telangana/warangal',
    'Siddhipet': '/telangana/siddhipet',
    'Nizamabad': '/telangana/nizamabad'
  };
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity('');
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);


    const cityUrl = cityRedirects[e.target.value];
    if (cityUrl) {
      window.location.href = cityUrl;
    }
  };
  return (
    <div className='textselect2'>
    <div className='text-dropdown-input'>
      <label htmlFor="state"></label>
      <select id="state" value={selectedState} onChange={handleStateChange}>
        <option value="" >-Select State-</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>

    {selectedState && (
      <div className='secondDropDownCity'>
        <label htmlFor="city"></label>
        <select id="city" value={selectedCity} onChange={handleCityChange}>
          <option value="">-Select City-</option>
          {cities[selectedState].map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    )}

 
    {/* {selectedCity && (
      <div>
        <a href={cityRedirects[selectedCity]}>{selectedCity}</a>
      </div>
    )} */}
  </div>
);
};
