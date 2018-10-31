const Routes = [
    {
        path:'/',
        name: 'layout',
        component:resolve=>require(['@/layout'],resolve),
        children:[
            {
                name:'application',
                path: 'application',
                component:resolve=>require(['@/components/application'],resolve),
                children:[
                    {
                        path:'info',
                        component:resolve=>require(['@/components/application/info'],resolve),
                    },
                    {
                        path:'page',
                        component:resolve=>require(['@/components/application/page'],resolve),
                    },
                    {
                        path:'authlicense',
                        component:resolve=>require(['@/components/application/authlicense'],resolve),
                    },
                    {
                        path:'appcompiler',
                        component:resolve=>require(['@/components/application/appcompiler'],resolve),
                    }
                ]
            },
            {
                path: 'product',
                component:resolve=>require(['@/components/product'],resolve),
                children:[
                    {
                        path:'prod',
                        component:resolve=>require(['@/components/product/prod'],resolve),
                    }
                ]
            },
            {
                path: 'graph',
                component:resolve=>require(['@/components/graph'],resolve),
                children:[
                    {
                        path:'overview',
                        component:resolve=>require(['@/components/graph/overview'],resolve),
                    },
                    {
                        path:'active',
                        component:resolve=>require(['@/components/graph/active'],resolve),
                    },
                    {
                        path:'region',
                        component:resolve=>require(['@/components/graph/region'],resolve),
                    }
                ],
            },
            {
                path:'operate',
                component:resolve=>require(['@/components/operate'],resolve),
                children:[
                    {
                        path:'userlist',
                        component:resolve=>require(['@/components/operate/userlist'],resolve),
                    },
                    {
                        path:'feedback',
                        component:resolve=>require(['@/components/operate/feedback'],resolve),
                    },
                    {
                        path:'devicelist',
                        component:resolve=>require(['@/components/operate/devicelist'],resolve),
                    },
                    {
                        path:'notifications',
                        component:resolve=>require(['@/components/operate/notifications'],resolve),
                    }
                ],
            },
            {
                path:'/dashboard',
                name:'dashboard',
                component:resolve=>require(['@/components/dashboard'],resolve),
            },
            {
                path:'/account',
                name:'account',
                component:resolve=>require(['@/components/account'],resolve),
                children: [
                    {
                      name: '基础信息',
                      path: 'overview',
                      component: resolve=>require(['@/components/account/overview'],resolve),
                    },
                    {
                      name: '账户安全',
                      path: 'security',
                      component: resolve=>require(['@/components/account/security'],resolve),
                    },
                    {
                      name: '账户认证',
                      icon: 'icon-zhanghurenzheng',
                      path: 'auth',
                      component: resolve=>require(['@/components/account/auth'],resolve),
                    },
                  ],
            },
            {
                path: '/order',
                name:'order',
                component: resolve=>require(['@/components/order'],resolve),
                children: [
                  {
                    name: '全部',
                    path: 'total',
                    component: resolve=>require(['@/components/order/overview'],resolve),
                  },
                  {
                    name: '模块购买',
                    path: 'buymodule',
                    component: resolve=>require(['@/components/order/buymodule'],resolve),
                  },
                  {
                    name: '设备证书',
                    path: 'devicelisence',
                    component: resolve=>require(['@/components/order/devicelisence'],resolve),
                  },
                ],
              },
              {
                name: 'workorder',
                path: '/workorder',
                component: resolve=>require(['@/components/workorder'],resolve),
                children: [
                  {
                    name: '全部',
                    path: 'allview',
                    component: resolve=>require(['@/components/workorder/overview'],resolve),
                  },
                  {
                    name: '处理中',
                    path: 'processing',
                    component: resolve=>require(['@/components/workorder/processing'],resolve),
                  },
                  {
                    name: '已完成',
                    path: 'finished',
                    component: resolve=>require(['@/components/workorder/finished'],resolve),
                  },
                ],
              },
              {
                name: 'finance',
                path: '/finance',
                component: resolve=>require(['@/components/finance'],resolve),
                children: [
                  {
                    name: '概况',
                    path: 'totalview',
                    component: resolve=>require(['@/components/finance/overview'],resolve),
                  },
                  {
                    name: '我的账单',
                    path: 'myaccount',
                    component: resolve=>require(['@/components/finance/myaccount'],resolve),
                  },
                  {
                    name: '充值',
                    path: 'recharge',
                    component: resolve=>require(['@/components/finance/recharge'],resolve),
                  },
                  {
                    name: '发票',
                    path: 'invoice',
                    component: resolve=>require(['@/components/finance/invoice'],resolve),
                  },
                ],
              },
        ],
    },
    {
        path:'/signin',
        name:'signin',
        component:resolve=>require(['@/components/signin'],resolve),
    },
    {
        path:'/register',
        name:'register',
        component:resolve=>require(['@/components/register'],resolve),
    },
    {
        path:'/forget',
        name:'forget',
        component:resolve=>require(['@/components/forget'],resolve),
    },
];
export default Routes;
