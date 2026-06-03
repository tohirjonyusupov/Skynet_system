#  SkyNet-DSA Loyihasi - Ma'lumotlar Tuzilmasi va Algoritmlar

##  Loyihani Qanday Ishlantirish?

### Bosqichma-bosqich Demo Qilish:
```bash
node main.js
```

Bu buyruq barcha ma'lumotlar tuzilmasini step-by-step tushuntiradi! ️

---

##  8 Ta Asosiy Ma'lumotlar Tuzilmasi

### 1️ STEK (Stack) - Oxirgi Kirgan Birinchi Chiqadi (LIFO)
```javascript
const Stack = require('./stack/Stack');
const stek = new Stack();

stek.push(10);    //  10 ni qo'shimiz
stek.push(20);    //  20 ni qo'shimiz
console.log(stek.pop());  //  20 chiqadi (oxirgi kirgan)
```
**Qo'llash joyları:** Brauzer back tugmasi, UNDO funksiyasi, recursive funksiyalar

---

### 2️ NAVBAT (Queue) - Birinchi Kirgan Birinchi Chiqadi (FIFO)
```javascript
const Queue = require('./queue/Queue');
const navbat = new Queue();

navbat.enqueue('1-shaxs');    //  Birinchi qatnovchi
navbat.enqueue('2-shaxs');    //  Ikkinchi qatnovchi
console.log(navbat.dequeue()); //  '1-shaxs' chiqadi (birinchi kirgan)
```
**Qo'llash joyları:** Chop qilish navbati, Kasalar qabuli, Bank xizmatlari

---

### 3️ USTUNLIK NAVBATI (Priority Queue)
```javascript
const PriorityQueue = require('./queue/PriorityQueue');
const pq = new PriorityQueue();

pq.enqueue('Bemor A', 3);    // ‍️ Oddiy (3)
pq.enqueue('Bemor B', 1);    //  FAVQULODDA (1) - BIRINCHI OLINADI!
pq.enqueue('Bemor C', 2);    // ️ O'rta (2)
```
**Qo'llash joyları:** Hospital kasallarni qabuli, Task Manager-da muhim ishlarni bosh qilish

---

### 4️ BINDIR QIDIRUV DARAXTI (BST - Binary Search Tree)
```javascript
const BST = require('./tree/BST');
const daraxti = new BST();

daraxti.insert(50);
daraxti.insert(30);
daraxti.insert(70);

console.log(daraxti.inOrder());  // [30, 50, 70] - sort qilingan
console.log(daraxti.search(30)); // true
```
**Qo'llash joyları:** Database indekslar, tezkor qidiruv, file tizimlari

---

### 5️ XESH JADVALI (Hash Table)
```javascript
const HashTable = require('./hashing/HashTable');
const jadvali = new HashTable();

jadvali.set('ism', 'Tohirjon');
jadvali.set('yosh', 22);

console.log(jadvali.get('ism'));   // 'Tohirjon'
console.log(jadvali.keys());       // ['ism', 'yosh']
```
**Qo'llash joyları:** Database, Cache tizimlari, JavaScript Object

---

### 6️ GRAF (Graph)
```javascript
const Graph = require('./graph/Graph');
const graf = new Graph();

graf.addVertex('Toshkent');
graf.addVertex('Xiva');
graf.addEdge('Toshkent', 'Xiva', 4);  // 4 km masofa
```
**Qo'llash joyları:** GPS/Navigatsiya, Social Media (odam bog'lanishlari), Internet topology

---

### 7️ DIJKSTRA ALGORITMI - Eng Qisqa Yo'l
```javascript
const Dijkstra = require('./graph/Dijkstra');

const { distances, previous } = Dijkstra.dijkstraAlgorithm(graf, 'Toshkent');
const yo_l = Dijkstra.getPath(previous, 'Toshkent', 'Farg\'ona');

console.log('Eng qisqa yo\'l:', yo_l);
console.log('Masofa:', distances);
```
**Qo'llash joyları:** Google Maps, Uber/Yandex.Taxi, Drone navigatsiyasi

---

