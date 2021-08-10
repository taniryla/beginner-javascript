function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  // remove the popup entirely!
  popup.remove();
}

function ask(options) {
  return new Promise(async function (resolve) {
    // first we need to create a popup with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
        <label>${options.title}</label>
        <input type="text" name="input" />
        <button type="submit">Submit</button>
    </fieldset>
    `
    );

    // check if they want a cancel button

    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      console.log(popup.firstChild);
      popup.firstElementChild.appendChild(skipButton);
    }

    // TODO: listen to a click on the cancel button
    skipButton.addEventListener(
      'click',
      function () {
        resolve(null);
        destroyPopup(popup);
      },
      { once: true }
    );
    }
    
    popup.addEventListener(
      'submit',
      function(e) {
        e.preventDefault();
        console.log('SUBMITTED');
        resolve(e.target.input.value);
        destroyPopup(popup);
      },
        { once: true }
    );
    
  });
}

// select all buttons that have a question
async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = 'cancel' in button.dataset;

  const answer = await ask({
    title: button.dataset.question,
    cancel,
  });
  console.log(answer);
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach((button) => button.addEventListener('click', askQuestion));
