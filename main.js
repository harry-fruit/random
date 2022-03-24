const phrase = "Still got pictures of friends on the wall ♪"

const toSing = (nMusic) => { 
    let response = null;

    switch (nMusic){
        case 1:
             response = "Still got pictures of friends on the wall ♪"
            break;
        case 2:
            response = 'Whatever it gonna takes'
            break;
    }
    return response;
 }

console.log(toSing(1))