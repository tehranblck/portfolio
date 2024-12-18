'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
}

const limitWords = (text: string, wordLimit: number): string => {
    const words = text.split(" ");
    return words.length > wordLimit
        ? `${words.slice(0, wordLimit).join(" ")}...`
        : text;
};

const projects = [
    {
        title: "Musliman Shop",
        description:
            "Bu layihə müasir Next.js və Tailwind CSS texnologiyaları ilə hazırlanmış tam funksional bir e-ticarət platformasıdır. Proyekt, istifadəçi təcrübəsini artırmaq üçün mobil dostu (responsive) dizayn və performans optimallaşdırılması ilə təmin edilmişdir.",
        image: "/image1.webp",
        link: "https://www.muslimanshop.com/",
    },
    {
        title: "Portfolio Vebsaytı",
        description:
            "Bu vebsayt Next.js və interaktiv elementləri idarə etmək üçün TypeScript ilə yazılmışdır. Şəkillərin və məzmunların dinamik yüklənməsi, həmçinin cihazlara uyğunluq üçün optimallaşdırılmışdır. Mobil və masaüstü cihazlarda mükəmməl işləyir.",
        image: "/image2.webp",
        link: "https://www.shamsmustafadesign.website/",
    },
    {
        title: "ProduckFilm",
        description:
            "ProduckFilm şirkəti üçün hazırlanan bu sayt, Tailwind CSS-in güclü dizayn komponentləri ilə minimalist və performanslı bir vebsayt təcrübəsi təqdim edir. Layihə həm SEO optimallaşdırmasını, həm də yüksək performanslı render sistemini dəstəkləyir.",
        image: "/image3.webp",
        link: "https://www.produckfilm.com/",
    },
    {
        title: "Snowpeakinns Otel Tanıtım Vebsaytı",
        description:
            "Next.js-in SSR (Server Side Rendering) imkanlarından istifadə edilərək hazırlanan bu vebsayt, otelin xidmətlərini yüksək performansla nümayiş etdirir. Sayt optimallaşdırılmış şəkil idarəetməsi və dinamik məzmun yükləməsi xüsusiyyətləri ilə təchiz edilmişdir.",
        image: "/image4.webp",
        link: "https://www.snowpeakinns.com/",
    },
    {
        title: "Oyun Firması üçün Tanıtım Vebsaytı",
        description:
            "Bu layihə Next.js-in ISR (Incremental Static Regeneration) imkanlarından istifadə edərək performans və SEO üçün optimallaşdırılmışdır. Tam responsiv dizayn təmin edir və müasir veb standartlarına uyğundur.",
        image: "/image5.webp",
        link: "https://www.sosiaalinenkasinot.com/",
    },
    {
        title: "Saytyarat.com Vebsaytı",
        description:
            "Saytyarat.com platforması, Next.js-in SSR  texnologiyası ilə hazırlanmışdır ki, bu da yüksək performanslı və SEO optimallaşdırılmış veb təcrübəsi təmin edir. Sayt Tailwind CSS ilə hazırlanaraq tamamilə responsiv bir dizayna malikdir. Eyni zamanda, layihədə dinamik kontent idarəetməsi üçün müasir API inteqrasiyaları tətbiq edilmişdir. Mobil uyğunluğu və sürətli yükləmə xüsusiyyətləri ilə istifadəçi təcrübəsini maksimum dərəcədə artırır. Proyekt, həmçinin real-time analytics və CDN inteqrasiyası ilə təchiz edilmişdir. Bloq proyektlər və s. kimi səhifələr Strapi admin panelindən özəlləşdiriləbilir",
        image: "/image.png",
        link: "https://www.saytyarat.com/",
    },

];


const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const openPopup = (project: Project) => setSelectedProject(project);

    const closePopup = () => setSelectedProject(null);

    return (
        <div className="min-h-screen flex flex-col container mx-auto items-center py-10 px-5">
            <h1 className="text-4xl font-bold mb-8 text-white">Portfoliomla Tanış Olun</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <Image
                            width={400}
                            height={400}
                            quality={100}
                            priority
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl text-black font-semibold mb-2">{project.title}</h2>
                            <p className="text-black mb-4">
                                {project.description.split(" ").length > 40 ? (
                                    <>
                                        {limitWords(project.description, 40)}
                                        <button
                                            onClick={() => openPopup(project)}
                                            className="text-blue-500 underline ml-2"
                                        >
                                            Davamını oxu
                                        </button>
                                    </>
                                ) : (
                                    project.description
                                )}
                            </p>
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                            >
                                Proyekt linkinə get
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup */}
            {selectedProject && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full relative">
                        <button
                            onClick={closePopup}
                            className="absolute top-2 right-2 text-gray-500 hover:text-black font-bold text-lg"
                        >
                            ×
                        </button>
                        <Image
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            width={400}
                            height={400}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-xl text-black font-semibold mb-2">{selectedProject.title}</h2>
                        <p className="text-black mb-4">{selectedProject.description}</p>
                        <Link
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                        >
                            Proyekt linkinə get
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
