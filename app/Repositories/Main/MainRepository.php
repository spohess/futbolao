<?php

namespace App\Repositories\Main;

use EntityManager;

abstract class MainRepository implements MainRepositoryInterface
{

    protected $serializer;
    protected $model;

    public function findById($id)
    {
        $entidy = EntityManager::find($this->model, $id);
        return $this->serializer->serialize($entidy, 'json');
    }

    public function findArrayByColumn($coluna, $valor)
    {
        return EntityManager::getRepository($this->model)->findBy(array($coluna => $valor));
    }

    public function findByColumn($coluna, $valor)
    {
        $entidy = EntityManager::getRepository($this->model)->findBy(array($coluna => $valor));
        return $this->serializer->serialize($entidy, 'json');
    }

    public function findAll()
    {
        $entidy = EntityManager::getRepository($this->model)->findAll();
        return $this->serializer->serialize($entidy, 'json');
    }

    public function findAllArray()
    {
        return EntityManager::getRepository($this->model)->findAll();
    }

    public function findAllCollection()
    {
        $entidy = EntityManager::getRepository($this->model)->findAll();
        return collect(json_decode($this->serializer->serialize($entidy, 'json')));
    }

}