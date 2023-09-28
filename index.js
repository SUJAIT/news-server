const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const news = require('./data/newsDataone.json') //1st data jason
const newsData = require('./data/news.json');// 2nd data jason

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// news data load 
app.get('/news',(req,res)=>{
  res.send(news);

})

//newsData {sob data load}
app.get('/newsData',(req,res)=>{
  res.send(newsData)
})

// newsData {specific data load}
app.get('/newsData/:id',(req,res)=>{
  const id = req.params.id;
  // console.log(id);
  const selectedNews = newsData.find(n=>n._id === id);
  res.send(selectedNews)
})

//{specific CategoryNews data load}

app.get('/news/:id',(req,res)=>{
  const id =parseInt(req.params.id);
  console.log(id);
  if (id === 0){
    res.send(newsData)
  }
  else{
      const categoryNews = newsData.filter(n=>parseInt(n.category_id) === id);
  res.send(categoryNews)
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})