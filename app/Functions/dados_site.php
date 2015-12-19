<?php

/**
 * get_dominio_site
 *
 * Imprime o domínio do site
 *
 * @access public
 */
if (!function_exists('get_dominio_site')) {
    function get_dominio_site()
    {
        return "palpiteirosanonimos.com.br";
    }
}

/**
 * get_nome_site
 *
 * Imprime o nome do site
 *
 * @access public
 */
if (!function_exists('get_nome_site')) {
    function get_nome_site()
    {
        return 'Palpiteiros Anônimos';
    }
}

/**
 * get_email_contato
 *
 * Imprime o e-mail de contato padrão
 *
 * @access public
 */
if (!function_exists('get_email_contato')) {
    function get_email_contato()
    {
        return "contato@palpiteirosanonimos.com.br";
    }
}

/**
 * get_link_twitter
 *
 * Imprime o e-mail de contato padrão
 *
 * @access public
 */
if (!function_exists('get_link_twitter')) {
    function get_link_twitter()
    {
        return "https://twitter.com/palpiteiros";
    }
}

/**
 * get_link_facebook
 *
 * Imprime o e-mail de contato padrão
 *
 * @access public
 */
if (!function_exists('get_link_facebook')) {
    function get_link_facebook()
    {
        return "https://www.facebook.com/palpiteiros.anonimos";
    }
}

/**
 * get_email_delivery
 *
 * Imprime a conta de e-mail para enviar mensagens aos usuários
 *
 * @access public
 */
if (!function_exists('get_email_delivery')) {
    function get_email_delivery()
    {
        return "nao-responda@palpiteirosanonimos.com.br";
    }
}

/**
 * get_slogan_site
 *
 * Imprime o slogan_principaldo site
 *
 * @access public
 */
if (!function_exists('get_slogan_site')) {
    function get_slogan_site()
    {
        return "Bola pro mato que o jogo é de campeonato!";
        //         return "Chuta essa que da certo!";
    }
}

/**
 * get_titulo_site
 *
 * Imprime o título do site
 *
 * @access public
 */
if (!function_exists('get_titulo_site')) {
    function get_titulo_site()
    {
        return 'Palpiteiros Anônimos - Divirta-se dandos seus pitacos';
    }
}

/**
 * get_descricao_site
 *
 * Imprime a descrição do site do site
 *
 * @access public
 */
if (!function_exists('get_descricao_site')) {
    function get_descricao_site()
    {
        return 'Palpiteiros Anônimos o seu site de palpites, o melhor jeito de se divertir com o futebol fora dos campos';
    }
}

/**
 * get_copyright_site
 *
 * Imprime a descrição do site do site
 *
 * @access public
 */
if (!function_exists('get_copyright_site')) {
    function get_copyright_site()
    {
        return '&copy; ' . date('Y') . ' | Palpiteiros Anônimos Todos os Direitos Reservados';
    }
}

/**
 * get_copyright_small_site
 *
 * Imprime a descrição do site do site
 *
 * @access public
 */
if (!function_exists('get_copyright_small_site')) {
    function get_copyright_small_site()
    {
        return '&copy; ' . date('Y') . ' | Todos os Direitos Reservados';
    }
}

/**
 * get_time_zone
 *
 * Imprime a descrição do site do site
 *
 * @access public
 */
if (!function_exists('get_time_zone')) {
    function get_time_zone()
    {
        // return 'Brazil/East';    // Horário normal
        return 'America/Noronha'; // Horário de verão
    }
}
