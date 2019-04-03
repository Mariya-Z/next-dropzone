module.exports = ({config, mode}) => {
    config.output.publicPath = mode === 'PRODUCTION' ? '/next-dropzone/' : '/';
    return config;
  };
  