import { NextSeo } from 'next-seo';

export default function HomePage() {
  return (
    <>
      <NextSeo
        title="Inicio"
        description="Encuentra y publica adisos en tiempo récord."
      />
      <main className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center">
          Bienvenido a Buscadis
        </h1>
      </main>
    </>
  );
}
