function getComponent() {
    return import(/* webpackChunkName:lodash */'lodash').then(({ default: _ }) => {
        let element = document.createElement('div')
        element.innerHTML = _.join(['Dell','Apple'],'-')
        return element
    })
}

getComponent().then(element=>
    document.getElementById('root').append(element))
