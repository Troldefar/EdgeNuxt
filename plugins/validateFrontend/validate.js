const validateString = input => {
  const validation = [/a-zA-Z0-9/];
  // Return bool
  return (input.match(validation) ? true : false);
}