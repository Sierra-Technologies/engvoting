
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
        let generatePinVoteCount = (pin)=>{
            let pinCount = {
                'A':100,
                "B":50,
                "C":10,
                "D":5,
                "E":1,
                "Y":1000,
                "Z":5000
        
            }
            return pinCount[pin[0]]
        
        }
        fetch('/r-x',{
            method:'POST',
            headers:{
               'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)}).then(res =>{
                if(res.status == '200'){
                    if (generatePinVoteCount(pin)==1){
                        swal('You have Successfully voted '+generatePinVoteCount(pin)+' time'+' for '+name,'','success')
                        btn.classList.remove("button--loading");
                    }
                    else{
                        swal('You have Successfully voted '+generatePinVoteCount(pin)+' times'+' for '+name,'','success')
                        btn.classList.remove("button--loading");
                    }

                }
                else if(res.status =='404'){
                    
                    swal('Sorry Voting is close','Contact the organizers','error')
                    btn.classList.remove("button--loading");
                }

                else if(res.status =='400'){
                    swal('Sorry Voting is close','Contact the organizers','error');
                    btn.classList.remove("button--loading");
                }
                else if(res.status =='406'){
                    swal('Sorry Voting is close','Contact the organizers','error');
                    btn.classList.remove("button--loading");
                }
                else{
                    swal('Sorry Voting is close','Contact the organizers','error')
                    btn.classList.remove("button--loading");
                }
            }).catch(err =>{
                swal('Sorry Voting is close','Contact the organizers','error')
                btn.classList.remove("button--loading");

            })
        })
      
    



})

// Set the date we're counting down to
var countDownDate = new Date("Jul 1, 2022 23:59:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="clock"
  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "VOTING CLOSE";
  }
}, 1000);

// var categoryObject = {
//     "Best Lecturer - Civil": {
//       "Dr. Mahoi": "BLC1",
//       "Ing. Kanu": "BLC2",
//       "Ing. Simeon Turay": "BLC3",
//       "Ing. Bruce": "BLC4",
//       "Dr. Albert Forde": "BLC5",
//       "Ing. Koroma": "BLC6"    
//     },
//     "Best Lecturer - Electrical": {
//       "Dr. Samba Sesay": "BLE1",
//       "Ing. Thorlu Bangura": "BLE2",
//       "Ing. Abdulai Kamara": "BLE3",
//       "Prof. Redwood Sawyer" : "BLE4",
//       "Dr. David Caulker": "BLE5",
//       "Dr. Tarawally": "BLE6"
//     },
//     "Best Lecturer - Mechanical": {
//         "Ing. Sahr T. Nyalloma": "BLM1",
//         "Ing. Jonjo":"BLM2",
//         "Dr. Sheriff":"BLM3",
//         "Dr. Conteh":"BLM4",
//         "Dr. Sengeh":"BLM5"
//     },
//     "Best Lecturer - Mining": {
//         "Ing. Samuel Joseph": "BLM6",
//         "Dr. Tucker":"BLM7",
//         "Ing. Taylor":"BLM8",
//         "Ing. Bah":"BLM9",
//         "Ing. Suma":"BLM10",
//         "Ing. Palmer":"BLM11"
//     },
//     "Best Head of Department": {
//         "Dr. Koroma - Civil": "BHOD1",
//         "Dr. Samba Sesay - Electrical": "BHOD2",
//         "Dr. Conteh - Mechanical": "BHOD3",
//         "Dr. Tucker - Mining": "BHOD4"
//     },
//     "Best Technical Staff": {
//         "Mr. Wright": "BTS1",
//         "Ing. Cole": "BTS2",
//         "Mr. Johnson": "BTS3",
//         "Mr. John": "BTS4",
//         "Mr. Bash": "BTS5",
//     },
//     "Best Enterpreneur Male": {
//         "David Ayo Jones":"BEM1",
//         "Tamba Kassegbama":"BEM2",
//         "Mohamed Sylvanus Kamara":"BEM3",
//         "Mohamed Gbla":"BEM4",
//         "Abdul Rahman Bundu":"BEM5",
//         "Mohamed Ibrahim Kargbo":"BEM6",
//         "Moses Joshua Coker":"BEM7"

