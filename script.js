function caesarCipher(string, shift){
    return string.replace(/[a-zA-Z]/g, function(c) { 
      const base = c < 'a' ? 65 : 97;
      return String.fromCharCode((c.charCodeAt(0) - base + shift) % 26 + base);
    });
  }
  
  function translate(isEncode){
    const plaintextValue = document.getElementById('plaintext').value;
    const shiftValue = parseInt(document.getElementById('shift').value);
    const outputValue = caesarCipher(plaintextValue, isEncode ? shiftValue : -shiftValue);
    document.getElementById("output").innerHTML = outputValue;
  }
  
  function encode() {
    translate(true);
  }
  
  function decode() {
    translate(false);
  }
  
  document.getElementById("plaintext").addEventListener("input", translate.bind(null, true));
  document.getElementById("shift").addEventListener("input", translate.bind(null, true));
  