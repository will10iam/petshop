import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Button } from "@/components/ui/button";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Services />
			<Testimonials />
		</main>
	);
}
