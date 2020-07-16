class Order{
    constructor(){
        this.order = createElement("h2");
        this.item = createInput("Item");
        this.timmings = createElement("h3");
        this.time = createInput("Please enter the time here");
        this.place = createInput("Please enter the place here");
        this.number = createInput("Please enter the item number")
        this.submit = createButton("Submit");
    }

    hide(){
        this.order.hide();
        this.item.hide();
        this.timmings.hide();
        this.time.hide();
        this.place.hide();
        this.number.hide();
        this.submit.hide();
    }

    display(){
        this.order.html("ORDER FOR ");
        this.order.position(500, 200);
        this.item.position(650, 220);
        this.timmings.html("TIMMINGS:-")
        this.timmings.position(100, 300);
        this.time.position(100, 400);
        this.place.position(100, 450);
        this.number.position(100, 500);
        this.submit.position(400, 600);
        
    }
}