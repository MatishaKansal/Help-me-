class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Submit");
        this.address = createInput("Address");
        this.phone = createInput("Phone Number");
        this.title = createElement("h2");
        this.greeting = createElement("h2");

    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.address.hide();
        this.phone.hide();
    }

    display(){
        this.title.html("Welcome to HELP ME");
        this.title.position(300, 100);
        this.greeting.html("Thank you for helping us");
        this.greeting.position(300, 150);
        this.input.position(300, 250);
        this.address.position(300, 300);
        this.phone.position(300, 350);
        this.button.position(350, 400);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.address.hide();
            this.phone.hide();
            this.greeting.hide();
            this.title.hide();
            order = new Order();
            order.display();
        });
    }
}