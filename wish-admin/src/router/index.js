import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/wish',
                    component: resolve => require(['../components/page/wish.vue'], resolve),
                    meta: { title: '许愿管理' }
                },
              {
                    path: '/admin',
                    component: resolve => require(['../components/page/admin.vue'], resolve),
                    meta: { title: '管理员管理' }
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})

export default router;

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (!token && to.path !== '/login') {
    next('/login');
  }
  next();
  // if(to.path == '/admin'){
  //   // role === 1 ? next() : next('/403');
  //   next('/admin')
  // }
  // else if (to.meta.permission) {
  //   // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
  //   // role === 'admin' ? next() : next('/403');
  // }
  // else {
  //   // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
  //   if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
  //     Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
  //       confirmButtonText: '确定'
  //     });
  //   } else {
  //     next();
  //   }
  // }
})