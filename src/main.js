const mul = (x, y) => {
  if(x<0 || y<0){
    return "Error";
  }
  else{
    return x * y ;
  }

}


const updateWithMul = async (event) => {
    
    const i = parseInt(document.querySelector('#lengthvalue').value);
    const j = parseInt(document.querySelector('#breadthvalue').value);
    const ans = parseInt(mul(i, j));
    document.querySelector('#rectanglevalue').innerHTML = `Area of Rectangle: ${ans}`;
  
}

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'btn') { updateWithMul(event); }
});



// fetch information
const getImage = async () => {
    try {
        const response = await fetch('http://www.splashbase.co/api/v1/images/random');
        const obj = await response.json();
        console.log(`FETCHED. Response JSON ${obj}`);
        const imag = obj.url || 'No Image for you.';
        return imag;
    } catch (error) 
    { 
      console.error(error);
     }
}
const updateWithImage = async (event) => {
    try {
        document.querySelector('#imgarea').src = '';
        const answer = await getImage();
        document.querySelector('#imgarea').src = answer;
    } catch (error) { 
      console.error(error);
     }
}
document.addEventListener('click', event => {
    if (event.target && event.target.id === 'ajaxbtn') { 
      updateWithImage(event);
     }
})


