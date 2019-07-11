import avatar  from './404.jpg'
function createAvatar(){

var img = new Image()
img.src = avatar;
img.classList.add('avatar')
document.getElementById('root').append(img)
}
export default createAvatar