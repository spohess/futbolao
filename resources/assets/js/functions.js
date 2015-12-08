function iconeEspera(idBotao, classEstatica, ativa)
{
    if( ativa == 'ativa' ){
        $("#" + idBotao).removeClass(classEstatica);
        $("#" + idBotao).addClass('fa-cog fa-spin');
    } else {
        $("#" + idBotao).removeClass('fa-cog fa-spin');
        $("#" + idBotao).addClass(classEstatica);
    }
}