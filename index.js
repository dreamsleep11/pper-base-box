import router from './src/router'
import store from './src/store/index'
import wormhole from './src/wormhole/index'
const nameSpace = 'pper-base-box'
/**
 * 业务盒子详细配置
 */
export default {
  description: '基础实例盒子',
  nameSpace: nameSpace,
  router(layout) {
    return router.routes(layout)
  },
  store: store,
  outter: wormhole.outter(),
  entrance: wormhole.entrance()
}
