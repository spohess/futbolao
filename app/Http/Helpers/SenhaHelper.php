<?php

namespace App\Http\Helpers;

class SenhaHelper
{

    private $stringAux;

    public function __construct($stringAux)
    {
        $this->setStringAux($stringAux);
    }

    public function trataSenha($senhaLimpa)
    {
        $chaveAux = $this->geraChaveDeTratamento();
        $senhaTratada = '';

        for ($i = 0; $i < strlen($senhaLimpa); $i++) {
            $ch = substr($senhaLimpa, $i, 1);
            $senhaTratada .= ord($ch) . hash("md5", $this->getStringAux()) . substr($chaveAux, 0, 10);
            $chaveAux = substr($chaveAux, 9, strlen($chaveAux));
        }

        return $senhaTratada;
    }

    public function recuperaSenha($senhaTratada)
    {
        $chaveAux = $this->geraChaveDeTratamento();

        $arraySenha = explode(hash("md5", $this->getStringAux()), $senhaTratada);
        $senhaASCII = chr($arraySenha[0]);
        unset($arraySenha[0]);

        foreach ($arraySenha as $valor) {
            $senhaASCII .= chr(str_replace(substr($chaveAux, 0, 10), '', $valor));
            $chaveAux = substr($chaveAux, 9, strlen($chaveAux));
        }

        return $senhaASCII;
    }

    public function geraChaveDeTratamento()
    {
        $hash = hash("sha256", $this->getStringAux()) . strrev(hash("sha256", $this->getStringAux()));

        return $hash . strrev($hash);
    }

    /**
     * @return mixed
     */
    public function getStringAux()
    {
        return $this->stringAux;
    }

    /**
     * @param mixed $stringAux
     */
    public function setStringAux($stringAux)
    {
        $this->stringAux = $stringAux;
    }
}
