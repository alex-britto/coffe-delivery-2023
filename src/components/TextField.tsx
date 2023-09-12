'use client'

import { ChangeEvent, ComponentProps } from 'react'
import styled, { W } from 'windstitch'

interface TextFieldProps extends Omit<W.Infer<typeof Container>, 'onChange'> {
	value: string
	onChange: (value: string) => void
	placeholder?: string
	isRequired?: boolean
	inputProps?: ComponentProps<'input'>
}

export default function TextField({
	value,
	onChange,
	placeholder,
	isRequired,
	inputProps,
	...rest
}: TextFieldProps) {
	return (
		<Container {...rest}>
			<StyledInput
				type='text'
				placeholder={placeholder}
				value={value}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					onChange(e.target.value)
				}
				{...inputProps}
			/>
			{!isRequired && !value && (
				<span className='italic text-base-label'>Opcional</span>
			)}
		</Container>
	)
}

const Container = styled.div(
	`
	flex
	gap-1
	p-3
	bg-base-input
	rounded
	border
	border-base-button
	text-base-text
	text-sm

	focus-within:border-yellow-dark
`,
)

const StyledInput = styled.input(
	`
	w-full
	bg-transparent

	placeholder:text-base-label

	focus-visible:outline-none
`,
)
