const inp=document.querySelector('.todo-inp')
const but=document.querySelector('.todo-but')


const tododis=document.querySelector('.todo-dis')
but.addEventListener('click',()=>
{
    const newdiv=document.createElement('div')
    newdiv.classList.add('todo-list')
    const newpara=document.createElement('p')
    const newbut=document.createElement('button')
    newbut.textContent="Delete"
    newpara.innerText=inp.value
    newdiv.appendChild(newpara)
    newbut.classList.add('deletebutton')
   
    newbut.addEventListener('click',()=>
{
    newdiv.remove()
})
    newdiv.appendChild(newbut)

    tododis.append(newdiv)
    inp.value=""

})

