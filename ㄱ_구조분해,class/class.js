//클래스
class Cat{
    //생성자
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //function 키워드 안써도됨
    mew(){
        console.log('야옹')
    }

    eat(){
        console.log('먹이를 먹음')
    }
    test(){
        this.mew() //클래스 내에서 메소드를 쓸때 this를 써야됨
    }

    test1(){
        console.log(`고양이 이름은 ${this.name}, 나이는 ${this.age}`) //클래스 내에서 변수 가져올때도 this
    }
}

//인스턴스를 생성
let cat1 = new Cat('kdb',12)
cat1.mew()
cat1.eat()
cat1.test()
cat1.test1()

//상속

//부모클래스
class Product{
    // name='';
    // price=0; 선언은 생략해도됨
    
    constructor(name,price){ //두개는 클래스 만들때 기본적으로 만들음
        this.name=name;
        this.price=price;
    }

    getPrice(){ //어떤 값을 가져올때
        return this.price + '만원'
    }

    setPrice(price){ //외부에서 price값을 변경해서 쓸수있게
        this.price=price
    }
}

//자식 클래스
class TV extends Product{ //부모한테 상속받음 상속받을때 키워드 extends 부모 클래스명
    constructor(name, price, weight){
        super(name, price) //부모한테 가져올때 키워드 super!
        this.weight = weight //자식에서 추가한것은 constructor
    }

        getPrice(){ //어떤 값을 가져올때
        return this.price + '만원'
    }
        getWeight(){
            return this.weight 
        }
}

const tv1 = new TV('samsung TV', 200, 1000)
console.log(tv1)
console.log(tv1.getPrice()) //부모한테 상속받아서 쓸수있음
tv1.setPrice(150) //setPrice 넣어서 값 변경가능
console.log(tv1.getPrice())
tv1.setPrice(2000)
console.log(tv1.getPrice())
console.log(tv1.getWeight())

// const prod1 = new Product('LG TV' ,300)
// console.log(prod1)
// console.log(prod1.getWeight())







