<template>
  <div class="layui-col-md8">
      <div class="fly-panel">
        <div class="fly-panel-title fly-filter">
          <a>置顶</a>
          <a href="#signin" class="layui-hide-sm layui-show-xs-block fly-right" id="LAY_goSignin" style="color: #FF5722;">去签到</a>
        </div>
        <ul class="fly-list">
          <li v-for="v in notice" :key="v.id">
            <a href="user/home.html" class="fly-avatar">
              <img v-bind:src="v.headimg" v-bind:alt="v.author">
            </a>
            <h2>
              <a class="layui-badge">动态</a>
              <a href="jie/detail.html">{{v.title}}</a>
            </h2>
            <div class="fly-list-info">
              <a href="user/home.html" link>
                <cite>{{v.author}}</cite>
                <i class="iconfont icon-renzheng" title="已实名认证" v-if="v.real==1"></i>
                <i class="layui-badge fly-badge-vip" v-if="v.vip>0">VIP{{v.vip}}</i>
              </a>
              <span>{{v.createTime}}</span>
              
              <span class="fly-list-kiss layui-hide-xs" title="悬赏积分"><i class="iconfont icon-kiss"></i>{{v.credit}}</span>
              <span class="layui-badge fly-badge-accept layui-hide-xs" v-if="v.status ==1">已结</span>
              <span class="fly-list-nums"> 
                <i class="iconfont icon-pinglun1" title="回答"></i> {{v.clicks}}
              </span>
            </div>
            <div class="fly-list-badge">
              
              <span class="layui-badge layui-bg-black" v-if="v.top ==1">置顶</span>
              
              <span class="layui-badge layui-bg-red" v-if="v.incisive==1">精帖</span>
              
            </div>
          </li>
        </ul>
      </div>

      <div class="fly-panel" style="margin-bottom: 0;">
        
        <div class="fly-panel-title fly-filter">
          <a href="" class="layui-this">综合</a>
          <span class="fly-mid"></span>
          <a href="">未结</a>
          <span class="fly-mid"></span>
          <a href="">已结</a>
          <span class="fly-mid"></span>
          <a href="">精华</a>
          <span class="fly-filter-right layui-hide-xs">
            <a href="" class="layui-this">按最新</a>
            <span class="fly-mid"></span>
            <a href="">按热议</a>
          </span>
        </div>

        <ul class="fly-list">   
          <li v-for="v in notice" :key="v.id">
            <a href="user/home.html" class="fly-avatar">
              <img v-bind:src="v.headimg" v-bind:alt="v.author">
            </a>
            <h2>
              <a class="layui-badge">动态</a>
              <a href="jie/detail.html">{{v.title}}</a>
            </h2>
            <div class="fly-list-info">
              <a href="user/home.html" link>
                <cite>{{v.author}}</cite>
                <i class="iconfont icon-renzheng" title="已实名认证" v-if="v.real==1"></i>
                <i class="layui-badge fly-badge-vip" v-if="v.vip>0">VIP{{v.vip}}</i>
              </a>
              <span>{{v.createTime}}</span>
              
              <span class="fly-list-kiss layui-hide-xs" title="悬赏积分"><i class="iconfont icon-kiss"></i>{{v.credit}}</span>
              <span class="layui-badge fly-badge-accept layui-hide-xs" v-if="v.status ==1">已结</span>
              <span class="fly-list-nums"> 
                <i class="iconfont icon-pinglun1" title="回答"></i> {{v.clicks}}
              </span>
            </div>
            <div class="fly-list-badge">
              
              <span class="layui-badge layui-bg-black" v-if="v.top ==1">置顶</span>
              
              <span class="layui-badge layui-bg-red" v-if="v.incisive==1">精帖</span>
              
            </div>
          </li>        
          
          
        </ul>
        <div style="text-align: center">
          <div class="laypage-main">
            <a href="jie/index.html" class="laypage-next">更多求解</a>
          </div>
        </div>

      </div>
    </div>
</template>
<script>
import axios from 'axios' 
export default {
  name: 'indexleft'
  ,data(){
    return {
      notice:[],
    }
  }
  ,created(){
      axios.get('/static/json/gonggao.json')
      .then(response=>{
         console.log(response.data.data);
         this.notice=response.data.data;
      })
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      })
  },
}
</script>