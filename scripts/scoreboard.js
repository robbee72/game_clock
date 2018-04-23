function sum1() {
      var txtFirstNumberValue = document.getElementById('home1').value;
      var txtSecondNumberValue = document.getElementById('home2').value;
      var result = parseInt(txtFirstNumberValue) + parseInt(txtSecondNumberValue);
      if (!isNaN(result)) {
         document.getElementById('home3').value = result;
      }
}

function sum2() {
      var txtTwoFirstNumberValue = document.getElementById('visitor1').value;
      var txtTwoSecondNumberValue = document.getElementById('visitor2').value;
      var result2 = parseInt(txtTwoFirstNumberValue) + parseInt(txtTwoSecondNumberValue);
      if (!isNaN(result2)) {
         document.getElementById('visitor3').value = result2;
      }
}
