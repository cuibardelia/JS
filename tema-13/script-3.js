function show(message)
{
    $('#container').html($('#container').html() + '<br>' + message);
}

var elements = ['red', 'green', 'Red', 'orange', 'blue', 'ORANGE', 'green', 'yellow'];
var numbers = [325, 3256, 1, 22, 221, 1, 3256, 562, 88, 256, 562];

//varianta cu sortare
function deleteDuplicates (arr)
{
    arr = arr.map(item => item.toString().toLowerCase());
    arr = arr.sort();

    var newLength = arr.length;
    console.log(newLength);

    for(var i = 0; i < newLength; i++) {
        if(arr[i] == arr[i+1]) {
            newLength--;
            arr.splice(i+1, 1);
        }
    }
    return arr;
}

//varianta FARA sortare
function deleteDuplicatesNoSort(arr)
{
    arr = arr.map(item => item.toString().toLowerCase());
    newLength = arr.length;

    for (var i = 0; i < newLength-1; i++) {

        for (var j = i+1; j < newLength; j++) {

            console.log(arr[i] +' cu ' + arr[j]);

            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                console.log('stergere ' + arr);
                j--;
                newLength--;
            }
        }
    }
    return arr;
}

show('Array initial: ' + elements);

newElements = deleteDuplicates(elements);
show('Array prelucrat conform cerintelor: ' + newElements);
newElementsNoSort = deleteDuplicatesNoSort(elements);
show('Array prelucrat conform cerintelor (fara sortare): ' + newElementsNoSort);

show('<br> Array initial: ' + numbers);

newNumbers = deleteDuplicates(numbers);
show('Array prelucrat conform cerintelor: ' + newNumbers);





