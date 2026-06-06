const Graph = require('./phese_1/Graph');
const Dijkstra = require('./phese_1/Dijkstra');
const Prim = require('./phese_1/Prim');
const PriorityQueue = require('./phese_2/PriorityQueue');
const Queue = require('./phese_2/Queue');
const Stack = require('./phese_2/Stack');
const BST = require('./phese_3/BST');
const HashTable = require('./phese_3/HashTable');
const FlightSorter = require('./phese_4/FlightSorter');
const IdentityMatcher = require('./phese_4/IdentityMatcher');
const FlightRerouter = require('./phese_5/FlightRerouter');


function pause(ms = 2000) {
return new Promise(resolve => setTimeout(resolve, ms));
}


// Phese 1
// // GRAPH & DIJKSTRA
// async function phese1() {
//   console.log('\n\n️ GRAPH VA DIJKSTRA ALGORITMI (ENG QISQA YOL)');
//   console.log('─────────────────────────────────────────────────────');
//   const graph = new Graph();

//   console.log(' Shaharlarni grafga qoshaimiz: Toshkent, Xiva, Bukhoro, Samarqand, Fargona');
//   ['Toshkent', 'Xiva', 'Bukhoro', 'Samarqand', 'Fargona'].forEach(v => {
//   graph.addVertex(v);
//   });
//   await pause(1500);

//   console.log('\n️ Shaharlar ortasidagi yollalarni qoshimiz (masofasi)...');
//   const yollar = [
//   ['Toshkent', 'Xiva', 4],
//   ['Toshkent', 'Bukhoro', 2],
//   ['Xiva', 'Bukhoro', 1],
//   ['Xiva', 'Samarqand', 5],
//   ['Bukhoro', 'Samarqand', 8],
//   ['Bukhoro', 'Fargona', 10],
//   ['Samarqand', 'Fargona', 2]
//   ];

//   for (let [a, b, m] of yollar) {
//   console.log(`   ${a} → ${b} (${m} km)`);
//   graph.addEdge(a, b, m);
//   await pause(600);
//   }

//   console.log('\n Toshkentdan barcha shaharlar gacha eng qisqa yol:');
//   const { distances, previous } = Dijkstra.dijkstraAlgorithm(graph, 'Toshkent');
//   console.log('   ', distances);
//   await pause(1500);

//   const shortest_path = Dijkstra.getPath(previous, 'Toshkent', 'Fargona');
//   console.log('\n️ Toshkent → Fargona eng qisqa yo\'l:', shortest_path.join(' → '));
//   await pause(2000);

//   // PRIM MST DEMO
//   console.log('\n\n PRIM ALGORITMI');
//   console.log('─────────────────────────────────────────────────────');
//   console.log(' Kamida xarajat bilan Internet tarmoqini quramiz...');
//   await pause(1500);

//   const minimum_st = Prim.primMST(graph);
//   console.log(' Tanlanagan yollar:');
//   minimum_st.mst.forEach((el, i) => {
//   console.log(`   ${i+1}. ${el.u} → ${el.v} (${el.weight} km)`);
//   });
//   console.log(' Jami xarajat:', minimum_st.totalWeight, 'km');
//   await pause(2000);
// }
// phese1()


// async function phese2(){
    // PRIORITY QUEUE DEMO
    // console.log('\n\n USTUNLIK NAVBATI (PRIORITY QUEUE)');
    // console.log('─────────────────────────────────────────────────────');
    // const ustunlik_navbati = new PriorityQueue();
    // console.log('‍️ Yolovchi A (Ustunlik: 3 - Economy)');
    // ustunlik_navbati.enqueue('Yolovchi A', 3);
    // await pause(1000);

    // console.log(' Yolovchi B (Ustunlik: 1 - Premium!!!)');
    // ustunlik_navbati.enqueue('Yolovchi B', 1);
    // await pause(1000);

    // console.log('️ Yolovchi C (Ustunlik: 2 - Gold)');
    // ustunlik_navbati.enqueue('Yolovchi C', 2);
    // await pause(1000);

    // console.log(' Yolovchi navbati (ustunlik bo\'yicha):\n   ');
    // ustunlik_navbati.print();
    // await pause(2000);

    // // QUEUE DEMO
    // console.log('\n\n  NAVBAT (QUEUE) - Birinchi Kirgan Birinchi Chiqadi (FIFO)');
    // console.log('Chiqish eshigi');
    // console.log('─────────────────────────────────────────────────────');
    // const queue = new Queue();
    // console.log(' Birinchi shaxs navbatga turadi (1)...');
    // queue.enqueue('1-shaxs');
    // await pause(1000);

    // console.log(' Ikkinchi shaxs navbatga turadi (2)...');
    // queue.enqueue('2-shaxs');
    // await pause(1000);

    // console.log(' Uchinchi shaxs navbatga turadi (3)...');
    // queue.enqueue('3-shaxs');
    // await pause(1000);

    // console.log(' Navbat:', queue.items);
    // await pause(1500);

    // console.log(' Birinchi qatnovchi chiqadi (dequeue):');
    // console.log('   ', queue.dequeue());
    // await pause(1000);

    // console.log(' Keyingi qatnovchi kim:', queue.front());
    // await pause(2000);

    // console.log('\n STACK (LIFO)');
    // console.log('YUK BOLIMI');
    // console.log('─────────────────────────────────────────────────────');
    // const stack = new Stack();
    // console.log(' YUK A');
    // stack.push('A');
    // await pause(1000);

    // console.log(' YUK B');
    // stack.push('B');
    // await pause(1000);

    // console.log(' YUK C');
    // stack.push('C');
    // await pause(1000);

    // console.log(' Stekda nima bor:');
    // stack.print();
    // await pause(1500);

    // console.log(' Stekdan chiqaramiz (pop):');
    // console.log('    Chiqgan qiymat:', stack.pop());
    // await pause(1000);

    // console.log(' Stekda yuqoridagi qiymat (peek):');
    // console.log('    Top qiymat:', stack.peek());
    // await pause(2000);
