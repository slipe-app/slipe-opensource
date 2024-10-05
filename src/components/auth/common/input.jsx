import colors from "../../../constants/colors";

export default function AuthInput({
	children,
	placeholder = "",
	value = "",
	isFocused,
	onChange,
	borderColor = "transparent",
	textColor = colors.text,
	maxLength = 16,
	type = "email",
	inputType = "default",
}) {
	return (
		<div style={{ background: colors.nonTransparentButtonBg, borderColor: borderColor }} className='w-full my-4 overflow-hidden flex rounded-3xl duration-200 border-2'>
			{inputType === "username" ? (
				<>
					<span style={{ color: textColor }} className='p-[0.9375rem] opacity-25 pr-0 text-lg'>
						slipe.fun/
					</span>
					<input
						type={type}
						value={value}
						onFocus={() => isFocused ? isFocused(true) : {}}
						onBlur={() =>  isFocused ? isFocused(false) : {}}
						style={{ color: textColor }}
						className='p-[0.9375rem] pl-0 text-lg placeholder:opacity-50 duration-200 bg-transparent w-full outline-none'
						placeholder={placeholder}
						onChange={element => (onChange ? onChange(element) : {})}
						maxLength={maxLength}
					/>
					{children}
				</>
			) : (
				<>
					<input
						type={type}
						value={value}
						onFocus={() => isFocused ? isFocused(true) : {}}
						onBlur={() =>  isFocused ? isFocused(false) : {}}
						style={{ color: textColor }}
						className='p-[0.9375rem] text-lg  placeholder:text-opacity-25 duration-200 bg-transparent w-full outline-none'
						placeholder={placeholder}
						onChange={element => (onChange ? onChange(element) : {})}
						maxLength={maxLength}
					/>
					{children}
				</>
			)}
		</div>
	);
}
