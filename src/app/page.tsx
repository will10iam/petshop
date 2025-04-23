import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Button>
				<WhatsappLogo className="w-5 h-5 text-white" />
				Clique Aqui
			</Button>
		</main>
	);
}
