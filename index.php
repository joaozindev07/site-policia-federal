<?php
 include_once "topo.php";
?>

<?php
if (isset($_GET['p'])){
$p = $_GET['p'];
switch ($p){
case 1: require_once "meio.php";
break;
case 2: require_once "origem.php";
break;
case 3: require_once "timeline.php";
break;
case 4: require_once "lideres.php";
break;
case 5: require_once "frota.php";
break;
case 6: require_once "ingressar.php";
break;
case 7: require_once "contato.php";
break;
}
}

else {
require_once "meio.php";
}
?>

<?php
require_once "rodape.php";
?>