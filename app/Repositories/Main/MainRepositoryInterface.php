<?php

namespace App\Repositories\Main;

interface MainRepositoryInterface
{
    public function findById($id);
    public function findByColumn($campo, $valor);
    public function findAll();
    public function findAllArray();
    public function findAllCollection();
}