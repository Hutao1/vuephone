<template>
    <!--移动端  Mmenu-->
    <nav id="mmenu">
        <ul>
            <li class="clear zy_q"><a href="" class="left">简体中文</a> <a href="" class="left">English</a></li>
            <li><router-link to="/home">首页</router-link>
            </li>
            <li><a href="case.vue">经典系列</a>
                <ul>
                    <li><a href="case.vue">人气</a></li>
                    <li><a href="case.vue">色系</a></li>
                    <li><a href="case.vue">价格</a></li>
                </ul>
            </li>
            <li><a href="kehu.vue">客照专区</a>
                <ul>
                    <li><a href="kehu.vue">人气</a></li>
                    <li><a href="kehu.vue">色系</a></li>
                    <li><a href="kehu.vue">价格</a></li>
                </ul>
            </li>
            <li><router-link to="/about">我们的服务</router-link>
                <ul>
                    <li><a href="about.vue">公司简介</a></li>
                    <li><a href="about.vue">我们的服务</a></li>
                    <li><a href="about.vue">企业文化</a></li>
                </ul>
            </li>
            <li><a href="team.vue">服务团队</a>
                <ul>
                    <li><a href="team.vue">北京</a></li>
                    <li><a href="team.vue">上海</a></li>
                    <li><a href="team.vue">天津</a></li>
                </ul>
            </li>
            <li><a href="fuwu_price.vue">服务报价</a></li>
            <li><a href="news.vue">新闻资讯</a>
                <ul>
                    <li><a href="news.vue">最新优惠</a></li>
                    <li><a href="news.vue">公司新闻</a></li>
                    <li><a href="news.vue">行业新闻</a></li>
                </ul>
            </li>
            <li><a href="contact.vue">联系我们</a>
                <ul>
                    <li><a href="contact.vue">联系我们</a></li>
                    <li><a href="feedback.vue">在线留言</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</template>