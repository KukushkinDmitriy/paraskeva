<!DOCTYPE html>
<html lang="<?php print $language->language; ?>" dir="<?php print $language->dir;?>">
<head>
    <link rel="shortcut icon" href="/sites/default/files/favicon.png" type="image/png">
    
    <meta name="viewport" content="width=480px, initial-scale=1.0">


    <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <?php print $styles; ?>

  
	<!--[if lt IE 9]>
		<script async src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>

	<![endif]-->
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
  <div id=skip-link>
    <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
  </div>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
  <?php print $scripts; ?>
</body>
</html>
