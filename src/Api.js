export async function allArticles() {
    const res = await fetch(`https://news-api-proxy.vercel.app/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_APIKEY}`)
    const data = await res.json();
    return data;
}

export async function getArticle(source) {
    const res = await fetch(`https://news-api-proxy.vercel.app/v2/everything?sources=${source}&apiKey=${process.env.REACT_APP_APIKEY}`)
    const data = await res.json();

    return data;
}
