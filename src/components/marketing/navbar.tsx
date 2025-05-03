import Link from "next/link";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import { ComponentProps } from "../componentsInterface";

const Navbar = ({ dictionary }: ComponentProps) => {
    return (
        <header className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50">
            <Wrapper className="h-full">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-xl font-semibold block">
                                Noodle ERP
                            </span>
                        </Link>
                    </div>

                   <div className="flex items-center gap-4">
                        <Link href="#" className="block">
                            <Button variant="blue">
                                {dictionary.button}
                            </Button>
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </header>
    )
};

export default Navbar
