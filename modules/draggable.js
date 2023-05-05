const draggable = (e) => {
const lis = document.querySelectorAll('li')
const dragIcon =  document.querySelectorAll('.bi-three-dots-vertical')
console.log('e & event.type',e,e.type, lis, dragIcon)
lis.forEach((li,i)=>console.log(i,li))

}


 export default draggable;