import counter from './counter'
import number from './number'
// import './index.css'
// var btn = document.createElement('button')
// var root = document.getElementById('root')
// btn.innerHTML = '新增'
// root.appendChild(btn)
// btn.onclick = function(){
//     var div = document.createElement('div')
//     div.innerHTML = 'item'
//     root.appendChild(div)
// }
number()
counter()

// 热模块更新部署
if (module.hot) {
    module.hot.accept('./number', function() {
        document.getElementById('root').removeChild(document.getElementById('number'))
        number()
    });
  }