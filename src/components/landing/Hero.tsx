
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden font-sans">
            <div className="container-custom grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
                    <h1 className="text-4xl lg:text-6xl xl:text-7xl font-serif font-bold text-dark leading-tight tracking-tight">
                        O Cuidado Que Seu <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                            Sorriso Merece
                        </span>
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Tecnologia de ponta, conforto e especialistas dedicados para transformar
                        sua saúde bucal com segurança e acolhimento.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="#contact"
                            className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1"
                        >
                            Agendar Avaliação
                        </a>
                        <a
                            href="#services"
                            className="bg-white text-primary border-2 border-primary/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors hover:border-primary"
                        >
                            Nossos Serviços
                        </a>
                    </div>

                    <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 font-medium">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs">
                                    ⭐️
                                </div>
                            ))}
                        </div>
                        <p>Mais de 1.000 sorrisos transformados</p>
                    </div>
                </div>

                {/* Image Content */}
                <div className="relative lg:h-[600px] flex items-center justify-center">
                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-200/30 to-purple-200/30 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform hover:scale-[1.02] transition-transform duration-500 w-full max-w-md lg:max-w-full">
                        <Image
                            src="/images/dentist-hero.png"
                            alt="Dentista sorrindo em consultório moderno"
                            width={800}
                            height={1000}
                            className="w-full h-auto object-cover"
                            priority
                        />

                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    ✓
                                </div>
                                <div>
                                    <p className="font-bold text-dark">Atendimento Premium</p>
                                    <p className="text-xs text-gray-500">Avaliação 5.0 no Google</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
