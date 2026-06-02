const Stack = require('./stack/Stack');
const Queue = require('./queue/Queue');
const PriorityQueue = require('./queue/PriorityQueue');
const BST = require('./tree/BST');
const HashTable = require('./hashing/HashTable');
const Graph = require('./graph/Graph');
const Dijkstra = require('./graph/Dijkstra');
const Prim = require('./graph/Prim');
const Kruskal = require('./graph/Kruskal');

function pause(ms = 2000) {
return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
console.log('\n╔════════════════════════════════════════════════════════╗');
console.log('║   MA\'LUMOTLAR TUZILMASI VA ALGORITMLAR DEMO      ║');
console.log('╚════════════════════════════════════════════════════════╝\n');

// STACK DEMO
console.log('\n 1️ STEK (STACK) - Oxirgi Kirgan Birinchi Chiqadi (LIFO)');
console.log('─────────────────────────────────────────────────────');
const stack = new Stack();
console.log(' 10 sonini stekga qo\'shimiz...');
stack.push(10);
await pause(1000);

console.log(' 20 sonini stekga qo\'shimiz...');
stack.push(20);
await pause(1000);

console.log(' 30 sonini stekga qo\'shimiz...');
stack.push(30);
await pause(1000);

console.log(' Stekda nima bor:');
stack.print();
await pause(1500);

console.log(' Stekdan chiqaramiz (pop):');
console.log('    Chiqgan qiymat:', stack.pop());
await pause(1000);

console.log(' Stekda yuqoridagi qiymat (peek):');
console.log('    Top qiymat:', stack.peek());
await pause(2000);

// QUEUE DEMO
console.log('\n\n 2️ NAVBAT (QUEUE) - Birinchi Kirgan Birinchi Chiqadi (FIFO)');
console.log('─────────────────────────────────────────────────────');
const queue = new Queue();
console.log(' Birinchi shaxs navbatga turadi (1)...');
queue.enqueue('1-shaxs');
await pause(1000);

console.log(' Ikkinchi shaxs navbatga turadi (2)...');
queue.enqueue('2-shaxs');
await pause(1000);

console.log(' Uchinchi shaxs navbatga turadi (3)...');
queue.enqueue('3-shaxs');
await pause(1000);

console.log(' Navbat:', queue.items);
await pause(1500);

console.log(' Birinchi qatnovchi chiqadi (dequeue):');
console.log('   ', queue.dequeue());
await pause(1000);

console.log(' Keyingi qatnovchi kim:', queue.front());
await pause(2000);

// PRIORITY QUEUE DEMO
console.log('\n\n 3️ USTUNLIK NAVBATI (PRIORITY QUEUE)');
console.log('─────────────────────────────────────────────────────');
const ustunlik_navbati = new PriorityQueue();
console.log('‍️ Yolovchi A (Ustunlik: 3 - Oddiy)');
ustunlik_navbati.enqueue('Bemor A', 3);
await pause(1000);

console.log(' Yolovchi B (Ustunlik: 1 - FAVQULODDA!!!)');
ustunlik_navbati.enqueue('Bemor B', 1);
await pause(1000);

console.log('️ Yolovchi C (Ustunlik: 2 - O\'rta)');
ustunlik_navbati.enqueue('Yolovchi C', 2);
await pause(1000);

console.log(' Yolovchi navbati (ustunlik bo\'yicha):\n   ');
ustunlik_navbati.print();
await pause(2000);

// BST DEMO
console.log('\n\n 4️ BINDIR QIDIRUV DARAXTI (BST)');
console.log('─────────────────────────────────────────────────────');
const tree = new BST();
const raqamlar = [50, 30, 70, 20, 40, 60, 80];

for (let raqam of raqamlar) {
console.log(` ${raqam} sonini treega joylashtirish...`);
tree.insert(raqam);
await pause(800);
}

console.log('\n In-Order:', tree.inOrder());
await pause(1500);

console.log(' Pre-Order:', tree.preOrder());
await pause(1500);

console.log(' Post-Order:', tree.postOrder());
await pause(1500);

console.log(' 40 raqami treeda bormi? ' + (tree.search(40) ? ' HA' : ' YO\'Q'));
await pause(1000);

console.log(' 100 raqami treeda bormi? ' + (tree.search(100) ? ' HA' : ' YO\'Q'));
await pause(2000);

// HASH TABLE DEMO
console.log('\n\n 5️ XESH JADVALI (HASH TABLE)');
console.log('─────────────────────────────────────────────────────');
const hash_table = new HashTable();

console.log(' Ism: Tohirjon Yusupov');
hash_table.set('ism', 'Tohirjon Yusupov');
await pause(1000);

console.log(' Yosh: 25 yil');
hash_table.set('yosh', '25 yil');
await pause(1000);

console.log(' Shahar: Toshkent');
hash_table.set('shahar', 'Toshkent');
await pause(1000);

console.log('\n Ism oʻzgaruvchi qiymati:', hash_table.get('ism'));
await pause(1000);

console.log(' Yosh oʻzgaruvchi qiymati:', hash_table.get('yosh'));
await pause(1000);

console.log(' Barcha kalit-qiymatlar:');
console.log('   Kalitlar:', hash_table.keys());
console.log('   Qiymatlar:', hash_table.values());
await pause(2000);

// GRAPH & DIJKSTRA
console.log('\n\n️ 6️ GRAF VA DIJKSTRA ALGORITMI (ENG QISQA YO\'L)');
console.log('─────────────────────────────────────────────────────');
const graph = new Graph();

console.log(' Shaharlarni grafga qo\'shimiz: Toshkent, Xiva, Bukhoro, Samarqand, Farg\'ona');
['Toshkent', 'Xiva', 'Bukhoro', 'Samarqand', 'Farg\'ona'].forEach(v => {
graph.addVertex(v);
});
await pause(1500);

console.log('\n️ Shaharlar oʻrtasidagi yo\'llalarni qo\'shimiz (masofasi)...');
const yollar = [
['Toshkent', 'Xiva', 4],
['Toshkent', 'Bukhoro', 2],
['Xiva', 'Bukhoro', 1],
['Xiva', 'Samarqand', 5],
['Bukhoro', 'Samarqand', 8],
['Bukhoro', 'Farg\'ona', 10],
['Samarqand', 'Farg\'ona', 2]
];

for (let [a, b, m] of yollar) {
console.log(`   ${a} → ${b} (${m} km)`);
graph.addEdge(a, b, m);
await pause(600);
}

console.log('\n Toshkentdan barcha shaharlar gacha eng qisqa yo\'l:');
const { distances, previous } = Dijkstra.dijkstraAlgorithm(graph, 'Toshkent');
console.log('   ', distances);
await pause(1500);

const yo_l = Dijkstra.getPath(previous, 'Toshkent', 'Farg\'ona');
console.log('\n️ Toshkent → Farg\'ona eng qisqa yo\'l:', yo_l.join(' → '));
await pause(2000);

// PRIM MST DEMO
console.log('\n\n 7️ PRIM ALGORITMI (MINIMAL TARMAQ)');
console.log('─────────────────────────────────────────────────────');
console.log(' Kamida xarajat bilan Internet tarmoqini quramiz...');
await pause(1500);

const primNatija = Prim.primMST(graph);
console.log(' Tanlanagan yo\'llar:');
primNatija.mst.forEach((el, i) => {
console.log(`   ${i+1}. ${el.u} → ${el.v} (${el.weight} km)`);
});
console.log(' Jami xarajat:', primNatija.totalWeight, 'km');
await pause(2000);
}

main();
