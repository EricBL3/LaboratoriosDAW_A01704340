<?php
require 'flight/Flight.php';

Flight::route('/', function(){
    echo 'This web service displays information from the game Animal Crossing New Horizons!';
    
});

/*
    VILLAGERS
*/

Flight::route('/villagers', function(){
    Flight::json(array(
        //Villager 1 -Admiral
        array(
        'id'=>1,
        'name'=>'Admiral',
        'imageUrl'=>'https://vignette.wikia.nocookie.net/animalcrossing/images/5/52/NH-Admiral_poster.png/revision/latest?cb=20200522013249',
        'personality'=>'Cranky',
        'species'=>'Bird',
        'birthday'=>'January 27',
        'catchphrase'=>'aye aye'),
            
       //Villager 2 -Aurora
       array(
        'id'=>2,
        'name'=>'Aurora',
        'imageUrl'=>'https://vignette.wikia.nocookie.net/animalcrossing/images/3/33/NH-Aurora_poster.png/revision/latest?cb=20200410190924',
        'personality'=>'Normal',
        'species'=>'Penguin',
        'birthday'=>'January 27',
        'catchphrase'=>'b-b-baby'),
    
        //Villager 3 -Tank
        array(
            'id'=>3,
            'name'=>'Drago',
            'imageUrl'=>'https://vignette.wikia.nocookie.net/animalcrossing/images/5/52/NH-Drago_poster.png/revision/latest?cb=20200522052808',
            'personality'=>'Lazy',
            'species'=>'Alligator',
            'birthday'=>'February 12',
            'catchphrase'=>'burrrn'),
        
        //Villager 4 -Tank
        array(
            'id'=>4,
            'name'=>'Tank',
            'imageUrl'=>'https://vignette.wikia.nocookie.net/animalcrossing/images/e/eb/NH-Tank_poster.png/revision/latest?cb=20200410185033',
            'personality'=>'Jock',
            'species'=>'Rhino',
            'birthday'=>'May 6',
            'catchphrase'=>'kerPOW'),

        //Villager 5 -Phoebe
        array(
            'id'=>5,
            'name'=>'Phoebe',
            'imageUrl'=>'https://vignette.wikia.nocookie.net/animalcrossing/images/8/8b/NH-Phoebe_poster.png/revision/latest?cb=20200410191547',
            'personality'=>'Sisterly',
            'species'=>'Ostrich',
            'birthday'=>'April 22',
            'catchphrase'=>'sparky')

    ));
});


Flight::route('/specialcharacters', function(){

    Flight::json(array(
        //special 1 - Tom Nook
        array(
        'id'=>1,
        'name'=>'Tom Nook',
        'imageUrl'=>'https://vignette.wikia.nocookie.net/animalcrossing/images/e/ef/NH-character-Tom_Nook.png/revision/latest/scale-to-width-down/86?cb=20191228193640',
        'service'=>'Resident Services, Nook Inc.',
        'species'=>'Tanooki',
        'birthday'=>'May 30'),
            
       //special 2 - Isabelle
       array(
        'id'=>2,
        'name'=>'Isabelle',
        'imageUrl'=>'https://vignette.wikia.nocookie.net/animalcrossing/images/0/01/Newhorizonsisabelle.png/revision/latest/scale-to-width-down/75?cb=20200224191140',
        'service'=>'Secretary',
        'species'=>'Dog',
        'birthday'=>'December 20'),
    
        //special 3 - K.K. Slider
        array(
            'id'=>3,
            'name'=>'K.K. Slider',
            'imageUrl'=>'https://vignette.wikia.nocookie.net/animalcrossing/images/2/2b/NH-character-K.K._Slider.png/revision/latest/scale-to-width-down/83?cb=20200519012648',
            'service'=>'Songs',
            'species'=>'Dog',
            'birthday'=>'August 23')

    ));
});

Flight::start();
