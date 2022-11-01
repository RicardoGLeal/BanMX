export type paletteType = {
    primaryRed: string;
    background: string
    toggleActive : string;
    toggleInactive : string;
};

const palette: paletteType = {
    primaryRed: "#F12749", //Red
    background: "#FFF2CB",
    toggleInactive : '#FFF2CB',
    toggleActive : '#FFE500',
};

export type paletteColors = keyof typeof palette;

export default palette;
