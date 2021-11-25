const dogimg = document.querySelector('#dogimg');
const dogbtn = document.querySelector('#dogbtn')
// fetch('https://dog.ceo/api/breeds/image/random').then((function(res){console.log(res.json())})).then(function(hello){console.log(hello)});

const generateimage = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    dogimg.src = data.message;    
}


// const generateimage = () => {
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then((res)=>{console.log(res.json())})
//     .then((data)=>{
//         console.log(data);
//         dogimg.src="${data.message}"
//     })
//     .catch((error)=>{console.log(error);})

// }


dogbtn.addEventListener('click', generateimage)