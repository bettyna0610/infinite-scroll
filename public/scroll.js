

let page = 0


const container = document.getElementById('container')
const loading = document.querySelector('.loading')


const getData = () => {
    fetch(`http://localhost:3000/data?page=${page}&limit=10`).then((response) => {
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

          console.log(data.length)
        
          loading.classList.remove('show')
          
          
           
        }
        })
        })
        
        
}

const firstPage = () => {
    getData()
}

firstPage()



window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight,clientHeight} = document.documentElement
    console.log({scrollTop,scrollHeight,clientHeight})

    if(clientHeight + scrollTop >= scrollHeight) {
        
            showLoading()
        
        
    }
})

const showLoading = () => {
    if(page<=8) {
        loading.classList.add('show')
    }
    
    
   setTimeout(nextPage, 3000)
}



function nextPage() {
    page += 1
    getData()
}






