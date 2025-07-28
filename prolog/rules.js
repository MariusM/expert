const rules = `
possible_disease(Symptom, Disease) :-
    has_symptom(Disease, Symptom).

possible_organ(Symptom, Organ) :-
    related_to(Symptom, Organ).
`;
