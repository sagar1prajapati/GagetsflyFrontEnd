import axios from 'axios';

async function GetSnippetGroup(userId) {
const url = `https://localhost:44305/api/SnippetGroup/${userId}`;
return await axios.get(url)
.then(response => response.data)
.catch(error => console.error(error));
}

export default GetSnippetGroup;
