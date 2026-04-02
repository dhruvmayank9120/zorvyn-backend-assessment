export const formatResponse = (data, message = "Success") => {
  return {
    success: true,
    message,
    data,
  };
};

export const formatError = (message = "Something went wrong") => {
  return {
    success: false,
    message,
  };
};