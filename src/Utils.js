//const URL = 'https://rocky-island-84837.herokuapp.com'
const URL = 'http://localhost:7890';

export async function getToken(login, type) {
    const authURL = `${URL}/auth/${type}`;
    const resp = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(login),
    });
    const data = await resp.json();
    localStorage.setItem('Token', data.token);
    return data.token;
}


export async function getHabitats(token) {
    const url = `${URL}/api/habitats`;
    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             Authorization: token,
        },
    });
    const data = await resp.json();
    return data;
}