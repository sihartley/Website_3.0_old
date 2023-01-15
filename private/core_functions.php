<?php /* Core Function Used In EVERY Page */

/* Hosting Server Identification */
function host_ident($server) {
    if ($server === '168.235.116.113') {
        $hostingServer = 'InMotion';
        $dbPrefix = 'n64e7f5_';
//  echo "Hosted by InMotion Hosting ".$dbPrefix."  databases.php";
    } elseif ($server === '208.109.67.139') {
        $hostingServer = 'GoDaddy';
        $dbPrefix = '';
//  echo "Hosted by GoDaddy Hosting".$dbPrefix."  databases.php";
    } else {
        $hostingServer = 'Local';
        $dbPrefix = '';
//  echo "Local Xampp Server".$dbPrefix." databases.php";
    }

    return array($hostingServer, $dbPrefix);
}

/* HTML Minification */
function minifier($code) {
    $search = array(

        // Remove whitespaces after tags
      '/\>[^\S ]+/s',

        // Remove whitespaces before tags
      '/[^\S ]+\</s',

        // Remove multiple whitespace sequences
      '/(\s)+/s',

        // Removes comments
      '/<!--(.|\s)*?-->/'
    );
    $replace = array('>', '<', '\\1');
    $code = preg_replace($search, $replace, $code);
    return $code;
}



