import{test as Base, expect, APIResponse } from '@playwright/test'
import { tokenGenetationUrl } from '../utility/apiConfig'
import dotenv from 'dotenv'
dotenv.config()
type tokenFixture={
    authToken:string
}

export const test = Base.extend<tokenFixture>({
   authToken: async ({request},use)=>{
        const response=await request.post(tokenGenetationUrl,{
            headers:{"Content-Type":"application/json"},
            data:{
                "username":process.env.GURU99_API_USERNAME,
                "password":process.env.GURU99_API_PASSWORD
            }
        })
    const responseBody = await response.json();
    const token=responseBody.token
    await use(token)
}

})
export {expect,APIResponse}