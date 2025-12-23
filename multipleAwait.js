function task1(){
    return new Promise(resolve=>setTimeout(()=>resolve("task 1 done"),1000));
}

function task2(){
    return new Promise(resolve=>setTimeout(()=>resolve("task 2 done"),1000));
}
async function runTask() {
    let t1=await task1()
    console.log(t1);
    
    let t2=await task2()
    console.log(t2);
    
}

runTask()
