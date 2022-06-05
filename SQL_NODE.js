
/*

    Link Node JS Docs ::  https://nodejs.dev/learn

res.send("Created Success");
res.status(200);
res.status(statusCode).json();
res.status(200).send('New User Added Success... ');
 

  -------------------------
         CASE STYLES 
  -------------------------
       * camelCase
       * PascalCase
       * snake_case
       * kebab-case  


  ------------------------------
       CURRENT DATE & TIME 
   ------------------------------      
        let currTime = new Date(Date.now());

        currTime.toDateString();        // 'Fri Jan 28 2022'
        currTime.toLocaleTimeString()   // '12:24:57 PM'
        currTime.toLocaleDateString();  // '1/28/2022'





if (condition)
   throw new Error("Missing Field");

 Both req and res are made available to us by the Express framework
 fs Module  --> Provides functionality to access and interact with the file system.

 
    -------------------- ||   javascript Tweeks   || --------------------

 const text = '["Ford", "BMW", "Audi", "Fiat"]';    --->   JSON.parse() to convert text/string into a JavaScript Array / Object
 const myArr = JSON.parse(text);

 var params = JSON.parse(JSON.stringify(defaultParams));

 JSON.stringify(arr / obj)       -->   When data is sent to a server it must be sent as a STRING. 
                                       JSON.stringify() method converts JavaScript data to a JSON-formatted string.
                                        
 data.image?.trim() || defaultBannerImage

  // APPEND FIELDS IN OBJECT 
  _____________________________

     var person = { name: 'Curl', age: 23 };
 
        person.sex = 'Female';
        person['sex'] = 'Female';

   Spread Operator :    
             var prop = { sex: 'Female' };   
             var newObj = {...person, ...prop};
 

   const array = [1, 2, 3, 4];

const map = array.map((x, index) => {
  console.log(index);
  return x + index;
});


   -------------------- ||   Async - Await Function  || --------------------
  let hello = async function() { return "Hello" };
  hello();

  let hello = async () => "Hello";

  ASYNC - AWAIT  ==>  await keyword tells the function to "WAIT" until its Promise resolves before executing the next line.




    -------------------- ||        MULTER         || --------------------
   Multer : Adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, 
               the file or files object contains the files uploaded via the form.

               enctype="multipart/form-data" in your form.


    # router.post('/upload',  multerUpload.array('image'), imageUploadController);

    # app.post('/upload', upload.single('avatar'), () => {} ) 

    # app.post('/upload', upload.array('photos', 12),  () => {} )      //  Can only upload up to 12 files - LIMIT

    # const Multiple = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
       app.post('/upload', Multiple, () => {} )




   sqlQuery = `CREATE TABLE Hotel_Images ( imageId VARCHAR(255) NOT NULL, 
                                                abc VARCHAR(255) NOT NULL,
                                                imageUrl VARCHAR(255) NOT NULL,
                                                CONSTRAINT roomImage_Pk PRIMARY KEY(imageId) ,
                                                CONSTRAINT roomImage_Fk FOREIGN KEY(abc) REFERENCES Room(roomId) )`;     //  means abc in this TableB ==  roomId in TableA

   # MYSQL converts BOOLEAN / BOOL datatype into TINYINT , thus it will take only 1 -> True   &   0 -> False.     
   
   


*/