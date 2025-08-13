SISTEMPERPUSTAKAAN
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    info() {
        console.log(`${this.title} oleh ${this.author}`);
    }
}

class Ebook extends Book {
    #filesize = 0;

    constructor(title, author, filesize) {
        super(title, author);
        this.#filesize = filesize;
    }

        info() {
        console.log(`${this.title} oleh ${this.author}, ukuran file: ${this.#filesize}`);
    }
}

const buku = new Book ("Laskar Pelangi", "Andrea Hirata");
buku.info();

const ebook = new Ebook ("Laskar Pelangi", "Andrea Hirata", "30");
ebook.info();

SISTEMRESERVASI HOTEL
class HotelRoom {
    #isBooked = false;

    bookRoom() {
        this.#isBooked = true;
    }

    ckeckStatus() {
        console.log(this.#isBooked ? "Kamar sudah dipesan" :  "Kamar tersedia");
    }
}

const room = new HotelRoom();
room.ckeckStatus();
room.bookRoom();
room.ckeckStatus();

SISTEME-COMMERCE
class Product {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(`produk: ${this.name}`);
    }
}

class Clothing extends Product {
    constructor(name, size) {
        super(name);
        this.size = size;
    }

    display() {
        console.log(`produk: ${this.name}, ukuran: ${this.size}`);
    }
}

const product = new Product("Laptop");
product.display();

const clothing = new Clothing("Kaos", "L");
clothing.display(); 

SISTEMTIKET KONSER
class Ticket {
    constructor(event, price) {
        this.event = event;
        this.price = price;
    }

    printTicket() {
        console.log(`Event: ${this.event}, Harga: ${this.price}`);
    }
}

class VIPTicket extends Ticket {
    printTicket() {
        console.log(`Event: ${this.event}, Harga ${this.price} (VIP)`);
    }
}

const tiketBiasa = new Ticket("Konser Musik", 80000);
tiketBiasa.printTicket();

const tiketVIP = new VIPTicket("Konser Musik", 150000);
tiketVIP.printTicket();

function buatTiket(event, price) {
    if (price > 100000) {
        return new VIPTicket(event, price);
    } else {
        return new Ticket(event, price);
    }
}

const tiket1 = buatTiket("Konser Jazz", 120000);
tiket1.printTicket();

const tiket2 = buatTiket("Konser Dangdut", 80000);
tiket2.printTicket();

ENERGI HEWAN
class Animal {
    #energy = 0;

    getEnergy() {
        return this.#energy;
    }

    eat(amount) {
        this.#energy += amount;
        if(this.#energy > 100) this.#energy = 100;
        console.log(`Energi sekarang: ${this.#energy}`);
    }

    sleep(time) {
        this.#energy += time * 10;
        if(this.#energy > 100) this.#energy = 100;
        console.log(`Energi setelah tidur: ${this.#energy}`);
    }
}

class Dog extends Animal {
    eat(amount) {
        super.eat(amount * 2);
    }
}

const dog = new Dog();
dog.eat(10);    
dog.sleep(5);

REKENING DENGAN PEMBATASAN PENARIKAN
class Account {
    #balance = 0;

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposit: ${amount}, Saldo: ${this.#balance}`);
        }
    }

    withdraw(amount) {
        if (amount > 0 && this.#balance - amount >= 0) {
            this.#balance -= amount;
            console.log(`Withdraw: ${amount}, Saldo: ${this.#balance}`);
        } else {
            console.log("Penarikan gagal: saldo tidak cukup.");
        }
    }
}

class SavingsAccount extends Account {
    withdraw(amount) {
        const maxWithdraw = this.getBalance() * 0.5;
        if (amount > maxWithdraw) {
            console.log("Penarikan gagal: tidak boleh lebih dari 50% saldo.");
        } else {
            super.withdraw(amount);
        }
    }
}

const tabungan = new SavingsAccount();
tabungan.deposit(1000);      
tabungan.withdraw(600);     
tabungan.withdraw(400);      

KECEPATAN KENDARAAN
class Vehicle {
    #speed = 0;

    getSpeed() {
        return this.#speed;
    }

