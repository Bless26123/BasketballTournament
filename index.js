
function increment(value, counter){
    let incrementHome = document.getElementById('home-value')
    let incrementGuest = document.getElementById('text-guest')
    
    if(value == 'home'){
        incrementHome.textContent = parseInt(incrementHome.textContent) + parseInt(counter)
        
    }
    else if(value == 'guest'){
        incrementGuest.textContent = parseInt(incrementGuest.textContent) + parseInt(counter)
    }
    colorChanger(incrementHome, incrementGuest)
}


function colorChanger(incrementHome, incrementGuest){
    if(parseInt(incrementHome.textContent) > parseInt(incrementGuest.textContent)){
        incrementHome.style.backgroundColor = "Yellow"
        incrementGuest.style.backgroundColor = "#080001"
        
    }else{
        incrementGuest.style.backgroundColor = "Yellow"
        incrementHome.style.backgroundColor = "#080001"
    }
}

function reset(){
    document.getElementById('text-guest').textContent = 0
    document.getElementById('home-value').textContent = 0
    document.getElementById('text-guest').style.backgroundColor = "#080001"
    document.getElementById('home-value').style.backgroundColor = "#080001"
}

