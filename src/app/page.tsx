"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [showFooter, setShowFooter] = useState(false);

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80; // Altura aproximada do header
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      setShowFooter(scrollPosition >= documentHeight - 10); // Ajuste para tolerância
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50">
      {/* Header */}
      <header className="w-full fixed top-0 left-0 z-50 flex justify-between items-center px-8 py-4 bg-green-600 bg-opacity-90 text-white shadow-md backdrop-blur-sm">
        <h1 className="text-xl font-bold">PermeaTerra |</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a
                onClick={(e) => handleScroll(e, "sobre")}
                className="hover:underline"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                onClick={(e) => handleScroll(e, "como-funciona")}
                className="hover:underline"
              >
                Como Funciona
              </a>
            </li>
            <li>
              <a
                onClick={(e) => handleScroll(e, "beneficios")}
                className="hover:underline"
              >
                Benefícios
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="sobre"
        className="w-full max-w-4xl text-center mt-12 pt-8"
      >
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          PermeaTerra
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Integração entre Natureza e Inovação no Monitoramento da Umidade do Solo
        </p>
        <p className="text-gray-700 mt-4">
          A tecnologia PermeaTerra é uma solução que utiliza Arduino, combinando sensores de umidade do solo, LEDs e LCDs para monitorar a infiltração da água no solo. Com essa tecnologia, é possível otimizar o uso da água na agricultura, promovendo práticas sustentáveis e eficientes.
        </p>
      </section>

      {/* Content */}
      <main id="content" className="w-full max-w-4xl text-center mt-12 space-y-12 pt-8">
        {/* How It Works Section */}
        <section id="como-funciona">
          <h2 className="text-2xl font-semibold text-green-800">Como Funciona?</h2>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>O sensor de umidade do solo mede a quantidade de água presente no solo.</li>
            <li>Os LEDs indicam o nível de umidade, ajudando na visualização rápida.</li>
            <li>O LCD exibe informações detalhadas sobre a umidade e outras métricas.</li>
          </ul>
          <div className="mt-8 flex justify-center">
            <iframe
              className="rounded-lg shadow-lg"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1E1CNfMvszM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="text-left">
          <h3 className="text-2xl font-semibold text-green-800 text-center">Benefícios Ambientais</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
            <div className="benefit bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-green-700">Conservação da água</h4>
              <p className="text-gray-700 mt-2">Evita desperdícios com irrigação desnecessária.</p>
            </div>
            <div className="benefit bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-green-700">Agricultura Sustentável</h4>
              <p className="text-gray-700 mt-2">Promove o uso eficiente do solo e dos recursos naturais.</p>
            </div>
            <div className="benefit bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-green-700">Redução de Enchentes</h4>
              <p className="text-gray-700 mt-2">
                O monitoramento da infiltração da água no solo pode ajudar a evitar alagamentos e enchentes ao melhorar o controle da água no terreno.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      {showFooter && (
        <footer
          id="footer"
          className="w-full fixed bottom-0 left-0 p-4 bg-green-800 text-white text-center"
        >
          <p>Feito com <span className="heart">&hearts;</span> por EcoSense Tecnologia.</p>
          <p className="mt-2">Entre em contato: <a href="mailto:contato.permeaterra@gmail.com"> contato.permeaterra@gmail.com</a></p>
        </footer>
      )}
    </div>
  );
}
