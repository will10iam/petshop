import golden from "../../../public/golden.png";
import royal from "../../../public/royal.png";
import whiskas from "../../../public/whiskas.png";
import natural from "../../../public/natural.png";
import primier from "../../../public/primier.png";
import Image from "next/image";
import {
	FacebookLogo,
	InstagramLogo,
	TwitterLogo,
	WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const brands = [
	{ name: "Royal Canin", logo: royal },
	{ name: "Golden", logo: golden },
	{ name: "Primier", logo: primier },
	{ name: "Formula Natural", logo: natural },
	{ name: "Whiskas", logo: whiskas },
	{ name: "Golden", logo: golden },
];

export function Footer() {
	return (
		<section className="bg-[#E84C3D] py-16 text-white">
			<div className="container px-4 mx-auto" data-aos="fade-up">
				<div className="border-b border-white/20 pb-8">
					<h4 className="text-3xl font-semibold mb-8 text-center">
						Marcas que trabalhamos
					</h4>

					<div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
						{brands.map((item, index) => (
							<div
								key={index}
								className="bg-white p-4 rounded-lg flex items-center justify-center"
							>
								<Image
									src={item.logo}
									alt={item.name}
									className="object-contain"
									width={100}
									height={50}
									quality={100}
									style={{ width: "auto", height: "auto" }}
								/>
							</div>
						))}
					</div>
				</div>

				<footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
					<div>
						<h3 className="text-2xl font-semibold mb-2">PetShop </h3>
						<p className="mb-4">
							Cuidando do seu melhor amigo com amor e dedicação
						</p>
						{/* <a
							href={`https://wa.me/5519996602839?text=Olá vim pelo site e gostaria de mais informações`}
							className="bg-green-500 px-4 py-2 rounded-md"
						>
							Contato via Whatsapp
						</a> */}

						<div>
							<Button
								asChild
								className="bg-green-500 px-5 py-4 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:bg-green-600"
							>
								<Link
									href={`https://wa.me/5519996602839?text=Olá vim pelo site e gostaria de mais informações`}
									target="_blank"
								>
									<WhatsappLogo className="w-5 h-5" />
									Contato via WhatsApp
								</Link>
							</Button>
						</div>
					</div>

					<div>
						<h3 className="text-2xl font-semibold mb-2">Contato </h3>
						<p>Rua dos Pets, 123 - Centro, Cidade - Estado - CEP: 12345-678</p>
						<p>Telefone: (11) 1234-5678</p>
						<p>Email: contato@petshop.com</p>
					</div>

					<div>
						<h3 className="text-2xl font-semibold mb-2">Redes Sociais </h3>
						<div className="flex gap-2">
							<a href="#">
								<FacebookLogo className="w-8 h-8" />
							</a>
							<a href="#">
								<InstagramLogo className="w-8 h-8" />
							</a>
							<a href="#">
								<TwitterLogo className="w-8 h-8" />
							</a>
						</div>
					</div>
				</footer>
			</div>
		</section>
	);
}
