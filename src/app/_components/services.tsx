"use client";

import useEmblaCarousel from "embla-carousel-react";
import {
	ChevronLeft,
	ChevronRight,
	Scissors,
	Syringe,
	CarTaxiFront,
	Hotel,
	Clock,
} from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
	{
		title: "Banho & Tosa",
		description:
			"Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
		duration: "1h",
		price: "$50",
		icon: <Scissors />,
		linkText:
			"Olá, vi no site sobre Banho e tosa e gostaria de mais informações.",
	},
	{
		title: "Consulta Veterinária",
		description:
			"Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
		duration: "1h",
		price: "$45",
		icon: <Syringe />,
		linkText:
			"Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.",
	},
	{
		title: "Táxi Pet",
		description:
			"Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
		duration: "2h",
		price: "$80",
		icon: <CarTaxiFront />,
		linkText: "Olá, vi no site sobre Táxi Pet e gostaria de mais informações.",
	},
	{
		title: "Hotel para pets",
		description:
			"Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
		duration: "1h",
		price: "$60",
		icon: <Hotel />,
		linkText:
			"Olá, vi no site sobre Hotel para pets e gostaria de mais informações.",
	},
];

export function Services() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: false,
		align: "start",
		slidesToScroll: 1,
		breakpoints: {
			"(min-width: 768px)": { slidesToScroll: 3 },
		},
	});

	function scrollPrev() {
		emblaApi?.scrollPrev();
	}

	function scrollNext() {
		emblaApi?.scrollNext();
	}

	return (
		<section className="bg-white py-16">
			<div className="container px-4 mx-auto" data-aos="zoom-out">
				<h2 className="text-4xl font-bold mb-12">Serviços</h2>

				<div className="relative">
					<div className="overflow-hidden" ref={emblaRef}>
						<div className="flex">
							{services.map((item, index) => (
								<div
									className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
									key={index}
								>
									<article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
										<div className="flex-1 flex items-start justify-between">
											<div className="flex gap-3">
												<span className="text-2xl">{item.icon}</span>
												<div>
													<h3 className="font-bold text-3xl my-1">
														{item.title}
													</h3>
													<p className="text-gray-400 text-sm select-none">
														{item.description}
													</p>
												</div>
											</div>
										</div>

										<div className="border-t border-gray-700 pt-4 flex items-center justify-between">
											<div className="flex items-center gap-2 text-sm">
												<Clock className="w-4 h-4" />
												<span>{item.duration}</span>
											</div>

											{/* <a
												href={`https://wa.me/5519996602839?text=Olá vim pelo site e gostaria de mais informações sobre ${item.title}`}
												className="flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300"
											>
												<WhatsappLogo className="w-5 h-5" />
												Entrar em contato
											</a> */}

											<Button
												asChild
												className="bg-transparent hover:bg-red-500"
											>
												<Link
													href={`https://wa.me/5519996602839?text=Olá vim pelo site e gostaria de mais informações sobre ${item.title}`}
													target="_blank"
												>
													<WhatsappLogo className="w-5 h-5" />
													Entrar em contato
												</Link>
											</Button>
										</div>
									</article>
								</div>
							))}
						</div>
					</div>

					<button
						onClick={scrollPrev}
						className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
					>
						<ChevronLeft className="w-6 h-6 text-gray-600 " />
					</button>

					<button
						onClick={scrollNext}
						className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
					>
						<ChevronRight className="w-6 h-6 text-gray-600 " />
					</button>
				</div>
			</div>
		</section>
	);
}
