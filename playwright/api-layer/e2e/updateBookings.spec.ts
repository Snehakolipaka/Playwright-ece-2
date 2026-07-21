import {test, expect, APIResponse} from '../fixtures/generate-token-fixtures'
import {updateBookingApi } from '../services/bookingsApiServices'
import payload from '../utility/payloads/createBookingPayload.json'

test.describe('Update Booking API Tests', ()=>{

    let tokenResponse:APIResponse
    let token:string

    let updateBookingApiResponse:APIResponse

    test.beforeEach(async({request, authToken})=>{
        updateBookingApiResponse= await updateBookingApi(request, payload.createBookingpayload,authToken)
    })  

    test ('status is 200', async({request})=>{
        const responseBody = await updateBookingApiResponse.json()
        console.log(responseBody)
        await expect(updateBookingApiResponse.status()).toBe(200)
    })

    test('response data validation', async()=>{
        const responseBody = await updateBookingApiResponse.json()
        expect(responseBody.firstname).toBe(payload.createBookingpayload.firstname)
        expect(responseBody.lastname).toBe(payload.createBookingpayload.lastname)
    })

})

test.describe('Update Booking API Tests', ()=>{

    test ('invalid token response is 403', async({request})=>{
        const updateBookingApiResponse= await updateBookingApi(request, payload.createBookingpayload,"asdfghjkl")
        await expect(updateBookingApiResponse.status()).toBe(403)
    })

    test ('empty token response is 403', async({request})=>{
        const updateBookingApiResponse= await updateBookingApi(request, payload.createBookingpayload,"")
        await expect(updateBookingApiResponse.status()).toBe(403)
    })
})
