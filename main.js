const session = pl.create(1000);
const prologCode = [organs, symptoms, diseases, relationships, rules, lab_tests, progressions, test_rules, treatment_rules, treatments].join('\n');

session.consult(prologCode);

window.querySymptom = function () {
    const input = document.getElementById("symptomInput").value.trim();
    const resultsBox = document.getElementById("results");

    if (!input) {
        resultsBox.textContent = "Please enter a symptom.";
        return;
    }

    const query = `possible_disease(${input}, Disease).`;
    resultsBox.textContent = "Querying...";

    session.query(query, {
        success: () => {
            let results = [];
            session.answers(x => {
                if (x === false || x === null) {
                    resultsBox.textContent = results.length > 0
                        ? results.join('\n')
                        : 'No matching diseases found.';
                } else {
                    results.push(pl.format_answer(x));
                }
            });
        },
        error: err => {
            resultsBox.textContent = "Error: " + err;
        }
    });
};

window.runExample = function(queryText) {
    // If the query looks like a predicate call (contains '('), run directly,
    // else assume it's a symptom and query possible_disease(symptom, Disease)
    const inputElem = document.getElementById("symptomInput");
    const resultsBox = document.getElementById("results");
    
    if(queryText.includes('(')) {
      // Set input box to the query for user visibility (optional)
      inputElem.value = queryText;
      // Run query as-is
      runPrologQuery(queryText);
    } else {
      // Symptom input, run default diagnosis query
      inputElem.value = queryText;
      runPrologQuery(`possible_disease(${queryText}, Disease).`);
    }
}

function runPrologQuery(query) {
    const resultsBox = document.getElementById("results");
    resultsBox.textContent = "Querying...";
    session.query(query, {
      success: () => {
        let answers = [];
        session.answers(x => {
          if (x === false || x === null) {
            resultsBox.textContent = answers.length ? answers.join('\n') : 'No results found.';
          } else {
            answers.push(pl.format_answer(x));
          }
        });
      },
      error: err => {
        resultsBox.textContent = "Error: " + err;
      }
    });
}
