import axios from 'axios';

// export the api 
export default {
  //find all articles
  getArticles: function(params) {
    return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json`, params);
  }, 
  loadArticles: function() {
    return axios.get("/api/articles/");
  }, 
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};

