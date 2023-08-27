const fetch = require( 'node-fetch');

export const createRecord = async ({name,age,status}:{name:string,age:number,status:string}) => {
  const apiUrl = process.env.API_URL
  const token = process.env.TOKEN
  const data = {
    records:[
      {
        fields: {
          Name: name,
          Notes: "note",
          Status: status,
          Age: age
        }
      }]
  }
  const response = await fetch(`${apiUrl}/Table%201`,{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }})
    .then((response: { json: () => any; }) => response.json())
  return response
}