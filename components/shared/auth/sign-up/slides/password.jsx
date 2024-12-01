import { Input } from "@/components/ui/input";
import SlideTemplate from "../slide-template";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function PasswordSlide({ password, setPassword }) {
    const [isPassword, setIsPassword] = useState(false);

	return (
		<>
			<div className='flex flex-col gap-4 px-5 items-center'>
				<SlideTemplate title='Your password here' img='/static/auth-assets/lock.png' />
				<div className='bg-foreground/[0.12] flex items-center w-full rounded-2xl'>
					<Input maxLength={32} onInput={(element) => setPassword(element.target.value)} value={password} type={isPassword ? 'password' : 'text'} className='bg-transparent rounded-none h-auto pr-0 p-4' placeholder='Password here' />
                    <Button onClick={() => setIsPassword((isPassword) => !isPassword)} className="h-full aspect-square relative flex justify-center items-center">

                    </Button>
				</div>
				<p className='text-foreground/50 text-center'>
                When you register you accept the <span onClick={() => isAccount(2)} className='text-foreground font-medium cursor-pointer'>ToS</span> and <span onClick={() => isAccount(2)} className='text-foreground font-medium cursor-pointer'>Privacy Policy</span>
				</p>
			</div>
		</>
	);
}
