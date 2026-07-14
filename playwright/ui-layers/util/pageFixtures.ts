import {test as Base, expect } from '@playwright/test';
import {loginpage} from '../Pages/loginpage';
import {customerpage} from '../Pages/customerpage';
import {DeleteCustomerPage} from '../Pages/deleteCustomerPage';
import {dashboardpage} from '../Pages/dashboardpage';
import dotenv from 'dotenv'; 
import { NewAccountPage } from '../Pages/NewAccountpage';
dotenv.config(); 

type MyPageFixtures = {
    loginPage: loginpage;
    customerPage: customerpage;
    deleteCustomerPage: DeleteCustomerPage;
    dashboardPage: dashboardpage;
    NewAccountPage: NewAccountPage;
    //age: number;
};

export const test = Base.extend<MyPageFixtures>({
    //age: async ()=>{
      //  await use(20)

    loginPage: async ({ page }, use) => {
        const lp = new loginpage(page);
        await lp.dologin(process.env.GURU99_USERNAME!, process.env.GURU99_PASSWORD!);
        await use(lp);  
    },
    customerPage: async ({ page }, use) => {
        const cp = new customerpage(page);
        await use(cp);
    },
    deleteCustomerPage: async ({ page }, use) => {
        const dcp = new DeleteCustomerPage(page);
        await use(dcp);
    },
    dashboardPage: async ({ page }, use) => {
        const dp = new dashboardpage(page);
        await use(dp);
    },
    NewAccountPage: async ({ page }, use) => {
        const nap = new NewAccountPage(page);
        await use(nap);
    }
});
export { expect };

