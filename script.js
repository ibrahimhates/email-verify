document.addEventListener("DOMContentLoaded", async () => {

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const email = urlParams.get('email');
    const apiUrl = `https://localhost:7020/api/v1/Auth/verifyEmail?token=${token}&email=${email}`;
    
    const successDiv = document.getElementById('success');
    const warningDiv = document.getElementById('warning');
    const dangerDiv = document.getElementById('danger');
    
    await axios.get(apiUrl)
        .then(res => {
            successDiv.style.display = 'block'
        }).catch(err => {
            const data = err.response.data;
            if(data.statusCode === 409)
            {
                warningDiv.style.display = 'block'
            }
            else{
                dangerDiv.style.display = 'block'   
                console.log("Danger")
            }
        })
});
