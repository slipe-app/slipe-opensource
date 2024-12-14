import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Svg from "@/components/ui/icons/svg";
import icons from "@/components/ui/icons/icons";
import ReactionBlock from "./reaction-block";

export default function ReactionsModal({ children, open, setOpen, post }) {
	return (
		<Drawer activeSnapPoint={0.7} open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>{children}</DrawerTrigger>
			<DrawerContent className='bg-modal border-0'>
				<DrawerHeader className='p-3'>
					<span className="w-[3.25rem] h-1 rounded-full bg-white/50 block" />
				</DrawerHeader>
				<DrawerFooter id='categories-scroller' className='p-5 flex-row overflow-x-scroll flex gap-0'>
					<Button className="">
                        <Svg icon={icons["flag"]} className="!w-8 !h-8"/>
                    </Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
