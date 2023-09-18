'use client'

import Typography from '@/components/Typography'
import { ComponentProps } from 'react'
import styled, { W } from 'windstitch'

interface TextFieldProps extends Omit<W.Infer<typeof Container>, 'onChange'> {
	errorMessage?: string
	placeholder?: string
	isRequired?: boolean
	inputProps?: ComponentProps<'input'>
}

export default function TextField({
	errorMessage,
	placeholder,
	isRequired = true,
	inputProps,
	...rest
}: TextFieldProps) {
	return (
		<Container {...rest}>
			<InputContainer>
				<StyledInput type='text' placeholder={placeholder} {...inputProps} />
				{/* {!isRequired && !inputProps?.value && (
					<span className='italic text-base-label'>Opcional</span>
				)} */}
			</InputContainer>
			{!!errorMessage && (
				<Typography className='mt-2 text-sm text-red'>
					{errorMessage}
				</Typography>
			)}
		</Container>
	)
}

const Container = styled.div(`

`)

const InputContainer = styled.div(
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
