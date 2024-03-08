import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const countryData = {
  'IND': {
    name: 'India',
    redirectUrl: '/DineInStates',
  },
  'USA': {
    name: 'United States',
    redirectUrl: 'https://example.com/usa',
  },
  'CHN': {
    name: 'China',
    redirectUrl: 'https://example.com/china',
  },
  'BRA': {
    name: 'Brazil',
    redirectUrl: 'https://example.com/brazil',
  },
  'RUS': {
    name: 'Russia',
    redirectUrl: 'https://example.com/russia',
  },
  'JPN': {
    name: 'Japan',
    redirectUrl: 'https://example.com/japan',
  },
  'DEU': {
    name: 'Germany',
    redirectUrl: 'https://example.com/germany',
  },
  'GBR': {
    name: 'United Kingdom',
    redirectUrl: 'https://example.com/uk',
  },
  'FRA': {
    name: 'France',
    redirectUrl: 'https://example.com/france',
  },
  'ITA': {
    name: 'Italy',
    redirectUrl: 'https://example.com/italy',
  },
  'CAN': {
    name: 'Canada',
    redirectUrl: 'https://example.com/canada',
  },
  'AUS': {
    name: 'Australia',
    redirectUrl: 'https://example.com/australia',
  },
  'ESP': {
    name: 'Spain',
    redirectUrl: 'https://example.com/spain',
  },
  'NLD': {
    name: 'Netherlands',
    redirectUrl: 'https://example.com/netherlands',
  },
  'CHE': {
    name: 'Switzerland',
    redirectUrl: 'https://example.com/switzerland',
  },
  'SGP': {
    name: 'Singapore',
    redirectUrl: 'https://example.com/singapore',
  },
  'SWE': {
    name: 'Sweden',
    redirectUrl: 'https://example.com/sweden',
  },
  'KOR': {
    name: 'South Korea',
    redirectUrl: 'https://example.com/south-korea',
  },
  'MEX': {
    name: 'Mexico',
    redirectUrl: 'https://example.com/mexico',
  },
  'INDO': {
    name: 'Indonesia',
    redirectUrl: 'https://example.com/indonesia',
  },
  'SAU': {
    name: 'Saudi Arabia',
    redirectUrl: 'https://example.com/saudi-arabia',
  },
  'ARG': {
    name: 'Argentina',
    redirectUrl: 'https://example.com/argentina',
  },
  'ZAF': {
    name: 'South Africa',
    redirectUrl: 'https://example.com/south-africa',
  },
  'NGA': {
    name: 'Nigeria',
    redirectUrl: 'https://example.com/nigeria',
  },
  'EGY': {
    name: 'Egypt',
    redirectUrl: 'https://example.com/egypt',
  },
  'TUR': {
    name: 'Turkey',
    redirectUrl: 'https://example.com/turkey',
  },
  'COL': {
    name: 'Colombia',
    redirectUrl: 'https://example.com/colombia',
  },
  'POL': {
    name: 'Poland',
    redirectUrl: 'https://example.com/poland',
  },
  'THA': {
    name: 'Thailand',
    redirectUrl: 'https://example.com/thailand',
  },
  'ISR': {
    name: 'Israel',
    redirectUrl: 'https://example.com/israel',
  },
  'IRN': {
    name: 'Iran',
    redirectUrl: 'https://example.com/iran',
  },
  'UKR': {
    name: 'Ukraine',
    redirectUrl: 'https://example.com/ukraine',
  },
  'MYS': {
    name: 'Malaysia',
    redirectUrl: 'https://example.com/malaysia',
  },
  'PHL': {
    name: 'Philippines',
    redirectUrl: 'https://example.com/philippines',
  },
  'BEL': {
    name: 'Belgium',
    redirectUrl: 'https://example.com/belgium',
  },
  'AUT': {
    name: 'Austria',
    redirectUrl: 'https://example.com/austria',
  },
  'NZL': {
    name: 'New Zealand',
    redirectUrl: 'https://example.com/new-zealand',
  },
  'ARE': {
    name: 'United Arab Emirates',
    redirectUrl: 'https://example.com/uae',
  },
  'PRI': {
    name: 'Puerto Rico',
    redirectUrl: 'https://example.com/puerto-rico',
  },
  'HUN': {
    name: 'Hungary',
    redirectUrl: 'https://example.com/hungary',
  },
  'BGR': {
    name: 'Bulgaria',
    redirectUrl: 'https://example.com/bulgaria',
  },
  'CZE': {
    name: 'Czech Republic',
    redirectUrl: 'https://example.com/czech-republic',
  },
  'DNK': {
    name: 'Denmark',
    redirectUrl: 'https://example.com/denmark',
  },
  'FIN': {
    name: 'Finland',
    redirectUrl: 'https://example.com/finland',
  },
  'GRC': {
    name: 'Greece',
    redirectUrl: 'https://example.com/greece',
  },
  'HRV': {
    name: 'Croatia',
    redirectUrl: 'https://example.com/croatia',
  },
  'IRL': {
    name: 'Ireland',
    redirectUrl: 'https://example.com/ireland',
  },
  'LTU': {
    name: 'Lithuania',
    redirectUrl: 'https://example.com/lithuania',
  },
  'LUX': {
    name: 'Luxembourg',
    redirectUrl: 'https://example.com/luxembourg',
  },
  'LVA': {
    name: 'Latvia',
    redirectUrl: 'https://example.com/latvia',
  },
  'NOR': {
    name: 'Norway',
    redirectUrl: 'https://example.com/norway',
  },
  'PRT': {
    name: 'Portugal',
    redirectUrl: 'https://example.com/portugal',
  },
  'ROU': {
    name: 'Romania',
    redirectUrl: 'https://example.com/romania',
  },
  'SRB': {
    name: 'Serbia',
    redirectUrl: 'https://example.com/serbia',
  },
  'SVK': {
    name: 'Slovakia',
    redirectUrl: 'https://example.com/slovakia',
  },
  'SVN': {
    name: 'Slovenia',
    redirectUrl: 'https://example.com/slovenia',
  },
  'ISL': {
    name: 'Iceland',
    redirectUrl: 'https://example.com/iceland',
  },
  'EST': {
    name: 'Estonia',
    redirectUrl: 'https://example.com/estonia',
  },
  'URY': {
    name: 'Uruguay',
    redirectUrl: 'https://example.com/uruguay',
  },
  'PRY': {
    name: 'Paraguay',
    redirectUrl: 'https://example.com/paraguay',
  },
  'BLR': {
    name: 'Belarus',
    redirectUrl: 'https://example.com/belarus',
  },
  'KAZ': {
    name: 'Kazakhstan',
    redirectUrl: 'https://example.com/kazakhstan',
  },
  'UZB': {
    name: 'Uzbekistan',
    redirectUrl: 'https://example.com/uzbekistan',
  },
  'KGZ': {
    name: 'Kyrgyzstan',
    redirectUrl: 'https://example.com/kyrgyzstan',
  },
  'TJK': {
    name: 'Tajikistan',
    redirectUrl: 'https://example.com/tajikistan',
  },
  'TKM': {
    name: 'Turkmenistan',
    redirectUrl: 'https://example.com/turkmenistan',
  },
  'AZE': {
    name: 'Azerbaijan',
    redirectUrl: 'https://example.com/azerbaijan',
  },
  'ARM': {
    name: 'Armenia',
    redirectUrl: 'https://example.com/armenia',
  },
  'GEO': {
    name: 'Georgia',
    redirectUrl: 'https://example.com/georgia',
  },
  'MDA': {
    name: 'Moldova',
    redirectUrl: 'https://example.com/moldova',
  },
  'BIH': {
    name: 'Bosnia and Herzegovina',
    redirectUrl: 'https://example.com/bosnia-and-herzegovina',
  },
  'MKD': {
    name: 'North Macedonia',
    redirectUrl: 'https://example.com/north-macedonia',
  },
  'ALB': {
    name: 'Albania',
    redirectUrl: 'https://example.com/albania',
  },
  'MNE': {
    name: 'Montenegro',
    redirectUrl: 'https://example.com/montenegro',
  },
  'LIE': {
    name: 'Liechtenstein',
    redirectUrl: 'https://example.com/liechtenstein',
  },
  'MDV': {
    name: 'Maldives',
    redirectUrl: 'https://example.com/maldives',
  },
  'BTN': {
    name: 'Bhutan',
    redirectUrl: 'https://example.com/bhutan',
  },
  'NPL': {
    name: 'Nepal',
    redirectUrl: 'https://example.com/nepal',
  },
  'LKA': {
    name: 'Sri Lanka',
    redirectUrl: 'https://example.com/sri-lanka',
  },
  'PAK': {
    name: 'Pakistan',
    redirectUrl: 'https://example.com/pakistan',
  },
  'BGD': {
    name: 'Bangladesh',
    redirectUrl: 'https://example.com/bangladesh',
  },
  'MMR': {
    name: 'Myanmar',
    redirectUrl: 'https://example.com/myanmar',
  },
  'KHM': {
    name: 'Cambodia',
    redirectUrl: 'https://example.com/cambodia',
  },
  'LAO': {
    name: 'Laos',
    redirectUrl: 'https://example.com/laos',
  },
  'VNM': {
    name: 'Vietnam',
    redirectUrl: 'https://example.com/vietnam',
  },
  'PHL': {
    name: 'Philippines',
    redirectUrl: 'https://example.com/philippines',
  },
  'URY': {
    name: 'Uruguay',
    redirectUrl: 'https://example.com/uruguay',
  },
  'PRY': {
    name: 'Paraguay',
    redirectUrl: 'https://example.com/paraguay',
  },
  'BLR': {
    name: 'Belarus',
    redirectUrl: 'https://example.com/belarus',
  },
  'KAZ': {
    name: 'Kazakhstan',
    redirectUrl: 'https://example.com/kazakhstan',
  },
  'UZB': {
    name: 'Uzbekistan',
    redirectUrl: 'https://example.com/uzbekistan',
  },
  'KGZ': {
    name: 'Kyrgyzstan',
    redirectUrl: 'https://example.com/kyrgyzstan',
  },
  'TJK': {
    name: 'Tajikistan',
    redirectUrl: 'https://example.com/tajikistan',
  },
  'TKM': {
    name: 'Turkmenistan',
    redirectUrl: 'https://example.com/turkmenistan',
  },
  'AZE': {
    name: 'Azerbaijan',
    redirectUrl: 'https://example.com/azerbaijan',
  },
  'ARM': {
    name: 'Armenia',
    redirectUrl: 'https://example.com/armenia',
  },
  'GEO': {
    name: 'Georgia',
    redirectUrl: 'https://example.com/georgia',
  },
  'MDA': {
    name: 'Moldova',
    redirectUrl: 'https://example.com/moldova',
  },
  'BIH': {
    name: 'Bosnia and Herzegovina',
    redirectUrl: 'https://example.com/bosnia-and-herzegovina',
  },
  'MKD': {
    name: 'North Macedonia',
    redirectUrl: 'https://example.com/north-macedonia',
  },
  'ALB': {
    name: 'Albania',
    redirectUrl: 'https://example.com/albania',
  },
  'MNE': {
    name: 'Montenegro',
    redirectUrl: 'https://example.com/montenegro',
  },
  'LIE': {
    name: 'Liechtenstein',
    redirectUrl: 'https://example.com/liechtenstein',
  },
  'MDV': {
    name: 'Maldives',
    redirectUrl: 'https://example.com/maldives',
  },
  'BTN': {
    name: 'Bhutan',
    redirectUrl: 'https://example.com/bhutan',
  },
  'NPL': {
    name: 'Nepal',
    redirectUrl: 'https://example.com/nepal',
  },
  'LKA': {
    name: 'Sri Lanka',
    redirectUrl: 'https://example.com/sri-lanka',
  },
  'PAK': {
    name: 'Pakistan',
    redirectUrl: 'https://example.com/pakistan',
  },
  'BGD': {
    name: 'Bangladesh',
    redirectUrl: 'https://example.com/bangladesh',
  },
  'MMR': {
    name: 'Myanmar',
    redirectUrl: 'https://example.com/myanmar',
  },
  'KHM': {
    name: 'Cambodia',
    redirectUrl: 'https://example.com/cambodia',
  },
  'LAO': {
    name: 'Laos',
    redirectUrl: 'https://example.com/laos',
  },
  'VNM': {
    name: 'Vietnam',
    redirectUrl: 'https://example.com/vietnam',
  },
  'PHL': {
    name: 'Philippines',
    redirectUrl: 'https://example.com/philippines',
  },
  'IDN': {
    name: 'Indonesia',
    redirectUrl: 'https://example.com/indonesia',
  },
  'THA': {
    name: 'Thailand',
    redirectUrl: 'https://example.com/thailand',
  },
  'MYS': {
    name: 'Malaysia',
    redirectUrl: 'https://example.com/malaysia',
  },
  'SGP': {
    name: 'Singapore',
    redirectUrl: 'https://example.com/singapore',
  },
  'BRN': {
    name: 'Brunei',
    redirectUrl: 'https://example.com/brunei',
  },
  'PHL': {
    name: 'Philippines',
    redirectUrl: 'https://example.com/philippines',
  },
  'MMR': {
    name: 'Myanmar',
    redirectUrl: 'https://example.com/myanmar',
  },
  'KHM': {
    name: 'Cambodia',
    redirectUrl: 'https://example.com/cambodia',
  },
  'LAO': {
    name: 'Laos',
    redirectUrl: 'https://example.com/laos',
  },
  'VNM': {
    name: 'Vietnam',
    redirectUrl: 'https://example.com/vietnam',
  },
  'PHL': {
    name: 'Philippines',
    redirectUrl: 'https://example.com/philippines',
  },
  'IDN': {
    name: 'Indonesia',
    redirectUrl: 'https://example.com/indonesia',
  },
  'THA': {
    name: 'Thailand',
    redirectUrl: 'https://example.com/thailand',
  },
  'MYS': {
    name: 'Malaysia',
    redirectUrl: 'https://example.com/malaysia',
  },
  'SGP': {
    name: 'Singapore',
    redirectUrl: 'https://example.com/singapore',
  },
  'BRN': {
    name: 'Brunei',
    redirectUrl: 'https://example.com/brunei',
  },
    'URY': {
      name: 'Uruguay',
      redirectUrl: 'https://example.com/uruguay',
    },
    'PRY': {
      name: 'Paraguay',
      redirectUrl: 'https://example.com/paraguay',
    },
    'BLR': {
      name: 'Belarus',
      redirectUrl: 'https://example.com/belarus',
    },
    'KAZ': {
      name: 'Kazakhstan',
      redirectUrl: 'https://example.com/kazakhstan',
    },
    'UZB': {
      name: 'Uzbekistan',
      redirectUrl: 'https://example.com/uzbekistan',
    },
    'KGZ': {
      name: 'Kyrgyzstan',
      redirectUrl: 'https://example.com/kyrgyzstan',
    },
    'TJK': {
      name: 'Tajikistan',
      redirectUrl: 'https://example.com/tajikistan',
    },
    'TKM': {
      name: 'Turkmenistan',
      redirectUrl: 'https://example.com/turkmenistan',
    },
    'AZE': {
      name: 'Azerbaijan',
      redirectUrl: 'https://example.com/azerbaijan',
    },
    'ARM': {
      name: 'Armenia',
      redirectUrl: 'https://example.com/armenia',
    },
    'GEO': {
      name: 'Georgia',
      redirectUrl: 'https://example.com/georgia',
    },
    'MDA': {
      name: 'Moldova',
      redirectUrl: 'https://example.com/moldova',
    },
    'BIH': {
      name: 'Bosnia and Herzegovina',
      redirectUrl: 'https://example.com/bosnia-and-herzegovina',
    },
    'MKD': {
      name: 'North Macedonia',
      redirectUrl: 'https://example.com/north-macedonia',
    },
    'ALB': {
      name: 'Albania',
      redirectUrl: 'https://example.com/albania',
    },
    'MNE': {
      name: 'Montenegro',
      redirectUrl: 'https://example.com/montenegro',
    },
    'LIE': {
      name: 'Liechtenstein',
      redirectUrl: 'https://example.com/liechtenstein',
    },
    'MDV': {
      name: 'Maldives',
      redirectUrl: 'https://example.com/maldives',
    },
    'BTN': {
      name: 'Bhutan',
      redirectUrl: 'https://example.com/bhutan',
    },
    'NPL': {
      name: 'Nepal',
      redirectUrl: 'https://example.com/nepal',
    },
    'LKA': {
      name: 'Sri Lanka',
      redirectUrl: 'https://example.com/sri-lanka',
    },
    'PAK': {
      name: 'Pakistan',
      redirectUrl: 'https://example.com/pakistan',
    },
    'BGD': {
      name: 'Bangladesh',
      redirectUrl: 'https://example.com/bangladesh',
    },
    'MMR': {
      name: 'Myanmar',
      redirectUrl: 'https://example.com/myanmar',
    },
    'KHM': {
      name: 'Cambodia',
      redirectUrl: 'https://example.com/cambodia',
    },
    'LAO': {
      name: 'Laos',
      redirectUrl: 'https://example.com/laos',
    },
    'VNM': {
      name: 'Vietnam',
      redirectUrl: 'https://example.com/vietnam',
    },
    'PHL': {
      name: 'Philippines',
      redirectUrl: 'https://example.com/philippines',
    },
    'IDN': {
      name: 'Indonesia',
      redirectUrl: 'https://example.com/indonesia',
    },
    'MYS': {
      name: 'Malaysia',
      redirectUrl: 'https://example.com/malaysia',
    },
    'SGP': {
      name: 'Singapore',
      redirectUrl: 'https://example.com/singapore',
    },
    'THA': {
      name: 'Thailand',
      redirectUrl: 'https://example.com/thailand',
    },
    'VAT': {
      name: 'Vatican City',
      redirectUrl: 'https://example.com/vatican-city',
    },
    'ISL': {
      name: 'Iceland',
      redirectUrl: 'https://example.com/iceland',
    },
    'NOR': {
      name: 'Norway',
      redirectUrl: 'https://example.com/norway',
    },
    'IRN': {
      name: 'Iran',
      redirectUrl: 'https://example.com/iran',
    },
    'IRQ': {
      name: 'Iraq',
      redirectUrl: 'https://example.com/iraq',
    },
    'KWT': {
      name: 'Kuwait',
      redirectUrl: 'https://example.com/kuwait',
    },
    'OMN': {
      name: 'Oman',
      redirectUrl: 'https://example.com/oman',
    },
    'QAT': {
      name: 'Qatar',
      redirectUrl: 'https://example.com/qatar',
    },
    'ARE': {
      name: 'United Arab Emirates',
      redirectUrl: 'https://example.com/uae',
    },
    'SAU': {
      name: 'Saudi Arabia',
      redirectUrl: 'https://example.com/saudi-arabia',
    },
    'YEM': {
      name: 'Yemen',
      redirectUrl: 'https://example.com/yemen',
    },
    'JOR': {
      name: 'Jordan',
      redirectUrl: 'https://example.com/jordan',
    },
    'LBN': {
      name: 'Lebanon',
      redirectUrl: 'https://example.com/lebanon',
    },
    'SYR': {
      name: 'Syria',
      redirectUrl: 'https://example.com/syria',
    },
    'ISR': {
      name: 'Israel',
      redirectUrl: 'https://example.com/israel',
    },
    'PSE': {
      name: 'Palestine',
      redirectUrl: 'https://example.com/palestine',
    },
    'JOR': {
      name: 'Jordan',
      redirectUrl: 'https://example.com/jordan',
    },
      'TUN': {
        name: 'Tunisia',
        redirectUrl: 'https://example.com/tunisia',
      },
      'DZA': {
        name: 'Algeria',
        redirectUrl: 'https://example.com/algeria',
      },
      'MAR': {
        name: 'Morocco',
        redirectUrl: 'https://example.com/morocco',
      },
      'LBY': {
        name: 'Libya',
        redirectUrl: 'https://example.com/libya',
      },
      'EGY': {
        name: 'Egypt',
        redirectUrl: 'https://example.com/egypt',
      },
      'SDN': {
        name: 'Sudan',
        redirectUrl: 'https://example.com/sudan',
      },
      'SSD': {
        name: 'South Sudan',
        redirectUrl: 'https://example.com/south-sudan',
      },
      'ETH': {
        name: 'Ethiopia',
        redirectUrl: 'https://example.com/ethiopia',
      },
      'KEN': {
        name: 'Kenya',
        redirectUrl: 'https://example.com/kenya',
      },
      'UGA': {
        name: 'Uganda',
        redirectUrl: 'https://example.com/uganda',
      },
      'RWA': {
        name: 'Rwanda',
        redirectUrl: 'https://example.com/rwanda',
      },
      'BDI': {
        name: 'Burundi',
        redirectUrl: 'https://example.com/burundi',
      },
      'COD': {
        name: 'Democratic Republic of the Congo',
        redirectUrl: 'https://example.com/dr-congo',
      },
      'AGO': {
        name: 'Angola',
        redirectUrl: 'https://example.com/angola',
      },
      'ZMB': {
        name: 'Zambia',
        redirectUrl: 'https://example.com/zambia',
      },
      'ZWE': {
        name: 'Zimbabwe',
        redirectUrl: 'https://example.com/zimbabwe',
      },
      'MOZ': {
        name: 'Mozambique',
        redirectUrl: 'https://example.com/mozambique',
      },
      'MWI': {
        name: 'Malawi',
        redirectUrl: 'https://example.com/malawi',
      },
      'LSO': {
        name: 'Lesotho',
        redirectUrl: 'https://example.com/lesotho',
      },
      'SWZ': {
        name: 'Eswatini',
        redirectUrl: 'https://example.com/eswatini',
      },
      'NAM': {
        name: 'Namibia',
        redirectUrl: 'https://example.com/namibia',
      },
      'BWA': {
        name: 'Botswana',
        redirectUrl: 'https://example.com/botswana',
      },
      'MNG': {
        name: 'Mongolia',
        redirectUrl: 'https://example.com/mongolia',
      },
      'PRK': {
        name: 'North Korea',
        redirectUrl: 'https://example.com/north-korea',
      },
      'KOR': {
        name: 'South Korea',
        redirectUrl: 'https://example.com/south-korea',
      },
      'VAT': {
        name: 'Vatican City',
        redirectUrl: 'https://example.com/vatican-city',
      },
      'NRU': {
        name: 'Nauru',
        redirectUrl: 'https://example.com/nauru',
      },
      'TUV': {
        name: 'Tuvalu',
        redirectUrl: 'https://example.com/tuvalu',
      },
      'KIR': {
        name: 'Kiribati',
        redirectUrl: 'https://example.com/kiribati',
      },
      'MHL': {
        name: 'Marshall Islands',
        redirectUrl: 'https://example.com/marshall-islands',
      },
      'FSM': {
        name: 'Micronesia',
        redirectUrl: 'https://example.com/micronesia',
      },
      'PLW': {
        name: 'Palau',
        redirectUrl: 'https://example.com/palau',
      },
      'TTO': {
        name: 'Trinidad and Tobago',
        redirectUrl: 'https://example.com/trinidad-and-tobago',
      },
      'BRB': {
        name: 'Barbados',
        redirectUrl: 'https://example.com/barbados',
      },
      'DMA': {
        name: 'Dominica',
        redirectUrl: 'https://example.com/dominica',
      },
      'GRD': {
        name: 'Grenada',
        redirectUrl: 'https://example.com/grenada',
      },
      'LCA': {
        name: 'Saint Lucia',
        redirectUrl: 'https://example.com/saint-lucia',
      },
      'VCT': {
        name: 'Saint Vincent and the Grenadines',
        redirectUrl: 'https://example.com/saint-vincent',
      },
      'ATG': {
        name: 'Antigua and Barbuda',
        redirectUrl: 'https://example.com/antigua-and-barbuda',
      },
      'KNA': {
        name: 'Saint Kitts and Nevis',
        redirectUrl: 'https://example.com/saint-kitts-and-nevis',
      },
      'HTI': {
        name: 'Haiti',
        redirectUrl: 'https://example.com/haiti',
      },
      'DOM': {
        name: 'Dominican Republic',
        redirectUrl: 'https://example.com/dominican-republic',
      }
  
  
}

