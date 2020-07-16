

console.log('Hello')

const container = document.getElementById('container')
const loading = document.querySelector('.loading')




window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight,clientHeight} = document.documentElement
    console.log({scrollTop,scrollHeight,clientHeight})

    if(clientHeight + scrollTop >= scrollHeight-5) {
        showLoading()
    }
})

const showLoading = () => {
    loading.classList.add('show')
   // setTimeout(getData, 1000)
}

fetch('http://localhost:3000/data?page=2&limit=10').then((response) => {
response.json().then((data) => {
  
if (data.error) {
console.log(data.error)
} else {

    
  
  
  data.map((data) => {
     
        const element = document.createElement('div')
        element.classList.add('data')
        element.innerHTML=
        `<p>${data.last_name}
        ${data.first_name}</p>
        <p> ${data.email}</p>`
      
        container.appendChild(element)
    
  })

  loading.classList.remove('show')
  
  
   
}
})
})



