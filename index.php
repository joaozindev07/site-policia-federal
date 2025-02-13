<?php
/*
Será inserido cabeçalho, arquivo de configuração e conexão
*/
include "topo.php";
?>
 
<?php
/*
Navegação principal do site
*/
 
if (isset($_GET['p'])){
    $p = $_GET['p'];
    // echo "A página é a ".$p;
 
    switch ($p){
        case 1: require_once "meio.php";
        break;
        case 2: require_once "quemsomos.php";
        break;
        case 3: require_once "catalogo.php";
        break;
        case 4: require_once "solicitacao.php";
        break;
        case 5: require_once "contato.php";
        break;
    }
}
else {
    require_once "meio.php";
}
?>
 
<?php
/*
Dados de rodapé
*/
require_once "rodape.php";
?>