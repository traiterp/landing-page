import Link from "next/link";
import Container from "../global/container";
import { ComponentProps } from "../componentsInterface";

const Footer = ({ dictionary }: ComponentProps ) => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-foreground/5 pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
                <Container>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-center gap-2">
                            <span className="text-base md:text-lg font-medium text-foreground">
                                {dictionary.title}
                            </span>
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm text-start">
                            {dictionary.description}
                        </p>
                    </div>
                </Container>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                    <Container delay={0.1} className="h-auto">
                            <h3 className="text-base font-medium text-foreground">
                                {dictionary.learnMore}
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                        {dictionary.tryNow}
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                        {dictionary.contactUs}
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                        {dictionary.getStarted}
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                        {dictionary.features}
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                        {dictionary.pricing}
                                    </Link>
                                </li>
                            </ul>
                        </Container>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <Container delay={0.4} className="h-auto">
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-foreground">
                                    Languages
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                    <li>
                                        <Link href="/es" className="link hover:text-foreground transition-all duration-300">
                                            ES
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/en" className="link hover:text-foreground transition-all duration-300">
                                            EN
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>

            <Container delay={0.5} className="w-full relative mt-12 lg:mt-20">
                <div className="mt-8 md:flex md:items-center justify-center footer w-full">
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} Noodle. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    )
};

export default Footer
