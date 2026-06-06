class FlightRerouter {
  constructor(graph) {
    this.graph = graph; // Adjacency List ko'rinishidagi graf
  }

  // Muqobil yo'llarni topuvchi asosiy metod
  findAlternativePaths(start, destination, closedHubs) {
    const allPaths = [];
    const currentPath = [start];
    const visited = new Set([start]);

    // Yopiq xablar (aeroportlar) to'plami
    const closedSet = new Set(closedHubs);

    // Agar boshlang'ich yoki oxirgi nuqta yopiq bo'lsa, yo'l yo'q
    if (closedSet.has(start) || closedSet.has(destination)) {
      return [];
    }

    // Rekursiv backtracking yordamchi funksiyasi
    const backtrack = (currentVertex) => {
      // Baza holati: Agar manzilga yetib kelgan bo'lsak, yo'lni saqlaymiz
      if (currentVertex === destination) {
        allPaths.push([...currentPath]);
        return;
      }

      // Hozirgi aeroportning hamma qo'shnilarini tekshiramiz
      const neighbors = this.graph[currentVertex] || [];
      for (let neighbor of neighbors) {
        
        // Agar aeroport yopilmagan bo'lsa va unga hali kirmagan bo'lsak
        if (!closedSet.has(neighbor) && !visited.has(neighbor)) {
          
          // 1. Qadam tashlash (Yo'lga qo'shish va belgilash)
          currentPath.push(neighbor);
          visited.add(neighbor);

          // 2. Rekursiya (Shu yo'nalish bo'ylab chuqurroq kirib ko'rish)
          backtrack(neighbor);

          // 3. BACKTRACK (Ortga qaytish - oxirgi qadamni bekor qilish)
          currentPath.pop();
          visited.delete(neighbor);
        }
      }
    };

    // Backtrackingni boshlaymiz
    backtrack(start);
    return allPaths;
  }
}

module.exports = FlightRerouter