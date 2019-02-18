module.exports = (api) => {
    const presets = [
        '@babel/preset-env',
        '@babel/preset-react',
    ];
    const plugins = [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-syntax-dynamic-import',
    ];
    api.cache(true);
    return {
        presets,
        plugins,
    };
};
