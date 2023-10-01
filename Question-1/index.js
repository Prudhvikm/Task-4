
// Do the below programs in anonymous function 

//A.Print odd numbers in an array 

    let a = [1,2,3,4,5,6,8,7,9,10];
    
    for (let i=0;i<a.length;i++) {
        
        if (a[i] % 2 !=0){
        
            console.log(a[i]);
         }
    }


//B.Convert all the strings to title caps in a string array

    var B = "Welcome to guvi Full stack developer program"
        
    .split(' ') .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
   
    console.log(B);


//C.Sum of all numbers in an array

    let C = [5,4,3,2,1];
   
    let Sum=0;
      
    for (let i=0;i<C.length;i++){
        
    Sum+=a[i];}
        
     console.log(Sum);


//D.Return all the prime numbers in an array


    let D = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let primeNums = D.filter(num => {
  
    if (num <= 1) return false;
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
        
        if (num % i === 0) return false;
    }
 
    return true;
    });

        console.log(primeNums);

//E.Return all the palindromes in an array
  
        
    let E = ["civic", "guvi", "radar", "student"];
       
    let palindromes = E.filter(str => {
     
    let reversed = str.split("").reverse().join("");
    
     return str === reversed;
    
    });
    
    console.log(palindromes);


//F.Return median of two sorted arrays of same size


    const med= (a1, a2) => {
    
        let a3 = [...a1, ...a2].sort((a1,a2) =>a1-a2);
    
        const half = a3.length / 2 | 0;
    
        if (a3.length % 2) return a3[half];
    
        return (a3[half] + a3[half-1])/2;
    }
        let a1=[2,5,9,6];
        
        let a2=[3,6,10,3];
        
        console.log(med(a1,a2));   


//G.Remove duplicates from an array

    let G=[7,2,9,4,5,6,9,2,5];
    
    let Duplicate = [...new Set(G)];
    
    console.log(Duplicate);      

  
//H.Rotate an array by k times
    
    const rotate =(nums,k)=>{
    
        for (let i=0;i<k;i++) {
        
            nums.unshift(nums.pop());
    }
    
    return nums;
    }
        
    let nums=[5,6,7,8,9];
  
      let k=[2];
    
      console.log(rotate(nums,k));  





  
