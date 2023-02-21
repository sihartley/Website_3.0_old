<ul class="color-type">
    <?php foreach ($color_items as $type) {
        $tag = explode(' ', $type);
        $item = explode(' ', ucwords($type));
        echo "<li><a href='#$tag[2]-$tag[1]'><span>$item[0] </span>$item[1]<span> $item[2]</span></a></li>";
    }?>
</ul>