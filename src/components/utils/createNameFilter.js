import { fetch } from './fetch';

export const createNameFilter = (searchValue) => {
  let inputText = searchValue.toLowerCase();

  let botanicalInput = inputText.replace(/^\w/, (c) => c.toUpperCase()); // capitalize first letter of first word only
  let commonInput = inputText
    .split(' ')
    .map((i) => i.replace(/^\w/, (c) => c.toUpperCase()))
    .join(' ');

  const filters = `botanicalName match "${botanicalInput}" || commonName match "${commonInput}" || botanicalName == "${botanicalInput}" || commonName == "${commonInput}"`;
  fetch(filters);
};
