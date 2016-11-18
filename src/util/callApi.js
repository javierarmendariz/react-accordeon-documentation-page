export default function callApi(endpoint, method = 'get', body) {
  // return fetch(`${API_URL}/${endpoint}`, {
  // return fetch(`http://localhost:4000/${endpoint}`, {
  return fetch(`${endpoint}`, {
    // headers: { 'Content-Type': 'application/json' },
    method: 'GET',
    body: JSON.stringify(body),
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }

    return json;
  })
  .then(
    response => response,
    error => error
  );
}
