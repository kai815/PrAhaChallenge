const fetch = require( 'node-fetch');

export const getRecords = async () => {
  const apiUrl = process.env.API_URL
  const token = process.env.TOKEN

  const response = await fetch(`${apiUrl}/Table%201?maxRecords=200&view=Grid%20view`,{
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }})
    .then((response: { json: () => any; }) => response.json())
  return response
}