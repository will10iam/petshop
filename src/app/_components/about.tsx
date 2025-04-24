import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function About() {
	return (
		<section className="bg-[#FDF6ec] py-16">
			<div className="container px-4 mx-auto ">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div
						className="relative"
						data-aos="fade-up-right"
						data-aos-delay="300"
					>
						<div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
							<Image
								src={about1Img}
								alt="Foto do Cachorro"
								fill
								sizes="100vw"
								quality={100}
								priority
								className="object-cover hover:scale-110 duration-300"
							/>
						</div>

						<div
							className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white"
							data-aos="fade-up"
							data-aos-delay="500"
						>
							<Image
								src={about2Img}
								alt="Foto do Cachorro2"
								fill
								quality={100}
								priority
							/>
						</div>
					</div>

					<div
						className="space-y-6 mt-10"
						data-aos="fade-up-left"
						data-aos-delay="300"
					>
						<h2 className="text-4xl font-bold">SOBRE</h2>

						<p>
							Até que alguém ame um animal, uma parte da sua alma permanece
							adormecida. Acreditamos nisso e acreditamos no fácil acesso a
							coisas que fazem bem à mente, ao corpo e ao espírito. Com uma
							oferta inteligente, um suporte excelente e um checkout seguro,
							você está em boas mãos.
						</p>

						<ul className="space-y-4">
							<li className="flex items-center gap-2">
								<Check className="text-red-500" />
								Aberto desde 2006
							</li>
							<li className="flex items-center gap-2">
								<Check className="text-red-500" />
								Equipe com mais de 10 veterinários.
							</li>
							<li className="flex items-center gap-2">
								<Check className="text-red-500" />
								Qualidade é nossa prioridade
							</li>
						</ul>
						<div className="flex gap-2">
							<Button
								asChild
								className="bg-green-500 px-5 py-4 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:bg-green-600"
								data-aos="fade-left"
								data-aos-delay="500"
							>
								<Link
									href={`https://wa.me/5519996602839?text=Olá vim pelo site e gostaria de mais informações`}
									target="_blank"
								>
									<WhatsappLogo className="w-5 h-5" />
									Contato via WhatsApp
								</Link>
							</Button>

							<Button
								asChild
								className="bg-red-500 px-5 py-4 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:bg-red-600 hover:scale-110 duration-300"
								data-aos="fade-left"
								data-aos-delay="500"
							>
								<Link
									href={`https://wa.me/5519996602839?text=Olá vim pelo site e gostaria de mais informações`}
									target="_blank"
								>
									<MapPin className="w-5 h-5" />
									Endereço da Loja
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
