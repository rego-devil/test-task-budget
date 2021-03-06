export const type = (value) => {
  const regex = /^\[object (\S+?)\]$/;
  const matches = Object.prototype.toString.call(value).match(regex) || [];
  return (matches[1] || 'undefined').toLowerCase();
}


export const removeProperty = prop => ({ [prop]: _, ...rest }) => rest