var count = 0


function increaseCounter(){
    axios.post('/api/increment').then(function (response) {
    //    count = response.data.data
       counterData()
    });
}


function decreaseCounter(){
    axios.post('/api/decrement').then(function (response) {
        // count = response.data.data
        counterData()
     });
}


function resetCounter(){
    axios.post('/api/reset').then(function (response) {
        // count = response.data.data
        counterData()
     });

}

function renderTacoCount(tacoCount) {
    return `
    <br />
    <br />
    
    ${tacoCount}

    `
}

function counterData(){
    var content = document.getElementById('tacoCount');
    axios.get('/api/value').then(function (response) {
        count = response.data.data
        content.innerHTML = renderTacoCount(count)
     });

}
counterData()