    accelerate(amount) {
        this.#speed += amount;
        if (this.#speed > 180) this.#speed = 180;
        if (this.#speed < 0) this.#speed = 0;
    }

    brake(amount) {
        this.#speed -= amount;
        if (this.#speed < 0) this.#speed = 0;
    }
}

class Car extends Vehicle {
    accelerate(amount) {
        console.log("Car accelerating");
        super.accelerate(amount);
    }
}

const car = new Car();
car.accelerate(50); 
console.log(`Kecepatan: ${car.getSpeed()}`); 
car.brake(20);
console.log(`Kecepatan: ${car.getSpeed()}`);

MANAJEMEN KARYAWAN REMOTE
class Employee {
    #workingHours = 0;

    getWorkingHours() {
        return this.#workingHours;
    }

    logHours(hours) {
        if (hours > 0) {
            this.#workingHours += hours;
            console.log(`Jam kerja ditambah: ${hours}, Total: ${this.#workingHours}`);
        }
    }
}

class RemoteEmployee extends Employee {
    logHours(hours) {
        if (hours > 8) {
            console.log("Exceeded daily work limit");
        } else {
            super.logHours(hours);
        }
    }
}

const pegawai = new RemoteEmployee();
pegawai.logHours(6);
pegawai.logHours(10); 
console.log(`Total jam kerja: ${pegawai.getWorkingHours()}`);

PESAWAT DAN JET
class Airplane {
    #altitude = 0;

    getAltitude() {
        return this.#altitude;
    }

    ascend(meters) {
        this.#altitude += meters;
        if (this.#altitude > 12000) this.#altitude = 12000;
        if (this.#altitude < 0) this.#altitude = 0;
        console.log(`Ketinggian sekarang: ${this.#altitude} meter`);
    }

    descend(meters) {
        this.#altitude -= meters;
        if (this.#altitude < 0) this.#altitude = 0;
        console.log(`Ketinggian sekarang: ${this.#altitude} meter`);
    }
}

class Jet extends Airplane {
    ascend(meters) {
        super.ascend(meters * 2);
    }
}

const pesawat = new Airplane();
pesawat.ascend(5000);  
pesawat.descend(2000);  

const jet = new Jet();
jet.ascend(4000);      
jet.ascend(3000);     

SISTEM PARKIR OTOMATIS
class ParkingSpot {
    #isOccupied = false;

    isOccupied() {
        return this.#isOccupied;
    }

    occupy() {
        if (!this.#isOccupied) {
            this.#isOccupied = true;
            console.log("Spot occupied.");
        } else {
            console.log("Spot already occupied.");
        }
    }

    vacate() {
        if (this.#isOccupied) {
            this.#isOccupied = false;
            console.log("Spot vacated.");
        } else {
            console.log("Spot already vacant.");
        }
    }
}

class ElectricParkingSpot extends ParkingSpot {
    occupy(carType) {
        if (carType !== "electric") {
            console.log("Only electric cars allowed");
        } else {
            super.occupy();
        }
    }
}

const spotBiasa = new ParkingSpot();
spotBiasa.occupy();
spotBiasa.vacate(); 

const spotListrik = new ElectricParkingSpot();
spotListrik.occupy("diesel");   
spotListrik.occupy("electric");

SISTEMLOGIN APLIKASI
class User {
    #password;

    constructor(password) {
        this.#password = password;
    }

    checkPassword(input) {
        if (input === this.#password) {
            console.log("Benar");
        } else {
            console.log("Salah");
        }
    }
}

const user = new User("rahasia");
user.checkPassword("rahasia"); 
user.checkPassword("salah");  

SISTEM KENDARAAN
class Vehicle {
    move() {
        console.log("Kendaraan bergerak");
    }
}

class Car extends Vehicle {
    move() {
        console.log("Mobil berjalan di jalan raya");
    }
}

class Boat extends Vehicle {
    move() {
        console.log("Perahu berlayar di laut");
    }
}

const kendaraan = new Vehicle();
kendaraan.move(); 

const mobil = new Car();
mobil.move();

const perahu = new Boat();
perahu.move(); 

SISTEM PESANAN MAKANAN
class Order {
    #status = "Pending";

    get status() {
        return this.#status;
    }

    set status(newStatus) {
        if (newStatus === "Delivered" || newStatus === "Cancelled") {
            this.#status = newStatus;
        } else {
            console.log("Status tidak valid. Hanya bisa diubah ke 'Delivered' atau 'Cancelled'.");
        }
    }
}

const pesanan = new Order();
console.log(pesanan.status);
pesanan.status = "Delivered";
console.log(pesanan.status);
pesanan.status = "Processing";
console.log(pesanan.status); 

SISTEM PEMBAYARAN
class Payment {
    #amount;
    constructor(amount) {
        this.#amount = amount;
    }
    process() {
        console.log(`Memproses pembayaran sebesar ${this.#amount}`);
    }
}

class CreditCardPayment extends Payment {
    process() {
        console.log(`Memproses pembayaran kartu kredit sebesar ${this.amount}`);
    }
}

const bayar1 = new Payment(50000);
bayar1.process(); 
const bayarCC = new CreditCardPayment(100000);
bayarCC.process(); 

AKUN PREMIUMBANK
class Account {
    #balance = 0;

    get balance() {
        return this.#balance;
    }

    showBalance() {
        console.log(`Saldo anda adalah: ${this.#balance}`);
    }
}

class PremiumAccount extends Account {
    showBalance() {
        console.log(`Saldo anda adalah: ${this.balance} (Akun Premium)`);
    }
}

const akunBiasa = new Account();
akunBiasa.showBalance(); 
const akunPremium = new PremiumAccount();
akunPremium.showBalance();
