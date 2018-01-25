console.log("merje");
for (let i = 0; i < 105; i++) {     
    if (i % 7 == 0) {
        $('.container').append('<div class="item large">'+ i +'</div>');
    } else {
        $('.container').append('<div class="item">'+ i +'</div>'); 
    }
}
