
const Nav = {
    menu:[{
      name: '应用配置',
      path: 'application',
      children: [
        {
          name: '应用信息',
          icon: 'icon-yingyongxinxi',
          path: 'info',
        },
        {
          name: '界面风格',
          icon: 'icon-jiemianfengge',
          path: 'page',
        },
        {
          name: '证书配置',
          icon: 'icon-zhengshupeizhi',
          path: 'authlicense',
        },
        {
          name: '应用生成',
          icon: 'icon-yingyongshengcheng',
          path: 'appcompiler',
        },
      ],
    },
    {
      name: '智能产品',
      path: 'product',
      children: [
        {
          name: '设备列表',
          icon: 'icon-shebeiliebiao',
          path: 'prod',
        },
      ],
    },
    {
      name: '数据统计',
      path: 'graph',
      children: [
        {
          name: '概况',
          icon: 'icon-gaikuang',
          path: 'overview',
        },
        {
          name: '激活统计',
          icon: 'icon-jihuotongji',
          path: 'active',
        },
        {
          name: '地域统计',
          icon: 'icon-diqutongji',
          path: 'region',
        },
      ],
    },
    {
      name: '运营管理',
      path: 'operate',
      children: [
        {
          name: '用户列表',
          icon: 'icon-yonghuliebiao',
          path: 'userlist',
        },
        {
          name: '用户反馈',
          icon: 'icon-yonghufankui',
          path: 'feedback',
        },
        {
          name: '设备列表',
          icon: 'icon-shebeiliebiao',
          path: 'devicelist',
        },
        {
          name: '推送通知',
          icon: 'icon-tuisongtongzhi',
          path: 'notifications',
        },
      ],
    }],
    user:[{
      name: '账户资料',
      path: 'account',
      children: [
        {
          name: '基础信息',
          icon: 'icon-jichuxinxi',
          path: 'overview',
        },
        {
          name: '账户安全',
          icon: 'icon-mimaanquan',
          path: 'security',
        },
        {
          name: '账户认证',
          icon: 'icon-zhanghurenzheng',
          path: 'auth',
        },
      ],
    },
    {
      name: '我的订单',
      path: 'order',
      children: [
        {
          name: '全部',
          icon: 'icon-quanbu',
          path: 'total',
        },
        {
          name: '模块购买',
          icon: 'setting',
          path: 'buymodule',
        },
        {
          name: '设备证书',
          icon: 'icon-zhengshupeizhi',
          path: 'devicelisence',
        },
      ],
    },
    {
      name: '我的工单',
      path: 'workorder',
      children: [
        {
          name: '全部',
          icon: 'icon-quanbu',
          path: 'allview',
        },
        {
          name: '处理中',
          icon: 'icon-chulizhong',
          path: 'processing',
        },
        {
          name: '已完成',
          icon: 'icon-yiwancheng',
          path: 'finished',
        },
      ],
    },
    {
      name: '我的财务',
      path: 'finance',
      children: [
        {
          name: '概况',
          icon: 'icon-gaikuang',
          path: 'totalview',
        },
        {
          name: '我的账单',
          icon: 'setting',
          path: 'myaccount',
        },
        {
          name: '充值',
          icon: 'setting',
          path: 'recharge',
        },
        {
          name: '发票',
          icon: 'setting',
          path: 'invoice',
        },
      ],
    }]
};

  export default Nav;