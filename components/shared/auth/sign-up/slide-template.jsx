import { Input } from "@/components/ui/input";

export default function SlideTemplate({ title = "", img = "", isAvatar = false, uploadedAvatar }) {
	const handleFileChange = e => {
		const reader = new FileReader();
		reader.onloadend = () => {
			uploadedAvatar(reader.result);
		};
		reader.readAsDataURL(e.target.files[0]);
	};

	return (
		<>
			<div className='flex flex-col gap-4 items-center'>
				{isAvatar ? (
					<div className="relative">
						<Input onChange={handleFileChange} className="opacity-0 absolute w-full h-full" type="file"/>
						<img src={img} alt={title} className='w-40 rounded-full object-cover bg-center h-40' />
					</div>
				) : (
					<img src={img} alt={title} className='w-40 h-40' />
				)}
				
				<span className='text-3xl text-foreground font-semibold'>{title}</span>
			</div>
		</>
	);
}
