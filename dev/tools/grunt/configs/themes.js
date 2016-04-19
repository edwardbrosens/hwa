/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

'use strict';

/**
 * Define Themes
 *
 * area: area, one of (frontend|adminhtml|doc),
 * name: theme name in format Vendor/theme-name,
 * locale: locale,
 * files: [
 * 'css/styles-m',
 * 'css/styles-l'
 * ],
 * dsl: dynamic stylesheet language (less|sass)
 *
 */
module.exports = {
    blank: {
        area: 'frontend',
        name: 'Magento/blank',
        locale: 'nl_NL',
        files: [
            'css/styles-m',
            'css/styles-l',
            'css/email',
            'css/email-inline'
        ],
        dsl: 'less'
    },
    // luma: {
    //     area: 'frontend',
    //     name: 'Magento/luma',
    //     locale: 'en_US',
    //     files: [
    //         'css/styles-m',
    //         'css/styles-l'
    //     ],
    //     dsl: 'less'
    // },
    ambacht: {
        area: 'frontend',
        name: 'Venustheme/yume',
        locale: 'nl_NL',
        files: [
           'css/styles-m',
           'css/styles-l',
           'css/bootstrap-tiny',
           'css/stylesheet'
        ],
        dsl: 'less'
    },
    backend: {
        area: 'adminhtml',
        name: 'Magento/backend',
        locale: 'nl_NL',
        files: [
            'css/styles-old',
            'css/styles'
        ],
        dsl: 'less'
    }
};
