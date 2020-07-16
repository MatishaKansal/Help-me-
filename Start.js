class Start{
    constructor(){
        this.food = createButton("Volunteer For Food");        
        this.ngo = createButton("NGO");
        this.delivery = createButton("Volunteer For Delivery");
        this.greeting = createElement("h1");
    }

    hide(){
        this.food.hide();
        this.ngo.hide();
        this.delivery.hide();
        this.greeting.hide();
    }

    display(){
        this.greeting.html("HELP ME!");
        this.greeting.position(500, 100);
        this.food.position(250, 350);
        this.ngo.position(500, 550);
        this.delivery.position(650, 350);
        this.food.mousePressed(()=>{
            this.food.hide();
            this.ngo.hide();
            this.delivery.hide();
            form3 = new Food();
            form3.display();
        });
        this.ngo.mousePressed(()=>{
            this.food.hide();
            this.ngo.hide();
            this.delivery.hide();
            form1 = new Form();
            form1.display();
        });
        this.delivery.mousePressed(()=>{
            this.food.hide();
            this.ngo.hide();
            this.delivery.hide();
            form2 = new Form();
            form2.display();
        });

    }
}