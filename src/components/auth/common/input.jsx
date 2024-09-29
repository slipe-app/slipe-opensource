import colors from "../../../constants/colors";

export default function AuthInput({ children, placeholder = "", value = "", onChange, borderColor = "transparent", textColor = colors.text, maxLength = 16, type = "email" }) {
	return (
		<div style={{ background: colors.nonTransparentButtonBg, borderColor: borderColor }} className='w-full overflow-hidden flex rounded-3xl duration-200 border-2'>
			<input
				type={type}
				value={value}
				style={{ color: textColor }}
				className='p-[0.9375rem] text-lg  placeholder:text-opacity-25 duration-200 bg-transparent w-full outline-none'
				placeholder={placeholder}
				onChange={(element) => onChange(element)}
				maxLength={maxLength}
			/>
			{children}
		</div>
	);
}
