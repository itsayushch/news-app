class Api {

    static async allArticles() {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_APIKEY}`)
        const data = await res.json();
        return data;
    }

    static async getArticle(source) {
        const res = await fetch(`https://newsapi.org/v2/everything?sources=${source}&apiKey=${process.env.REACT_APP_APIKEY}`)
        const data = await res.json();

        return data;
    } 
}

module.exports = Api;