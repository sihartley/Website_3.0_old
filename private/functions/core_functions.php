<?php /* Core Function Used In EVERY Page */

/* Hosting Server Identification */
function host_ident($server): array
{
    if ($server === '168.235.116.113') {
        $hostingServer = 'InMotion';
        $dbPrefix = 'n64e7f5_';
        $minifyHTML = '' /* ob_start("minifier" ) */;
        $rightClickProtect = '' /* ' oncontextmenu="return false;"'; */;
        $liveReload = '';
        $serverDot = 'darkred';
//  echo "Hosted by InMotion Hosting ".$dbPrefix."  databases.php";
    } elseif ($server === '208.109.67.139') {
        $hostingServer = 'GoDaddy';
        $dbPrefix = '';
        $minifyHTML = ob_start("minifier" );
        $rightClickProtect = ' oncontextmenu="return false;"';
        $liveReload = '';
        $serverDot = 'green';
//  echo "Hosted by GoDaddy Hosting".$dbPrefix."  databases.php";
    } else {
        $hostingServer = 'Local';
        $dbPrefix = '';
        $minifyHTML = '';
        $rightClickProtect = '';
        $liveReload = '<!--LiveReload-->' . "\n" . '<script src="http://localhost:35729/livereload.js"></script>' . PHP_EOL;
        $serverDot = 'darkorange';
//  echo "Local Xampp Server".$dbPrefix." databases.php";
    }

    return array($hostingServer, $dbPrefix, $minifyHTML, $rightClickProtect, $liveReload, $serverDot);
}

/* Automatic File Versioning */
function auto_version($file) {
    // if it is not a valid path (example: a CDN url)
    if (!str_starts_with($file, '/') || !file_exists($_SERVER['DOCUMENT_ROOT'] . $file)) {
        return $file;
    }

    // retrieving the file modification time
    // https://www.php.net/manual/en/function.filemtime.php
    $mtime = filemtime($_SERVER['DOCUMENT_ROOT'] . $file);

    return sprintf("%s?v=%d", $file, $mtime);
}

/* HTML Minification */
function minifier($code): array|string|null
{
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