//     },
//     "Best Enterpreneur Female":{
//         "Claudia Leigh":"BEF1",
//         "De la Tush Kitchen":"BEF2",
//         "Ulaika Koroma":"BEF3",
//         "Julie T. Kamara":"BEF4",
//         "Bushra Sorieba Suluku":"BEF5",
//         "Sasha Lamboi":"BEF6",
//         "Zainab Bangura":"BEF7"
//     },
//     "Best Class Rep Male":{
//       "Hassan Sheriff": "BCM1",
//       "Moses Amara": "BCM2",
//       "Moses Joshua Coker": "BCM3",
//       "Abu Bakarr Lamin": "BCM4",
//       "Chrispin Maada Squire": "BCM5",
//       "Mohamed Ibrahim Kargbo": "BCM6",
//       "Festus Ewakaa Kahunla": "BCM6"
//     },
//     "Best Class Rep Female":{
//       "Mariama Yandamoh Kamara":"BCF1",
//       "Veronna Pratt":"BCF2",
//       "Hawa Kanu":"BCF3",
//       "Mariama Kamara":"BCF4",
//       "Lucy Bundu":"BCF5",
//       "Helena Fatmata Bangura":"BCF6"
//     },
//     "Most Influential Student Male":{
//       "Samuel James Turay":"MIM1",
//       "Fenti Sahid Fornah":"MIM2",
//       "Tamba Kassegbama":"MIM3",
//       "Issa Mohamed Jabbie":"MIM4",
//       "Buakei Lahai Mammy":"MIM5",
//       "Chrispin Maada Squire":"MIM6",
//       "Mohamed John Kargbo":"MIM7"
//     },
//     "Most Influential Student Female":{
//       "Finda Martha Ngegba":"MIF1",
//       "Rebecca Gbla":"MIF2",
//       "Bushra Sorieba Suluku":"MIF3",
//       "Umu Hawa Turay":"MIF4",
//       "Deborah Momoh":"MIF5",
//       "Julie T Kamara":"MIF6",
//       "Tenneh Kallon":"MIF7"
//     },
//     "Best Friends Male":{
//         "David Ayo Jones and Samuel J Turay":"BFM1",
//         "Prince Sago Kamara and Abdul Munim Mansaray":"BFM2",
//         "Tamba Kassegbama and Joshua Samuels":"BFM3",
//         "Mohamed Mark Bangura and Majid Hamid Bayoh":"BFM4",
//         "Alusine Sankoh and Moses Johnson":"BFM5",
//         "Abu-Bakarr Kamara and Nathaniel Berdie":"BFM6",
//         "Sheriff Kabia and Buakei Lahai Mammy":"BMF7",
//         "Mohamed John Kargbo and Mamoud Kabia":"BMF8"
//     },
//     "Best Friends Female":{
//         "Jane Luseni and Audra Cathy":"BFF1",
//         "Dalanda Wurie and Veronna Pratt":"BFF2",
//         "Ejatu Jalloh and Umu Hawa Turay":"BFF3",
//         "Gloria Grey Coker and Aminata Ruth Rogers":"BFF4",
//         "Habibatu Mbeimuna Konya Fabbah and Grace Hawa Kaikai":"BFF5",
//         "Emelia Biaddy and Angela A Bangura":"BFF6",
//         "Rebecca Gbla and Umu Abiola":"BFF7"
//     },
//     "Best Freshman Male":{
//         "Alhaji Ibrahim Barrie":"BFMM1",
//         "Bubakarr Barrie":"BFMM2",
//         "Abdul Ramadan Jalloh":"BFMM3",
//         "Abu Jessy Turay":"BFMM4",
//         "Lawrence Stevens":"BFMM5",
//         "Abubakarr S Kamara":"BFMM6",
//         "Miracle Edward Lakoh":"BFMM7"
        
//     },
//     "Best Freshman Female":{
//         "Eva Canus Mattia":"BFMF1",
//         "Emelia Biaddy":"BFMF2",
//         "Angella A. Bangura":"BFMF3",
//         "Lovina Eunice John":"BFMF4",
//         "Mariama Seray":"BFMF5",
//         "Elizabeth Isha Conteh":"BFMF6"

