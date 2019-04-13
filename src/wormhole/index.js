const nameSpace = 'epro-hospital-account-box'
const makeEntranceTag = function (nameSpace, tag) {
  return nameSpace + '-' + tag
}
const makeUtterTag = function (nameSpace, tag) {
  return nameSpace + '/' + tag
}
const wormhole = {
  /**
   * 业务盒子出口列表
   */
  outter() {
    return {
      loginSuccess: {
        tag: makeUtterTag(nameSpace, 'loginSuccess'),
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
        tag: makeEntranceTag(nameSpace, 'login'),
        description: '登录，无数据需求'
      }
    }
  }
}
export default wormhole