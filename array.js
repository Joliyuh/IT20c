class Array{
    constructor(initialData = []){
        this.data = {};
        this.length = 0;

        for(i=0 ; i < initialData.length; i++){
            this.data[i] = initialData[i];
            this.length++;

        }
    }

    traverse(){
        output = "";

        for(let i=0; i<this.length; i++ ){
            output += this.data[i] + "";
        }
        console.log(output);
    }
    insert(index, data){
        //Correcting statement
        if(index < 0 || index > this.length){
            console.log("Invalid index");
            return;
        }
        // Shifting condition
        for(let i= this.length; i > index; i--){
            this.data[i] = this.data[i-1];
        }
        this.data[index] = data;
        this.length++;

    }
    search(){
        for(let i=0; i < this.length; i++){
            if(this.data[i] === element) return i;

        }
    }
}
//

arr1 = new Array([4,3,2,]);
// arr1.traverse();

// arr2 = new Array([3,2,1]);
// arr2.traverse();
arr1.traverse();
arr1.traverse(0.50);
arr1.traverse(1);
arr1.traverse(50);

