export const DEFAULT_QUIZ = [
  {
    id: 1,
    question: "Aşağıdakilerden hangisi bir mikrodenetleyicidir?",
    options: ["Direnç", "LED", "Arduino UNO", "Breadboard"],
    answer: 2
  },
  {
    id: 2,
    question: "LED'in uzun bacağı (Anot) hangi kutba bağlanır?",
    options: ["Eksi (-)", "Toprak (GND)", "Artı (+)", "Boş bırakılır"],
    answer: 2
  },
  {
    id: 3,
    question: "Arduino'da dijital pinler hangi değerleri alabilir?",
    options: ["Sadece 0", "0 ve 1 (LOW ve HIGH)", "0'dan 1023'e kadar", "Sadece 1"],
    answer: 1
  },
  {
    id: 4,
    question: "Devrelerde akımı sınırlamak ve elemanları korumak için hangi parça kullanılır?",
    options: ["Kapasitör", "Transistör", "Direnç", "Motor"],
    answer: 2
  },
  {
    id: 5,
    question: "Arduino kodlamasında, bir kez çalışan ve ayarların yapıldığı fonksiyon hangisidir?",
    options: ["loop()", "setup()", "start()", "init()"],
    answer: 1
  },
  {
    id: 6,
    question: "GND (Ground) pininin görevi nedir?",
    options: ["Devreye güç vermek", "Devreyi topraklamak (- kutbu tamamlamak)", "Veri göndermek", "Sensörleri ısıtmak"],
    answer: 1
  },
  {
    id: 7,
    question: "Arduino kodunda delay(1000) komutu ne işe yarar?",
    options: ["Devreyi 1000 saniye durdurur", "Devreyi 1 milisaniye durdurur", "Devreyi 1 saniye bekletir", "Programı sonlandırır"],
    answer: 2
  },
  {
    id: 8,
    question: "Bir pini 'çıkış' olarak ayarlamak için hangi komut kullanılır?",
    options: ["pinMode(pin, OUTPUT);", "pinMode(pin, INPUT);", "digitalWrite(pin, HIGH);", "analogRead(pin);"],
    answer: 0
  },
  {
    id: 9,
    question: "Breadboard (Devre Tahtası) üzerinde dikey delikler birbirine nasıl bağlıdır?",
    options: ["Hiçbiri bağlı değildir", "Kısa devre yaparlar", "İçerden iletkenlerle birbirine bağlıdır", "Sadece güç verilince bağlanırlar"],
    answer: 2
  },
  {
    id: 10,
    question: "Hangisi analog bir sensör örneğidir?",
    options: ["Bas-çek Buton", "Anahtar (Switch)", "Potansiyometre", "Buzzer"],
    answer: 2
  }
];
