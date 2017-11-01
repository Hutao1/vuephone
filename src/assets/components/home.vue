<template>
    <div class="home">
        <heade></heade>
        <!--banner  start-->
        <section class="banner">

            <div><router-link to="/shop"><img src="../images/banner1.png" alt=""></router-link></div>
            <div><router-link to="/shop"><img src="../images/banner1.png" alt=""></router-link></div>
            <div><router-link to="/shop"><img src="../images/banner1.png" alt=""></router-link></div>
        </section>
        <!--banner end-->

        <div class="home_pro">
                <div class="pro_title">
                    <span v-text="ti"></span>
                    <div class="t1">品质境界即刻体验</div>
                    <div class="t2">秉承"整合数字资源,技术驱动营销"的理念，专注于数字营销技术、产品、资源、服务的创新与整合，为传统企业互联网商业转型各个阶段提供全方位应用支撑。</div>
                    <span class="font_en">Villa decoration attention to indoor and outdoor environment of the overall planning and design, the people's pursuit of villa decoration from the simple design of luxury </span>
                    <span class="font_en">decoration began to move closer to the human nature and high quality of construction technology.</span>
                </div>
                <div class="pro_com">
                    <div v-for="(item,index) in msg">
                        <div class="pic"><router-link to="/case"><img src="../images/pro_01.png" alt="" /><i></i></router-link></div>
                        <div class="text-wrap">
                            <a href="#"><span class="num"></span><span class="tt1"></span><span class="tt2"></span></a>
                            <div class="txt">
                                <router-link to="/case"><span class="num">01</span><span class="tt1">爱莎韩城</span><span class="tt2">唯美浪漫</span>
                                    <p>
                                        现代人面临着城市的喧嚣和污染，激烈的竞争压力，还有忙碌的工作和紧张的生活...
                                    </p>
                                </router-link>
                                <router-link to="/case" class="more"></router-link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="pic"><router-link to="/case"><img src="../images/pro_01.png" alt="" /><i></i></router-link></div>
                        <div class="text-wrap">
                            <router-link to="/case"><span class="num"></span><span class="tt1"></span><span class="tt2"></span></router-link>
                            <div class="txt">
                                <router-link to="/case"><span class="num">02</span><span class="tt1">满满的都是爱</span><span class="tt2">唯美浪漫</span>
                                    <p>
                                        现代人面临着城市的喧嚣和污染，激烈的竞争压力，还有忙碌的工作和紧张的生活...
                                    </p>
                                </router-link>
                                <router-link to="/case" class="more"></router-link>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div class="pic"><a href="case.vue"><img src="../images/pro_01.png" alt="" /><i></i></a></div>
                        <div class="text-wrap">
                            <a href="case.vue"><span class="num"></span><span class="tt1"></span><span class="tt2"></span></a>
                            <div class="txt">
                                <a href="case.vue"><span class="num">03</span><span class="tt1">丹纳斯威廉</span><span class="tt2">唯美浪漫</span>
                                    <p>
                                        现代人面临着城市的喧嚣和污染，激烈的竞争压力，还有忙碌的工作和紧张的生活...
                                    </p>
                                </a>
                                <a href="case.vue" class="more"></a>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div class="pic"><a href="case.vue"><img src="../images/pro_01.png" alt="" /><i></i></a></div>
                        <div class="text-wrap">
                            <a href="case.vue"><span class="num"></span><span class="tt1"></span><span class="tt2"></span></a>
                            <div class="txt">
                                <a href="case.vue"><span class="num">04</span><span class="tt1">奇幻星空</span><span class="tt2">唯美浪漫</span>
                                    <p>
                                        现代人面临着城市的喧嚣和污染，激烈的竞争压力，还有忙碌的工作和紧张的生活...
                                    </p>
                                </a>
                                <a href="case.vue" class="more"></a>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div class="pic"><a href="case.vue"><img src="../images/pro_01.png" alt="" /><i></i></a></div>
                        <div class="text-wrap">
                            <a href="case.vue"><span class="num"></span><span class="tt1"></span><span class="tt2"></span></a>
                            <div class="txt">
                                <a href="case.vue"><span class="num">01</span><span class="tt1">爱莎韩城</span><span class="tt2">唯美浪漫</span>
                                    <p>
                                        现代人面临着城市的喧嚣和污染，激烈的竞争压力，还有忙碌的工作和紧张的生活...
                                    </p>
                                </a>
                                <a href="case.vue" class="more"></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        <section class="company">
                <div class="container">
                    <ul class="clearfix">
                        <li><a href="case.vue"><img src="../images/about_1.png" alt="" class="vcenter"/><i></i></a></li>
                        <li>
                            <a href="case.vue" class="a_t">唯星婚纱摄影</a>
                            <span class="font_en">Jindo wedding photography</span>
                            <p>
                                经过10余年的快速发展，唯星深刻理解未来数字营销内容与技术的融合之势，
                                积极引进优秀的互联网技术、营销策略及内容创意专家，先后
                                从IBM、微软、华为等知名IT企业引进大量优秀人才，目前公司逾千人规模.......
                            </p>
                            <a href="case.vue" class="more"></a>
                        </li>
                        <li>
                            <a href="news.vue" class="a_t">金牌管家服务</a>
                            <span class="font_en">the whole process of design services  </span>
                            <p>我们坚持SPRING全程服务，拥有绿色家园只是你生活下一华章的开始
                                24小时售后服务电话：<a href="tel:021-31265245">021-31265245</a>
                            </p>
                            <a href="news.vue" class="more"></a>
                        </li>
                    </ul>
                </div>
            </section>
        <section class="home_team">
                <div class="top clearfix">
                    <div class="l1_1">
                        <a href="team.vue">服务团队</a>
                    </div>
                    <div class="l1_2">
                        秉承"整合数字资源,技术驱动营销"的理念，专注于数字营销技术、产品、资源、服务的创新与整合
                    </div>
                </div>
                <ul class="clearfix team_tu"  id="ulul">
                    <li @click="show1">
                        <div class="pic"><img src="../images/team_02.png" alt="" /><i></i></div>
                        <div class="c1">主任摄影师：王舒斐1</div><div class="c2">摄影理念："整合数字资源,技术驱动营销</div>
                        <div class="c3">经过10余年的快速发展，唯星深刻理解未来数字营销内容与技术的融合之势，积
                            极引进优秀的互联网技术、营销策略及内容创意专家
                            ，先后从IBM、微软、华为等知名IT企业引进大量优秀人才，目前公司逾千人规模
                            ，上海作为总部，同步辐射北京、深圳、香港、江浙、内蒙等全国分/子公司，目
                            前已服务企业数量达上万家。
                        </div>
                    </li>
                    <li>
                        <div class="pic"><img src="../images/team_02.png" alt="" /><i></i></div>
                        <div class="c1">主任摄影师：王舒斐2</div><div class="c2">摄影理念："整合数字资源,技术驱动营销</div>
                        <div class="c3">经过10余年的快速发展，唯星深刻理解未来数字营销内容与技术的融合之势，积
                            极引进优秀的互联网技术、营销策略及内容创意专家
                            ，先后从IBM、微软、华为等知名IT企业引进大量优秀人才，目前公司逾千人规模
                            ，上海作为总部，同步辐射北京、深圳、香港、江浙、内蒙等全国分/子公司，目
                            前已服务企业数量达上万家。
                        </div>
                    </li>
                    <li>
                        <div class="pic"><img src="../images/team_02.png" alt="" /><i></i></div>
                        <div class="c1">主任摄影师：王舒斐3</div><div class="c2">摄影理念："整合数字资源,技术驱动营销</div>
                        <div class="c3">经过10余年的快速发展，唯星深刻理解未来数字营销内容与技术的融合之势，积
                            极引进优秀的互联网技术、营销策略及内容创意专家
                            ，先后从IBM、微软、华为等知名IT企业引进大量优秀人才，目前公司逾千人规模
                            ，上海作为总部，同步辐射北京、深圳、香港、江浙、内蒙等全国分/子公司，目
                            前已服务企业数量达上万家。
                        </div>
                    </li>
                    <li>
                        <div class="pic"><img src="../images/team_02.png" alt="" /><i></i></div>
                        <div class="c1">主任摄影师：王舒斐4</div><div class="c2">摄影理念："整合数字资源,技术驱动营销</div>
                        <div class="c3">经过10余年的快速发展，唯星深刻理解未来数字营销内容与技术的融合之势，积
                            极引进优秀的互联网技术、营销策略及内容创意专家
                            ，先后从IBM、微软、华为等知名IT企业引进大量优秀人才，目前公司逾千人规模
                            ，上海作为总部，同步辐射北京、深圳、香港、江浙、内蒙等全国分/子公司，目
                            前已服务企业数量达上万家。
                        </div>
                    </li>
                    <li>
                        <div class="pic"><img src="../images/team_02.png" alt="" /><i></i></div>
                        <div class="c1">主任摄影师：王舒斐5</div><div class="c2">摄影理念："整合数字资源,技术驱动营销</div>
                        <div class="c3">经过10余年的快速发展，唯星深刻理解未来数字营销内容与技术的融合之势，积
                            极引进优秀的互联网技术、营销策略及内容创意专家
                            ，先后从IBM、微软、华为等知名IT企业引进大量优秀人才，目前公司逾千人规模
                            ，上海作为总部，同步辐射北京、深圳、香港、江浙、内蒙等全国分/子公司，目
                            前已服务企业数量达上万家。
                        </div>
                    </li>
                    <li>
                        <div class="pic"><img src="../images/team_02.png" alt="" /><i></i></div>
                        <div class="c1">主任摄影师：王舒斐6</div><div class="c2">摄影理念："整合数字资源,技术驱动营销</div>
                        <div class="c3">经过10余年的快速发展，唯星深刻理解未来数字营销内容与技术的融合之势，积
                            极引进优秀的互联网技术、营销策略及内容创意专家
                            ，先后从IBM、微软、华为等知名IT企业引进大量优秀人才，目前公司逾千人规模
                            ，上海作为总部，同步辐射北京、深圳、香港、江浙、内蒙等全国分/子公司，目
                            前已服务企业数量达上万家。
                        </div>
                    </li>
                    <li>
                        <div class="pic"><img src="../images/team_02.png" alt="" /><i></i></div>
                        <div class="c1">主任摄影师：王舒斐7</div><div class="c2">摄影理念："整合数字资源,技术驱动营销</div>
                        <div class="c3">经过10余年的快速发展，唯星深刻理解未来数字营销内容与技术的融合之势，积
                            极引进优秀的互联网技术、营销策略及内容创意专家
                            ，先后从IBM、微软、华为等知名IT企业引进大量优秀人才，目前公司逾千人规模
                            ，上海作为总部，同步辐射北京、深圳、香港、江浙、内蒙等全国分/子公司，目
                            前已服务企业数量达上万家。
                        </div>
                    </li>
                    <li>
                        <div class="pic"><img src="../images/team_02.png" alt="" /><i></i></div>
                        <div class="c1">主任摄影师：王舒斐8</div><div class="c2">摄影理念："整合数字资源,技术驱动营销</div>
                        <div class="c3">经过10余年的快速发展，唯星深刻理解未来数字营销内容与技术的融合之势，积
                            极引进优秀的互联网技术、营销策略及内容创意专家
                            ，先后从IBM、微软、华为等知名IT企业引进大量优秀人才，目前公司逾千人规模
                            ，上海作为总部，同步辐射北京、深圳、香港、江浙、内蒙等全国分/子公司，目
                            前已服务企业数量达上万家。
                        </div>
                    </li>
                    <li>
                        <div class="pic"><img src="../images/team_02.png" alt="" /><i></i></div>
                        <div class="c1">主任摄影师：王舒斐9</div><div class="c2">摄影理念："整合数字资源,技术驱动营销</div>
                        <div class="c3">经过10余年的快速发展，唯星深刻理解未来数字营销内容与技术的融合之势，积
                            极引进优秀的互联网技术、营销策略及内容创意专家
                            ，先后从IBM、微软、华为等知名IT企业引进大量优秀人才，目前公司逾千人规模
                            ，上海作为总部，同步辐射北京、深圳、香港、江浙、内蒙等全国分/子公司，目
                            前已服务企业数量达上万家。
                        </div>
                    </li>
                    <li>
                        <div class="pic"><img src="../images/team_02.png" alt="" /><i></i></div>
                        <div class="c1">主任摄影师：王舒斐10</div><div class="c2">摄影理念："整合数字资源,技术驱动营销</div>
                        <div class="c3">经过10余年的快速发展，唯星深刻理解未来数字营销内容与技术的融合之势，积
                            极引进优秀的互联网技术、营销策略及内容创意专家
                            ，先后从IBM、微软、华为等知名IT企业引进大量优秀人才，目前公司逾千人规模
                            ，上海作为总部，同步辐射北京、深圳、香港、江浙、内蒙等全国分/子公司，目
                            前已服务企业数量达上万家。
                        </div>
                    </li>
                    <li>
                        <div class="pic"><img src="../images/team_02.png" alt="" /><i></i></div>
                        <div class="c1">主任摄影师：王舒斐11</div><div class="c2">摄影理念："整合数字资源,技术驱动营销</div>
                        <div class="c3">经过10余年的快速发展，唯星深刻理解未来数字营销内容与技术的融合之势，积
                            极引进优秀的互联网技术、营销策略及内容创意专家
                            ，先后从IBM、微软、华为等知名IT企业引进大量优秀人才，目前公司逾千人规模
                            ，上海作为总部，同步辐射北京、深圳、香港、江浙、内蒙等全国分/子公司，目
                            前已服务企业数量达上万家。
                        </div>
                    </li>
                    <li>
                        <div class="pic"><img src="../images/team_02.png" alt="" /><i></i></div>
                        <div class="c1">主任摄影师：王舒斐12</div><div class="c2">摄影理念："整合数字资源,技术驱动营销</div>
                        <div class="c3">经过10余年的快速发展，唯星深刻理解未来数字营销内容与技术的融合之势，积
                            极引进优秀的互联网技术、营销策略及内容创意专家
                            ，先后从IBM、微软、华为等知名IT企业引进大量优秀人才，目前公司逾千人规模
                            ，上海作为总部，同步辐射北京、深圳、香港、江浙、内蒙等全国分/子公司，目
                            前已服务企业数量达上万家。
                        </div>
                    </li>
                    <li>
                        <div class="pic"><img src="../images/team_02.png" alt="" /><i></i></div>
                        <div class="c1">主任摄影师：王舒斐13</div><div class="c2">摄影理念："整合数字资源,技术驱动营销</div>
                        <div class="c3">经过10余年的快速发展，唯星深刻理解未来数字营销内容与技术的融合之势，积
                            极引进优秀的互联网技术、营销策略及内容创意专家
                            ，先后从IBM、微软、华为等知名IT企业引进大量优秀人才，目前公司逾千人规模
                            ，上海作为总部，同步辐射北京、深圳、香港、江浙、内蒙等全国分/子公司，目
                            前已服务企业数量达上万家。
                        </div>
                    </li>
                    <li>
                        <div class="pic"><img src="../images/team_02.png" alt="" /><i></i></div>
                        <div class="c1">主任摄影师：王舒斐14</div><div class="c2">摄影理念："整合数字资源,技术驱动营销</div>
                        <div class="c3">经过10余年的快速发展，唯星深刻理解未来数字营销内容与技术的融合之势，积
                            极引进优秀的互联网技术、营销策略及内容创意专家
                            ，先后从IBM、微软、华为等知名IT企业引进大量优秀人才，目前公司逾千人规模
                            ，上海作为总部，同步辐射北京、深圳、香港、江浙、内蒙等全国分/子公司，目
                            前已服务企业数量达上万家。
                        </div>
                    </li>
                    <div class="xianshiqy">
                        <div  class="zuo" @click="show2"></div><div  class="you" @click="show3"></div>
                        <b class="closed" id="team_closed" @click="show4">&nbsp;</b>
                        <div class="biaotiss"></div>
                        <div class="biao2tiss"></div>
                        <div class="neirongss"></div>
                    </div>
                </ul>
            </section>
        <section class="home_news">
            <div class="container">
                <div class="home_top">
                    <div class="zhong">最新资讯</div>
                    <div class="ying">For Customers to provide professional information</div>
                    <a href="news.vue" class="more"></a>
                </div>
                <ul class="clearfix">
                    <li><a href="javascript:;" @click="addshop({id:1})">《中国广告》杂志专访唯星总裁赵旭隆：技术驱动营销 致力品效合一</a></li>
                    <li><a href="javascript:;" @click="addshop({id:2})">唯星集团运营总裁张蓬先生受邀出席，并发表“数字创新，商业之‘</a></li>
                    <li><a href="javascript:;" @click="addshop({id:3})">作为国内领先的数字营销企业，唯星集团荣获此次IAI国际广告奖变革</a></li>
                    <li><a href="javascript:;" @click="addshop({id:4})">唯星荣誉榜——2016上半年盘点唯星荣誉榜上半年盘点</a></li>
                    <li><a href="javascript:;" @click="addshop({id:5})">中国传媒大学广告学院联合主办的IAI国际创享节暨第16届IAI国际</a></li>
                    <li><a href="javascript:;" @click="addshop({id:6})">年度最佳营销公司”，是对唯星产品、技术、服务及团队等</a></li>
                    <li><a href="javascript:;" @click="addshop({id:7})">唯星集团运营总裁张蓬受邀出席IAI国际创享节并发表主题演讲商业之智</a></li>
                    <li><a href="javascript:;" @click="addshop({id:8})">任鲁豫等在内的央视著名主持人，如此豪华阵容</a></li>
                    <li><a href="javascript:;" @click="addshop({id:9})">整体实力的充分肯定，同时也预示着技术型数字营销企业已经引领行业</a></li>
                </ul>
            </div>
        </section>
        <section class="hehuo">
            <div class="container">
                <div class="home_top">
                    <div class="zhong">国际品牌合作伙伴</div>
                    <div class="ying">International brand partners</div>
                </div>

            </div>
            <div class="hehuo_con">
                <div class="nei">
                    <div>
                        <a href="">
                            <img src="../images/he_01.png" alt="" class="vcenter"/><i></i>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src="../images/he_02.png" alt="" class="vcenter"/><i></i>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src="../images/he_03.png" alt="" class="vcenter"/><i></i>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src="../images/he_04.png" alt="" class="vcenter"/><i></i>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src="../images/he_05.png" alt="" class="vcenter"/><i></i>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src="../images/he_06.png" alt="" class="vcenter"/><i></i>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src="../images/he_01.png" alt="" class="vcenter"/><i></i>
                        </a>
                    </div>


                </div>
            </div>
        </section>
        <foot></foot>
        <mmenu></mmenu>
    </div>
