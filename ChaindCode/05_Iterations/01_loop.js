// for loop 
for (let index = 0; index < 10; index++) {
    console.log(index);
    
}

// to print table from 1 to 10 

for (let index = 1; index <= 10; index++) {
    
    for (let j = 1; j <= 10; j++) {
        console.log(`${index} * ${j} = ${index*j}`)
        
    }
    
}

let my_Array = ['java', 'c++', 'python', 'flutter']

for (let index = 0; index < my_Array.length; index++) {
    const element = my_Array[index];
    console.log(element)
    
}

// break & continue

for (let index = 1; index <= 5; index++) {
    if(index === 3){
        console.log("3 is found!")
        break;
    }
    console.log(`Value of index is ${index}`)
    
}


for (let index = 1; index <= 5; index++) {
    if(index === 3){
        console.log("3 is found!")
        continue;
    }
    console.log(`Value of index is ${index}`)
    
}