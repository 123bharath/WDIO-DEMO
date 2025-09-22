const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await browser.saveScreenshot('screenshot.png')
        await browser.takeScreenshot();
        // allure.addAttachment('Failure Screenshot', Buffer.from(screenshot, 'base64'), 'image/png');

        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })
})
// Just commented to check whether the webhooks works after pushing the code to main

//Just commented to check whether the webhooks works after pushing the code to branch and if it fails does it disables
