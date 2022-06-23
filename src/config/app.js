import VersionInfo from 'react-native-version-info'

/**
 * @typedef AppConfig
 * @property {String} API_URL
 * @property {Boolean} SHOW_DEV_PORTAL
 * @property {Boolean} PRODUCTION
 */

/**
 * @type {AppConfig}
 */
const dev = {
  API_URL: 'https://dev.api.example.com/v1',
  SHOW_DEV_PORTAL: true,
  PRODUCTION: false,
}

/**
 * @type {AppConfig}
 */
const prod = {
  API_URL: 'https://dev.api.example.com/v1',
  SHOW_DEV_PORTAL: false,
  PRODUCTION: true,
}

let _config = prod

if (
  VersionInfo.bundleIdentifier &&
  VersionInfo.bundleIdentifier.includes('dev')
)
  _config = dev

const config = _config

export default config
