<?php
/* jpg Image Resize - https://honarsystems.com/php-resize-image/ */
/*function jpegResize($source_file,$destination_file, $width, $height, $quality, $crop=FALSE): void {
    [$current_width, $current_height] = getimagesize($source_file);
    $rate = $current_width / $current_height;
    if ($crop) {
        if ($current_width > $current_height) {
            $current_width = ceil($current_width-($current_width*abs($rate-$width/$height)));
        } else {
            $current_height = ceil($current_height-($current_height*abs($rate-$width/$height)));
        }
        $newwidth = $width;
        $newheight = $height;
    } else if ($width/$height > $rate) {
        $newwidth = $height*$rate;
        $newheight = $height;
    } else {
        $newheight = $width/$rate;
        $newwidth = $width;
    }
    $src_file = imagecreatefromjpeg($source_file);
    $dst_file = imagecreatetruecolor($newwidth, $newheight);
    imagecopyresampled($dst_file, $src_file, 0, 0, 0, 0, $newwidth, $newheight, $current_width, $current_height);

    imagejpeg($dst_file, $destination_file, $quality);
}*/

/* png Image Resize - https://honarsystems.com/php-resize-image/ */
/*function pngResize($source_file,$destination_file, $width, $height, $quality, $crop=FALSE): void {
    [$current_width, $current_height] = getimagesize($source_file);
    $rate = $current_width / $current_height;
    if ($crop) {
        if ($current_width > $current_height) {
            $current_width = ceil($current_width-($current_width*abs($rate-$width/$height)));
        } else {
            $current_height = ceil($current_height-($current_height*abs($rate-$width/$height)));
        }
        $newwidth = $width;
        $newheight = $height;
    } else if ($width/$height > $rate) {
        $newwidth = $height*$rate;
        $newheight = $height;
    } else {
        $newheight = $width/$rate;
        $newwidth = $width;
    }
    $src_file = imagecreatefrompng($source_file);
    imagepalettetotruecolor($src_file);
    imagealphablending($src_file, true);
    imagesavealpha($src_file, true);
    $dst_file = imagecreatetruecolor($newwidth, $newheight);
    imagecopyresampled($dst_file, $src_file, 0, 0, 0, 0, $newwidth, $newheight, $current_width, $current_height);

    imagepng($dst_file, $destination_file, $quality);
}*/

/* webp Image Resize - https://honarsystems.com/php-resize-image/ */
/*function webpResize($source, $width, $height, $quality, $crop=FALSE): void {

    if (!str_contains($source, "_{$width}px.")) {
        $source = PUB_PATH . urldecode($source);
        $dir = pathinfo($source, PATHINFO_DIRNAME);
        $name = pathinfo($source, PATHINFO_FILENAME);
        $destination_file = $dir . DIRECTORY_SEPARATOR . "{$name}_{$width}px.webp";

        [$current_width, $current_height] = getimagesize($source);
        $rate = $current_width / $current_height;
        if ($crop) {
            if ($current_width > $current_height) {
                $current_width = ceil($current_width - ($current_width * abs($rate - $width / $height)));
            } else {
                $current_height = ceil($current_height - ($current_height * abs($rate - $width / $height)));
            }
            $newwidth = $width;
            $newheight = $height;
        } else if ($width / $height > $rate) {
            $newwidth = $height * $rate;
            $newheight = $height;
        } else {
            $newheight = $width / $rate;
            $newwidth = $width;
        }

        $src_file = imagecreatefromwebp($source);
        $dst_file = imagecreatetruecolor($newwidth, $newheight);
        imagecopyresampled($dst_file, $src_file, 0, 0, 0, 0, $newwidth, $newheight, $current_width, $current_height);

        imagewebp($dst_file, $destination_file, $quality);
    }
}*/

