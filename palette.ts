export type paletteType = {
    primaryRed: string;
    background: string
    toggleActive : string;
    toggleInactive : string;
    accentColor : string;
    greenColor: string;
    textColor: string;
    secondaryRed: string;
};

const palette: paletteType = {
    primaryRed: "#F12749", //Red
    background: "#FFF2CB",
    toggleInactive : '#FFF2CB',
    toggleActive : '#FFE500',
    accentColor: '#FFE500',
    greenColor: '#229C86',
    textColor: '#3A3A3A',
    secondaryRed: '#E84B52'
};

export type paletteColors = keyof typeof palette;

export default palette;
