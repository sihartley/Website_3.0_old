<?php /* This File contains Functions Required in ALL Pages */

/* Automatic File Versioning - Simon: Note: Requires .htaccess rewrite (does not work with InMotion */
//function auto_version($file) {
//    // if it is not a valid path (example: a CDN url)
//    if (!str_starts_with($file, '/') || !file_exists($_SERVER['DOCUMENT_ROOT'] . $file)) {
//        return $file;
//    }
//    // retrieving the file modification time
//    // https://www.php.net/manual/en/function.filemtime.php
//    $mtime = filemtime($_SERVER['DOCUMENT_ROOT'] . $file);
//    return preg_replace('{\\.([^./]+)$}', ".$mtime.\$1", $file);
//}