/* Image Resize to webp */
/*function imageResize($source, $width, $height, $quality, $crop=FALSE): void {
    if (!str_contains($source, "px.")) {
        $source = PUB_PATH . urldecode($source);
        $dir = pathinfo($source, PATHINFO_DIRNAME);
        $name = pathinfo($source, PATHINFO_FILENAME);
        $destination_file = $dir . DIRECTORY_SEPARATOR . "{$name}_{$width}px.webp";
        [$current_width, $current_height] = getimagesize($source);
        $info = getimagesize($source);
        $isAlpha = false;
        $rate = $current_width / $current_height;
        if ($crop) {
            if ($current_width > $current_height) {
                $current_width = ceil($current_width - ($current_width * abs($rate - $width / $height)));
            } else {
                $current_height = ceil($current_height - ($current_height * abs($rate - $width / $height)));
            }
            $newwidth = $width;
            $newheight = $height;
        } else if ($width / $height > $rate) {
            $newwidth = $height * $rate;
            $newheight = $height;
        } else {
            $newheight = $width / $rate;
            $newwidth = $width;
        }

        if ($info['mime'] === 'image/jpeg') {
            $image = @imagecreatefromjpeg($source);
        } elseif ($isAlpha = $info['mime'] === 'image/gif') {
            $image = @imagecreatefromgif($source);
        } elseif ($isAlpha = $info['mime'] === 'image/png') {
            $image = @imagecreatefrompng($source);
        } else {
            $src_file = @imagecreatefromwebp($source);
        }

        $dst_file = imagecreatetruecolor($newwidth, $newheight);
        imagecopyresampled($dst_file, $src_file, 0, 0, 0, 0, $newwidth, $newheight, $current_width, $current_height);

        imagewebp($dst_file, $destination_file, $quality);
    }
}*/

/* Convert .jpg, .gif, .png files to .webp */
function webpImage($file, $quality = 100, $removeOld = false): string {

    $source = PUB_PATH.urldecode($file);
    $dir = pathinfo($source, PATHINFO_DIRNAME);
    $name = pathinfo($source, PATHINFO_FILENAME);
    $destination = $dir . DIRECTORY_SEPARATOR . $name . '.webp';
    $new_file = pathinfo($file, PATHINFO_DIRNAME) . DIRECTORY_SEPARATOR . $name . '.webp';
    $info = getimagesize($source);
    $isAlpha = false;

    // .webp already exist?
    if (!file_exists($destination)){
        if ($info['mime'] === 'image/jpeg') {
            $image = @imagecreatefromjpeg($source);
        } elseif ($isAlpha = $info['mime'] === 'image/gif') {
            $image = @imagecreatefromgif($source);
        } elseif ($isAlpha = $info['mime'] === 'image/png') {
            $image = @imagecreatefrompng($source);
        } else {
            return $source;
        }

        if ($isAlpha) {
            imagepalettetotruecolor($image);
            imagealphablending($image, true);
            imagesavealpha($image, true);
        }
        imagewebp($image, $destination, $quality);

        if ($removeOld) {
            unlink($source);
        }

    }

    return $new_file;
}

/* Images Thumbnails */
function imageThumbs($source, $width, $height, $quality, $crop=FALSE): void {
    $thumdir = 'thumbs';
    $source = PUB_PATH . urldecode($source);
    $dir = pathinfo($source, PATHINFO_DIRNAME);
    $name = pathinfo($source, PATHINFO_FILENAME);
    $thumbpath = implode(DIRECTORY_SEPARATOR, [$dir, $thumdir]);
    $thumbfile = implode(DIRECTORY_SEPARATOR, [$dir, $thumdir, $name]) . "_{$width}px.webp";

    if (!file_exists($thumbpath) && !mkdir($concurrentDirectory = $thumbpath, 0755) && !is_dir($concurrentDirectory)) {
        throw new RuntimeException(sprintf('Directory "%s" was not created', $concurrentDirectory));
    }

    if (!file_exists($thumbfile)) {
        [$current_width, $current_height] = getimagesize($source);
        $info = getimagesize($source);
        $isAlpha = false;
        $rate = $current_width / $current_height;

        if ($crop) {
            if ($current_width > $current_height) {
                $current_width = ceil($current_width - ($current_width * abs($rate - $width / $height)));
            } else {
                $current_height = ceil($current_height - ($current_height * abs($rate - $width / $height)));
            }
            $newwidth = $width;
            $newheight = $height;
        } else if ($width / $height > $rate) {
            $newwidth = $height * $rate;
            $newheight = $height;
        } else {
            $newheight = $width / $rate;
            $newwidth = $width;
        }

        if ($info['mime'] === 'image/jpeg') {
            $image = @imagecreatefromjpeg($source);
        } elseif ($isAlpha = $info['mime'] === 'image/gif') {
            $image = @imagecreatefromgif($source);
        } elseif ($isAlpha = $info['mime'] === 'image/png') {
            $image = @imagecreatefrompng($source);
        } else {
            $image = @imagecreatefromwebp($source);
        }

        $dst_file = imagecreatetruecolor($newwidth, $newheight);
        imagecopyresampled($dst_file, $image, 0, 0, 0, 0, $newwidth, $newheight, $current_width, $current_height);

        imagewebp($dst_file, $thumbfile, $quality);
    }

}
