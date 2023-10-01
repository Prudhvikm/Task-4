//A.Print odd numbers in an array
    
    const odd=()=>{
    
        let a=[1,2,3,5,8,7,9,10,11];
    
        for (let i=0;i<a.length;i++){
    
            if (a[i]%2!=0){
    
                console.log(a[i]);
    
            }
    }
    };
        odd();


//B.Convert all the strings to title caps in a string array

    const cap = () => {
        
        let a="hi all to guvi students"
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    
        console.log(a);
    }
    cap();        

//D.Return all the prime numbers in an array

const primenumber=() => {
    
        var arr=[1,2,3,4,5,6,7];
        
        var a=[];
        
        const prime= function() {
        
        for(var P of arr){
        
        var b=0;
   
        for(var i=2;i<=P/2;i++){ 
    
        if(P%i==0){ 
    
        b=1;
    
        break;
    }
    }
         if(b==0){
          a.push(P)
    }
    }
         return a
    
        }(arr)
            console.log(prime);
    }
                    primenumber();    


//E.Return all the palindromes in an array
    
    const palindrome=()=>{
    
    var a=["rotor","level","world","refer"]
    
    for(i=0;i<a.length;i++)
    {
        var b=a[i].split("").reverse().join("")
        if(a[i]==b)
        console.log(a[i])
    }}
    
    palindrome()                    