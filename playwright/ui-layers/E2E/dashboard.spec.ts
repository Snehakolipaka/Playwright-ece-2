import { expect, test } from '../util/pageFixtures';

test.describe('dashboard Tests',() =>{

    test.beforeEach(async({loginPage})=>{
        loginPage.dologin('mngr663722','aruqYbA');
    })

    test('Verify Dashboard Page Title', async({dashboardPage})=>{
        await dashboardPage.pageTitle();
    })

    test('Verify Welcome Message', async({dashboardPage})=>{
        await dashboardPage.getwelcomeMessage();
    })

    test('Verify Menu Items Count Should Be Fifteen', async({dashboardPage})=>{
        await dashboardPage.getMenuItemsCountShouldBeFiften();
    })
    

})