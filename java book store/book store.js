"use strict";
const ps =  require ("prompt-sync");
const prompt = ps();

console.log("Select one of the following:\n1: Add a new book \n2: Print all books ");
console.log("3: Search a book\n4: Edit a book \n5: Delet \n6: Buy a book\n7: Exit \n ");

let choise = prompt('enter your chois :' );
let money = 100 ;
let ii =0;
let i =0;
let B=[i];

while (choise != 7)
{
    switch (choise)

    {
    case '1':
    let ID = prompt('ID of book:' );
    let name = prompt('name of book:' );
    let author = prompt('author of book:' );
    let price = prompt('price of book:' );
    let Quantity = prompt('Quantity of book:' );
    
     B.push([ID,name,author,price,Quantity]);
        ii++;
        break;

     
    case '2':
        print()
        break;

       case '3':
        let sID = prompt('enter ID of book:' );
        let sname = prompt('enter name of book:' );
        let sauthor = prompt('enter author of book:' );
       
            for (let t = 0;t<=ii;t++){
                if (B[t][0]==sID  && B[t][1]== sname && B[t][2]==sauthor ){
                    console.log("is found" );
                   let s=[B[t][0] , B[t][1] , B[t][2],B[t][3],B[t][4]]
                   console.log(s);
                }

           
            }
        
        break;


        case '4':
   
                        edeat();
                    //    ii--;
        break;
        case '5': 
        
        delet();
        break;
        case '6':
            
            money=sold(money);
            break;
    default:
       
        break;
    }

    console.log("Select one of the following:\n1: Add a new book \n2: Print all books ");
    console.log("3: Search a book\n4: Edit a book \n5: Delet \n6: Buy a book\n7: Exit \n ");
    
    choise = prompt('enter your chois :' );

}

function add_book(){
    let name = prompt('name of book:' );
    let ID = prompt('ID of book:' );
    let author = prompt('author of book:' );
    let price = prompt('price of book:' );
    
  B.push([name,ID,author,price]);

  
}

function print(){

    for (let e = 1;e<=ii;e++){
           
        console.log( B[e]);


    }
} 
function  search(sname,sID,sauthor){

    for(let y=0; y<=4;y++){
        for(let i=0; i<=ii;i++){
        console.log( B[i]);
        console.log( B[y]);

}}}

    function  edeat(){

        let R=[];
        let y=0;
        for (let e = 1;e<=ii;e++){
           
            console.log( B[e]);


        }

        let choiseee = prompt('enter ID book you want change :' );
        console.log("What would you want to edit?");
        console.log(" 1. BookID \n 2. name of book \n 3. Author \n 4. price \n 5. Quantity");
        let choisee = prompt('enter your chois :' );

        while (choisee != 7)
        {
            switch (choisee)
        
            {
            case '1':
             
            let IIDD = prompt('new ID' );
                B[choiseee][0]=IIDD;
                
               print();
                break;
        
             
            case '2':
                let nname = prompt('new name of book:' );
                B[choiseee][1]=nname;
                print();
                break;
        
               case '3':
            let aauthor = prompt(' new author of book:' );
            
             B[choiseee][2]= aauthor;
             print();
                break;
        
            case '4':
                let pprice = prompt(' new price of book:' );
                B[choiseee][3]= pprice;
                print();
                break;
            case '5':
             let Quantity = prompt(' new Quantity of book:' );
             B[choiseee][4]= Quantity;
              print();
                    break;
            default:
                console.log( 'ss');
                break;
            }
            break;
    }}
        function delet(){

            let ddelet1 = prompt('enter ID of book you want delet :' );

            for (let t = 1;t<=ii;t++){
                if (B[t][0]==ddelet1)
                {
                 let  h=B[t][0];
                 B.splice([t],1)
                
                   ii--;
                    print();
                  
                   break;

                }
           

        }
   
    }
    

    function sold(money){
        let buy = prompt('enter ID of book you want buy :' );
        let h =100;
        for (let t = 1;t<=ii;t++){
            if (B[t][0]==buy){
             if(B[t][4]>0){
                let ppprice = prompt(' How many books do you want:' );
                if (money>=B[t][3]&&money>=0){ //(money>=B[t][3] ,ppprice<=B[t][4]
                  //  console.log(B[t][3]);
                    if(ppprice<=B[t][4]){

                //    console.log("done");
                    money= money-(B[t][3]*ppprice);
                   //  h= money;
                    B[t][4]= B[t][4] - ppprice;
               //     console.log( B[t][4]);
                //    console.log(money);
                    
                    console.log("*** Details ***");
                    console.log("Name" ,B[t][1] );
                    console.log("price", B[t][3]);
                    console.log("money in your account",money);




                    
                    
                     } 

                       }else{
                      console.log("not enefe money ");
                    
                } 
                  
                 }else{
                    console.log("sold out ");

             } 
             
            }

    }return money;}