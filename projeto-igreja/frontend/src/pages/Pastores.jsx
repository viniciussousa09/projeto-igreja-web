import { useState } from 'react';

import { FaInstagram } from 'react-icons/fa';

import fotoPastor1 from '../assets/pastor-presidente.jpg';
import fotoPastor2 from '../assets/pastor-auxiliar.jpg';

export default function Pastores() {
    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">Nossos Pastores</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Pastor 1 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-8 border-b-4 border-green-500 hover:shadow-2xl transition-shadow duration-300">

                    {/* 2. USAR A FOTO IMPORTADA NO SRC */}
                    <div className="w-48 h-48 rounded-full shadow-md mb-6 border-4 border-purple-100 overflow-hidden">
                        <img
                            src={fotoPastor1} // Variável do import
                            alt="Pastor Presidente Nome Sobrenome"
                            className="w-full h-full object-cover" // object-cover garante que não distorça
                        />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800">Pr. Rodrigo Pires</h3>
                    <p className="text-purple-700 font-semibold mb-4 text-lg">Pastor Presidente</p>
                    <p className="text-gray-600 text-center mb-8 leading-relaxed">
                        Pr. Rodrigo Pires, é casado com Glaucia e pai do Mateus, Elena e Rebeca. É pastor presidente na Igreja Batista Novas de Paz desde 19 de Janeiro 2020. Formado em Administração (Faculdade Anhanguera) e Teologia (Faculdade Teológica do ABC), pós-graduado em aconselhamento pastoral (Faculade Batista-MG), está fazendo Mestrado em Ministério (Faculdade Batista Logos), atualmente, leciona Eclesiologia e Teologia pastoral na Faculdade Teológica do ABC.
                    </p>
                    <a href="https://www.instagram.com/rodrigo_oliveira_pires/" target="_blank" rel="noreferrer" className="mt-auto bg-purple-50 text-purple-700 font-bold py-3 px-8 rounded-full hover:bg-purple-700 hover:text-white transition-colors border border-purple-200 flex items-center gap-2">
                        Seguir no Instagram <FaInstagram className="w-5 h-5 text-xl" />
                    </a>
                </div>

                {/* Pastor 2 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-8 border-b-4 border-green-500 hover:shadow-2xl transition-shadow duration-300">

                    {/* 2. USAR A FOTO IMPORTADA NO SRC */}
                    <div className="w-48 h-48 rounded-full shadow-md mb-6 border-4 border-purple-100 overflow-hidden">
                        <img
                            src={fotoPastor2} // Variável do import
                            alt="Pastor Auxiliar Nome Sobrenome"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800">Pr. João Batista</h3>
                    <p className="text-purple-700 font-semibold mb-4 text-lg">Pastor Auxiliar</p>
                    <p className="text-gray-600 text-center mb-8 leading-relaxed">
                        Pr. João Batista é casado com Iracema, e pai da Fabiana, Victor e Douglas. É pastor auxiliar na Igreja Batista Novas de Paz. Trabalha como Laboratorista de Concreto e solos, e é Formado em Teologia (Seminário Betel Brasileiro). Foi ordenado pastor em 05/12/2019.
                    </p>
                    <a href="https://www.instagram.com/jobatisilva/" target="_blank" rel="noreferrer" className="mt-auto bg-purple-50 text-purple-700 font-bold py-3 px-8 rounded-full hover:bg-purple-700 hover:text-white transition-colors border border-purple-200 flex items-center gap-2">
                        Seguir no Instagram <FaInstagram className="w-5 h-5 text-xl" />
                    </a>
                </div>

            </div>
        </div>
    );
}