function msg() {
  var v = confirm("Are you sure to register");
  if (v == true) {
    let name = prompt("soo geli magacaaga: ");
    let age = prompt("soo geli age: ");
    // console.log("welcome" + " " + name + " " +  "da'daada waa" + "" + " " + age)

    if (age > 18 && age < 50) {
      document.write(
        "magacaagu waa  " +
          name +
          " da'daadu waa  " +
          age +
          " wad codeyn kartaa"
      );
    } else {
      document.write(
        "magacaagu waa" +
          " " +
          name +
          "da'daadu waa" +
          " " +
          age +
          " " +
          "ma codeyn kartid"
      );
    }
  } else {
    alert("Cancel");
  }
}
