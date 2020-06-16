import React from 'react'
import { GithubFilled ,QqOutlined,MailOutlined} from '@ant-design/icons';
import "@/public/style/components/footer.less"

const Footer = ()=>(<div className="m-footer">
    <footer>
        <div className="m-footer__social">
            <ul>
                <li>
                    <a href="https://github.com/StarAndSea-zhang" title="Github" target="_blank">
                        <GithubFilled style={{ fontSize: '20px', color: '#fff' }} />
                    </a>
                </li>
                <li>
                    <a href="mailto:https://github.com/StarAndSea-zhang" title="Email" target="_blank">
                        <MailOutlined style={{ fontSize: '20px', color: '#fff' }} />
                    </a>
                </li>
                <li>
                    <a href="http://github.com/" title="QQ" target="_blank">
                        <QqOutlined style={{ fontSize: '20px', color: '#fff' }} />
                    </a>
                </li>
            </ul>
        </div>
        <div className="m-footer__copyright">
            <p>
               采用界面是根据 Hexo Theme Annie by Sariay更改.
                技术实现由Next.js+React+Ant Design
            </p>
            <p>
                All Rights Reserved.
            </p>
        </div>
    </footer>
</div>)

export default Footer;