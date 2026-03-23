class apiutils
{
    constructor(request){
        this.request = request;
    }
    async gettoken()
    {
        const postresponse =  await request.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
            data:{userEmail: "sathishag2706@gmail.com", userPassword: "Test@123"}})
           expect(postresponse.ok).toBeTruthy();
        const jsonbody = await postresponse.json();
        //console.log(jsonbody);
        const token = jsonbody.token;
        console.log(token);
        return token();
    }
}