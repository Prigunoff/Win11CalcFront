function expandedForm(num) {
    const str = num.toString();
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      const digit = parseInt(str.charAt(i));
  
      if (digit !== 0) {
        if (result !== "") {
          result += " + ";
        }
        result += digit * Math.pow(10, str.length - i - 1);
      }
    }
    return result;
  }