<?php

namespace App\Repositories;

use App\Repositories\Main\MainRepository;
use App\Entities\Usuario;
use EntityManager;

class UsuarioRepository extends MainRepository implements UsuarioRepositoryInterface
{

    public function __construct()
    {
        $this->serializer = \JMS\Serializer\SerializerBuilder::create()->build();
        $this->model = 'App\Entities\Usuario';
        date_default_timezone_set(getTimeZone());
    }

    public function disableSoftDelet()
    {
        EntityManager::getFilters()->disable('soft-deleteable');
    }

    public function validaEmail($emailUsuario)
    {
        $usuario = EntityManager::getRepository($this->model)->findBy(array('emailUsuario' => $emailUsuario));
        if( empty($usuario) ){
            return true;
        }
        return false;
    }

    public function validaLogin($loginUsuario)
    {
        $usuario = EntityManager::getRepository($this->model)->findBy(array('loginUsuario' => $loginUsuario));
        if( empty($usuario) ){
            return true;
        }
        return false;
    }

    /**
    * Pesquisa uma entidade por nome
    *
    * @return Array
    */
    public function findByLogin($loginUsuario){
        $usuario = EntityManager::getRepository($this->model)->findBy(array('loginUsuario' => $loginUsuario));
        if( !empty($usuario) ){
            return $usuario[0];
        }
        return null;
    }

    public function save(Usuario $usuario){
        EntityManager::persist($usuario);
        EntityManager::flush();
        return true;
    }

}