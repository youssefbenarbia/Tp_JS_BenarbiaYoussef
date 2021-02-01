function ControleAcces() {
      let foundUser = false;
      let arrayId = [
        {
          'login' : "admin12",
          'pwd' : "mdp"
        },
        {
          'login' : "admin1",
          'pwd' : "mdp2"
        }
      ];

      for (let index = 0; index < arrayId.length; index++) {
        if (this.form2.login.value == arrayId[index].login && 
        this.form2.password.value == arrayId[index].pwd) {
          alert("Identifiants valides");
          foundUser = true;
        }
      }

      if (foundUser == false) {
        alert("Identifiants invalides");
      }

    }