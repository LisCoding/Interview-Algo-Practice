Good afternoon Thej!

ArrayA = [1,5,9,3]
AraayB = [2,8,4,6,10]

output: [1,2,3,4,5,6,8,9,10]


def sorting(a,b, left=0, right=None) {

    c = a+b

    if right == None: 
        right = len(a)-1
        
    if left < right :
        result = partionSort(c, left, right)
        sorting(c, left, result)
        sorting(c, result+1, right)
    
    return c
}

def partition(a, left, right):
    
    pivot = left
    
    while ( left >= right) :
        if (a[left] <= a[pivot]):
            left += 1
        if (a[right >= a[pivot]):
            right -= 1
        
        if (right > left):
            a[pivot],a[right] = a[right], a[pivot]
            left +=1
            right -=1
     
    if ( a[right] < a[pivot]) :
        a[pivot],a[right] = a[right], a[pivot]
    
    return right
    
 ------------------------------------------------------------------------------------------
function sorting(a,b, left=0, right=null){

    c = a + b;
    
    if (right === null ) {
        right = c.length()-1
    }
    
    if (left < right) {
        result = partitionSort(c, left, right);
        sorting(c, left, result);
        sorting(c, result+1, right);
    }
    
    return c
}

function paritionSort(list, left, right){
    let pivot = left;
    
    while(left>= right){
        if(list[left] <= list[pivot]){
            left +=1;
        }
        if(list[right] >= list[pivot]{
            right -=1;
        }
        
        if (right > left) {
            let temp = list[pivot];
            list[pivot] = list[right];
            list[right] = temp;
            
            left +=1;
            right -=1;
        }
    }
    
    if(list[pivot] > list[right]){
        let temp = list[pivot];
        list[pivot] = list[right];
        list[right] = temp;
    }
    
    return right;
    
}










    
   