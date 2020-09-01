const themes = [
    {
        firstTime: true,
        name: 'Classic',
        colorPrimary: 'transparent',
        colorAlternate: '#ffffff',
        textAlternate: '#202020',
        colorHighlight: '#f0db4f',
        textPrimary: 'dimgrey',
        navAlpha: '#ffffff',
    },
    {
        name: 'Dark',
        colorPrimary: 'transparent',
        colorAlternate: '#202020',
        textAlternate: 'dimgrey',
        colorHighlight: '#f0db4f',
        textPrimary: 'rgb(255,255,255)',
        navAlpha: 'rgb(19,19,19)'
    }
];

export const getThemes = () => {
    return themes.map((theme) => {
        return {
            name: theme.name,
            firstTime: theme.firstTime,
            colorPrimary: theme.colorPrimary,
            colorAlternate: theme.colorAlternate,
            colorHighlight: theme.colorHighlight,
            bgPrimary: theme.colorAlternate,
            bgAlternate: theme.colorPrimary,
            bgLanding: theme.colorPrimary,
            textPrimary: theme.textPrimary,
            textAlternate: theme.textAlternate,
            textLanding: theme.colorPrimary,
            parallaxStars: theme.colorPrimary,
            navAlpha: theme.navAlpha
        };
    });
};
