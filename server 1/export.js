export const a = 4;
export const b = 8;
export function hello() {
    console.log("HEllo everyone how are you");
}

export function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
