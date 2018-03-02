<template>
    <div>
        <indextop></indextop>
        <div class="layui-container">
            <div class="layui-row layui-col-space15">
                    <indexleft></indexleft>
                    <indexright></indexright>
            </div>
        </div>
    </div>
</template>
<script>
import indextop from '../../components/index/top'   
import indexleft from '../../components/index/left'  
import indexright from '../../components/index/right'  
export default {
  name: 'IndexMain',
  data () {},
  components:{indextop,indexleft,indexright}
}
</script>