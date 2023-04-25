const BASE_URL = "http://localhost:8080";

export const get = (url) => {
    fetch(`${url ? `${BASE_URL}${url}` : BASE_URL}`, {
        method: "GET"
    }).then(res => res.json())
}