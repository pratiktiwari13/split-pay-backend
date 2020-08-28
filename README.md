# Split Pay

# Endpoints 

### 1. POST /users/search/ - Get username for the corresponding email
   1.1. Response Body -  `{username:"some_user"}`

### 2. GET /users/owes - Get all users which the current user owes to
    2.1. Response Body - 
    `[0:{
        username:1,
        amount:1000
        },
    1:{
        username:2,
        amount:1000
    } 
    ]`

### 3. GET /users/expense - Get all personal expenses of the current user
    3.1. Response Body - 
    `[{
        id:1,
        amount:1000,
        isPaid:true,
    },
    {
        id:2,
        amount:2000,
        isPaid:true
    }]`

### 4. GET /users/owed - Get all the users who owe to the current user
    4.1. Response Body - 
    `[{
        user_id:1,
        username:"Gurpreet",
        amount:100
    },
    {
        user_id:2,
        username:Dhiren,
        amount:200
    }]`

### 5. GET /groups/all - Get all the groups the current user is in
    5.1. Response Body - 
    `[{
        id:1,
        members:5,
        name:Group1        
    },
    {
        id:2,
        members:5,
        name:Group2
    }]`

### 6. GET /groups/:id - Get a particular group info
    6.1. Response Body - 
    `{
        name:Group1,
        users:[{
            user_id:1,
            username:Pratik,
            email:pratik@abc.com
        },
        {
            user_id:2,
            username:Guri,
            email:guri@abc.com
        }],
        payment_history:[
        {
            amount:1000,
            description:"Dinner"
        },
        {
            amount:2000,
            description:"Lunch"
        }]
    }
    `
### 7. GET /users/total-expenses - Get total for dashboard
    Response Body
    `{
        owed-total:1000,
        expenses-total:1000,
        owing-total:1000
    }`

/*### 10. GET /expense/id - Get a particular expense
    Response Body
    `{
        amount:1000,
        description:Some description,
        isPaid:true   
    }`*/
    
### 11. GET /auth/login/validate-username      Check if the user exists
    Request Body

    `{input:some_user}`

    Response Body 

    `200 || 404`


### 13. POST /users/expense       Create a personal expense
    
    Request Body
    `{
        amount:1000,
        description:some_description,   // Backend - for group expense, set this description same as group description  
        isPaid:true/false                   //Backend - set false by default for adding all types of expense
    }`

    Response Body 
    `200 || 400`

### 14. POST /users/owes                     Enter if someone is owing something from you 

    Request Body
    `{
        username:gurpreet,             // fire an email to the username if the username is valid and add an expense with the description same as pay @username  
        amount:100
    }`

### 15. POST /groups/expense             Create a group expense           
    Request Body
    `{
        group_id:1,
        amount:1000,
        description:some desc
    }`

    Response Body - `200 || 400` 

### 16. PATCH /users/settle-expenses           Pay partial or complete payment     
    Request Body
    {
        expense_id:1,
        amount:100                               //backend is_owing(only in the case of owing) should be false if the whole payment is done
    }

    Response Body
    `{
        remaining:30
    }`
    Response : `200 || 400`

### 17. POST /groups/create             Create a group with valid usernames
    Request Body
    {
        members:[{username:someuser1},{username:someuser2}],
        name:group_name
    }

### 18. POST users/expense/shared          Fair pay calculation(algo.png on desktop) among the given usernames
    Request Body 
    {
        members:[{username:someuser1},{username:someuser2}],
        initial_paid_amount:250 ---------> current user who hit this end point, isPaid is true
    }
    Response : `200 || 400`

### 19. POST /auth/login                     Backend should sync with user provided tokens
                                                Show enter username only on 200 on isFirst true otherwise validate and continue with user task

    Request Body
    `{
        token:token
    }`

    Response Body
    `Response : `200 || 400``


### 20. POST /auth/logout          Call on sign out
    Response Body
    200 || 400

### 21. PATCH /auth/login/username/set                Set the username for the first time
    Request Body
    `
    {
        username:username
    }
    `
    Response Body
    200 || 400               