// }
// phese2()


// async function phese3() {
  // // BST DEMO
  // console.log('\n\n BINARY SEARCH TREE (BST)');
  // console.log('─────────────────────────────────────────────────────');
  // const tree = new BST();
  // const raqamlar = [50, 30, 70, 20, 40, 60, 80];

  // for (let raqam of raqamlar) {
  // console.log(` ${raqam} sonini treega joylashtirish...`);
  // tree.insert(raqam);
  // await pause(800);
  // }

  // console.log('\n In-Order:', tree.inOrder());
  // await pause(1500);

  // console.log(' Pre-Order:', tree.preOrder());
  // await pause(1500);

  // console.log(' Post-Order:', tree.postOrder());
  // await pause(1500);

  // console.log(' 40 raqami treeda bormi? ' + (tree.search(40) ? ' HA' : ' YO\'Q'));
  // await pause(1000);

  // console.log(' 100 raqami treeda bormi? ' + (tree.search(100) ? ' HA' : ' YO\'Q'));
  // await pause(2000);

  // // HASH TABLE DEMO
  // console.log('\n\n XESH JADVALI (HASH TABLE)');
  // console.log('─────────────────────────────────────────────────────');
  // const hash_table = new HashTable();

  // console.log(' Ism: Tohirjon Yusupov');
  // hash_table.set('ism', 'Tohirjon Yusupov');
  // await pause(1000);

  // console.log(' Yosh: 25 yil');
  // hash_table.set('yosh', '25 yil');
  // await pause(1000);

  // console.log(' Shahar: Toshkent');
  // hash_table.set('shahar', 'Toshkent');
  // await pause(1000);

  // console.log('\n Ism oʻzgaruvchi qiymati:', hash_table.get('ism'));
  // await pause(1000);

  // console.log(' Yosh oʻzgaruvchi qiymati:', hash_table.get('yosh'));
  // await pause(1000);

  // console.log(' Barcha kalit-qiymatlar:');
  // console.log('   Kalitlar:', hash_table.keys());
  // console.log('   Qiymatlar:', hash_table.values());
  // await pause(2000);
// }
// phese3()

// async function phese4() {
  // Merge Sort
//   const dailyFlights = [
//   { flightNo: "HY-101", departureTime: "14:20", fuelEfficiency: 92 },
//   { flightNo: "HY-242", departureTime: "06:00", fuelEfficiency: 88 },
//   { flightNo: "HY-305", departureTime: "10:15", fuelEfficiency: 95 },
//   { flightNo: "HY-095", departureTime: "06:00", fuelEfficiency: 90 } // Bir xil vaqt (MergSort tartibni buzmaydi)
// ];

// console.log("Saralanmagan reyslar:", dailyFlights);
// const sortedFlights = FlightSorter.mergeSort(dailyFlights);
// console.log("Saralangan reyslar:", sortedFlights);


// KMP Algorithm

// const passengerManifest = "ALIMOV JAXONGIR, ABRAMOV PETR, KARIMOVA MALIKA, UMAROV SARDOR";

// const searchName = "KARIMOVA MALIKA";
// const index = IdentityMatcher.kmpSearch(passengerManifest, searchName);

// if (index !== -1) {
//   console.log(`Yo'lovchi topildi! Ro'yxatdagi o'rni (indeksi): ${index}`);
// } else {
//   console.log("Afsuski, bunday yo'lovchi ro'yxatda yo'q.");
// }
// }
// phese4()

// function phese5() {
//   const airportGraph = {
//   "Toshkent": ["Nukus", "Buxoro"],
//   "Nukus": ["Urganch", "Samarqand"],
//   "Buxoro": ["Samarqand", "Termiz"],
//   "Urganch": ["Samarqand"],
//   "Samarqand": ["Andijon"],
//   "Termiz": ["Andijon"],
//   "Andijon": []
// };

// const rerouter = new FlightRerouter(airportGraph);

// // Ssenariy: Samarqand aeroporti favqulodda yopildi!
// const closedHubs = ["Samarqand"]; 

// const alternativePaths = rerouter.findAlternativePaths("Toshkent", "Andijon", closedHubs);

// console.log("Samarqand yopilganda Toshkent -> Andijon muqobil yo'llari:");
// console.log(alternativePaths);
// }

// phese5()