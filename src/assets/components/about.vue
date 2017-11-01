<template>
        <div class="about">
            <!--header-->
            <heade></heade>
            <div class="crumbs">
                <div class="centerBlock">您当前的位置：<a href="index.html">首页 </a>  > <span>关于我们</span></div>
            </div>
            <div class="comon_top">
                <div class="top_title">
                    <div class="hh1">关于我们</div>
                    <div class="hh2">为您提供舒适居家环境，倡导高品质生活，提升行业服务标准！</div>
                    <div class="hh3">To provide a comfortable home environment for you,Promote high quality of life, improve the industry standard!</div>
                </div>
                <div class="top_nav">
                    <a href="about.html"  class="active"><span>公司简介</span></a><a href="about_fuwu.html"><span>我的的服务</span></a><a href="about_wh.html"><span>企业文化</span></a>
                </div>
            </div>
            <div class="about_con">
                <div class="ahout_1">秉承"整合数字资源,技术驱动营销"的理念</div>
                <p>
                    唯星成立于2005年，秉承"整合数字资源,技术驱动营销"的理念，专注于数字营销技术、产品、资源、服务的创新与整合，为传统企业互<br />
                    联网商业转型各个阶段提供全方位应用支撑。
                </p>
                <p>
                    经过10余年的快速发展，唯星深刻理解未来数字营销内容与技术的融合之势，积极引进优秀的互联网技术、营销策
                    略及内容创意专家，先后从IBM、微软、华为等知名IT企业引进大量优秀人才，
                    目前公司逾千人规模，上海作为总部，同步辐射北京、深圳、香港、江浙
                </p>
                <p>
                    在科技创新领域，唯星集团分别与复旦大学、上海大学、华师大等知名院校达成战略伙伴关系，分别成立了云计算、<br />
                    大数据、智能营销等不同领域的产学研合作平台。2015年6月，唯星在美国硅谷成立研发中心
                </p>
            </div>
            <div class="about_img">
                <img src="./../images/about_img.png" alt="" class="vcenter"/>
                <i></i>
            </div>
            <div class="home_top">
                <div class="zhong">相关新闻</div>
            </div>
            <div class="zi_news">
                <ul class="clearfix">
                    <li><a href="news.html">《中国广告》杂志专访唯星总裁赵旭隆：技术驱动营销 致力品效合一</a></li>
                    <li><a href="news.html">唯星集团运营总裁张蓬先生受邀出席，并发表“数字创新，商业之‘</a></li>
                    <li><a href="news.html">作为国内领先的数字营销企业，唯星集团荣获此次IAI国际广告奖变革</a></li>
                    <li><a href="news.html">唯星荣誉榜——2016上半年盘点唯星荣誉榜上半年盘点</a></li>
                    <li><a href="news.html">中国传媒大学广告学院联合主办的IAI国际创享节暨第16届IAI国际</a></li>
                    <li><a href="news.html">年度最佳营销公司”，是对唯星产品、技术、服务及团队等</a></li>
                    <li><a href="news.html">唯星集团运营总裁张蓬受邀出席IAI国际创享节并发表主题演讲商业之智</a></li>
                    <li><a href="news.html">任鲁豫等在内的央视著名主持人，如此豪华阵容</a></li>
                    <li><a href="news.html">整体实力的充分肯定，同时也预示着技术型数字营销企业已经引领行业</a></li>
                </ul>
            </div>

            <!--footer  start-->
            <foote></foote>
            <!--footer  end-->

            <!--移动端  Mmenu-->
            <mmenu></mmenu>

        </div>
</template>
<script>
    import heade from "./header.vue"
    import foote from "./footer.vue"
    import mmenu from "./mmenu.vue"
    export default {
        components:{
            heade,foote,mmenu
        }
    }
</script>