### 8️ PRIM va KRUSKAL - Minimal Tarmaq (MST)
```javascript
const Prim = require('./graph/Prim');
const primNatija = Prim.primMST(graf);

console.log('Jami xarajat:', primNatija.totalWeight);
```
**Qo'llash joyları:**
- Internet tarmaqini minimum xarajat bilan qurish
- Elektr tarqatish tarmaqalari
- Telekommunikatsiya tarmaqalari

---

##  Alohida Komponentlarni Sinovdan O'tkazish

### Stack Test:
```bash
node -e "
const Stack = require('./stack/Stack');
const s = new Stack();
s.push('A'); s.push('B'); s.push('C');
console.log('Stack:', s.items);
console.log('Pop:', s.pop());
"
```

### Queue Test:
```bash
node -e "
const Queue = require('./queue/Queue');
const q = new Queue();
q.enqueue(1); q.enqueue(2); q.enqueue(3);
console.log('Queue:', q.items);
console.log('Dequeue:', q.dequeue());
"
```

### BST Test:
```bash
node -e "
const BST = require('./tree/BST');
const b = new BST();
[50,30,70,20,40].forEach(n => b.insert(n));
console.log('In-order:', b.inOrder());
"
```

---

##  Loyiha Tuzilishi

```
d:\SkyNet-DSA\
├── stack/
│   └── Stack.js              ← Stek (LIFO)
├── queue/
│   ├── Queue.js              ← Navbat (FIFO)
│   └── PriorityQueue.js      ← Ustunlik Navbati
├── tree/
│   └── BST.js                ← Bindir Qidiruv Daraxti
├── hashing/
│   └── HashTable.js          ← Xesh Jadvali
├── graph/
│   ├── Graph.js              ← Graf
│   ├── Dijkstra.js           ← Eng Qisqa Yo'l
│   ├── Prim.js               ← Minimal Tarmaq (1)
│   └── Kruskal.js            ← Minimal Tarmaq (2)
├── main.js                   ← Demo (Bosqichma-bosqich)
└── README_UZ.md              ← Bu fayl (Uzbekcha)
```

---

##  Qaysi Algoritm Qachon Kerak?

| Ma'lumot | Vazifasi | Murakkabligi | Qo'llash |
|---------|---------|-------------|---------|
| **Stack** | Oxirgi qiymati lazim | O(1) | Undo, Call stack |
| **Queue** | Navbat tartibida | O(1) | Printer, Kasalar |
| **Priority Queue** | Muhim ishlar birinchi | O(n) | Priority tasks |
| **BST** | Tezkor qidiruv | O(log n) | Database indexing |
| **Hash Table** | Qiymatni tezkor topish | O(1) | Cache, Objects |
| **Dijkstra** | Eng qisqa yo'l | O(n²) | GPS, Routing |
| **Prim/Kruskal** | Minimum tree | O(n log n) | Network design |

---

##  O'rganish Ketma-ketligi

1.  **Stack** - Eng oddiy, LIFO mantiq
2.  **Queue** - FIFO mantiq
3.  **BST** - Tree tushunchasini bilib olish
4.  **Hash Table** - Key-value ma'lumotlar
5.  **Graph** - Bog'liq ma'lumotlar
6.  **Dijkstra** - Yol topish
7.  **Prim/Kruskal** - Optimal tarmaq

---

##  Qo'shimcha Tavsiyalar

### Fayllarni o'zgartirib ko'ring:
```bash
# Stack-ga yangi metod qo'shing
nano stack/Stack.js

# Yangi algoritmni test qiling
nano main.js
```

### O'z loyihangizga qo'llang:
```javascript
// Masalan, To-Do List uchun Priority Queue
const PriorityQueue = require('./queue/PriorityQueue');
const tasks = new PriorityQueue();

tasks.enqueue('Chay ichish', 3);      // Oddiy
tasks.enqueue('Bug fixlash', 1);      // Muhim!
tasks.enqueue('Dokumentatsiya', 2);   // O'rta
```

---

##  Tugallandi!

Endi siz barcha asosiy data structures va algoritmlarni bilib oldingiz!

Keyingi qadamlar:
- [ ] Dynamic Programming o'rganing
- [ ] Graph traversal (DFS, BFS) o'rganing
- [ ] Sorting Algorithms o'rganing
- [ ] Real loyihada qo'llang!

**Muvaffaqiyotli bo'ling!**
