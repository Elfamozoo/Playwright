import { Page } from "@playwright/test";


export class SignInPage {
    constructor(page) {
        this.page = page;
    }
    async SignInPage() {
        await this.page.click('#ap_email');
        await this.page.fill('#ap_email', 'damien.automatisation@gmail.com');
        await this.page.click('#continue');
        await this.page.click('#ap_password');
        await this.page.fill('#ap_password', 'Aa123456!');
        await this.page.click('#signInSubmit');
    }
}