<?php

/**
 * getDominioSite
 *
 * Imprime o domínio do site
 *
 * @access public
 */
if (! function_exists( 'getDominioSite' )) {
	function getDominioSite() {
		return "palpiteirosanonimos.com.br";
	}
}

/**
 * getNomeSite
 *
 * Imprime o nome do site
 *
 * @access public
 */
if (! function_exists( 'getNomeSite' )) {
	function getNomeSite() {
		return 'Palpiteiros Anônimos';
	}
}

/**
 * getEmailContato
 *
 * Imprime o e-mail de contato padrão
 *
 * @access public
 */
if (! function_exists( 'getEmailContato' )) {
	function getEmailContato() {
		return "contato@palpiteirosanonimos.com.br";
	}
}

/**
 * getLinkTwitter
 *
 * Imprime o e-mail de contato padrão
 *
 * @access public
 */
if (! function_exists( 'getLinkTwitter' )) {
	function getLinkTwitter() {
		return "https://twitter.com/palpiteiros";
	}
}

/**
 * getLinkFacebook
 *
 * Imprime o e-mail de contato padrão
 *
 * @access public
 */
if (! function_exists( 'getLinkFacebook' )) {
	function getLinkFacebook() {
		return "https://www.facebook.com/palpiteiros.anonimos";
	}
}

/**
 * getEmailDelivery
 *
 * Imprime a conta de e-mail para enviar mensagens aos usuários
 *
 * @access public
 */
if (! function_exists( 'getEmailDelivery' )) {
	function getEmailDelivery() {
		return "nao-responda@palpiteirosanonimos.com.br";
	}
}

/**
 * getSloganSite
 *
 * Imprime o slogan_principaldo site
 *
 * @access public
 */
if (! function_exists( 'getSloganSite' )) {
	function getSloganSite() {
		return "Bola pro mato que o jogo é de campeonato!";
		// 		return "Chuta essa que da certo!";
	}
}

/**
 * getTituloSite
 *
 * Imprime o título do site
 *
 * @access public
 */
if (! function_exists( 'getTituloSite' )) {
	function getTituloSite() {
		return 'Palpiteiros Anônimos - Divirta-se dandos seus pitacos';
	}
}

/**
 * getDescricaoSite
 *
 * Imprime a descrição do site do site
 *
 * @access public
 */
if (! function_exists( 'getDescricaoSite' )) {
	function getDescricaoSite() {
		return 'Palpiteiros Anônimos o seu site de palpites, o melhor jeito de se divertir com o futebol fora dos campos';
	}
}

/**
 * getCopyrightSite
 *
 * Imprime a descrição do site do site
 *
 * @access public
 */
if (! function_exists( 'getCopyrightSite' )) {
	function getCopyrightSite() {
		return '&copy; ' . date('Y') . ' | Palpiteiros Anônimos Todos os Direitos Reservados';
	}
}