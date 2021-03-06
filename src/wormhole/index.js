const nameSpace = 'pper-base-box'
const makeEntranceTag = function (tag) {
  return nameSpace + '-' + tag
}
const makeOutterTag = function (tag) {
  return nameSpace + '/' + tag
}
const wormhole = {
  /**
   * 业务盒子出口列表
   */
  outter() {
    return {
      loginSuccess: {
        tag: makeOutterTag('loginSuccess'),
        description: '登录成功出口，无数据设置'
      }
    }
  },

  /**
   * 业务盒子入口列表
   * @param {*} nameSpace
   */
  entrance() {
    return {
      login: {
        tag: makeEntranceTag('login'),
        description: '登录，无数据需求'
      }
    }
  }
}
export default wormhole
