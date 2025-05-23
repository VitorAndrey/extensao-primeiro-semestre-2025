import image1 from "../../public/comunidade.jpeg";
import image2 from "../../public/comunidade-2.jpeg";
import image3 from "../../public/comunidade-3.jpeg";
import Image from "next/image";

export function Comunity() {
  return (
    <section
      id="comunidade"
      className="mx-auto flex min-h-[calc(100svh-(16px*4))] w-full max-w-4xl flex-col justify-center gap-4 px-2 py-8"
    >
      <h2 className="text-2xl font-semibold lg:text-3xl text-center">
        A <span className="text-emerald-500">Força da Comunidade</span> na
        Promoção da Saúde
      </h2>
      <h3 className="text-lg font-medium text-center text-zinc-600">
        Conheça os espaços e as pessoas que inspiram a transformação local
      </h3>

      <div className="flex justify-between gap-4 py-8">
        <div className="flex-1">
          <Image
            src={image1}
            alt="Imagem da comunidade local"
            className="w-full rounded-lg shadow-lg h-64 object-cover"
          />
        </div>
        <div className="flex-1">
          <Image
            src={image2}
            alt="Espaço comunitário usado em ações locais"
            className="w-full rounded-lg shadow-lg object-cover h-64"
          />
        </div>
        <div className="flex-1">
          <Image
            src={image3}
            alt="Moradores da comunidade reunidos"
            className="w-full rounded-lg shadow-lg object-cover h-64"
          />
        </div>
      </div>

      <p className="text-zinc-500">
        Esta iniciativa nasceu da própria comunidade, que reconhece a
        importância de cuidar da saúde desde cedo. Os espaços retratados nas
        fotos representam não só o ambiente em que vivemos, mas também os locais
        onde ideias ganham vida e pessoas se unem para promover mudanças reais.
        Com o apoio de todos, é possível tornar a saúde preventiva acessível,
        próxima e parte do dia a dia.
      </p>
    </section>
  );
}
