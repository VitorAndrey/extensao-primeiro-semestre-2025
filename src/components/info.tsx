import { Button } from "./ui/button";
import Link from "next/link";

export function Info() {
  return (
    <section
      id="informacoes"
      className="mx-auto flex min-h-[calc(100svh-(16px*16))] w-full max-w-6xl flex-col items-center justify-center px-2 py-10"
    >
      <h2 className="px-4 text-center text-2xl font-semibold lg:text-3xl">
        Práticas de <span className="text-emerald-500">Saúde Preventiva</span>{" "}
        para o Dia a Dia
      </h2>
      <p className="max-w-3xl self-center px-4 py-6 text-center text-zinc-500">
        A saúde preventiva é fundamental para garantir bem-estar ao longo da
        vida. Adotar hábitos saudáveis no dia a dia pode evitar doenças e
        melhorar a qualidade de vida. Veja abaixo algumas práticas essenciais
        que você pode começar agora:
      </p>

      <div className="mb-6 flex w-full flex-col items-center justify-center gap-4 p-4 child:flex-1 lg:flex-row lg:items-start lg:gap-12 lg:p-8">
        <ol className="flex flex-col gap-4 child:flex child:items-center child:gap-2 list-decimal">
          <li>
            Realize check-ups regulares e acompanhe sua saúde com profissionais.
          </li>
          <li>Mantenha uma alimentação equilibrada e rica em nutrientes.</li>
          <li>
            Pratique atividades físicas com regularidade, mesmo que leves.
          </li>
          <li>Evite o consumo excessivo de álcool e o uso do tabaco.</li>
          <li>Cuide da saúde mental com pausas, lazer e apoio emocional.</li>
          <li>
            Informe-se sobre vacinas e mantenha seu calendário vacinal em dia.
          </li>
        </ol>
      </div>

      <Link
        href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/prevencao"
        target="_blank"
      >
        <Button className="self-center rounded-full border-2 border-emerald-500 bg-transparent font-semibold text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white">
          Saiba Mais!
        </Button>
      </Link>
    </section>
  );
}
