//polymorphism
class Burung {
    constructor (name) {
        this.name = name;
    }

    bersuara() {
        console.log(`${this.name} sedang Cuit cuit`);
    }
}

class Ayam extends Burung {
    bersuara() {
        console.log(`${this.name} sedang Kukuruyuk`);
    }
}

class Bebek extends Burung {
    bersuara() {
        console.log(`${this.name} sedang Cuit cuit Kwek kwek`);
    }
}

const daftarBurung = [new Ayam ("Jago"), new Bebek("Goreng")];

daftarBurung.forEach(burung => {
    burung.bersuara();//polymorphism
});

//Ticproperties Ethods
class Matematika {
    static pi = 3.14159;

    static luasLingkaran(jari) {
        return this.pi * jari * jari;
    }
}

console.log(Matematika.luasLingkaran(7));

//getter dan setter
class Mahasiswa {
    #nama;

    constructor(nama) {
        this.nama = nama;
    }

    get nama() {
        return this.#nama.toUpperCase();
    }

    set nama (value) {
        if (value.length < 3) {
            console.log("Nama terlalu pendek!");
            return;
        }
        this.#nama = value;
    }
}

const mhs = new Mahasiswa("Ari");

console.log(mhs.nama);

mhs.nama = "Li";
mhs.nama = "Putri";
console.log(mhs.nama);