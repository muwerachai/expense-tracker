// createClasses('d-flex', 'flex-grow-1', 'gap-4')
// classes => ['d-flex', 'flex-grow-1', 'gap-4']
const createClasses = (...classes) => classes.join(' ');
export { createClasses };