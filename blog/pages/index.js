import Head from 'next/head'
import {Button} from 'antd'
import Header from '@/components/Header'
import Article from '@/components/ArticleList'
import Footer from '@/components/Footer'
import ArticleList from "../components/ArticleList";
import {lastest} from '@/api/Home'
const Home = (props)=> {
    console.log('home',props)
  return (
    <div className="container">
        <Header></Header>
        <ArticleList list={props.data}></ArticleList>
        <Footer/>
        <style jsx>{`
        
      `}</style>
    </div>

  )
}

Home.getInitialProps = async ()=> {
    // const res = ;
    // console.log(res)
    return await lastest();
}

export default Home;