const CountryList = ({ countries, onSelectCountry }) => {
  return (
    <ul>
      {countries.map((countryCode) => (
        <a href='#' className='anchorTa' key={countryCode} onClick={() => onSelectCountry(countryCode)}>
          <li className='list'>
            {countryData[countryCode].name}
          </li>
        </a>
      ))}
    </ul>
  );
};

const CountryDetails = ({ country }) => {
  return (
    <div>
      <a style={{ textDecoration: 'none', color: 'white' }} href={country.redirectUrl} target="_blank" rel="noopener noreferrer">
        <h2 style={{ marginLeft: '50px', marginTop: '10px', fontSize: '25px' }}> {country.name}</h2>
      </a>
    </div>
  );
};
  const Country = () => {
    const navigate = useNavigate();
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showCountryList, setShowCountryList] = useState(false);
    const [filteredCountries, setFilteredCountries] = useState([]);
  
    const countries = Object.keys(countryData);
  
    const handleSelectCountry = (countryCode) => {
      if (countryCode === 'IND') {
        navigate('/DineInStates');
      } else {
        setSelectedCountry(countryData[countryCode]);
      }
      setSearchTerm('');
      setShowCountryList(false);
    };
  
  
    const handleSearchChange = (e) => {
      const term = e.target.value.toLowerCase();
  
      // Reset selectedCountry when the search term changes
      setSelectedCountry(null);
  
      setSearchTerm(term);
      setShowCountryList(true);
  
      const filtered = countries.filter(countryCode =>
        countryData[countryCode].name.toLowerCase().includes(term)
      );
  
      setFilteredCountries(filtered);
    };
  
    const handleSearchSubmit = (e) => {
      e.preventDefault();
  
      if(!searchTerm){
        alert('please enter a valid country name')
      }
  
      if (filteredCountries.length === 1) {
        handleSelectCountry(filteredCountries[0]);
      } else {
        setShowCountryList(true);
      }
    };
  
    useEffect(() => {
      if (!searchTerm) {
        setFilteredCountries([]);
      }
    }, [searchTerm]);
  
    return (
      <div className="countryDivision">
        <h1 id='nameNameh1'>Select Country</h1><br></br>
        <form onSubmit={handleSearchSubmit}>
          <input
            className='typeSearch'
            type="text"
            placeholder="Search For Country"
            value={searchTerm}
            onChange={handleSearchChange}
          /> &nbsp; &nbsp;
          {/* <button type="submit" className='cbutton'>Search</button> */}
        </form>
        {showCountryList && <CountryList countries={filteredCountries} onSelectCountry={handleSelectCountry} />}
        {selectedCountry && <CountryDetails country={selectedCountry} />}
      </div>
    );
  };
  
  export default Country;