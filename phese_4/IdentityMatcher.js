class IdentityMatcher {
  // LPS (Longest Proper Prefix which is also Suffix) jadvalini tuzish
  static _computeLPSArray(pattern) {
    const lps = new Array(pattern.length).fill(0);
    let len = 0; // oldingi eng uzun prefiks-suffiks uzunligi
    let i = 1;

    while (i < pattern.length) {
      if (pattern[i] === pattern[len]) {
        len++;
        lps[i] = len;
        i++;
      } else {
        if (len !== 0) {
          len = lps[len - 1]; // Orqaga chekinish
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }
    return lps;
  }

  // Asosiy KMP Qidiruv algoritmi
  static kmpSearch(text, pattern) {
    if (pattern.length === 0) return 0;

    const lps = this._computeLPSArray(pattern);
    let i = 0; // text uchun indeks
    let j = 0; // pattern uchun indeks

    while (i < text.length) {
      if (pattern[j] === text[i]) {
        i++;
        j++;
      }

      if (j === pattern.length) {
        return i - j; // Pattern topilgan boshlang'ich indeks
        // Agar hamma topilgan joylarni kerak bo'lsa: j = lps[j - 1] qilib davom ettiriladi
      }
      // Mos kelmay qolgan holat
      else if (i < text.length && pattern[j] !== text[i]) {
        if (j !== 0) {
          j = lps[j - 1]; // Matn boshiga qaytmasdan, LPS dan foydalanamiz
        } else {
          i++;
        }
      }
    }
    return -1; // Ism ro'yxatda topilmadi
  }
}

module.exports = IdentityMatcher