<template>
    <!--header-->
    <header class="header">
        <div class="container clearfix">
            <div class="logo">
                <router-link to="/home"><img src="../images/logo.png" alt="" /></router-link>
            </div>
            <div class="nav_right">
                <nav>
                    <ul class="clearfix">
                        <li><a href="home.vue" class="active">首页</a></li>
                        <li><a href="case.vue">经典系列</a>
                            <ul>
                                <li><a href="case.vue">人气</a></li>
                                <li><a href="case.vue">色系</a></li>
                                <li><a href="case.vue">价格</a></li>
                            </ul>
                        </li>
                        <li><a href="kehu.vue">客照专区</a>
                            <ul>
                                <li><a href="kehu.vue">北京</a></li>
                                <li><a href="kehu.vue">上海</a></li>
                                <li><a href="kehu.vue">天津</a></li>
                            </ul>
                        </li>
                        <li><a href="#">关于我们</a>
                            <ul>
                                <li><a href="#">公司简介</a></li>
                                <li><a href="about_fuwu.vue">我们的服务</a></li>
                                <li><a href="about_wh.vue">企业文化</a></li>
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
                <div class="cen">
                    <a href="">CN</a>
                    <a href="">EN</a>
                </div>
            </div>


            <a href="#mmenu" class="phone-nav"><i class="fa fa-list" style="display: inline-block;font-size: inherit;text-rendering: auto;background: #000;width: 30px;height: 30px"></i></a>

        </div>
    </header>
</template>