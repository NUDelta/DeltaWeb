computeWorth = function(person) {
    if (person._id === 'eorourke') {
        return 10;
    } else if (person._id === 'lgerber') {
        return 9.7;
    } else if (person._id === 'measterday') {
        return 9.5;
    } else if (person._id === 'hzhang') {
        return 9;
    } else if (person.role.toLowerCase() === 'research assistant professor') {
        return 8.75;
    } else if (person.role.toLowerCase() === 'postdoctoral fellow') {
        return 8.5;
    } else if (person.role.toLowerCase() === 'phd student') {
        return 8;
    } else if (person.role.toLowerCase() === 'postbac researcher') {
        return 7;
    } else if (person.role.toLowerCase() === 'undergrad researcher') {
        return 6;
    } else if (person.role.toLowerCase() === 'top dog') {
        return 7.5;
    } else if (person.role.toLowerCase() === 'alumni') {
        return 4;
    } else {
        return 0;
    }
}
