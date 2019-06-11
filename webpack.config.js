const env = process.env.NODE_ENV

module.exports = env => {
    console.log(`🏃 running ${env} Mode using ./mode/webpack.${env}.js️`);
    return require(`./webpack/webpack.${env}.js`);
};
