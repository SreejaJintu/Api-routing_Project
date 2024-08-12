import Card from 'react-bootstrap/Card';


function CountryCards({country}) {

  const languages=country.languages? 
  Object.values(country.languages).join(', '):
  'No data available'
  return (
    <div style={{paddingBlock:"5px"}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img className='cardimage' variant="top" src={country.flags.png} />
      <Card.Body>
        <Card.Title>{country.name.common}</Card.Title>
        <Card.Text>
          <strong>Capital:{ country.capital}</strong>
        </Card.Text>
        <Card.Text>
          <strong>Languages:{ languages}</strong>
        </Card.Text>
      </Card.Body>
    </Card></div>
  );
}

export default CountryCards;