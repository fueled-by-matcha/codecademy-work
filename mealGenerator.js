//create menu object
let menu = {
  //add courses property
  _courses: {
    //initialize arrays
    appetizers: [],
    mains: [],
    desserts: []
  },
  //getters and setters
  get appetizers(){
    return;
  },
  set appetizers(appetizerIn){

  },
  get mains(){
    return;
  },
  set mains(mainIn){

  },
  get desserts(){
    return;
  },
  set desserts(dessertIn){

  },
  //getter
  get courses(){
    return{
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  //add new dish to course
  addDishToCourse(courseName, dishName, dishPrice){
    let dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  //get random dish
  getRandomDishFromCourse(courseName){
    let dishes = this._courses[courseName];
    let index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
  //generate a meal
  generateRandomMeal(){
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + main.price + dessert.price;
    return `Today's meal: ${appetizer.name}, ${main.name}, ${dessert.name}.  Total price: ${totalPrice}`;
  }
};
//add dishes for testing
menu.addDishToCourse('appetizers', 'Jalapeno Poppers', 5.99);
menu.addDishToCourse('appetizers', 'Mozzarella Sticks', 7.99);
menu.addDishToCourse('appetizers', 'Sweet Potato Fries', 8.99);
menu.addDishToCourse('mains', 'Lobster', 30.99);
menu.addDishToCourse('mains', 'Chicken Parmesan', 23.99);
menu.addDishToCourse('mains', 'Tortellini Soup', 20.99);
menu.addDishToCourse('desserts', 'Chocolate Mousse', 10.99);
menu.addDishToCourse('desserts', 'Funnel Cake', 8.99);
menu.addDishToCourse('desserts', 'Brownie', 9.99);
//generate meal
let meal = menu.generateRandomMeal();
console.log(meal);
