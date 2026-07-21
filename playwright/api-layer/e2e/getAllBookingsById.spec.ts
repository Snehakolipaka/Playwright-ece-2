import {test, expect, APIResponse} from '@playwright/test'
import { getAllBooksAPi } from '../services/bookingsApiServices'
import { getAllBooksByAPi } from '../services/bookingsApiServices'

test.describe('Get All Books API Tests', ()=>{

    let responseAllBooksApi:APIResponse
    let response:any

    test.beforeEach(async({request})=>{
        responseAllBooksApi=await getAllBooksAPi(request)
        const responseBodyAllBooksApi= await responseAllBooksApi.json()
        const id=responseBodyAllBooksApi[1].bookingid
        console.log(`Id from get API:&{id}`)
        response=await getAllBooksByAPi(request, id)
         
    })  

    test ('status is 200', async({request})=>{
        const responseBody = await response.json()
        console.log(responseBody)
        await expect(response.status()).toBe(200)
    })

    test ('schema bookingid validation', async({request})=>{
        const responseBody = await response.json()
        console.log(responseBody)
        await expect(responseBody).toHaveProperty("firstname")
        await expect(responseBody).toHaveProperty("lastname")
        await expect(responseBody).toHaveProperty("totalprice")
        await expect(responseBody).toHaveProperty("depositpaid")
        await expect(responseBody).toHaveProperty("bookingdates")
        await expect(responseBody.bookingdates).toHaveProperty("checkin")
        await expect(responseBody.bookingdates).toHaveProperty("checkout")
})
})

test.describe('Get All Books API Invalid Tests',()=>{
    test('status code is 404 for Id:0', async({request})=>{
        const response = await getAllBooksByAPi(request,0)
        expect(response.status()).toBe(404)
    })

test('status code is 404 for Id negative: -29', async({request})=>{
    const response = await getAllBooksByAPi(request, -20)
    expect(response.status()).toBe(404)
})

test('status code is 400 for special char $%#%^&', async({request})=>{
    const response = await getAllBooksByAPi(request,"$%#%^&")
    expect(response.status()).toBe(400)
})
})