</template>
<!--<script src="../js/jquery.min.js"></script>-->
<script>
    import heade from './header.vue';
    import foot from './header.vue';
    import mmenu from './mmenu.vue';
    export default {
        data(){
            return {
                index:0,
                msg:{},
                ti:""
            }
        },
        methods:{
            addshop(options){
                this.$store.dispatch('addnum',options);
            },
            huoqu(index){
                var  biaoti =$("#ulul  li").eq(index).find(".c1").html();
                var  biao2ti =$("#ulul  li").eq(index).find(".c2").html();
                var  neirong =$("#ulul  li").eq(index).find(".c3").html();
                $("#ulul  li .pic").eq(index).addClass("active").parent().siblings("li").find(".pic").removeClass("active")
                $(".biaotiss").html(biaoti)
                $(".biao2tiss").html(biao2ti)
                $(".neirongss").html(neirong)
                $(".xianshiqy").fadeIn()
            },
            show1(){
                this.index = $(event).index();
                huoqu(this.index)
            },
            show2(){
                if(this.index>=0){
                    this.index-=1;
                    huoqu(index)

                }
                if(this.index==-1){
                    this.index+=14;
                    huoqu(this.index)

                }
            },
            show3(){
                if(this.index<=13){
                    this.index+=1;
                    huoqu(index)

                }
                if(this.index==14){
                    this.index-=14
                    huoqu(this.index)

                }
            },
            show4(){
                $(".xianshiqy").hide();
                $("#ulul  li .pic").removeClass("active");
            }
        },
        mounted(){
            this.$http({
                url:"./../../../data/home.json",
                method:"get"
            }).then((res)=>{
                console.log(this.msg)
                console.log(res.data.home);
                this.msg = res.data;
                this.ti = this.msg[0][0];
            }).catch((res)=>{

            })
            $('.banner').slick({
                dots: true,
                autoplay:true,
                arrows:false,
                autoplaySpeed:3000,
            });
        },
        components:{
            heade,foot,mmenu
        }
    }
</script>

<style></style>