//     },
//     "Most Innovative Student Male":{
//         "Mohamed Fofanah":"MISM1",
//         "Fenti Sahid Fornah":"MISM2",
//         "Buakei Lahai Mammy":"MISM3",
//         "Mamoud Kabbia":"MISM4",
//         "David Ayo Jones":"MISM5",
//         "Bobson Abdulai Kargbo":"MISM6",
//         "Tamba Kassegbama":"MISM7"
//     },
//     "Most Innovative Student Female":{
//         "Bushra Sorieba Suluku":"MISF1",
//         "Tenneh Conteh":"MISF2",
//         "Emelia Biaddy":"MISF3",
//         "Ismatu Bangura":"MISF4",
//         "Khadija Kallisera Jalloh":"MISF5",
//         "Lovetta Bangura":"MISF6"
//     },
//     "Best Mixer Male":{
//         "Samuel James Turay":"BMM1",
//         "Julius H. Tucker":"BMM2",
//         "Yayah Jalloh":"BMM3",
//         "Mohamed Yusif Sesay":"BMM4",
//         "Nathaniel Berdie":"BMM5",
//         "Mathew Fatorma":"BMM6",
//         "Mohamed Fofanah":"BMM7"
//     },
//     "Best Mixer Female":{
//         "Emelia Biaddy":"BMF1",
//         "Iye Janneh":"BMF2",
//         "Rebecca Gbla":"BMF3",
//         "Hassanatu Sara Gassama":"BMF4",
//         "Julie T Kamara":"BMF5",
//         "Zainab J Bundu":"BMF6",
//         "Josephine Wilson":"BMF7"
//     },
//     "Most supportive Engineering Society Member Male":{
//         "Fenti Sahid Fornah":"MSEM1", 
//         "Mohamed Ibrahim Kargbo":"MSEM2", 
//         "Mohamed Sylvanus Kamara":"MSEM3",
//         "Musa Mansaray":"MSEM4", 
//         "Buakei Lahai Mammy":"MSEM5",
//         "David Ayo Jones":"MSEM6", 
//         "Alusine Sankoh":"MSEM7"
//     },
//     "Most supportive Engineering Society Member Female":{
//         "Onikeh Smith":"MSEF1", 
//         "Bushra Sorieba Suluku":"MSEF2", 
//         "Umu Hawa Turay":"MSEF3", 
//         "Ismatu Bangura":"MSEF4",
//         "Lovetta Bangura":"MSEF5",
//         "Isatu Sajor Bah":"MSEF6"
//     },
//     "Most Supportive Student Male":{
//         "Fenti Sahid Fornah":"MSM1",
//         "Samuel James Turay":"MSM2", 
//         "Mohamed Sylvanus Kamara":"MSM3", 
//         "Isaiah Kabba":"MSM4",
//         "Mohamed Ibrahim Kargbo":"MSM5",
//         "James Luseni":"MSM6",
//         "Alusine Sankoh":"MSM7"  
//     },
//     "Most Supportive Student Female":{
//         "Onikeh Smith":"MSF1",
//         "Tonya Esther Pessima":"MSF2",
//         "Umu Hawa Turay":"MSF3", 
//         "Deborah Momoh":"MSF4",
//         "Finda Martha Ngegba":"MSF5",
//         "Rebecca Gbla":"MSF6",
//         "Christal A.D Renner":"MSF7"
//     },
//     "Most Responsibly Dressed Student Male":{
//         "David Ayo Jones":"MRDM1", 
//         "Babayoh Jawara":"MRDM2",
//         "Issa Mohamed Fornah":"MRDM3",
//         "Sahr Christian Jabba":"MRDM4", 
//         "Buakei Lahai Mammy":"MRDM5", 
//         "Mohamed A. Munu":"MRDM6", 
//         "Hamid Majid Bayoh":"MRDM7"
//     },
//     "Most Responsibly Dressed Student Female":{
//         "Bushra Sorieba Suluku":"MRDF1",
//         "Onikeh Smith":"MRDF2",
//         "Angella A Bangura":"MRDF3", 
//         "Rebecca Gbla":"MRDF4", 
//         "Habibatu Mbeimuna Konya Fabbah":"MRDF5",  
//         "Aminata Ruth Rogers":"MRDF6",
//         "Fatmata Madianna Koroma":"MRDF7"
//     },
//     "Best Student Leader Male":{
//         "Fenti Sahid Fornah":"BSLM1", 
//         "Abdul Moses Amara":"BSLM2", 
//         "Chrispin Maada Squire":"BSLM3",
//         "Tamba Kassegbama":"BSLM4",
//         "Temor Lahai Mammy":"BSLM5",  
//         "Festus Ewakaa Kahunla":"BSLM6",
//         "Hassan Nitto Fornah":"BSLM7"
//     },
//     "Best Student Leader Female":{
//         "Umu Hawa Turay":"BSLF1",
//         "Emelia Biaddy":"BSLF2", 
//         "Mariama Yandamoh Kamara":"BSLF3", 
//         "Deborah Momoh":"BSLF4", 
//         "Lucy Bundu":"BSLF5",
//         "Helena Fatmata Bangura":"BSLF6",
//         "Veronna Pratt":"BSLF7"
//     },
//     "Best Caretaker":{
//         "Mohamed - Mechanical":"BC1",
//         "Emmanuel - Civil":"BC2"
//     },
//     "Best Trader":{
//         "Umu Chicken Ball":"BT1",
//         "Mariatu":"BT2",
//         "Chairlady Orlehleh":"BT3",
//         "Aunty Hawa":"BT3"
//     }

//   }
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
