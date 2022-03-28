let users=[
    {
         name :'eliav elmaliah',
         age : 23,
         kids : [
             {
             namek : 'eli',
             age : 23
             },
             {
             namek : 'moshe',
             age : 14
            },
         ]
    },
    {
         name : 'hen gabay',
         age : 25,
         kids : [
            {
            namek : 'haim',
            age : 28
            },
            {
            namek : 'edi',
            age : 6
           },
        ]
    },
    {  
         name : 'shalom elmaliah',
         age : 52,
         kids : [
            {
            namek : 'ron',
            age : 3
            },
            {
            namek : 'ariel',
            age : 19
           },
        ]
    },
    { 
         name : 'iris elmaliah',
         age : 47,
         kids : [
            {
            namek : 'raz',
            age : '16'
            },
            {
            namek : 'rotem',
            age : 14
           },
        ]
    }
 ];
 console.log(`name = ${users[3].kids[1].namek}\nage = ${users[3].kids[1].age}`)