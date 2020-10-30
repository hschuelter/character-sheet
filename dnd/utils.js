//  Set Ability Modifiers according to Ability Score
function updateModifiers(){
    //  Convert Ability Scores to Modifiers
    var strScore = document.getElementById("strScore").value;
  document.getElementById("strMod").value = Math.floor((strScore - 10)/2);
    var dexScore = document.getElementById("dexScore").value;
  document.getElementById("dexMod").value = Math.floor((dexScore - 10)/2);
    var conScore = document.getElementById("conScore").value;
  document.getElementById("conMod").value = Math.floor((conScore - 10)/2);
    var intScore = document.getElementById("intScore").value;
  document.getElementById("intMod").value = Math.floor((intScore - 10)/2);
    var wisScore = document.getElementById("wisScore").value;
  document.getElementById("wisMod").value = Math.floor((wisScore - 10)/2);
    var chaScore = document.getElementById("chaScore").value;
  document.getElementById("chaMod").value = Math.floor((chaScore - 10)/2);
    
    //  Set Variables based on Ability Scores and Class Details
    window.strMod = parseInt(document.getElementById("strMod").value);
    window.dexMod = parseInt(document.getElementById("dexMod").value);
    window.conMod = parseInt(document.getElementById("conMod").value);
    window.intMod = parseInt(document.getElementById("intMod").value);
    window.wisMod = parseInt(document.getElementById("wisMod").value);
    window.chaMod = parseInt(document.getElementById("chaMod").value);
    
    //  Set Max HP and Initiative Values
    // document.getElementById("maxHP").value = 10 + strMod;
    document.getElementById("initiative").value = dexMod;
    // window.maxHP = parseInt(document.getElementById("maxHP").value);
    
    // Update Skills, Attacks, etc.
    setSkills();
    // setNewtypePowers();
  }

  //  Set Proficiency Bonus based on Player Level
  function updateProficiency() {
    window.playerLevel = parseInt(document.getElementById("level").value);
    document.getElementById("proficiencyBonus").value = Math.ceil(playerLevel / 4) + 1;
    window.proficiencyBonus = parseInt(document.getElementById("proficiencyBonus").value);
  }
  
  //  Trigger the following updates when the Player's level changes
  function playerLevelChange() {
    updateProficiency();
    setSkills();
    enableFeats();
    setNewtypePowers();
    addNewtypePowers();
    longRest();
  }

  function updateSkillProficiency(skill, skillProf, abilityMod) {
    var profBonus = parseInt(document.getElementById("proficiencyBonus").value);
    var abilityBonus = parseInt(document.getElementById(abilityMod).value);

    if (document.getElementById(skillProf).checked == true) {
      document.getElementById(skill).value = abilityBonus + profBonus;
    } else {
      document.getElementById(skill).value = abilityBonus;  
    }

  }
  
  //  Set skill values based on Profciency and Ability Modifiers
  function setSkills() {
    // Set Variables
    var profBonus = parseInt(document.getElementById("proficiencyBonus").value);
    var strBonus = parseInt(document.getElementById("strMod").value);
    var dexBonus = parseInt(document.getElementById("dexMod").value);
    var conBonus = parseInt(document.getElementById("conMod").value);
    var intBonus = parseInt(document.getElementById("intMod").value);
    var wisBonus = parseInt(document.getElementById("wisMod").value);
    var chaBonus = parseInt(document.getElementById("chaMod").value);
    
    //  Initialize Skill Variables and Add Proficiency
    if (document.getElementById("acrobaticsProf").checked == true) {
      document.getElementById("acrobatics").value = dexBonus + profBonus;
    } else {
      document.getElementById("acrobatics").value = dexBonus;  
    }

    if (document.getElementById("animaHandlingProf").checked == true) {
      document.getElementById("animaHandling").value = wisBonus + profBonus;
    } else {
      document.getElementById("animaHandling").value = wisBonus;  
    }

    if (document.getElementById("arcanaProf").checked == true) {
      document.getElementById("arcana").value = intBonus + profBonus;
    } else {
      document.getElementById("arcana").value = intBonus;  
    }

    if (document.getElementById("athleticsProf").checked == true) {
      document.getElementById("athletics").value = strBonus + profBonus;
    } else {
      document.getElementById("athletics").value = strBonus;  
    }

    if (document.getElementById("deceptionProf").checked == true) {
      document.getElementById("deception").value = chaBonus + profBonus;
    } else {
      document.getElementById("deception").value = chaBonus;  
    }

    if (document.getElementById("historyProf").checked == true) {
      document.getElementById("history").value = intBonus + profBonus;
    } else {
      document.getElementById("history").value = intBonus;  
    }

    if (document.getElementById("insightProf").checked == true) {
      document.getElementById("insight").value = wisBonus + profBonus;
    } else {
      document.getElementById("insight").value = wisBonus;  
    }

    if (document.getElementById("intimidationProf").checked == true) {
      document.getElementById("intimidation").value = chaBonus + profBonus;
    } else {
      document.getElementById("intimidation").value = chaBonus;  
    }

    if (document.getElementById("investigationProf").checked == true) {
      document.getElementById("investigation").value = intBonus + profBonus;
    } else {
      document.getElementById("investigation").value = intBonus;  
    }

    if (document.getElementById("medicineProf").checked == true) {
      document.getElementById("medicine").value = wisBonus + profBonus;
    } else {
      document.getElementById("medicine").value = wisBonus;  
    }

    if (document.getElementById("natureProf").checked == true) {
      document.getElementById("nature").value = intBonus + profBonus;
    } else {
      document.getElementById("nature").value = intBonus;  
    }

    if (document.getElementById("perceptionProf").checked == true) {
      document.getElementById("perception").value = wisBonus + profBonus;
    } else {
      document.getElementById("perception").value = wisBonus;  
    }

    if (document.getElementById("performanceProf").checked == true) {
      document.getElementById("performance").value = chaBonus + profBonus;
    } else {
      document.getElementById("performance").value = chaBonus;  
    }

    if (document.getElementById("persuasionProf").checked == true) {
      document.getElementById("persuasion").value = chaBonus + profBonus;
    } else {
      document.getElementById("persuasion").value = chaBonus;  
    }

    if (document.getElementById("religionProf").checked == true) {
      document.getElementById("religion").value = intBonus + profBonus;
    } else {
      document.getElementById("religion").value = intBonus;  
    }

    if (document.getElementById("sleightProf").checked == true) {
      document.getElementById("sleight").value = dexBonus + profBonus;
    } else {
      document.getElementById("sleight").value = dexBonus;  
    }

    if (document.getElementById("stealthProf").checked == true) {
      document.getElementById("stealth").value = dexBonus + profBonus;
    } else {
      document.getElementById("stealth").value = dexBonus;  
    }

    if (document.getElementById("survivalProf").checked == true) {
      document.getElementById("survival").value = wisBonus + profBonus;
    } else {
      document.getElementById("survival").value = wisBonus;  
    }
    
  }
  
  //  Set Newtype Attack, Save Bonuses, and Max Points
  function setNewtypePowers() {
    var newtypeBonus = parseInt(document.getElementById("wisMod").value);
    var profBonus = parseInt(document.getElementById("proficiencyBonus").value);
    
    document.getElementById("newtypeAttack").value = (newtypeBonus + profBonus);
    document.getElementById("newtypeSave").value = (8 + newtypeBonus + profBonus);
    
  }

