export const RupiahFormat = (nominal) => {
    return (parseInt(nominal).toLocaleString('VI', {style: 'currency', currency: 'EUR', minimumFractionDigits: 0}));
}