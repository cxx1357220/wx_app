//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {
      name: '我叫陈熙华',
      job:"一名前端工程师",
      email:"515302174@qq.com",
      motto:'(job=>live(job))(job)',
      sex:"男",
      year:'24',
      school:"上海海洋大学",
      major:"信息与计算科学",
      phone:"18588236296",
      blog:"heechina.cn",
      github:"github.com/cxx1357220"
    },
    workHistory:{
      company:'东华软件股份公司-前端工程师',
      date:'2017-07至2018-07',
      bear:'主要负责前端开发，与后台人员以及产品配合实现产品前端界面效果与功能。'
    },
    skill:{
      html:"95",
      JavaScript:"90",
      css:"88",
      jQuery:"85",
      vue:"83",
      ECharts:"80"
    },
    project:[
      {
        title: "医院支付管理平台",
        introduce: "jQuery.js ECharts.js yaf",
        detailed: "负责医院互联网支付的后台管理程序的前端开发，使用ECharts进行数据统计展示，优化了大量非敏感数据的请求次数，并对此与后端工程师进行沟通协作。"
      },
      {
        title: "医院自助机",
        introduce: "jQuery.js symfony2",
        detailed: "独立负责部门医疗自助机的前端开发，开发模式和功能与移动互联网医院类似，所以在用户体验方面思考了更多，与产品经理讨论优化了用户操作流程，并对后端PHP有所参与。"
      },
      {
        title:'移动互联网医院',
        introduce: 'jQuery.js WeUI symfony2',
        detailed: '移动端微信服务号、支付宝生活号程序，负责前端页面实现，发现并解决移动端单击响应慢的问题，以及一些手机的浏览器对ES6的兼容性太低问题，并对此进行兼容处理。'
      },
      {
        title:'CNode社区文章查看（个人项目）',
        introduce: 'Vue.js Vue-Router vuex axios',
        detailed: '前端通过vue-cli脚手架创建vue项目，使用社区提供的API，对我关注的CNode社区作者的文章进行整合，更方便查看。'
      },
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    currentTab: 0,
  },
  //事件处理函数
  moreExperience: function(){
    var that = this;
    that.setData({
      currentTab: 1
    });
  },
  skillJson: function(obj){
    let oldObj = this.data[obj];
    let newObj=[];
    console.log(oldObj);
    for (let key in oldObj){
      newObj.push({ 'name': key, 'score': oldObj[key]})
    }
    this.setData({
      [obj]: newObj
    });
    console.log(this.data[obj])
  },
  onLoad: function () {
    this.skillJson('skill');
  },
})
