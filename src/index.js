// import _ from 'lodash'  // 1mb
// // 业务逻辑 1mb
// // 此处省略10万行代码
// console.log(_.join(['a','v','c'],'%'));

// 输出 main.js 2mb 

// 整体打包的问题：
// 打包文件庞大，加载时间长，重新访问又要加载 

// 第二种方式
// index.js 被拆分成两个js文件
// 当页面业务逻辑发生变化，只要加载index.js即可
// code Splitting

async function getComponent() {
    const { default :_ } =await import(/* webpackChunkName:"lodash" */ 'lodash')
        let element = document.createElement('div')
        element.innerHTML = _.join(['Dell','Apple'],'-')
        return element
}
document.addEventListener('click',()=>{
    getComponent().then(element=>
        document.getElementById('root').append(element))
})


// getComponent().then(element=>
//     document.getElementById('root').append(element))

// import test from './test'
// console.log(test.name);