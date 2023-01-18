var myObj =
{
    init: function () {
        this.load_country();
        this.load_state();
        this.load_city();
    },
    load_country: function () {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://www.universal-tutorial.com/api/countries/', true);
        xhr.onload = function () {
            var countries = JSON.parse(xhr.responseText);
            countries.forEach(function (value) {
                var op = document.createElementById('option');
                op.innerText = value.name;
                op.setAttribute('value', value.id);
                document.getElementById('#country').appendChild(op);
            });
        }
        headers => ({
            "Accept": "application/json",
            "api-token": "2ZSqjf-367-rYOqMahY8Zcuvq_cs_eO67MA5nQN1kwQhACHbiLMBPtJ2Snri83kcEXk",
            "user-email": "1104satyamkr@gmail.com"
          });
        xhr.send();
    },
    load_state: function () {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://www.universal-tutorial.com/api/states/', true);
        xhr.onload = function () {
            var states = JSON.parse(xhr.responseText)
        }
    },
    load_city: function(){
        var xhr = new XMLHttpRequest();
    }
    
}
myObj.init();