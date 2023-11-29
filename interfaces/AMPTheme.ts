export interface AMPThemeTypes {
    link: string;
}

export interface AMPThemeIcons {
    icon:AMPThemeIconProps;
}

export interface AMPThemeIconProps {
    x: {path:string};
    at: {path:string};
    home: {path:string};
    edit: {path:string};
    plus: {path:string};
    user: {path:string};
    phone: {path:string};
    email: {path:string};
    search: {path:string};
    angleUp: {path:string};
    angleDown: {path:string};
    angleLeft: {path:string};
    ellipsesY: {path:string};
    ellipsesX: {path:string};
    angleRight: {path:string};

    // File Manager
    zip: {path:string};

    // Socialmedia
    gitlab: {path:string};
    twitter: {path:string};
    spotify: {path:string};
    discord: {path:string};
    facebook: {path:string};
    facebookCircle: {path:string};
    instagram: {path:string};
}

export interface AMPThemeStates {
    success: string;
    error: string;
    warning: string;
    info: string;
    light: string;
    clear: string;
    dark: string;
}

export interface AMPThemeColors extends AMPThemeStates, AMPThemeTypes {
    [key: string]: string;
    primary: string;
    secondary: string;
    purple:string;
    lime:string;
    white:string;
    blue:string;
}

export interface AMPThemeSizes {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
    '7xl': string;
}

export interface AMPThemeRadius {
    none:string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    full:string;
}
