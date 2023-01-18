var myObj =
{
    init: function () {
        var that = this;
        this.load_country();
        document.getElementById('country').addEventListener('change', function(){
                 that.load_state(this.value);
                //  this.load_state();
                //  this.load_city();
        });
        document.getElementById('state').addEventListener('change', function(){
            that.load_city(this.value);    
   });
        
    },
    load_country: function () {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://127.0.0.1:5501/node_modules/country-state-city/lib/assets/country.json' , true);
        xhr.onload = function () {
            var countries = JSON.parse(xhr.responseText);
            countries.forEach(function (value,id) {
                var op = document.createElement('option');
                op.innerText = value.name;
                op.setAttribute('value', id);
                document.getElementById('country').appendChild(op);
            });
        }
        xhr.send();
    },
    load_state: function (id) {
        document.getElementById('state').innerHTML = '';    
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://127.0.0.1:5501/node_modules/country-state-city/lib/assets/state.json?id='+id, true);
        xhr.onload = function () {
            var states = JSON.parse(xhr.responseText);
           states.forEach(function(value,id) {
            var op = document.createElement('option');
            op.innerText = value.name;
            op.setAttribute('value', id);
            document.getElementById('state').appendChild(op);
           })
        }
        xhr.send();
    },
    load_city: function (id){
        document.getElementById('city').innerHTML = '';  
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://127.0.0.1:5501/node_modules/country-state-city/lib/assets/city.json?id='+id, true);
        xhr.onload = function () {
            var cities = JSON.parse(xhr.responseText);
            cities.forEach(function(value,id){
            var op = document.createElement('option');
            op.innerText = value.name;
            op.setAttribute('value', id);
            document.getElementById('city').appendChild(op);
            })
        }
        xhr.send();
    },
}
myObj.init();