<?php

/**
 * get_data_formatada
 *
 * Imprime o domínio do site
 *
 * @access public
 */
if (!function_exists('get_data_formatada')) {
    function get_data_formatada($data)
    {
        $novaData = new DateTime($data);
        return $novaData->format('d/m/Y H:i:s');
    }
}
