import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function ReactionsModal({ children, currentReaction, open, setOpen }) {
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>{children}</DrawerTrigger>
			<DrawerContent className="bg-card border-0">
				<DrawerHeader className="p-5">
					<DrawerTitle className="font-medium">Reactions</DrawerTitle>
				</DrawerHeader>
				<DrawerFooter>
					<Button>
                        
                    </Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
