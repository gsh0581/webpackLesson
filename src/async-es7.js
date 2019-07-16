// 不配置optimization，使用异步加载lodash，自动进行代码分割
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
