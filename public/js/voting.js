
document.addEventListener('DOMContentLoaded',()=>{
    
    console.log('Connected')
    // const { default: swal } = require("sweetalert");
    
    let checkBox = document.querySelector('#check')
    checkBox.addEventListener('click',()=>{
        let passwordField = document.querySelector('#pin')
        // console.dir(passwordFiled)
        passwordField.type =  passwordField.type === 'text'?'password':'text'


    })
    const btn = document.querySelector(".button");
    btn.addEventListener('click',()=>{
        btn.classList.toggle('button--loading');

    });

    

    let voteBtn = document.querySelector('#voteBtn')
    voteBtn.addEventListener('click',()=>{
        let name = document.querySelector('#nominee').value
        let category = document.querySelector('#category').value
        let pin = document.querySelector('#pin').value
        let obj = {category,pin,name}
        console.log(obj)
        fetch('/r-x',{
            method:'POST',
            headers:{
               'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)}).then(res =>{
                if(res.status == '200'){
                    swal('Successfully voted.','','success')
                    btn.classList.remove("button--loading");

                }
                else if(res.status =='404'){
                    swal('Pin is Invalid','Please enter a valid pin')
                    btn.classList.remove("button--loading");
                }

                else if(res.status =='400'){
                    swal('pin has already been used.', "Please try again.", "error");
                    btn.classList.remove("button--loading");
                }
                else{
                    swal('Error trying to vote.please try again.')
                    btn.classList.remove("button--loading");
                }
            }).catch(err =>{
                swal('Error trying to vote.please try again.')
                btn.classList.remove("button--loading");

            })
        })
      
    



})

var categoryObject = {
    "Best Lecturer - Civil": {
      "Dr. Mahoi": "BLC1",
      "Ing. Kanu": "BLC2",
      "Ing. Simeon Turay": "BLC3",
      "Ing. Bruce": "BLC4",
      "Dr. Albert Forde": "BLC5",
      "Ing. Koroma": "BLC6"    
    },
    "Best Lecturer - Electrical": {
      "Dr. Samba Sesay": "BLE1",
      "Ing. Thorlu Bangura": "BLE2",
      "Ing. Abdulai Kamara": "BLE3",
      "Prof. Redwood Sawyer" : "BLE4",
      "Dr. David Caulker": "BLE5",
      "Dr. Tarawally": "BLE6"
    },
    "Best Lecturer - Mechanical": {
        "Ing. Sahr T. Nyalloma": "BLM1",
        "Ing. Jonjo":"BLM2",
        "Dr. Sheriff":"BLM3",
        "Dr. Conteh":"BLM4",
        "Dr. Sengeh":"BLM5"
    },
    "Best Lecturer - Mining": {
        "Ing. Samuel Joseph": "BLM6",
        "Dr. Tucker":"BLM7",
        "Ing. Taylor":"BLM8",
        "Ing. Bah":"BLM9",
        "Ing. Suma":"BLM10",
        "Ing. Palmer":"BLM11"
    },
    "Best Head of Department": {
        "Dr. Koroma - Civil": "BHOD1",
        "Dr. Samba Sesay - Electrical": "BHOD2",
        "Dr. Conteh - Mechanical": "BHOD3",
        "Dr. Tucker - Mining": "BHOD4"
    },
    "Best Technical Staff": {
        "Mr. Wright": "BTS1",
        "Ing. Cole": "BTS2",
        "Mr. Johnson": "BTS3",
        "Mr. John": "BTS4",
        "Mr. Bash": "BTS5",
    },
    "Best Enterpreneur Male": {
        "David Ayo Jones":"BEM1",
        "Tamba Kassegbama":"BEM2",
        "Mohamed Sylvanus Kamara":"BEM3",
        "Mohamed Gbla":"BEM4",
        "Abdul Rahman Bundu":"BEM5",
        "Mohamed Ibrahim Kargbo":"BEM6",
        "Moses Joshua Coker":"BEM7"

    },
    "Best Enterpreneur Female":{
        "Claudia Leigh":"BEF1",
        "De la Tush Kitchen":"BEF2",
        "Ulaika Koroma":"BEF3",
        "Julie T. Kamara":"BEF4",
        "Bushra Sorieba Suluku":"BEF5",
        "Sasha Lamboi":"BEF6",
        "Zainab Bangura":"BEF7"
    },
    "Best Class Rep Male":{
      "Amadu Jalloh": "BCM1",
      "Moses Amara": "BCM2",
      "Moses Joshua Coker": "BCM3",
      "Abu Bakarr Lamin": "BCM4",
      "Chrispin Maada Squire": "BCM5",
      "Mohamed Ibrahim Kargbo": "BCM6",
      "Festus Ewakaa Kahunla": "BCM6"
    },
    "Best Class Rep Female":{
      "Mary Yandamoh":"BCF1",
      "Veronna Pratt":"BCF2",
      "Hawa Kanu":"BCF3",
      "Mariama Kamara":"BCF4",
      "Lucy Bundu":"BCF5",
      "Bushra Sorieba Suluku":"BCF6",
      "Helena Fatmata Bangura":"BCF7"
    },
    "Most Influential Student Male":{
      "Samuel James Turay":"MIM1",
      "Fenti Sahid Fornah":"MIM2",
      "Tamba Kassegbama":"MIM3",
      "Issa Mohamed Jabbie":"MIM4",
      "Buakei Lahai Mammy":"MIM5",
      "Chrispin Maada Squire":"MIM6",
      "Mohamed John Kargbo":"MIM7"
    },
    "Most Influential Student Female":{
      "Finda Martha Ngegba":"MIF1",
      "Rebecca Gbla":"MIF2",
      "Bushra Sorieba Kamara":"MIF3",
      "Umu Hawa Turay":"MIF4",
      "Deborah Momoh":"MIF5",
      "Julie T Kamara":"MIF6",
      "Tenneh Kallon":"MIF7"
    }
  }
  window.onload = function() {
    var categorySel = document.getElementById("category");
    var nomineeSel = document.getElementById("nominee");
    
    for (var x in categoryObject) {
      categorySel.options[categorySel.options.length] = new Option(x, x);
    }
    categorySel.onchange = function() {
      //empty Chapters- and Topics- dropdowns
      
      nomineeSel.length = 1;
      //display correct values
      for (var y in categoryObject[this.value]) {
        nomineeSel.options[nomineeSel.options.length] = new Option(y, y);
      }
    }
    nomineeSel.onchange = function() {
      //empty Chapters dropdown
      
      //display correct values
      var z = categoryObject[categorySel.value][this.value];
    //   for (var i = 0; i < z.length; i++) {
    //     chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    //   }
    }
  }