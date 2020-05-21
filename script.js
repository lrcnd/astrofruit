const tellFruit = () => {
    let randomNumber = Math.random() * 6;
    randomNumber = Math.round(randomNumber);


    let revelation = '';
    let revelationImage = '';

    switch(randomNumber){
        case 0 :
            revelation = 'Une banane.';
            revelationImage ='resources/images/bananes.jpg';
            break;
        case 1 :
            revelation = 'Une orange.';
            revelationImage ='resources/images/oranges.jpg';
            break;
        case 2 :
            revelation = 'Une fraise.';
            revelationImage ='resources/images/fraises.jpg';
            break;
        case 3 :
            revelation = 'Un citron.';
            revelationImage ='resources/images/citron.jpg';
            break;
        case 4 :
            revelation = 'Un raisin.';
            revelationImage ='resources/images/raisin.jpeg';
            break;
        case 5 :
            revelation = 'Une pêche.';
            revelationImage ='resources/images/pêche.jpg';
            break;
        case 6 :
            revelation = 'Une mangue.';
            revelationImage ='resources/images/mangue.jpg';
            break;
    }

    
    
    document.getElementById('revelation').innerHTML = revelation;
    document.getElementById('revelationImage').src= revelationImage;

}