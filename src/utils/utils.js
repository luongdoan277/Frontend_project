export const RupiahFormat = (nominal) => {
    return (parseInt(nominal).toLocaleString('VI', {style: 'currency', currency: 'VND', minimumFractionDigits: 0}));
}