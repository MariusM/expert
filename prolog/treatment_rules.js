const treatment_rules = `
possible_treatment(Symptom, Treatment) :-
    has_symptom(Disease, Symptom),
    treatment(Disease, Treatment).
    
suggested_treatment(Disease, Treatment) :-
    treatment(Disease, Treatment).
`;
