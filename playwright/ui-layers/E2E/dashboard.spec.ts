import { expect, test } from '../util/pageFixtures';

test.describe('dashboard Tests',() =>{

    test.beforeEach(async({loginPage})=>{
        await loginPage;
    })

    test('@dashboard @regression Verify Dashboard Page Title', async({dashboardPage})=>{
        await dashboardPage.pageTitle();
    })

    test('@dashboard @regression Verify Welcome Message', async({dashboardPage})=>{
        await dashboardPage.getwelcomeMessage();
    })

    test('@dashboard @regression Verify Menu Items Count Should Be Fifteen', async({dashboardPage})=>{
        await dashboardPage.getMenuItemsCountShouldBeFiften();
    })
    

})