// FizzBuzz

// サンプル: "1" という文字列を出力
console.log("1");

// サンプル: "FizzBuzz" という文字列を出力
// (process.stdout.write で改行なしの出力ができる)
process.stdout.write("Fizz");
process.stdout.write("Buzz");
console.log();

function fizzbuzz(){
    for(x=1; x<=15; x++){
        if(x%3 === 0 && x%5 !== 0){
            console.log('Fizz');
        }else if (x%5 === 0 && x%3 !== 0){
            console.log("Buzz");
        }else if (x%3 === 0 && x%5 === 0){
            console.log('FizzBuzz');
        }else{
            console.log(x);
        }
    }
}
fizzbuzz();
