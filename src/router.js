import layoutHeaderFooter from 'pper-vue-kernal/src/layout/full-header-footer/base'
import layoutHeaderFooterAside from 'pper-vue-kernal/src/layout/full-header-aside/base'
const meta = { requiresAuth: true }
const nameSpace = 'pper-base-box'
export default {
  routes(layout) {
    return [
      {
        path: `/${nameSpace}-home`,
        name: `${nameSpace}-home`,
        redirect: { name: `${nameSpace}-home-index` },
        component: layout
          ? layout.layoutHeaderFooter || layoutHeaderFooter
          : layoutHeaderFooter,
        children: (pre => [
          {
            path: 'index',
            name: `${pre}index`,
            component: () => import('./views/Home1.vue'),
            meta: { meta, title: '主页' }
          }
        ])(`${nameSpace}-home-`)
      },
      {
        path: `/${nameSpace}-about`,
        name: `${nameSpace}-about`,
        redirect: { name: `${nameSpace}-about-index` },
        component: layout
          ? layout.layoutHeaderFooterAside || layoutHeaderFooterAside
          : layoutHeaderFooterAside,
        children: (pre => [
          {
            path: 'index',
            name: `${pre}index`,
            component: () => import('./views/About1.vue'),
            meta: { meta, title: '关于我们' }
          }
        ])(`${nameSpace}-about-`)
      }
    ]
  }
}
