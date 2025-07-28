const test_rules = `
suggested_test(Symptom, Test) :-
    has_symptom(Disease, Symptom),
    test_indicates(Test, Disease).
`;
