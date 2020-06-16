import Head from 'next/head'
import {Button} from 'antd'
import Header from '@/components/Header'
import ArticleDetails from '@/components/ArticleDetails'

import Footer from '@/components/Footer'
import ArticleList from "../components/ArticleList";

 function Articles() {
    return (
        <div className="container">
            <Header></Header>
            <ArticleDetails/>
            <Footer/>
            <style jsx>{`
        
      `}</style>
        </div>

    )
}
Articles.getInitialProps = async ()=> {
    console.log('进入getInitialProps')
    const res = await lastest();
    console.log(res)
    return res;
}
export default Articles;