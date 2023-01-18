
// let auth_token;
(function() {
    $.ajax({
       type:'GET',
       url: 'https://restcountries.com/v2/name/{name}',
       success: function(data){
        //    auth_token =data.auth_token
        //    getCountry(data.auth_token);
        console.log('ajax');
       },
       error: function(error){
           console.log(error);
       },
    //    header: {
    //        "Accept": "application/json",
    //    "api-token": "2ZSqjf-367-rYOqMahY8Zcuvq_cs_eO67MA5nQN1kwQhACHbiLMBPtJ2Snri83kcEXk",
    // "user-email": "1104satyamkr@gmail.com"
    //    }
    })
    console.log('hello world');
    // $('#country').change(() => {
    //     getState();
    // })
    // $('#state').change(() =>{
    //     getcity();
    // })
})

// function getCountry(auth_token) {
//    $.ajax({
//        type:'GET',
//        url: 'https://www.universal-tutorial.com/api/countries/',
//        success: function(data){
//           data.forEach(element => {
//             $('#country').append('<option value="+element.country_name">+element.country_name</option>');
//           });
//        },
//        error: function(error){
//            console.log(error);
//        },
//        header: {
//            "Authorization": "Bearer + auth_token",
//            "Accept": "application/json"
//        }
//     })
// }

// function getState(auth_token) {
//     let country_name = $('#country').val();
//    $.ajax({
//        type:'GET',
//        url: ' https://www.universal-tutorial.com/api/states/',
//        success: function(data){
//         $('#states').empty();
//        },
//        error: function(error){
//            console.log(error);
//        },
//        header: {
//            "Authorization": "Bearer + auth_token",
//            "Accept": "application/json"
//        }
//     })
// }

// function getcity() {
//     let state_name = $('#sate').val();
//    $.ajax({
//        type:'GET',
//        url: ' https://www.universal-tutorial.com/api/cities/',
//        success: function(data){
//            getcity(auth_token)
//        },
//        error: function(error){
//            console.log(error);
//        },
//        header: {
//            "Authorization": "Bearer + auth_token",
//            "Accept": "application/json"
//        }
//     })
// }