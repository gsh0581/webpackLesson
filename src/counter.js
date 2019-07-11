function counter(){
    [1, 2, 3].map((n) => n + 1);
    let div = document.createElement('div')
    div.setAttribute('id','counter')
    div.innerHTML =1
    div.onclick = function(){
        div.innerHTML = parseInt(div.innerHTML,10) +1
    }
    document.getElementById('root').appendChild(div)
}
export default counter