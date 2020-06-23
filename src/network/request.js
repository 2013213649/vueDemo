
/*为了防止以后axios不维护的情况下，将axios进行封装一层*/
import axios from  'axios';

/**
 *  本身 axios.create 返回的就是一个Promise
 * @param config
 * @returns {AxiosPromise}
 */
export  function request(config) {
  // 1 配置基本参数
  const  instance = axios.create({
    baseURL:'',
    timeout:5000,
    headers:{}
  });
  //2 拦截器
  // 2.1 请求拦截器
  instance.interceptors.request.use(config => {
  //  1  针对config 里面不符合要求的额数据进行过滤，加工处理
  //  2  每次网络网络请求希望在界面中显示 特定的 加载图标
  //  3  某些网络请求必须携带token, eg 请求业务接口前必须校验是否已经登录
    return config
  },error => {
    console.log(error);
  });
  //2.2 相应拦截器
  instance.interceptors.response.use(rst => {
    //相应数据做一些特殊处理
    // console.log(rst);
    return rst.data
  });
  return instance(config)
}
/**
 * 本身返回就是一个Promise，调用方来指定对应的then 或者是 catch
 * @param config
 * @returns {Promise}
 */
export  function request04(config) {
  return new Promise((resolve,reject) => {
    const  instance = axios.create({
      baseURL:'',
      timeout:5000,
      headers:{}
    });
    instance(config)
  })
}

/**
 * 使用 Promise 进行返回
 * @param config
 * @returns {Promise}
 */
export function request03(config) {

 return new  Promise((resolve,reject) => {
   const  instance = axios.create({
     baseURL:'',
     timeout:5000,
     headers:{}
   });
   instance(config)
     .then(ret => {
       resolve(ret)
     })
     .catch(err => {
       reject(err)
     })
  })
}

/**
 * @param config
 * 调用方式 request02({baseConfig:{},success:function(){},failure:function(){}})
 */
export  function request02(config) {
  const  instance = axios.create({
    baseURL:'',
    timeout:5000
  });
  instance(config.baseConfig)
    .then( ret => {
      config.success(ret)
    })
    .catch(err => {
      config.failure(err)
    })
}
/**
 *
 * @param config  基本配置
 * @param success 函数类型
 * @param failure 函数类型
 */
export  function request01(config,success,failure) {
  const  instance = axios.create({
    baseURL:'',
    timeout:''
  });
  instance(config)
    .then(ret => {
      success(ret)
    })
    .catch(err => {
      failure(err)
    })
}
