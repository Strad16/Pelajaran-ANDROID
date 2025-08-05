class Kucing {
  String nama;
  String warna;
  late String nama;
  late String warna;
  Kucing(this.nama, this.warna); //field formal parameter
  Kucing(String nama, String warna) {
    this.nama = nama;
    this.warna = warna;
  }


  void perkenalan() {
  print('Nama kucingku $nama, warnanya $warna');
}

}
void main() {
  var kucingA = Kucing('Kitty', 'Putih');
  kucingA.perkenalan();
}

import 'dart:ffi';

class Hewan {
  void Makan() {
    print('Hewan sedang makan');
  }
}

class Kucing extends Hewan {
  void suara() {
    print('Meong!');
  }
}

void main () {
  var kitty = Kucing();
  kitty.Makan();
  kitty.suara();
}

mixin Terbang {
  void terbang() {
    print('aku bisa terbang!');
  }
}

class Burung with Terbang {}

void main() {
  var b = Burung();
  b.terbang();
}

import 'dart:math';

class Hewan {
  void hidup() {
    print('Hewan hidup');
  }
}

mixin Terbang {
  void terbang() {
    print('Terbang di langit');
  }
}

class Elang extends Hewan with Terbang {}

void main() {
  var e = Elang();
  e.hidup();
  e.terbang();
}

enum Cuaca { cerag, hujan, berawan}

void main() {
  var hariIni = Cuaca.hujan;

  if (hariIni == Cuaca.hujan) {
    print('Bawa payung!');
  }
}

enum StatusPengiriman { belumDikirim, dikirim, diterima }

void main() {
  StatusPengiriman status = StatusPengiriman.dikirim;

  switch (status) {
    case StatusPengiriman.belumDikirim:
      print('Paketmu belum dikirim.');
      break;
    case StatusPengiriman.dikirim:
      print('Paket sedang dalam perjalanan.');
      break;
    case StatusPengiriman.diterima:
      print('paket sampai');
      break;
  }
}

class Siswa {
  String nama;
  Siswa(this.nama);
}

extension SapaSiswa on Siswa {
  void sapa() {
    print('Halo, saya $nama, siswa RPL!');
  }
}

void main(){
  var siswa = Siswa('Ali');
  siswa.sapa();
}

class Produk {
  String name;
  String Harga;

  Produk(this.name, this.Harga);

  void info() {
    print('Produk:$name, Harga:$Harga');
  }
}

void main() {
  var produkA = Produk('Laptop', '5.000.0000');
  produkA.info();
}

class Kendaraan {
  void bergerak() {
    print('kendaraan sedang bergerak.');
  }
}

class Sepeda extends Kendaraan {
  // Tidak menambahkan merhod apapun
}

void main() {
  var sepeda = Sepeda();
  sepeda.bergerak();
}

enum JenjangPendidikan {sd, smp, sma, kuliah}

void main() {
  JenjangPendidikan status = JenjangPendidikan.sd;

  switch (status) {
    case JenjangPendidikan.sd:
      print('Anak.');
      break;
    case JenjangPendidikan.smp:
      print('Bocah.');
      break;
    case JenjangPendidikan.sma:
      print('Remaja.');
      break;
    case JenjangPendidikan.kuliah:
     print('Dewasa.');
     break;
  }
}