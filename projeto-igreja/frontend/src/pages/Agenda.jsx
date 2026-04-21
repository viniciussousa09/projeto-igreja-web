export default function Agenda() {

    const programacao = [
        {
            dia: 'Terça-feira',
            culto: 'Culto de oração',
            horario: '17:30',
            corBorda: 'border-purple-500'
        },
        {
            dia: 'Quarta-feira',
            culto: 'Culto de oração',
            horario: '20:00',
            corBorda: 'border-green-500'
        },
        {
            dia: 'Quinta-feira',
            culto: 'Culto de oração',
            horario: '9:00',
            corBorda: 'border-purple-500'
        },
        {
            dia: 'Domingo',
            culto: 'Culto de Ensino',
            horario: '8:00',
            corBorda: 'border-green-500'
        },
        {
            dia: 'Domingo',
            culto: 'EBD',
            horario: '9:30',
            corBorda: 'border-purple-500'
        },
        {
            dia: 'Domingo',
            culto: 'Culto de Celebração da Família',
            horario: '18:30',
            corBorda: 'border-green-500'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-5xl mx-auto">

                <div className="tesxt-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
                        Nossa Agenda <span className="text-purple-700">Semanal</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Junte-se a nós em nossas celebrações. Não importa o dia, você e sua família serão sempre muito bem-vindos!
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {programacao.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-white p-8 rounded-2xl shadown-md border-l-8 ${item.corBorda} hover:shadow-xl transition-all hover:-translate-y-1`}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">{item.dia}</h2>
                            <p className="text-xl text-gray-600 font-semibold mb-4">{item.culto}</p>

                            <div className="flex items-center text-lg font-medium text-gray-700 bg-gray-100 w-fit px-4 py-2 rounded-lg">
                                <span className="mr-2">⏰</span> {item.horario}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}