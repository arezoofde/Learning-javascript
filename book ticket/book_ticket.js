let countrySelect = document.querySelector('.countrySelect')
let citySelect = document.querySelector('.citySelect')

let citisSelect = {
    Iran : ['Tehran', 'Isfahan' , 'Tabriz' ,'Mashhad'],
    Turkey : ['IStanbol' , 'Antalia' , 'Ezmir'],
    USA : ['Sun ferasisgo', 'Amesterdam'],
}
countrySelect.addEventListener('change',function(){
  

    if (countrySelect.value === "Please Select" ) {
        citySelect.innerHTML = '';
        citySelect.innerHTML += `<option>select citi</option>`
    } else {
        let mainCountryName = countrySelect.value;
        let mainCountryCitis = citisSelect[mainCountryName];

        
        citySelect.innerHTML = '';
        mainCountryCitis.forEach(function (citi) {
            
            citySelect.innerHTML += `<option>${citi}</option>`
        
        })
    }

    
});