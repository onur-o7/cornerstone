__webpack_public_path__ = window.__webpack_public_path__ // eslint-disable-line

import Global from './theme/global'

const noop = null

const pageClasses = {
    account_orderstatus: noop,
    account_order: noop,
    account_addressbook: noop,
    shippingaddressform: noop,
    account_new_return: noop,
    'add-wishlist': () => noop,
    account_recentitems: noop,
    account_downloaditem: noop,
    editaccount: noop,
    account_inbox: noop,
    account_saved_return: noop,
    account_returns: noop,
    account_paymentmethods: noop,
    account_addpaymentmethod: noop,
    account_editpaymentmethod: noop,
    login: noop,
    createaccount_thanks: noop,
    createaccount: noop,
    getnewpassword: noop,
    forgotpassword: noop,
    blog: noop,
    blog_post: noop,
    brand: noop,
    brands: noop,
    cart: noop,
    category: noop,
    compare: noop,
    page_contact_form: noop,
    error: noop,
    404: noop,
    giftcertificates: noop,
    giftcertificates_balance: noop,
    giftcertificates_redeem: noop,
    default: noop,
    page: noop,
    product: noop,
    amp_product_options: noop,
    search: noop,
    rss: noop,
    sitemap: noop,
    newsletter_subscribe: noop,
    wishlist: noop,
    wishlists: noop,
}

const customClasses = {}

/**
 * This function gets added to the global window and then called
 * on page load with the current template loaded and JS Context passed in
 * @param pageType String
 * @param contextJSON
 * @returns {*}
 */
window.stencilBootstrap = function stencilBootstrap(
    pageType,
    contextJSON = null,
    loadGlobal = true
) {
    const context = JSON.parse(contextJSON || '{}')

    return {
        load() {
            // Load globals
            if (loadGlobal) {
                Global.load(context)
            }

            const importPromises = []

            // Find the appropriate page loader based on pageType
            const pageClassImporter = pageClasses[pageType]
            if (typeof pageClassImporter === 'function') {
                importPromises.push(pageClassImporter())
            }

            // See if there is a page class default for a custom template
            const customTemplateImporter = customClasses[context.template]
            if (typeof customTemplateImporter === 'function') {
                importPromises.push(customTemplateImporter())
            }

            // Wait for imports to resolve, then call load() on them
            Promise.all(importPromises).then((imports) => {
                imports.forEach((imported) => {
                    imported.default.load(context)
                })
            })
        },
    }
}
