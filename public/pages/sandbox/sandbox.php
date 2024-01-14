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


echo '<pre>' . print_r($_SERVER) . '</pre>';


?>
<div class="fc-form-group">
    <div class="fc-checkout__additional-field--tos " data-fc-error-for="tos_agreement" data-fc-error-class="fc-alert-container--error">
        <div class="fc-input-group-container fc-input-group-container--checkbox">
            <label class="fc-input-group-container__title fc-form-label fc-form-label--tos">
                <input type="hidden" name="tos_agreement" value="false" />
                <input type="checkbox"
                       id="tos_agreement"
                       name="tos_agreement"
                       value="true"
                       class="fc-form-control fc-form-control--tos"
                />
                I agree to the <a href="https://vinylimagination.com/pages/support/terms-conditions.php" target="_blank">Terms of Service</a>.
            </label>
        </div>
    </div>
</div>

<div class="fc-form-group">
    <div class="col-sm-8 col-sm-offset-3 fc-checkout__additional-field--proof-checkbox">
        <div class="fc-input-group-container fc-input-group-container--checkbox">
            <label class="fc-input-group-container__title fc-form-label fc-form-label--proof-checkbox">
                <input type="hidden" name="Proof Requested" value="0" />
                <input type="checkbox"
                       id="proof_request"
                       name="Design Proof"
                       value="Requested"
                       class="fc-form-control fc-form-control--proof"
                       {{ checked(my_proof_checkbox == '1') }} />
                My Checkbox Label
            </label>
        </div>
    </div>
</div>

