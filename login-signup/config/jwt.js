const JWT=require('jsonwebtoken')


//function to generate jwt token:
async function generateToken(user){
    const token = await JWT.sign(
        {
            id:user._id,
        },
        'my_secret_key', //will update in env file
        {
            expiresIn:"2h"
        }
    );

        return token;
}

module.exports={generateToken};
