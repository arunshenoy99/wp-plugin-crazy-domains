<a href="https://crazydomains.com/" target="_blank">
    <img src="https://raw.githubusercontent.com/newfold-labs/wp-plugin-crazy-domains/main/assets/svg/crazydomains-logo.svg" alt="Crazy Domains Logo" title="Crazy Domains" align="right" height="32" />
</a>

# Crazy Domains WordPress Plugin

[![Version Number](https://img.shields.io/github/v/release/newfold-labs/wp-plugin-crazy-domains?color=21a0ed&labelColor=333333)](https://github.com/newfold-labs/wp-plugin-crazy-domains/releases)
[![Lint PHP](https://github.com/newfold-labs/wp-plugin-crazy-domains/actions/workflows/lint-php.yml/badge.svg?branch=main)](https://github.com/newfold-labs/wp-plugin-crazy-domains/actions/workflows/lint-php.yml)
[![Lint YML](https://github.com/newfold-labs/wp-plugin-crazy-domains/actions/workflows/lint-yml.yml/badge.svg)](https://github.com/newfold-labs/wp-plugin-crazy-domains/actions/workflows/lint-yml.yml)
[![WP Internationalization](https://github.com/newfold-labs/wp-plugin-crazy-domains/actions/workflows/wp-i18n.yml/badge.svg)](https://github.com/newfold-labs/wp-plugin-crazy-domains/actions/workflows/wp-i18n.yml)
[![Cypress](https://github.com/newfold-labs/wp-plugin-crazy-domains/actions/workflows/cypress.yml/badge.svg?branch=main)](https://github.com/newfold-labs/wp-plugin-crazy-domains/actions/workflows/cypress.yml)
[![Build Plugin](https://github.com/newfold-labs/wp-plugin-crazy-domains/actions/workflows/upload-artifact-on-push.yml/badge.svg)](https://github.com/newfold-labs/wp-plugin-crazy-domains/actions/workflows/upload-artifact-on-push.yml)

WordPress plugin that integrates a WordPress site with the Crazy Domains control panel, including performance, security, and
update features.

# Installation

Find the `wp-plugin-crazy-domains.zip` asset for your preferred version at: https://github.com/newfold-labs/wp-plugin-crazy-domains/releases/.

Alternatively, check the updater endpoint for the latest version at: https://hiive.cloud/workers/release-api/plugins/newfold-labs/wp-plugin-crazy-domains, this also includes a download link to the latest zip file or use this link to access the latest download: https://hiive.cloud/workers/release-api/plugins/newfold-labs/wp-plugin-crazy-domains/download/.

# Releasing Updates

This plugin has version number set in 3 distinct places in 2 files:

- the plugin header info (wp-plugin-crazy-domains/wp-plugin-crazy-domains.php line 14) - this is used in the plugin php code.
- the constant CRAZYDOMAINS_PLUGIN_VERSION (wp-plugin-crazy-domains/wp-plugin-crazy-domains.php line 34) - this is used by
  WordPress.
- in the package.json version value (wp-plugin-crazy-domains/package.json line 5) this is used by the build step to place
  the release files within a matching version directory for convenient cache busting. All 3 instances need to be
  incremented in conjuction with new releases via github tagging.
  (In a perfect world, we have a runner increment and/or validate this)
