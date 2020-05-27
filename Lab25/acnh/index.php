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

//Flight::route('/specia')

Flight::route('/specialcharacters', function(){

        echo "That villager doesn't exist";
});

Flight::start();
