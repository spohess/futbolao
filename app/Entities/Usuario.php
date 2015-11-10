<?php

namespace App\Entities;

use Gedmo\Mapping\Annotation as Gedmo;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @Gedmo\SoftDeleteable(fieldName="deletedAt", timeAware=false)
 * @ORM\Table(name="usuarios", options={"comment":"Tabela de usuarios"})
 */
class Usuario
{

    /**
    * @ORM\Id
    * @ORM\GeneratedValue
    * @ORM\Column(name="idUsuario", type="integer")
    */
    private $idUsuario;

    /**
     * @ORM\Column(name="nomeUsuario", type="string", length=255, nullable=false, options={"comment":"Nome do usuário"})
     */
    private $nomeUsuario;

    /**
     * @ORM\Column(name="emailUsuario", type="string", length=128, nullable=false, unique=true, options={"comment":"E-mail do usuário"})
     */
    private $emailUsuario;

    /**
     * @ORM\Column(name="loginUsuario", type="string", length=32, nullable=false, unique=true, options={"comment":"Login do usuário"})
     */
    private $loginUsuario;

    /**
     * @ORM\Column(name="senhaUsuario", type="string", length=255, nullable=false, options={"comment":"Senha do usuário"})
     */
    private $senhaUsuario;

    /**
     * @ORM\Column(name="serialUsuario", type="string", length=128, nullable=false, unique=true, options={"comment":"Serial do usuário"})
     */
    private $serialUsuario;

    /**
     * @Gedmo\Timestampable(on="create")
     * @ORM\Column(name="creatAt", type="datetime", options={"comment":"Data de criação do registro"})
     */
    private $creatAt;

    /**
     * @var \DateTime $updated
     *
     * @Gedmo\Timestampable(on="update")
     * @ORM\Column(name="updatAt", type="datetime", options={"comment":"Data de atualização do registro"})
     */
    private $updatAt;

    /**
    * @ORM\Column(name="deletedAt", type="datetime", nullable=true, options={"comment":"Data em que o usuáŕio foi deletado"})
    */
    private $deletedAt;

    /**
     * Gets the value of idUsuario.
     *
     * @return mixed
     */
    public function getIdUsuario()
    {
        return $this->idUsuario;
    }

    /**
     * Gets the value of nomeUsuario.
     *
     * @return mixed
     */
    public function getNomeUsuario()
    {
        return $this->nomeUsuario;
    }

    /**
     * Sets the value of nomeUsuario.
     *
     * @param mixed $nomeUsuario the nome usuario
     *
     * @return self
     */
    public function setNomeUsuario($nomeUsuario)
    {
        $this->nomeUsuario = $nomeUsuario;

        return $this;
    }

    /**
     * Gets the value of emailUsuario.
     *
     * @return mixed
     */
    public function getEmailUsuario()
    {
        return $this->emailUsuario;
    }

    /**
     * Sets the value of emailUsuario.
     *
     * @param mixed $emailUsuario the email usuario
     *
     * @return self
     */
    public function setEmailUsuario($emailUsuario)
    {
        $this->emailUsuario = $emailUsuario;

        return $this;
    }

    /**
     * Gets the value of loginUsuario.
     *
     * @return mixed
     */
    public function getLoginUsuario()
    {
        return $this->loginUsuario;
    }

    /**
     * Sets the value of loginUsuario.
     *
     * @param mixed $loginUsuario the login usuario
     *
     * @return self
     */
    public function setLoginUsuario($loginUsuario)
    {
        $this->loginUsuario = $loginUsuario;

        return $this;
    }

    /**
     * Gets the value of senhaUsuario.
     *
     * @return mixed
     */
    public function getSenhaUsuario()
    {
        return $this->senhaUsuario;
    }

    /**
     * Sets the value of senhaUsuario.
     *
     * @param mixed $senhaUsuario the senha usuario
     *
     * @return self
     */
    public function setSenhaUsuario($senhaUsuario)
    {
        $this->senhaUsuario = bcrypt($senhaUsuario);

        return $this;
    }

    /**
     * Gets the value of serialUsuario.
     *
     * @return mixed
     */
    public function getSerialUsuario()
    {
        return $this->serialUsuario;
    }

    /**
     * Sets the value of serialUsuario.
     *
     * @param mixed $serialUsuario the serial usuario
     *
     * @return self
     */
    public function setSerialUsuario()
    {
        $this->serialUsuario = str_random(128);

        return $this;
    }

    /**
     * Gets the value of creatAt.
     *
     * @return mixed
     */
    public function getCreatAt()
    {
        return $this->creatAt;
    }

    /**
     * Sets the value of creatAt.
     *
     * @param mixed $creatAt the creat at
     *
     * @return self
     */
    public function setCreatAt($creatAt)
    {
        $this->creatAt = $creatAt;

        return $this;
    }

    /**
     * Gets the value of updatAt.
     *
     * @return \DateTime $updated
     */
    public function getUpdatAt()
    {
        return $this->updatAt;
    }

    /**
     * Sets the value of updatAt.
     *
     * @param \DateTime $updated $updatAt the updat at
     *
     * @return self
     */
    public function setUpdatAt($updatAt)
    {
        $this->updatAt = $updatAt;

        return $this;
    }

    /**
     * Gets the value of deletedAt.
     *
     * @return mixed
     */
    public function getDeletedAt()
    {
        return $this->deletedAt;
    }

    /**
     * Sets the value of deletedAt.
     *
     * @param mixed $deletedAt the deleted at
     *
     * @return self
     */
    public function setDeletedAt($deletedAt)
    {
        $this->deletedAt = $deletedAt;

        return $this;
    }

    public function exchangeArray(Array $dados){
        $this->setNomeUsuario($dados["nomeUsuario"]);
        $this->setEmailUsuario($dados["emailUsuario"]);
        $this->setLoginUsuario($dados["loginUsuario"]);
        $this->setSenhaUsuario($dados["senhaUsuario"]);
        $this->setSerialUsuario();
    }
}