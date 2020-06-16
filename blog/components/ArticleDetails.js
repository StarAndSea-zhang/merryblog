import React from 'react'
import Router from 'next/router'
import {Affix} from "antd";

import '@/public/style/components/article-details.less'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

const ArticleDetails = ()=>{
    let markdown='# P01:课程介绍和环境搭建\n' +
        '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
        '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
        '**这是加粗的文字**\n\n' +
        '*这是倾斜的文字*`\n\n' +
        '***这是斜体加粗的文字***\n\n' +
        '~~这是加删除线的文字~~ \n\n'+
        '\`console.log(111)\` \n\n'+
        '# p02:来个Hello World 初始Vue3.0\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n'+
        '***\n\n\n' +
        '# p03:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n'+
        '# p04:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n'+
        '#5 p05:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n'+
        '# p06:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n'+
        '# p07:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n'+
        '``` var a=11; ```'
    return (<div className="m-detail">
        <div  className="m-detail__content">
        <ReactMarkdown
            source={markdown}
            escapeHtml={false}
        />
        <Affix style={{ position: 'absolute', top: '5em',right:20 }} offsetTop={5}>
        <div className="m-detail__nav">
            <div className="nav-title">文章目录</div>
            <MarkNav
                className="article-menu"
                source={markdown}
                ordered={false}
            />
        </div>
        </Affix>
            </div>
    </div>);
}
export default ArticleDetails;