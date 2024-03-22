// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.getElementById("mashedPotatoesImg").removeAttribute('hidden')
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
        });
      });
    });
  });
});

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.getElementById("steakImg").removeAttribute('hidden')
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1)
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3)
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4)
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5)
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6)
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7)
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    return obtainInstruction('steak', 8)
  })


// Iteration 3 using async/await
async function makeBroccoli() {
  // ... Your code here

  const numSteps = broccoli

  try {
    for (let i = 0; i < numSteps.length; i++) {
      const instruction = await obtainInstruction('broccoli', i)
      document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
      document.getElementById("broccoliImg").removeAttribute('hidden')
    }
  } catch (error) {
    console.log(error)
  }
}
makeBroccoli()

// Bonus 2 - Promise all

function getInstructionBrussels() {
  const arrOfPromises = [];

  // Iterate over the steps of Brussels Sprouts
  for (let i = 0; i < brusselsSprouts.length; i++) {
    const promise = obtainInstruction('brusselsSprouts', i); // Assuming 'brusselsSprouts' is the correct array name
    arrOfPromises.push(promise);
  }

  // Wait for all promises to resolve
  Promise.all(arrOfPromises)
    .then((steps) => {
      // Steps will be an array containing the resolved values of all promises
      const brusselsList = document.querySelector("#brusselsSprouts");
      steps.forEach((step) => {
        brusselsList.innerHTML += `<li>${step}</li>`;
      });
      // Additional step after all instructions are added
      brusselsList.innerHTML += `<li>Brussels sprouts are ready!</li>`;
      document.getElementById("brusselsSproutsImg").removeAttribute('hidden');
    })
    .catch((error) => {
      console.log(error); // Handle errors if any
    });
}

getInstructionBrussels();
