const express = require('express')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const { exec } = require("child_process");
var fs = require('fs');


app.post('/', (req,res)=>{
    let obj = req.body
    console.log(req.body);
    let ccode = `
            #include <iostream>
            #include <time.h>
            using namespace std;
            void Pause()
            {
            char a;
            cout<<endl;
            cout << "Enter quit to exit....."<<endl;
            cin>>a;
            return;
            }
            int main()
            {
                int EXP_TIME = ${obj.date};
                time_t timeNow;
                timeNow = time(NULL);
                if(timeNow>EXP_TIME) cout << "${obj.data}";
                else cout<< "Please Open file after(yyyy/mm/dd)"<<endl<< "${obj.date}";
                Pause();
                return 0;
            }
            `
    fs.appendFile('cplusplus.cpp',ccode,(err)=>{
        if(err) throw err
        exec("x86_64-w64-mingw32-g++ cplusplus.cpp", (error,stdout,stderr)=>{
            if(error) console.log(error);
            fs.unlink('./cplusplus.cpp',()=>{
                res.status(200).download("./cplusplus.cpp");
                res.status(200).download("./a.exe");
                
            })
        })
    })
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("Running on port 3300")
})