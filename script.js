const addBtn = document.getElementById('addBrickBtn');

addBtn.addEventListener('click', function () {
    const brickSize = document.getElementById('sizeInput').value;
    const brickContainer = document.getElementById('brickContainer');

    let brick = document.createElement('div');
    brick.innerHTML = brickSize;
    brick.classList.add('brick');
    brick.classList.add('size' + brickSize);
    brick.addEventListener('click', function(event){
        event.target.remove();
    });


    brickContainer.append(brick);
});

