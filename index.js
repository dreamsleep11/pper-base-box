import router from './src/router'
import store from './src/store/index'
const nameSpace = 'pper-base-box'
const makeEntranceTag = function (nameSpace, tag) {
  return nameSpace + '-' + tag
}
const makeUtterTag = function (nameSpace, tag) {
  return nameSpace + '/' + tag
}
/**
 * 业务盒子出口列表
 */
const utter = function (nameSpace) {
  return {
    test: {
      tag: makeUtterTag(nameSpace, 'test'),
      description: '测试出口，依赖数据无'
    }
  }
}

/**
 * 业务盒子入口列表
 * @param {*} nameSpace
 */
const entrance = function (nameSpace) {
  return {
    home: {
      tag: makeEntranceTag(nameSpace, 'home'),
      description: '测试入口，依赖数据无'
    },
    about: {
      tag: makeEntranceTag(nameSpace, 'about'),
      description: '测试入口，依赖数据无'
    }
  }
}
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
  utter: utter(nameSpace),
  entrance: entrance(nameSpace)
}
