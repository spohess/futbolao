<?php

namespace App\Console\Commands;

use App\Models\Palpite;
use App\Models\PartidaProcessada;
use App\Models\UsuarioBolao;
use DB;
use Illuminate\Console\Command;
use Log;

class PontuacaoCalcula extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'pontuacao:calcula';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Comando para calcular os pontos dos participantes';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        Log::info('#######################################################');
        Log::info('Início da atualização dos resultados');
        Log::info('-------------------------------------------------------');

        $partidas = DB::select("SELECT  p.* FROM partidas p LEFT OUTER JOIN partidas_processadas pp ON p.id = pp.id_partida WHERE pp.id IS NULL AND p.gravado = 'GRAVADO' AND p.deleted_at IS NULL ORDER BY p.id");

        foreach ($partidas as $partida) {

            Log::info('Partida: ' . $partida->id);

            $palpites = Palpite::where('id_partida', $partida->id)->get();

            $setePontos = $palpites->filter(function ($item) use ($partida) {
                if (($item->placar_casa - $item->placar_visitante) >= 4 || ($item->placar_visitante - $item->placar_casa) >= 4) {
                    if ($item->placar_casa === $partida->placar_casa && $item->placar_visitante === $partida->placar_visitante) {
                        return $item;
                    }
                }
                return false;
            });

            $cincoPontos = $palpites->filter(function ($item) use ($partida, $setePontos) {
                if ($setePontos->contains('id', $item->id)) {
                    return false;
                }
                if (($item->placar_casa - $item->placar_visitante) >= 4 || ($item->placar_visitante - $item->placar_casa) >= 4) {
                    if ($item->placar_casa === $partida->placar_casa || $item->placar_visitante === $partida->placar_visitante) {
                        return $item;
                    }
                }
                if ($item->placar_casa === $partida->placar_casa && $item->placar_visitante === $partida->placar_visitante) {
                    return $item;
                }
                return false;
            });

            $tresPontos = $palpites->filter(function ($item) use ($partida, $cincoPontos) {
                if ($cincoPontos->contains('id', $item->id)) {
                    return false;
                }
                if ($item->placar_casa === $partida->placar_casa || $item->placar_visitante === $partida->placar_visitante) {
                    return $item;
                }
                return false;
            });

            $doisPontos = $palpites->filter(function ($item) use ($partida, $cincoPontos, $tresPontos) {
                if ($cincoPontos->contains('id', $item->id)) {
                    return false;
                }
                if ($tresPontos->contains('id', $item->id)) {
                    return false;
                }
                if ($item->placar_casa > $item->placar_visitante && $partida->placar_casa > $partida->placar_visitante) {
                    return $item;
                }

                if ($item->placar_casa < $item->placar_visitante && $partida->placar_casa < $partida->placar_visitante) {
                    return $item;
                }

                if ($item->placar_casa === $item->placar_visitante && $partida->placar_casa === $partida->placar_visitante) {
                    return $item;
                }
                return false;
            });

            $setePontos->each(function ($item) {
                $item->update(['pontos' => 7]);
            });
            $cincoPontos->each(function ($item) {
                $item->update(['pontos' => 5]);
            });
            $tresPontos->each(function ($item) {
                $item->update(['pontos' => 3]);
            });
            $doisPontos->each(function ($item) {
                $item->update(['pontos' => 2]);
            });

        }

            $partidaProcessada = new PartidaProcessada;
            $partidaProcessada->id_partida = $partida->id;
            $partidaProcessada->quantidade_palpites = $palpites->count();
            $partidaProcessada->save();

            Log::info('Fim da atualização dos resultados');
            Log::info('=======================================================');

            Log::info('Atualizando pontuação dos usuários');
            $this->atualizaPontuacaoUsuarios($palpites);
        }

        Log::info('Finalizado');
        Log::info('#######################################################');
    }

    private function atualizaPontuacaoUsuarios($palpites)
    {
        $palpites->each(function ($palpite) {
            $usuarioBolao = UsuarioBolao::where("id_usuario", $palpite->id_usuario)->where("id_bolao", $palpite->id_bolao)->first();
            if (!empty($usuarioBolao)) {
                Log::info('Usuário: ' . $usuarioBolao->id_usuario);
                $usuarioBolao->pontos += $palpite->pontos;
                $usuarioBolao->save();
            }
        });
    }
}
