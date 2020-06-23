module.exports = {
  //表明配置webpack
  configureWebpack:{
    //表明配置路径
    resolve:{
      //别名
      alias:{
        "assets":"@/assets",
        "components":"@/components",
        "network":"@/network",
        "views":"@/views",
        "common":"@/common"
      }
    }
  }
};
