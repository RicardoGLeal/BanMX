export type paletteType = {
    primaryRed: string;
    background: string
    toggleActive : string;
    toggleInactive : string;
    accentColor : string;
    greenColor: string;
    textColor: string;
    secondaryRed: string;
    blueText: string;
    yellow: string;
    black : string;
    labelText : string;
    inputBackground : string;
    white: string;
    blueButton: string;
};

const palette: paletteType = {
    primaryRed: "#F12749", //Red
    background: "#FFF2CB",
    toggleInactive : '#FFF2CB',
    toggleActive : '#FFE500',
    accentColor: '#FFE500',
    greenColor: '#229C86',
    textColor: '#3A3A3A',
    secondaryRed: '#E84B52',
    blueText: '#002D4D',
    yellow: '#FCC815',
    black: "#000000",
    labelText : "#000000",
    inputBackground : "#FFFFFF",
    white: "#FFFFFF",
    blueButton: "#1877F2",
};

export type paletteColors = keyof typeof palette;

export default palette;
