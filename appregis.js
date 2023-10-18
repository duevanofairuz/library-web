function validate() {
    if (document.forms["frs"]["Nama"].value == "") {
      alert("Minimal isi nama!");
      document.forms["frs"]["Nama"].focus();
      return false;
    }
    if (document.forms["frs"]["NRP"].value == "") {
      alert("Minimal isi nrp!");
      document.forms["frs"]["NRP"].focus();
      return false;
    }

    if (document.forms["frs"]["NO"].value == "") {
      alert("Minimal isi nomor telepon!");
      document.forms["frs"]["NO"].focus();
      return false;
    }

    if (document.forms["frs"]["Email"].value == "") {
      alert("Minimal isi Email!");
      document.forms["frs"]["Email"].focus();
      return false;
    }

  }