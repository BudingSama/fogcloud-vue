<template>
<div>
    <el-alert
        style="text-align:left"
        title="语音支持"
        description="庆科单品方案可帮您的产品快速接入 Amazon Echo / Google Home / 天猫精灵。通过庆科的智能单品云服务，用户可以通过语音命令的方式使用您的产品。"
        type="success">
    </el-alert>
    <el-alert
        title="申请开通后，我们将安排专人在48小时内与您联系。"
        type="warning"
        show-icon
    ></el-alert>
    <el-collapse v-model="activeName" accordion>
    <el-collapse-item title="Amazon Echo" name="1">
        <div class="wrap-top">
            <img class="item-img" src="" alt="">
            <div class="item-title">
                <h3>Amazon Echo</h3>
                <p>接入后可以通过 Amazon Echo 控制该产品</p>
            </div>
            <div class="item-btn">
                <el-button size="small" type="primary" icon="el-icon-goods">开通</el-button>
            </div>
        </div>
        <p class="wrap-bottom">支持的语音指令：<br />"Alexa,turn on the plug."<br />"Alexa,turn off the plug."</p>
    </el-collapse-item>
    <el-collapse-item title=" Google Home" name="2">
        <div class="wrap-top">
            <img class="item-img" src="" alt="">
            <div class="item-title">
                <h3>Google Home</h3>
                <p>接入后可以通过 Google Home 控制该产品</p>
            </div>
            <div class="item-btn">
                <el-button size="small" type="primary" icon="el-icon-goods">开通</el-button>
            </div>
        </div>
        <p class="wrap-bottom">支持的语音指令：<br />"Hey Google,turn on the plug."<br />"Hey Google,turn off the plug."</p>
    </el-collapse-item>
    <el-collapse-item title=" 天猫精灵" name="3">
        <div class="wrap-top">
            <img class="item-img" src="" alt="">
            <div class="item-title">
                <h3>天猫精灵</h3>
                <p>接入后可以通过 天猫精灵 控制该产品</p>
            </div>
            <div class="item-btn">
                <el-button size="small" type="primary" icon="el-icon-goods">开通</el-button>
            </div>
        </div>
        <p class="wrap-bottom">支持的语音指令：<br />"天猫精灵，打开插座。"<br />"天猫精灵，关闭插座。"</p>
    </el-collapse-item>
    </el-collapse>
</div>
</template>
<style scoped>
.el-collapse-item{
    text-align: left;
}
.item-img{
    width: 60px;
    height: 60px;
    float: left;
    border-radius: 4px;
    background: #ccc;
}
.wrap-top{
    width: 100%;
    height: 60px;
    padding: 20px 0px;
    border-bottom: 1px solid #e9e9e9;
}
.item-title{
    float: left;
    padding-top: 6px;
    padding-left: 50px;
}
.item-btn{
    float: right;
    padding-top: 12px;
    padding-right: 20px;
}
.wrap-bottom{
    padding-top: 25px;
}
</style>
<script>
export default {
    data() {
      return {
        activeName: '1'
      };
    }
}
</script>