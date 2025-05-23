export const videos = [
  "https://youtu.be/99vIpHsMmUE?si=qWLrMeg-ZKlmQMZK", // Alimentação saudável
  "https://www.youtube.com/watch?v=1e6ZrjGv9fE", // Exercícios físicos
  "https://www.youtube.com/watch?v=3lZzZ7i5z8A", // Prevenção de doenças
];

export function Content() {
  return (
    <section
      id="conteudos"
      className="mx-auto flex min-h-[calc(100svh-(16px*4))] w-full max-w-4xl flex-col justify-center gap-4 px-2 py-8"
    >
      <h2 className="text-2xl font-semibold lg:text-3xl text-center">
        Dicas de <span className="text-emerald-500">Saúde Preventiva</span> para
        o Dia a Dia
      </h2>
      <h3 className="text-lg font-medium text-center text-zinc-600">
        Pequenas ações que fazem uma grande diferença na sua saúde
      </h3>

      <div className="flex justify-between gap-4 py-8">
        {videos.map((video, index) => (
          <div key={index} className="flex-1 aspect-w-16 aspect-h-9">
            <iframe
              src={video}
              frameBorder="0"
              title={`YouTube video player ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>

      <p className="text-zinc-500">
        Manter a saúde em dia vai além de evitar doenças — trata-se de adotar
        hábitos que promovem bem-estar e qualidade de vida. Alimentação
        equilibrada, prática regular de exercícios físicos e acompanhamento
        médico periódico são pilares fundamentais da saúde preventiva. Nos
        vídeos acima, você encontrará orientações práticas para incorporar esses
        hábitos na sua rotina, contribuindo para uma vida mais saudável e
        equilibrada.
      </p>
    </section>
  );
}