function updateHealth(){
  var currentHP = parseInt(document.getElementById("currentHP").value);
  var maxHP     = parseInt(document.getElementById("maxHP").value);
  var ratio = 100 * currentHP / maxHP;

  if (currentHP > maxHP) {
   ratio = 100;
  }  
  
  if (currentHP < 0) {
    ratio = 0;
  }
  

  var healthBar = document.getElementById("healthBar");
  var healthBarText = document.getElementById("healthBarText");
  
  healthBar.style.width = ratio + '%';
  healthBarText.innerHTML = currentHP + '/' + maxHP;
}

  
  // Sets up class-specific variables and options
  function selectClass() {
    var newtypePowers = document.getElementById("selectedNewtypePowers").length;
    if (newtypePowers == 0) {
      appendNewtypePowers();
    }
    
    addNewtypePowers();
    longRest();
    enableFeats();
  }
  
  // Add Newtype Powers to available Powers list, should only happen on class selection
  function appendNewtypePowers() {
    var classChoice = document.getElementById("classSelect").value;
    var availablePowers = document.getElementById("availableNewtypePowers");
    var cyberContainer = document.getElementById("cyberNewtypePowers");
    var trueContainer = document.getElementById("trueNewtypePowers");
    var cyberNewtype0 = document.getElementById("cyberNewtype0");
    var cyberNewtype1 = document.getElementById("cyberNewtype1");
    var cyberNewtype2 = document.getElementById("cyberNewtype2");
    var cyberNewtype3 = document.getElementById("cyberNewtype3");
    var cyberNewtype4 = document.getElementById("cyberNewtype4");
    var cyberNewtype5 = document.getElementById("cyberNewtype5");
    var cyberNewtype6 = document.getElementById("cyberNewtype6");
    var cyberNewtype7 = document.getElementById("cyberNewtype7");
    var cyberNewtype8 = document.getElementById("cyberNewtype8");
    var cyberNewtype9 = document.getElementById("cyberNewtype9");
    var trueNewtype0 = document.getElementById("trueNewtype0");
    var trueNewtype1 = document.getElementById("trueNewtype1");
    var trueNewtype2 = document.getElementById("trueNewtype2");
    var trueNewtype3 = document.getElementById("trueNewtype3");
    var trueNewtype4 = document.getElementById("trueNewtype4");
    var trueNewtype5 = document.getElementById("trueNewtype5");
    var trueNewtype6 = document.getElementById("trueNewtype6");
    var trueNewtype7 = document.getElementById("trueNewtype7");
    var trueNewtype8 = document.getElementById("trueNewtype8");
    var trueNewtype9 = document.getElementById("trueNewtype9");
    
    if (classChoice == 'cyber-newtype') {
      availablePowers.append(cyberNewtype0);
      availablePowers.append(cyberNewtype1);
      availablePowers.append(cyberNewtype2);
      availablePowers.append(cyberNewtype3);
      availablePowers.append(cyberNewtype4);
      availablePowers.append(cyberNewtype5);
      availablePowers.append(cyberNewtype6);
      availablePowers.append(cyberNewtype7);
      availablePowers.append(cyberNewtype8);
      availablePowers.append(cyberNewtype9);
      trueContainer.append(trueNewtype0);
      trueContainer.append(trueNewtype1);
      trueContainer.append(trueNewtype2);
      trueContainer.append(trueNewtype3);
      trueContainer.append(trueNewtype4);
      trueContainer.append(trueNewtype5);
      trueContainer.append(trueNewtype6);
      trueContainer.append(trueNewtype7);
      trueContainer.append(trueNewtype8);
      trueContainer.append(trueNewtype9);
    } else if (classChoice == 'newtype') {
      availablePowers.append(trueNewtype0);
      availablePowers.append(trueNewtype1);
      availablePowers.append(trueNewtype2);
      availablePowers.append(trueNewtype3);
      availablePowers.append(trueNewtype4);
      availablePowers.append(trueNewtype5);
      availablePowers.append(trueNewtype6);
      availablePowers.append(trueNewtype7);
      availablePowers.append(trueNewtype8);
      availablePowers.append(trueNewtype9);
      cyberContainer.append(cyberNewtype0);
      cyberContainer.append(cyberNewtype1);
      cyberContainer.append(cyberNewtype2);
      cyberContainer.append(cyberNewtype3);
      cyberContainer.append(cyberNewtype4);
      cyberContainer.append(cyberNewtype5);
      cyberContainer.append(cyberNewtype6);
      cyberContainer.append(cyberNewtype7);
      cyberContainer.append(cyberNewtype8);
      cyberContainer.append(cyberNewtype9);
    } else {
      trueContainer.append(trueNewtype0);
      trueContainer.append(trueNewtype1);
      trueContainer.append(trueNewtype2);
      trueContainer.append(trueNewtype3);
      trueContainer.append(trueNewtype4);
      trueContainer.append(trueNewtype5);
      trueContainer.append(trueNewtype6);
      trueContainer.append(trueNewtype7);
      trueContainer.append(trueNewtype8);
      trueContainer.append(trueNewtype9);
      cyberContainer.append(cyberNewtype0);
      cyberContainer.append(cyberNewtype1);
      cyberContainer.append(cyberNewtype2);
      cyberContainer.append(cyberNewtype3);
      cyberContainer.append(cyberNewtype4);
      cyberContainer.append(cyberNewtype5);
      cyberContainer.append(cyberNewtype6);
      cyberContainer.append(cyberNewtype7);
      cyberContainer.append(cyberNewtype8);
      cyberContainer.append(cyberNewtype9);
    }
  }
  
  // Add Newtype Points to list based on class/level
  function addNewtypePowers() {
    var classChoice = document.getElementById("classSelect").value;
    var playerLevel = parseInt(document.getElementById("level").value);
    
    if (classChoice == 'cyber-newtype') {
          if (playerLevel == 20) {
            document.getElementById("maxNewtypePoints").value = 133;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = false;
            document.getElementById("cyberNewtype8").disabled = false;
            document.getElementById("cyberNewtype9").disabled = false;
          } else if (playerLevel == 19) {
            document.getElementById("maxNewtypePoints").value = 123;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = false;
            document.getElementById("cyberNewtype8").disabled = false;
            document.getElementById("cyberNewtype9").disabled = false;
          } else if (playerLevel == 18) {
            document.getElementById("maxNewtypePoints").value = 114;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = false;
            document.getElementById("cyberNewtype8").disabled = false;
            document.getElementById("cyberNewtype9").disabled = false;
          } else if (playerLevel == 17) {
            document.getElementById("maxNewtypePoints").value = 107;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = false;
            document.getElementById("cyberNewtype8").disabled = false;
            document.getElementById("cyberNewtype9").disabled = false;
          } else if (playerLevel == 16) {
            document.getElementById("maxNewtypePoints").value = 94;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = false;
            document.getElementById("cyberNewtype8").disabled = false;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 15) {
            document.getElementById("maxNewtypePoints").value = 94;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = false;
            document.getElementById("cyberNewtype8").disabled = false;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 14) {
            document.getElementById("maxNewtypePoints").value = 83;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = false;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 13) {
            document.getElementById("maxNewtypePoints").value = 83;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = false;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 12) {
            document.getElementById("maxNewtypePoints").value = 73;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 11) {
            document.getElementById("maxNewtypePoints").value = 73;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 10) {
            document.getElementById("maxNewtypePoints").value = 64;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 9) {
            document.getElementById("maxNewtypePoints").value = 57;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 8) {
            document.getElementById("maxNewtypePoints").value = 44;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = true;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 7) {
            document.getElementById("maxNewtypePoints").value = 38;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = true;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 6) {
            document.getElementById("maxNewtypePoints").value = 32;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = true;
            document.getElementById("cyberNewtype5").disabled = true;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 5) {
            document.getElementById("maxNewtypePoints").value = 27;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = true;
            document.getElementById("cyberNewtype5").disabled = true;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 4) {
            document.getElementById("maxNewtypePoints").value = 17;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = true;
            document.getElementById("cyberNewtype4").disabled = true;
            document.getElementById("cyberNewtype5").disabled = true;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 3) {
            document.getElementById("maxNewtypePoints").value = 14;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = true;
            document.getElementById("cyberNewtype4").disabled = true;
            document.getElementById("cyberNewtype5").disabled = true;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 2) {
            document.getElementById("maxNewtypePoints").value = 6;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = true;
            document.getElementById("cyberNewtype3").disabled = true;
            document.getElementById("cyberNewtype4").disabled = true;
            document.getElementById("cyberNewtype5").disabled = true;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else {
            document.getElementById("maxNewtypePoints").value = 4;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = true;
            document.getElementById("cyberNewtype3").disabled = true;
            document.getElementById("cyberNewtype4").disabled = true;
            document.getElementById("cyberNewtype5").disabled = true;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          }
      
    } else if (classChoice == 'newtype') {
          if (playerLevel == 20) {
            document.getElementById("maxNewtypePoints").value = 100;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = false;
            document.getElementById("trueNewtype8").disabled = false;
            document.getElementById("trueNewtype9").disabled = false;
          } else if (playerLevel == 19) {
            document.getElementById("maxNewtypePoints").value = 92;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = false;
            document.getElementById("trueNewtype8").disabled = false;
            document.getElementById("trueNewtype9").disabled = false;
          } else if (playerLevel == 18) {
            document.getElementById("maxNewtypePoints").value = 86;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = false;
            document.getElementById("trueNewtype8").disabled = false;
            document.getElementById("trueNewtype9").disabled = false;
          } else if (playerLevel == 17) {
            document.getElementById("maxNewtypePoints").value = 80;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = false;
            document.getElementById("trueNewtype8").disabled = false;
            document.getElementById("trueNewtype9").disabled = false;
          } else if (playerLevel == 16) {
            document.getElementById("maxNewtypePoints").value = 70;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = false;
            document.getElementById("trueNewtype8").disabled = false;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 15) {
            document.getElementById("maxNewtypePoints").value = 70;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = false;
            document.getElementById("trueNewtype8").disabled = false;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 14) {
            document.getElementById("maxNewtypePoints").value = 62;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = false;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 13) {
            document.getElementById("maxNewtypePoints").value = 62;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = false;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 12) {
            document.getElementById("maxNewtypePoints").value = 55;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 11) {
            document.getElementById("maxNewtypePoints").value = 55;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 10) {
            document.getElementById("maxNewtypePoints").value = 48;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 9) {
            document.getElementById("maxNewtypePoints").value = 43;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 8) {
            document.getElementById("maxNewtypePoints").value = 33;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = true;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 7) {
            document.getElementById("maxNewtypePoints").value = 29;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = true;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 6) {
            document.getElementById("maxNewtypePoints").value = 24;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = true;
            document.getElementById("trueNewtype5").disabled = true;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 5) {
            document.getElementById("maxNewtypePoints").value = 20;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = true;
            document.getElementById("trueNewtype5").disabled = true;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 4) {
            document.getElementById("maxNewtypePoints").value = 13;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = true;
            document.getElementById("trueNewtype4").disabled = true;
            document.getElementById("trueNewtype5").disabled = true;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 3) {
            document.getElementById("maxNewtypePoints").value = 11;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = true;
            document.getElementById("trueNewtype4").disabled = true;
            document.getElementById("trueNewtype5").disabled = true;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 2) {
            document.getElementById("maxNewtypePoints").value = 5;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = true;
            document.getElementById("trueNewtype3").disabled = true;
            document.getElementById("trueNewtype4").disabled = true;
            document.getElementById("trueNewtype5").disabled = true;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else {
            document.getElementById("maxNewtypePoints").value = 2;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = true;
            document.getElementById("trueNewtype3").disabled = true;
            document.getElementById("trueNewtype4").disabled = true;
            document.getElementById("trueNewtype5").disabled = true;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          }
    } else {
     document.getElementById("maxNewtypePoints").value = 0;
    }
    
  }
  
  // Add Power from available to selected list
  function addNewtypePower() {
    
  }
  
  // Add Power from available to selected list
  function removeNewtypePower() {
    
  }
  
  // Set up Feats panel or update total feats allowed
  function enableFeats() { 
    var playerClass = document.getElementById("classSelect").value;
    var playerLevel = parseInt(document.getElementById("level").value);
    
    if (playerClass == 'guerilla') {
          if (playerLevel > 17) {
            var maxFeats = 7;
          } else if (playerLevel > 16) {
            var maxFeats = 6;
          } else if (playerLevel > 12) {
            var maxFeats = 5;
          } else if (playerLevel > 9) {
            var maxFeats = 4;
          } else if (playerLevel > 8) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'artillery') {
          if (playerLevel > 17) {
            var maxFeats = 5;
          } else if (playerLevel > 14) {
            var maxFeats = 4;
          } else if (playerLevel > 10) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'cyber-newtype') {
          if (playerLevel > 19) {
            var maxFeats = 6;
          } else if (playerLevel > 17) {
            var maxFeats = 5;
          } else if (playerLevel > 13) {
            var maxFeats = 4;
          } else if (playerLevel > 9) {
            var maxFeats = 3;
          } else if (playerLevel > 5) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'infiltrator') {
          if (playerLevel > 19) {
            var maxFeats = 5;
          } else if (playerLevel > 14) {
            var maxFeats = 4;
          } else if (playerLevel > 10) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 2) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'newtype') {
          if (playerLevel > 19) {
            var maxFeats = 6;
          } else if (playerLevel > 17) {
            var maxFeats = 5;
          } else if (playerLevel > 14) {
            var maxFeats = 4;
          } else if (playerLevel > 10) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 2) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else {
          if (playerLevel > 17) {
            var maxFeats = 7;
          } else if (playerLevel > 16) {
            var maxFeats = 6;
          } else if (playerLevel > 12) {
            var maxFeats = 5;
          } else if (playerLevel > 9) {
            var maxFeats = 4;
          } else if (playerLevel > 8) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    }
  
    if (document.getElementById("selectedFeats").length < maxFeats) {
      document.getElementById("addFeat").disabled = false;
    }
    
  }
  
  // Add a feat
  function addFeat() {
    var playerClass = document.getElementById("classSelect").value;
    var playerLevel = parseInt(document.getElementById("level").value);
    
    if (playerClass == 'guerilla') {
          if (playerLevel > 17) {
            var maxFeats = 7;
          } else if (playerLevel > 16) {
            var maxFeats = 6;
          } else if (playerLevel > 12) {
            var maxFeats = 5;
          } else if (playerLevel > 9) {
            var maxFeats = 4;
          } else if (playerLevel > 8) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'artillery') {
          if (playerLevel > 17) {
            var maxFeats = 5;
          } else if (playerLevel > 14) {
            var maxFeats = 4;
          } else if (playerLevel > 10) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'cyber-newtype') {
          if (playerLevel > 19) {
            var maxFeats = 6;
          } else if (playerLevel > 17) {
            var maxFeats = 5;
          } else if (playerLevel > 13) {
            var maxFeats = 4;
          } else if (playerLevel > 9) {
            var maxFeats = 3;
          } else if (playerLevel > 5) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'infiltrator') {
          if (playerLevel > 19) {
            var maxFeats = 5;
          } else if (playerLevel > 14) {
            var maxFeats = 4;
          } else if (playerLevel > 10) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 2) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'newtype') {
          if (playerLevel > 19) {
            var maxFeats = 6;
          } else if (playerLevel > 17) {
            var maxFeats = 5;
          } else if (playerLevel > 14) {
            var maxFeats = 4;
          } else if (playerLevel > 10) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 2) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else {
          if (playerLevel > 17) {
            var maxFeats = 7;
          } else if (playerLevel > 16) {
            var maxFeats = 6;
          } else if (playerLevel > 12) {
            var maxFeats = 5;
          } else if (playerLevel > 9) {
            var maxFeats = 4;
          } else if (playerLevel > 8) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    }
  
  var featList = document.getElementById("availableFeats");
  var selFeat = featList.selectedIndex;
  
      if (selFeat == -1) {
          window.alert("You must first select an Feat from the list.")
      } else {
          var playerFeats = document.getElementById("selectedFeats");
          var newOption = featList[selFeat].cloneNode(true);
  
          featList.removeChild(featList[selFeat]);
          playerFeats.appendChild(newOption);
      }
    
    if (document.getElementById("selectedFeats").length >= maxFeats) {
      document.getElementById("addFeat").disabled = true;
    }
    if (document.getElementById("selectedFeats").length > 0) {
      document.getElementById("removeFeat").disabled = false;
    }
    if (document.getElementById("availableFeats").length == 0) {
      document.getElementById("addFeat").disabled = true;
    }
    
  }
  
  // Remove a feat
  function removeFeat() {
    var playerClass = document.getElementById("classSelect").value;
    var playerLevel = parseInt(document.getElementById("level").value);
    
    if (playerClass == 'guerilla') {
          if (playerLevel > 17) {
            var maxFeats = 7;
          } else if (playerLevel > 16) {
            var maxFeats = 6;
          } else if (playerLevel > 12) {
            var maxFeats = 5;
          } else if (playerLevel > 9) {
            var maxFeats = 4;
          } else if (playerLevel > 8) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'artillery') {
          if (playerLevel > 17) {
            var maxFeats = 5;
          } else if (playerLevel > 14) {
            var maxFeats = 4;
          } else if (playerLevel > 10) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'cyber-newtype') {
          if (playerLevel > 19) {
            var maxFeats = 6;
          } else if (playerLevel > 17) {
            var maxFeats = 5;
          } else if (playerLevel > 13) {
            var maxFeats = 4;
          } else if (playerLevel > 9) {
            var maxFeats = 3;
          } else if (playerLevel > 5) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'infiltrator') {
          if (playerLevel > 19) {
            var maxFeats = 5;
          } else if (playerLevel > 14) {
            var maxFeats = 4;
          } else if (playerLevel > 10) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 2) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'newtype') {
          if (playerLevel > 19) {
            var maxFeats = 6;
          } else if (playerLevel > 17) {
            var maxFeats = 5;
          } else if (playerLevel > 14) {
            var maxFeats = 4;
          } else if (playerLevel > 10) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 2) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else {
          if (playerLevel > 17) {
            var maxFeats = 7;
          } else if (playerLevel > 16) {
            var maxFeats = 6;
          } else if (playerLevel > 12) {
            var maxFeats = 5;
          } else if (playerLevel > 9) {
            var maxFeats = 4;
          } else if (playerLevel > 8) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    }
  
  var featList = document.getElementById("availableFeats");
  var playerFeats = document.getElementById("selectedFeats");
  var selFeat = playerFeats.selectedIndex;
  
      if (selFeat == -1) {
          window.alert("You must first select an Feat from the list.")
      } else {
          var newOption = playerFeats[selFeat].cloneNode(true);
  
          playerFeats.removeChild(playerFeats[selFeat]);
          featList.appendChild(newOption);
      }
    
    if (document.getElementById("selectedFeats").length == 0) {
      document.getElementById("removeFeat").disabled = true;
    }
    if (document.getElementById("selectedFeats").length < maxFeats) {
      document.getElementById("addFeat").disabled = false;
    }  
    
  }
  
  // Update Attack Values
  function updateAttacks() {
    
  }
  
  //  Update Armor with damage/healing
  function updateCurrentAP() {
    var currentAP = parseInt(document.getElementById("currentArmor").value);
    var armorDamage = parseInt(document.getElementById("damageArmor").value);
    var maxAP = parseInt(document.getElementById("maxArmor").value);
    var netDamage = currentAP + armorDamage;
    
    if (netDamage > maxAP)  {
      document.getElementById("currentArmor").value = maxAP;
    } else {
      document.getElementById("currentArmor").value = currentAP + armorDamage;   }
    
    document.getElementById("damageArmor").value = null;
  }
  
  //  Update HP with damage/healing
  function updateCurrentHP() {
    var currentHP = parseInt(document.getElementById("currentHP").value);
    var maxHP = parseInt(document.getElementById("maxHP").value);
    var HPdamage = parseInt(document.getElementById("damageHP").value);
    var netDamage = currentHP + HPdamage; 
    
    if (netDamage > maxHP) {
      document.getElementById("currentHP").value = maxHP;
    } else {
      document.getElementById("currentHP").value = currentHP + HPdamage; 
    }
    
    document.getElementById("damageHP").value = null;
  }
  
  // Use a Newtype Power, subtract Newtype Points
  function castNewtypePower() {
    
  }
  
  // Heal 1 Hit Dice of Armor and HP, no Newtype Point recovery
  function shortRest() {
    var random = Math.floor(Math.random() * 8 + 1);
    var playerLevel = parseInt(document.getElementById("level").value);
    var healing = random * playerLevel;
    var currentHP = parseInt(document.getElementById("currentHP").value);
    var currentAP = parseInt(document.getElementById("currentArmor").value);
    var maxHP = parseInt(document.getElementById("maxHP").value);
    var maxAP = parseInt(document.getElementById("maxArmor").value);
    var strBonus = parseInt(document.getElementById("strMod").value);
    var conBonus = parseInt(document.getElementById("conMod").value);
    var healHP = currentHP + random + strBonus;
    var healAP = currentAP + healing + conBonus;
    
    if (healHP > maxHP) {
        document.getElementById("currentHP").value = maxHP;
        } else {
        document.getElementById("currentHP").value = healHP;
    }
    if (healAP > maxAP) {
        document.getElementById("currentArmor").value = maxAP;
        } else {
        document.getElementById("currentArmor").value = healAP;
    }
    
  }
  
  // Heal all stats
  function longRest() {
    document.getElementById("currentArmor").value = document.getElementById("maxArmor").value;
    document.getElementById("currentHP").value = document.getElementById("maxHP").value;
    document.getElementById("currentNewtypePoints").value = document.getElementById("maxNewtypePoints").value;
  }s