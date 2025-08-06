class Animal {
    speak() {
        console.log("Hewan bersuara...");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Meong~");
    }
}

const c =new Cat();
c.speak();

Konvensi (Pseudo-Encapsulation)
class BankAccount {
    constructor() {
        this._balance = 0;
    }

    deposit(amount) {

        this._balance += amount;
    }

    showBalance() {
        console.log(`Saldo saat ini: ${this._balance}`);
    }
}

const akun = new BankAccount();
akun.deposit(500000);
akun.showBalance();

akun._balance = 9999999;
akun.showBalance();

Encapsulation Asli (Private Field)
class SecuraAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    showBalance() {
        console.log(`Saldo aman: ${this.#balance}`);
    }
}

const akun = new SecuraAccount();
akun.deposit(500);
akun.#balance = 9999;
akun.showBalance();

class Message {
    send() {
        console.log("mengirim pesan umum");
    }
}

class Email extends Message {
    send() {
        console.log("mengirim email ke pengguna");
    }
}

class SMS extends Message {
    send() {
        console.log("mengirim sms ke nomor penerima");
    }
}

const a1 = new Message();
const a2 = new Email();
const a3 = new SMS ();
a1.send();
a2.send();
a3.send();



class User {
    #password;

    constructor(password) {
        this.#password = password;
    }

    checkPassword(input) {
        if (input == this.#password) {
            console.log("Benar");
        } else {
            console.log("Salah")
        }
    }
}

const user1 = new User("Rahasia123");
user1.checkPassword("Rahasia123"); 
user1.checkPassword("salah");     