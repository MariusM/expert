const lab_tests = `
lab_test(liver_function_test).
lab_test(ecg).
lab_test(blood_sugar).
lab_test(urinalysis).
lab_test(ct_scan).

test_indicates(liver_function_test, hepatitis).
test_indicates(liver_function_test, liver_cirrhosis).
test_indicates(ecg, heart_attack).
test_indicates(blood_sugar, diabetes).
test_indicates(urinalysis, kidney_failure).
test_indicates(ct_scan, brain_tumor).
`;
