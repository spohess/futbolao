<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted'             => ':attribute deve ser aceito.',
    'active_url'           => ':attribute não é uma url válida.',
    'after'                => ':attribute deve ser vir depois de :date.',
    'alpha'                => ':attribute só pode conter letras.',
    'alpha_dash'           => ':attribute deve conter apenas letras, números e traços.',
    'alpha_num'            => ':attribute deve contar apenas letras e números.',
    'array'                => ':attribute deve ser um array.',
    'before'               => ':attribute deve vir antes de :date.',
    'between'              => [
    'numeric' => ':attribute deve estar entre :min e :max.',
    'file'    => ':attribute deve estar entre :min e :max kilobytes.',
    'string'  => ':attribute deve estar entre :min e :max caracteres.',
    'array'   => ':attribute deve estar entre :min e :max itens.',
    ],
    'boolean'              => ':attribute deve estar entre true ou false.',
    'confirmed'            => ':attribute confirmação não está igual.',
    'date'                 => ':attribute não é uma data válida.',
    'date_format'          => ':attribute não está de acordo com o formato :format.',
    'different'            => ':attribute e :other devem ser diferentes.',
    'digits'               => ':attribute deve ter :digits digitos.',
    'digits_between'       => ':attribute deve estar entre :min e :max digitos.',
    'email'                => ':attribute deve ser um e-mail válido.',
    'filled'               => ':attribute campo é obrigatório.',
    'exists'               => ':attribute selecionado é inválido.',
    'image'                => ':attribute deve ser uma imagem.',
    'in'                   => ':attribute selecionado é inválido.',
    'integer'              => ':attribute deve ser um número inteiro.',
    'ip'                   => ':attribute deve ser uma IP válido.',
    'max'                  => [
    'numeric' => ':attribute não pode ser maior que :max.',
    'file'    => ':attribute não pode ser maior que :max kilobytes.',
    'string'  => ':attribute não pode ser maior que :max caracteres.',
    'array'   => ':attribute não pode ter mais que :max itens.',
    ],
    'mimes'                => ':attribute deve ser um arquivo do tipo: :values.',
    'min'                  => [
    'numeric' => ':attribute deve ter no mínimo :min.',
    'file'    => ':attribute deve ter no mínimo :min kilobytes.',
    'string'  => ':attribute deve ter no mínimo :min caracteres.',
    'array'   => ':attribute deve ser no mínimo :min itens.',
    ],
    'not_in'               => ':attribute selecionado é inválido.',
    'numeric'              => ':attribute deve ser um número.',
    'regex'                => ':attribute formato inválido.',
    'required'             => ':attribute é obrigatório.',
    'required_if'          => ':attribute é obrigatório quando :other é :value.',
    'required_with'        => ':attribute é obrigatório quando :values existe.',
    'required_with_all'    => ':attribute é obrigatório quando :values existem.',
    'required_without'     => ':attribute é obrigatório quando :values não existem.',
    'required_without_all' => ':attribute é obrigatório quando nenhum valor de :values existem.',
    'same'                 => ':attribute e :other devem ser iguais.',
    'size'                 => [
    'numeric' => ':attribute deve ter :size.',
    'file'    => ':attribute deve ter :size kilobytes.',
    'string'  => ':attribute deve ter :size caracteres.',
    'array'   => ':attribute deve conter :size itens.',
    ],
    'string'               => ':attribute deve ser uma palavra.',
    'timezone'             => ':attribute deve ser uma zona válida.',
    'unique'               => ':attribute já está em uso.',
    'url'                  => ':attribute formato inválido.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
    'attribute-name' => [
    'rule-name' => 'custom-message',
    ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap attribute place-holders
    | with something more reader friendly such as E-Mail Address instead
    | of "email". This simply helps us make messages a little cleaner.
    |
    */

    'attributes' => [],

    ];
