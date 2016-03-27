const banner = `
/*!
 * Copyright 2016, nju33
 * Released under the MIT License
 * https://github.com/totora0155/fuuno.js
 */
`;

export default {
  banner: banner.trim(),
  entry: 'lib/fuuno.js',
  format: 'umd',
  dest: 'dist/fuuno.js',
  moduleName: 'fuuno',
};
