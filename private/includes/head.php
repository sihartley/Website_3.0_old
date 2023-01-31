<head>
    <?php if (basename($_SERVER['PHP_SELF']) != 'index.php') {
        $title_info = "Vinyl Imagination - {$page_title}";
    } else {
        $title_info = "Vinyl Imagination - Automotive Decals and Graphics Main Page";
    } ?>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content="<?php echo $title_info; ?>">
    <title><?php echo $title_info; ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" rel="preload" href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400;1,700;1,800&family=Ubuntu:ital,wght@0,300;0,400;0,700;1,400;1,700&display=swap">


    <?php
    echo '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version('/css/global.min.css') . '" type="text/css">' . "\n";
    echo '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version($css_file) . '" type="text/css">' . "\n";
    echo '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version('/css/menu.min.css') . '" type="text/css">' . "\n";
    /* Simon: Info: These are ordered for optimal performance ref. Lighthouse Test. */
    echo '<script src="' . auto_version('https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/9.3.0/mmenu.js') . '" type="text/javascript" defer></script>' . "\n" ;
    echo '<script src="' . auto_version('/js/mmenu_config.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    /* JQUERY Simon: Note: Only activate jQuery if jQuery is used. */
    echo '<script src="' . auto_version('https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js') . '" type="text/javascript" async defer></script>' . "\n" ;
    /* FOXYCART */
    echo '<script src="' . auto_version('/js/foxycart_dynamin_price_calc.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    echo '<script src="' . auto_version('https://cdn.foxycart.com/vinylimagination/loader.js') . '" type="text/javascript" async defer></script>' . "\n" ;
    echo '<script src="' . auto_version('/js/scripts_global.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    ?>
</head>