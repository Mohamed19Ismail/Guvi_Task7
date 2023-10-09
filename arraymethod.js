//Get all the countries from Asia continent /region using Filter function

let url = new XMLHttpRequest();
url.open('GET',"https://restcountries.com/v3.1/all",true)
url.send()

url.onload = function(){
    let data = JSON.parse(this.response)
    console.log(data)
    let regionname = data.filter(function(val){
        return val.region === 'Asia'
    })
    let countryname = regionname.map((val)=>{
        return val.name.common
    })
    console.log("Below are the counrties in Asia Region")
    console.log(countryname)
}




//Get all the countries with a population of less than 2 lakhs using Filter function

let url = new XMLHttpRequest();
url.open('GET',"https://restcountries.com/v3.1/all",true)
url.send()

url.onload = function(){
    let data = JSON.parse(this.response)
    console.log(data)
    let population = data.filter((val)=> val.population < 200000)
    console.log(population)
    population.filter((val)=> console.log(val.name.common))
}




//Print the following details name, capital, flag using forEach function

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all' ,true)

xhr.send()

xhr.onload = function(){
    var data = JSON.parse(this.response)
    console.log("data",data)
    data.forEach(MyFunc);
    function MyFunc(i){
        console.log(" ")
        console.log("CountryName: " + i.name.common)
        console.log("Capital: " + i.capital)
        console.log("Flag: " + i.flag)

    }
}



//Print the total population of countries using reduce function

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all' ,true)

xhr.send()
xhr.onload = function(){
    var data = JSON.parse(this.response)
    console.log("data",data)
    let total = data.reduce((acc,country)=>{
        return acc + country.population
    })
    console.log(total)
}



//Print the country which uses US Dollars as currency.


let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all' ,true)

xhr.send()

xhr.onload = function(){
    var data = JSON.parse(this.response)
    console.log("data",data)
    let curre = data.filter((val)=>{
        return val.currencies && val.currencies.USD
    })
    let countryname = curre.map((val)=>{
        return val.name.common
    })
    console.log("Below are the countries with USD as Currency")
    console.log(countryname)
}