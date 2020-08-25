const limiter = (input:string, maxsize:number) =>  {
    if(input.length <= 2) return input;
    var out = input.substring(0,(maxsize || 2 ))+"...";
    return out;        
}

// class Limiter {

//     public static limiter(): Function  {
//         return (input:string, maxsize:number) =>  {
//             if(input.length <= 2) return input;
//             var out = input.substring(0,(maxsize || 2 ))+"...";
//             return out;        
//         }
//     }

// }

export default limiter;