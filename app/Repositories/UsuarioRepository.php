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

    public function save(Usuario $usuario){
        EntityManager::persist($usuario);
        EntityManager::flush();
        return true;
    }

}