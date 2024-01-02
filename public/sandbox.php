<?php
//require_once /** @lang text */
//    dirname($_SERVER['DOCUMENT_ROOT']) . '/private/ajax/ajax_initialize.php';

$trim = array(
    'Sunroof' => [
        'select' => [
            'name' => 'Sunroof',
            'placeholder' => 'Factory Sunroof installed?'
        ],
        'options' => [
            'installed' => [
                'text' => 'Sunroof Installed',
                'specs' => 'Factory Sunroof is Installed on the vehicle',
                'image' => '',
                'percentage' => 0
            ],
            'none' => [
                'text' => 'No Sunroof Installed',
                'specs' => 'Factory Sunroof is NOT Installed on the vehicle',
                'image' => '',
                'percentage' => 0
            ]
        ]
    ],
    'Antenna' => [
        'select' => [
            'name' => 'Antenna',
            'placeholder' => 'Roof Antenna Style?',
        ],
        'options' => [
            'none' => [
                'text' => 'No Antenna',
                'specs' => 'We will not pre-cut for an Antenna.',
                'percentage' => 0, 'image' => ''],
            'a' => [
                'text' => 'Satellite Antenna A',
                'specs' => 'Flat Square Style Antenna, usually Black.',
                'percentage' => 0, 'image' => '/Graphics/Vehicles/Dodge/Dodge_Satellite_Antenna_A.png'],
            'b' => [
                'text' => 'Satellite Antenna B',
                'specs' => 'Larger Shark Fin Style Antenna, usually Color Coded.',
                'percentage' => 0, 'image' => '/Graphics/Vehicles/Dodge/Dodge_Satellite_Antenna_B.png'],
            'c' => [
                'text' => 'Satellite Antenna C',
                'specs' => 'Smaller Shark Fin Style Antenna, usually Color Coded.',
                'percentage' => 0, 'image' => '/Graphics/Vehicles/Dodge/Dodge_Satellite_Antenna_C.png']
        ]
    ],
    'Hood' => [
        'select' => [
            'name' => 'Hood',
            'placeholder' => 'Hood Style?'
        ],
        'options' => [
            'standard' => [
                'text' => 'Standard Hood',
                'specs' => 'Usually Installed on Charger SE, SXT',
                'image' => '/Graphics/Vehicles/Dodge/Charger/2k15/Charger_Standard_Hood.webp',
                'percentage' => 0
            ],
            'scat pack' => [
                'text' => 'Scat Pack Hood',
                'specs' => 'Usually Installed on Charger R/T, Scat Pack',
                'image' => '/Graphics/Vehicles/Dodge/Charger/2k15/Charger_ScatPack_Hood.webp',
                'percentage' => 0
            ],
            'hellcat' => [
                'text' => 'Hellcat Hood',
                'specs' => 'Usually Installed on Charger Hellcat',
                'image' => '/Graphics/Vehicles/Dodge/Charger/2k15/Charger_Hellcat_Hood.webp',
                'percentage' => 0
            ],
            'redeye' => [
                'text' => 'Redeye Hood',
                'specs' => 'Usually Installed on Charger Widebody Redeye',
                'image' => '/Graphics/Vehicles/Dodge/Charger/2k15/Charger_Redeye_Hood.webp',
                'percentage' => 0
            ]
        ]
    ]
);

// File Redirect Creation For .htaccess
$oldDirectory = 'Pages/Automotive/Dodge/Challenger/Challenger-2k8/';
$directory = 'pages/automotive/dodge/challenger/challenger-2k8/';
$files = scandir($directory);

//foreach ($files as $file) {
//    echo "Redirect 301 /$oldDirectory$file /$directory" . strtolower($file) . '<br>';
//}

// File Rename to Lowercase
//foreach($files as $key=>$name){
//    $oldName = $name;
//    echo $oldName . '<br>';
//    $newName = strtolower($name);
//    echo $newName . '<br>';
//    rename("$directory/$oldName","$directory/$newName");
//}


