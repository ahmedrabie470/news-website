import React , {useState , useEffect ,createContext}  from 'react'
import axios from 'axios'

export let NewsContext =  createContext(0)
export default function NewsContextProvider(props) {

const [trendingSports, setTrendingSports] = useState([])
const [trendingGeneral, setTrendingGeneral] = useState([])
const [trendingHealth, setTrendingHealth] = useState([])
const [trendingScience, setTrendingScience] = useState([])
const [trendingTechnology, setTrendingTechnology] = useState([])
const [trendingEntertainment, setTrendingEntertainment] = useState([])
const [trendingBusiness, setTrendingBusiness] = useState([])


async function getTrendingNews(category , callback)

 {
   let {data} = await axios(`https://newsapi.org/v2/top-headlines?country=fr&category=${category}&apiKey=7f62f698b71f49f5ab2161448864e4a2`)
   callback(data.articles)
 }
 useEffect(() => {
  getTrendingNews('sports' , setTrendingSports);
  getTrendingNews('General', setTrendingGeneral);
  getTrendingNews('Health' , setTrendingHealth);
  getTrendingNews('Science' , setTrendingScience);
  getTrendingNews('Technology' , setTrendingTechnology);
  getTrendingNews('Entertainment' , setTrendingEntertainment);
  getTrendingNews('Business' , setTrendingBusiness);

 }, [])

return <NewsContext.Provider value={{trendingSports ,trendingGeneral,trendingHealth,trendingScience,trendingTechnology,trendingEntertainment,trendingBusiness}}>

{props.children}

</NewsContext.Provider>
}