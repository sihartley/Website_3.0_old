<?php
/**
 * @var $vehicle
 * @var $graphicId
 * @var $textRef
 * @var $text2Ref
 * @var $text3Ref
 * Passed from each automotive graphics product page.
 */
echo
"<script type='text/javascript'>"
    ."localStorage.setItem('vehicleId', '{$vehicle['id']}');"
    ."localStorage.setItem('graphicId', '$graphicId');"
    ."localStorage.setItem('textRef', '$textRef');"
    ."localStorage.setItem('text2Ref', '$text2Ref');"
    ."localStorage.setItem('text3Ref', '$text3Ref');"
."</script>";

