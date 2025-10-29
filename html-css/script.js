
const jobsListing = document.querySelector('.jobs-listings')

jobsListing?.addEventListener('click', function (event) {
    const element = event.target
    console.log(element)
  if (element.classList.contains('button-apply-job')) {
        element.textContent = '!Aplicado¡'
        element.classList.add('is-applied')
  }
})
const tecnologia = document.querySelector('#tecnologia');
const ubicacion = document.querySelector('#ubicacion');
const contrato = document.querySelector('#contrato');
const experiencia = document.querySelector('#experiencia');
const job = document.querySelectorAll('.job-listing-card')

function filter (filtro){
    filtro.addEventListener('change', function(){
       const valor = filtro.value;
       job.forEach(job =>{
        const filterJob = job.dataset.ubicacion
        if(valor ===''|| valor === filterJob){
            job.classList.remove('is-hidden')
        }else{
            job.classList.add('is-hidden')
        }

       })

    })
    
}
filter(tecnologia)
filter(ubicacion)
filter(contrato)
filter(experiencia)
