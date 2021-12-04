class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log('Name', this.name);
    }

    sayAge() {
        console.log('Age', this.age);
    }
}

const gendalf = new Human('Gendalf', 666);

gendalf.sayName();
gendalf.sayAge();

export const a = 1;
export const b = 5;

const c = a + b;
console.log(c);

const z = [1, [2, 3], [4, [5]]].flat(2);
console.log(z);
