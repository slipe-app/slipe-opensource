import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import CommentBlock from "./comment-block";
import Svg from "@/components/ui/icons/svg";
import { Button } from "@/components/ui/button";
import icons from "@/components/ui/icons/icons";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function CommentsModal({ children, postId, open, setOpen }) {
    const [inputFocus, setInputFocus] = useState(false);

    function adjustHeight(element) {
        element.style.height = '48px';
        element.style.height = `${element.scrollHeight}px`;
    }

	return (
		<Drawer activeSnapPoint={0.7} open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>{children}</DrawerTrigger>
			<DrawerContent className='bg-modal border-0'>
				<DrawerHeader data-shadowed={inputFocus} className='p-5 duration-200 ease-out data-[shadowed=true]:opacity-40'>
					<DrawerTitle className='font-medium'>100 comments</DrawerTitle>
				</DrawerHeader>
				<ul data-shadowed={inputFocus} className='w-full h-[31.5rem] duration-200 ease-out data-[shadowed=true]:opacity-40 px-5 relative pb-[5.5rem] flex flex-col gap-5 overflow-y-scroll'>
					<CommentBlock />
					<CommentBlock />
					<CommentBlock />
					<CommentBlock />
					<CommentBlock />
					<CommentBlock />
					<CommentBlock />
					<CommentBlock />
					<CommentBlock />
					<CommentBlock />
					<CommentBlock />
					<CommentBlock />
				</ul>
				<DrawerFooter id='categories-scroller' className='p-5 w-full flex-row fixed items-end bottom-0 bg-modal z-10 flex gap-4'>
					<img className='rounded-full min-w-12 object-cover bg-center w-12 h-12' src={`./static/test-assets/hus.png`} />
						<Textarea onFocus={() => setInputFocus(true)} onBlur={() => setInputFocus(false)} maxLength={200} onChange={element => adjustHeight(element.target)} className='bg-foreground/[0.08] h-12 max-h-32 resize-none rounded-3xl text-sm p-[0.875rem]' placeholder='Type something' />
					<Button size='icon' className="rounded-full min-h-12 h-12 w-12 min-w-12">
						<Svg className='!w-7 !h-7' icon={icons["paperPlane"]} />
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
