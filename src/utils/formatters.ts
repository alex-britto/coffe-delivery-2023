export const formatNumberToMoney = (value: number, withPrefix?: boolean) => {
	if (withPrefix) {
		return `R$ ${new Intl.NumberFormat('pt-Br', {
			minimumFractionDigits: 2,
		}).format(value)}`
	}
	return new Intl.NumberFormat('pt-Br', {
		minimumFractionDigits: 2,
	}).format(value)
}
