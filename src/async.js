// 不配置optimization，使用异步加载lodash，自动进行代码分割
function getComponent() {
    return import('lodash').then(({ default: _ }) => {
        let element = document.createElement('div')
        element.innerHTML = _.join(['Dell','Apple'],'-')
        return element
    })
}

getComponent().then(element=>
    document.getElementById('root').append(element))
