const sansa = {
    name: "Sansa Stark",
    parents: ["Catelyn", "Eddard"],
    printParents: function (){
        console.log(this.parents)
    }
}

const catelyn = {
    name: "Eddard Stark",
    parents: ["Rickard Stark", "Lyandra Stark"],
    printParents: function (){
        console.log(this.parents)
    }
}

const lyandra = {
    name: "Lyandra Stark",
    parents: [],
    printParents: function(){
        console.log(this.parents)
    }
}

sansa.printParents()
catelyn.printParents()
lyandra.printParents()